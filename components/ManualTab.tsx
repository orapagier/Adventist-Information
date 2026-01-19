
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { MANUAL_CHAPTERS } from '../manualData';
import { FUNDAMENTAL_BELIEFS } from '../constants';
import { MINISTERS_HANDBOOK_CHAPTERS } from '../ministersHandbookData';
import { ELDERS_HANDBOOK_CHAPTERS } from '../eldersHandbookData';
import { ManualChapter, NavigationTarget, AppTab } from '../types';
import { Search, BookOpen, ChevronLeft, Briefcase, Award } from './Icons';

interface ManualTabProps {
  isDetailView?: boolean;
  setDetailView: (isDetail: boolean) => void;
  initialSelection?: NavigationTarget | null;
  onNavigate: (target: NavigationTarget) => void;
}

// Utility to strip HTML tags for text-only search
const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, ' ');
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const ManualTab: React.FC<ManualTabProps> = ({ isDetailView, setDetailView, initialSelection, onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<ManualChapter | null>(null);
  const [filter, setFilter] = useState('');
  const [highlightTerm, setHighlightTerm] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Sync internal state with prop from parent (App.tsx)
  useEffect(() => {
    if (isDetailView === false) {
      setSelectedTopic(null);
      setHighlightTerm('');
    }
  }, [isDetailView]);

  // Handle initial selection from navigation
  useEffect(() => {
    if (initialSelection && initialSelection.tab === AppTab.MANUAL) {
      const chapter = MANUAL_CHAPTERS.find(c => c.id === String(initialSelection.itemId));
      if (chapter) {
        setSelectedTopic(chapter);
        setHighlightTerm(initialSelection.highlightTerm);
        setDetailView(true);
      }
    }
  }, [initialSelection, setDetailView]);

  const handleSelect = useCallback((topic: ManualChapter) => {
    setSelectedTopic(topic);
    setHighlightTerm(filter);
    setDetailView(true);
  }, [setDetailView, filter]);

  const handleBack = () => {
    setSelectedTopic(null);
    setHighlightTerm('');
    setDetailView(false);
  };

  // Filter Local Manual Chapters
  const filteredChapters = useMemo(() => {
    const searchLower = filter.toLowerCase();
    if (!searchLower) return MANUAL_CHAPTERS;

    return MANUAL_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(searchLower) || 
        c.category.toLowerCase().includes(searchLower) ||
        plainText.includes(searchLower)
      );
    });
  }, [filter]);

  // Search External Content
  const beliefResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    const query = filter.toLowerCase();
    return FUNDAMENTAL_BELIEFS.filter(b => 
      b.title.toLowerCase().includes(query) ||
      b.shortDescription.toLowerCase().includes(query) ||
      b.fullText.toLowerCase().includes(query)
    );
  }, [filter]);

  const ministerResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    const query = filter.toLowerCase();
    return MINISTERS_HANDBOOK_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(query) || 
        plainText.includes(query)
      );
    });
  }, [filter]);

  const elderResults = useMemo(() => {
    if (!filter || filter.length < 2) return [];
    const query = filter.toLowerCase();
    return ELDERS_HANDBOOK_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(query) || 
        plainText.includes(query)
      );
    });
  }, [filter]);

  const getSearchSnippet = (text: string, query: string, isHtml: boolean = false) => {
    if (!query) return null;
    const content = isHtml ? stripHtml(text) : text;
    const lowerText = content.toLowerCase();
    const index = lowerText.indexOf(query.toLowerCase());
    if (index === -1) return null;

    const start = Math.max(0, index - 40);
    const end = Math.min(content.length, index + query.length + 60);
    let snippet = content.slice(start, end);
    
    if (start > 0) snippet = '...' + snippet;
    if (end < content.length) snippet = snippet + '...';

    const parts = snippet.split(new RegExp(`(${escapeRegExp(query)})`, 'gi'));

    return (
      <span className="text-xs text-gray-500 block mt-2 italic bg-yellow-50 p-2 rounded border border-yellow-100 leading-relaxed">
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? 
            <span key={i} className="bg-yellow-200 font-bold text-gray-800 px-0.5 rounded">{part}</span> : 
            part
        )}
      </span>
    );
  };

  // Highlight HTML content for detail view
  const getHighlightedHtml = (html: string, term: string) => {
    if (!term) return html;
    const regex = new RegExp(`(${escapeRegExp(term)})(?![^<]*>)`, 'gi');
    return html.replace(regex, '<mark class="bg-yellow-200 text-gray-900 rounded-sm px-0.5">$1</mark>');
  };

  useEffect(() => {
    if (selectedTopic && highlightTerm && contentRef.current) {
      const timer = setTimeout(() => {
        const firstMatch = contentRef.current?.querySelector('mark');
        if (firstMatch) {
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedTopic, highlightTerm]);

  if (selectedTopic) {
    return (
      <div className="pb-20 flex flex-col h-full bg-white">
         <div className="bg-slate-900 text-white p-4 -mt-1 shadow-md sticky top-14 z-30">
            <button onClick={handleBack} className="text-sm flex items-center text-slate-300 hover:text-white mb-2">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Manual
            </button>
            <h2 className="text-xl font-bold">{selectedTopic.title}</h2>
            <span className="text-xs uppercase tracking-wider bg-slate-800 px-2 py-1 rounded text-slate-300 mt-2 inline-block">
              {selectedTopic.category}
            </span>
         </div>
         
         <div className="p-5 max-w-3xl mx-auto w-full flex-1 overflow-y-auto" ref={contentRef}>
             <div 
                className="manual-content text-gray-800 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: getHighlightedHtml(selectedTopic.fullText, highlightTerm) }}
             />
         </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full">
      <div className="p-4 bg-white sticky top-14 z-40 border-b border-gray-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search manual, beliefs..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      <div className="p-4 pb-24 space-y-6">
        {/* Local Results */}
        <div className="space-y-3">
          {filteredChapters.map((chapter) => {
            const isTitleMatch = chapter.title.toLowerCase().includes(filter.toLowerCase());
            const isCategoryMatch = chapter.category.toLowerCase().includes(filter.toLowerCase());
            const showSnippet = filter && !isTitleMatch && !isCategoryMatch;

            return (
              <button
                key={chapter.id}
                onClick={() => handleSelect(chapter)}
                className="w-full bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col items-start hover:border-blue-300 active:bg-gray-50 transition-all group"
              >
                <div className="w-full flex items-center justify-between">
                  <div className="text-left">
                    <span className="text-xs font-semibold text-blue-600 mb-1 block">{chapter.category}</span>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</h3>
                  </div>
                  <div className="text-gray-300 group-hover:text-blue-400 ml-2">
                     <ChevronLeft className="w-5 h-5 rotate-180" />
                  </div>
                </div>
                {showSnippet && getSearchSnippet(chapter.fullText, filter, true)}
              </button>
            );
          })}
        </div>

        {/* Cross-Search Results */}
        {beliefResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6">
              <BookOpen className="w-3 h-3 mr-2" />
              Found in Fundamental Beliefs ({beliefResults.length})
            </h3>
            <div className="space-y-3">
              {beliefResults.map((belief) => (
                <button
                  key={`belief-${belief.id}`}
                  onClick={() => onNavigate({ tab: AppTab.BELIEFS, itemId: belief.id, highlightTerm: filter })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                   <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-gray-900 group-hover:text-blue-700">#{belief.id} {belief.title}</span>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  <p className="text-sm text-gray-600 mb-2 line-clamp-1">{belief.shortDescription}</p>
                  {getSearchSnippet(belief.fullText, filter)}
                </button>
              ))}
            </div>
          </div>
        )}

        {ministerResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6">
              <Briefcase className="w-3 h-3 mr-2" />
              Found in Minister's Handbook ({ministerResults.length})
            </h3>
            <div className="space-y-3">
              {ministerResults.map((chapter) => (
                <button
                  key={`min-${chapter.id}`}
                  onClick={() => onNavigate({ tab: AppTab.MINISTER, itemId: chapter.id, highlightTerm: filter })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 block">{chapter.category}</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  {getSearchSnippet(chapter.fullText, filter, true)}
                </button>
              ))}
            </div>
          </div>
        )}

        {elderResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6">
              <Award className="w-3 h-3 mr-2" />
              Found in Elder's Handbook ({elderResults.length})
            </h3>
            <div className="space-y-3">
              {elderResults.map((chapter) => (
                <button
                  key={`eld-${chapter.id}`}
                  onClick={() => onNavigate({ tab: AppTab.ELDER, itemId: chapter.id, highlightTerm: filter })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 block">{chapter.category}</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  {getSearchSnippet(chapter.fullText, filter, true)}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredChapters.length === 0 && beliefResults.length === 0 && ministerResults.length === 0 && elderResults.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <p>No results found for "{filter}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualTab;
