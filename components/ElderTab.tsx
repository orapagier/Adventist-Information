
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { ELDERS_HANDBOOK_CHAPTERS } from '../eldersHandbookData';
import { MINISTERS_HANDBOOK_CHAPTERS } from '../ministersHandbookData';
import { MANUAL_CHAPTERS } from '../manualData';
import { FUNDAMENTAL_BELIEFS } from '../constants';
import { ManualChapter, NavigationTarget, AppTab } from '../types';
import { Search, Scroll, BookOpen, ChevronLeft, Briefcase } from './Icons';

interface ElderTabProps {
  isDetailView?: boolean;
  setDetailView: (isDetail: boolean) => void;
  initialSelection?: NavigationTarget | null;
  onNavigate: (target: NavigationTarget) => void;
}

const stripHtml = (html: string) => html.replace(/<[^>]*>?/gm, ' ');
const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const ElderTab: React.FC<ElderTabProps> = ({ isDetailView, setDetailView, initialSelection, onNavigate }) => {
  const [selectedChapter, setSelectedChapter] = useState<ManualChapter | null>(null);
  const [filter, setFilter] = useState('');
  const [highlightTerm, setHighlightTerm] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isDetailView === false) {
      setSelectedChapter(null);
      setHighlightTerm('');
    }
  }, [isDetailView]);

  useEffect(() => {
    if (initialSelection && initialSelection.tab === AppTab.ELDER) {
      const chapter = ELDERS_HANDBOOK_CHAPTERS.find(c => c.id === String(initialSelection.itemId));
      if (chapter) {
        setSelectedChapter(chapter);
        setHighlightTerm(initialSelection.highlightTerm);
        setDetailView(true);
      }
    }
  }, [initialSelection, setDetailView]);

  const handleSelect = useCallback((chapter: ManualChapter) => {
    setSelectedChapter(chapter);
    setHighlightTerm(filter);
    setDetailView(true);
  }, [setDetailView, filter]);

  const handleBack = () => {
    setSelectedChapter(null);
    setHighlightTerm('');
    setDetailView(false);
  };

  const filteredChapters = useMemo(() => {
    const searchLower = filter.toLowerCase();
    if (!searchLower) return ELDERS_HANDBOOK_CHAPTERS;
    return ELDERS_HANDBOOK_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return c.title.toLowerCase().includes(searchLower) || plainText.includes(searchLower);
    });
  }, [filter]);

  // Cross-Search Results
  const manualResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    return MANUAL_CHAPTERS.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()) || stripHtml(c.fullText).toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  const beliefsResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    return FUNDAMENTAL_BELIEFS.filter(b => b.title.toLowerCase().includes(filter.toLowerCase()) || b.fullText.toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  const ministerResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    return MINISTERS_HANDBOOK_CHAPTERS.filter(c => c.title.toLowerCase().includes(filter.toLowerCase()) || stripHtml(c.fullText).toLowerCase().includes(filter.toLowerCase()));
  }, [filter]);

  const getSearchSnippet = (text: string, query: string, isHtml: boolean = false) => {
    if (!query) return null;
    const content = isHtml ? stripHtml(text) : text;
    const index = content.toLowerCase().indexOf(query.toLowerCase());
    if (index === -1) return null;
    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + query.length + 60);
    let snippet = content.slice(start, end);
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';
    
    const parts = snippet.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'));
    return (
      <span className="text-xs text-gray-500 block mt-2 italic bg-yellow-50 p-2 rounded border border-yellow-100 leading-relaxed">
        {parts.map((part, i) => part.toLowerCase() === query.toLowerCase() ? <span key={i} className="bg-yellow-200 font-bold text-gray-800 px-0.5 rounded">{part}</span> : part)}
      </span>
    );
  };

  const getHighlightedHtml = (html: string, term: string) => {
    if (!term) return html;
    const regex = new RegExp(`(${escapeRegExp(term)})(?![^<]*>)`, 'gi');
    return html.replace(regex, '<mark class="bg-yellow-200 text-gray-900 rounded-sm px-0.5">$1</mark>');
  };

  useEffect(() => {
    if (selectedChapter && highlightTerm && contentRef.current) {
      setTimeout(() => {
        contentRef.current?.querySelector('mark')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    }
  }, [selectedChapter, highlightTerm]);

  if (selectedChapter) {
    return (
      <div className="pb-20 flex flex-col h-full bg-white">
         <div className="bg-slate-900 text-white p-4 -mt-1 shadow-md sticky top-14 z-30">
            <button onClick={handleBack} className="text-sm flex items-center text-slate-300 hover:text-white mb-2">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to List
            </button>
            <h2 className="text-xl font-bold">{selectedChapter.title}</h2>
            <span className="text-xs uppercase tracking-wider bg-slate-800 px-2 py-1 rounded text-slate-300 mt-2 inline-block">{selectedChapter.category}</span>
         </div>
         <div className="p-5 max-w-3xl mx-auto w-full flex-1 overflow-y-auto" ref={contentRef}>
             <div className="manual-content text-gray-800 leading-relaxed space-y-4" dangerouslySetInnerHTML={{ __html: getHighlightedHtml(selectedChapter.fullText, highlightTerm) }} />
         </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full">
      <div className="p-4 bg-white sticky top-14 z-40 border-b border-gray-100">
        <div className="relative">
          <input type="text" placeholder="Search handbook..." value={filter} onChange={(e) => setFilter(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>
      <div className="p-4 pb-24 space-y-6">
        <div className="space-y-3">
          {filteredChapters.map((chapter) => (
            <button key={chapter.id} onClick={() => handleSelect(chapter)} className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start hover:border-blue-300 active:bg-gray-50 transition-all group">
              <div className="w-full flex items-center justify-between">
                <div className="text-left">
                  <span className="text-xs font-semibold text-blue-600 mb-1 block">{chapter.category}</span>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</h3>
                </div>
                <ChevronLeft className="w-5 h-5 rotate-180 text-gray-300 group-hover:text-blue-400 ml-2" />
              </div>
              {getSearchSnippet(chapter.fullText, filter, true)}
            </button>
          ))}
        </div>

        {/* Cross-Search Sections */}
        {manualResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6"><Scroll className="w-3 h-3 mr-2" /> Church Manual ({manualResults.length})</h3>
            <div className="space-y-3">{manualResults.map((c) => <button key={`man-${c.id}`} onClick={() => onNavigate({ tab: AppTab.MANUAL, itemId: c.id, highlightTerm: filter })} className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300"><span className="font-medium text-gray-900">{c.title}</span>{getSearchSnippet(c.fullText, filter, true)}</button>)}</div>
          </div>
        )}
        {ministerResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6"><Briefcase className="w-3 h-3 mr-2" /> Minister's Handbook ({ministerResults.length})</h3>
            <div className="space-y-3">{ministerResults.map((c) => <button key={`min-${c.id}`} onClick={() => onNavigate({ tab: AppTab.MINISTER, itemId: c.id, highlightTerm: filter })} className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300"><span className="font-medium text-gray-900">{c.title}</span>{getSearchSnippet(c.fullText, filter, true)}</button>)}</div>
          </div>
        )}
        {beliefsResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6"><BookOpen className="w-3 h-3 mr-2" /> Beliefs ({beliefsResults.length})</h3>
            <div className="space-y-3">{beliefsResults.map((b) => <button key={`bel-${b.id}`} onClick={() => onNavigate({ tab: AppTab.BELIEFS, itemId: b.id, highlightTerm: filter })} className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300"><span className="font-medium text-gray-900">#{b.id} {b.title}</span>{getSearchSnippet(b.fullText, filter)}</button>)}</div>
          </div>
        )}
        
        {filteredChapters.length === 0 && manualResults.length === 0 && beliefsResults.length === 0 && ministerResults.length === 0 && (
          <div className="text-center py-10 text-gray-400"><p>No results found for "{filter}"</p></div>
        )}
      </div>
    </div>
  );
};

export default ElderTab;
