
import React, { useState, useCallback, useMemo, useEffect, useRef } from 'react';
import { FUNDAMENTAL_BELIEFS } from '../constants';
import { MANUAL_CHAPTERS } from '../manualData';
import { MINISTERS_HANDBOOK_CHAPTERS } from '../ministersHandbookData';
import { ELDERS_HANDBOOK_CHAPTERS } from '../eldersHandbookData';
import { Belief, NavigationTarget, AppTab } from '../types';
import { Search, Scroll, ChevronLeft, Briefcase, Award } from './Icons';

interface BeliefsTabProps {
  isDetailView?: boolean;
  setDetailView: (isDetail: boolean) => void;
  initialSelection?: NavigationTarget | null;
  onNavigate: (target: NavigationTarget) => void;
}

// Utility to strip HTML tags for text-only search (needed for manual content)
const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, ' ');
};

const escapeRegExp = (string: string) => {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const BeliefsTab: React.FC<BeliefsTabProps> = ({ isDetailView, setDetailView, initialSelection, onNavigate }) => {
  const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [highlightTerm, setHighlightTerm] = useState('');
  const detailRef = useRef<HTMLDivElement>(null);

  // Sync internal state with prop from parent (App.tsx)
  // This allows the bottom tab click to reset the view
  useEffect(() => {
    if (isDetailView === false) {
      setSelectedBelief(null);
      setHighlightTerm('');
    }
  }, [isDetailView]);

  // Handle initial selection from global search or cross-tab navigation
  useEffect(() => {
    if (initialSelection && initialSelection.tab === AppTab.BELIEFS) {
      const belief = FUNDAMENTAL_BELIEFS.find(b => b.id === Number(initialSelection.itemId));
      if (belief) {
        setSelectedBelief(belief);
        setHighlightTerm(initialSelection.highlightTerm);
        setDetailView(true);
      }
    }
  }, [initialSelection, setDetailView]);

  const handleSelect = useCallback((belief: Belief) => {
    setSelectedBelief(belief);
    setHighlightTerm(searchQuery);
    setDetailView(true);
  }, [setDetailView, searchQuery]);

  const handleBack = () => {
    setSelectedBelief(null);
    setHighlightTerm('');
    setDetailView(false);
  };

  // Filter Local Beliefs
  const filteredBeliefs = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return FUNDAMENTAL_BELIEFS.filter(b => 
      b.title.toLowerCase().includes(query) ||
      b.shortDescription.toLowerCase().includes(query) ||
      b.fullText.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Search External Content
  const manualResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return MANUAL_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(query) || 
        c.category.toLowerCase().includes(query) ||
        plainText.includes(query)
      );
    });
  }, [searchQuery]);

  const ministerResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return MINISTERS_HANDBOOK_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(query) || 
        plainText.includes(query)
      );
    });
  }, [searchQuery]);

  const elderResults = useMemo(() => {
    if (!searchQuery || searchQuery.length < 2) return [];
    const query = searchQuery.toLowerCase();
    return ELDERS_HANDBOOK_CHAPTERS.filter(c => {
      const plainText = stripHtml(c.fullText).toLowerCase();
      return (
        c.title.toLowerCase().includes(query) || 
        plainText.includes(query)
      );
    });
  }, [searchQuery]);

  const getSearchSnippet = (text: string, query: string, isHtml: boolean = false) => {
    if (!query) return null;
    const content = isHtml ? stripHtml(text) : text;
    const lowerText = content.toLowerCase();
    const index = lowerText.indexOf(query.toLowerCase());
    if (index === -1) return null;

    const start = Math.max(0, index - 30);
    const end = Math.min(content.length, index + query.length + 50);
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

  useEffect(() => {
    if (selectedBelief && highlightTerm && detailRef.current) {
      const timer = setTimeout(() => {
        const firstMatch = detailRef.current?.querySelector('mark');
        if (firstMatch) {
          firstMatch.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [selectedBelief, highlightTerm]);

  if (selectedBelief) {
    const renderHighlightedText = (text: string, term: string) => {
      if (!term) return text;
      const parts = text.split(new RegExp(`(${escapeRegExp(term)})`, 'gi'));
      return parts.map((part, i) => 
        part.toLowerCase() === term.toLowerCase() ? 
          <mark key={i} className="bg-yellow-200 text-gray-900 font-medium rounded-sm px-0.5">{part}</mark> : 
          part
      );
    };

    return (
      <div className="pb-20">
         <div className="bg-blue-800 text-white p-4 -mt-1 shadow-inner sticky top-14 z-30">
            <button onClick={handleBack} className="text-sm flex items-center text-blue-200 hover:text-white mb-2">
               <ChevronLeft className="w-4 h-4 mr-1" />
               Back to List
            </button>
            <h2 className="text-2xl font-bold leading-tight">#{selectedBelief.id} {selectedBelief.title}</h2>
         </div>
         
         <div className="p-4 max-w-3xl mx-auto" ref={detailRef}>
             <div className="prose prose-blue max-w-none text-gray-800 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="whitespace-pre-wrap leading-relaxed">
                   {renderHighlightedText(selectedBelief.fullText, highlightTerm)}
                </div>
             </div>
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
            placeholder="Search beliefs, manual..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      <div className="p-4 pb-24 space-y-6">
        {/* Local Results */}
        <div className="space-y-3">
          {filteredBeliefs.map((belief) => {
            const isTitleMatch = belief.title.toLowerCase().includes(searchQuery.toLowerCase());
            const isDescMatch = belief.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
            const showSnippet = searchQuery && !isTitleMatch && !isDescMatch;

            return (
              <button
                key={belief.id}
                onClick={() => handleSelect(belief)}
                className="group flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all text-left w-full active:scale-[0.98]"
              >
                <div className="flex items-start w-full">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {belief.id}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                      {belief.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      {belief.shortDescription}
                    </p>
                  </div>
                </div>
                {showSnippet && getSearchSnippet(belief.fullText, searchQuery)}
              </button>
            );
          })}
        </div>

        {/* Cross-Search Results */}
        {manualResults.length > 0 && (
          <div>
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 px-1 flex items-center border-t border-gray-200 pt-6">
              <Scroll className="w-3 h-3 mr-2" />
              Found in Church Manual ({manualResults.length})
            </h3>
            <div className="space-y-3">
              {manualResults.map((chapter) => (
                <button
                  key={`manual-${chapter.id}`}
                  onClick={() => onNavigate({ tab: AppTab.MANUAL, itemId: chapter.id, highlightTerm: searchQuery })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 block">{chapter.category}</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  {getSearchSnippet(chapter.fullText, searchQuery, true)}
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
                  onClick={() => onNavigate({ tab: AppTab.MINISTER, itemId: chapter.id, highlightTerm: searchQuery })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 block">{chapter.category}</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  {getSearchSnippet(chapter.fullText, searchQuery, true)}
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
                  onClick={() => onNavigate({ tab: AppTab.ELDER, itemId: chapter.id, highlightTerm: searchQuery })}
                  className="w-full bg-gray-50 p-4 rounded-xl border border-gray-200 shadow-sm text-left hover:border-blue-300 transition-all group opacity-90 hover:opacity-100"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div>
                      <span className="text-xs font-semibold text-blue-600 block">{chapter.category}</span>
                      <span className="font-medium text-gray-900 group-hover:text-blue-700">{chapter.title}</span>
                    </div>
                    <ChevronLeft className="w-4 h-4 text-gray-300 rotate-180" />
                  </div>
                  {getSearchSnippet(chapter.fullText, searchQuery, true)}
                </button>
              ))}
            </div>
          </div>
        )}

        {filteredBeliefs.length === 0 && manualResults.length === 0 && ministerResults.length === 0 && elderResults.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <p>No results found for "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeliefsTab;
