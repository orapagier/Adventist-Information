import React, { useState, useCallback, useMemo } from 'react';
import { FUNDAMENTAL_BELIEFS } from '../constants';
import { Belief } from '../types';
import { Search } from './Icons';

interface BeliefsTabProps {
  setDetailView: (isDetail: boolean) => void;
}

const BeliefsTab: React.FC<BeliefsTabProps> = ({ setDetailView }) => {
  const [selectedBelief, setSelectedBelief] = useState<Belief | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSelect = useCallback((belief: Belief) => {
    setSelectedBelief(belief);
    setDetailView(true);
  }, [setDetailView]);

  const handleBack = () => {
    setSelectedBelief(null);
    setDetailView(false);
  };

  const filteredBeliefs = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return FUNDAMENTAL_BELIEFS.filter(b => 
      b.title.toLowerCase().includes(query) ||
      b.shortDescription.toLowerCase().includes(query) ||
      b.fullText.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const getSearchSnippet = (text: string, query: string) => {
    if (!query) return null;
    const lowerText = text.toLowerCase();
    const index = lowerText.indexOf(query.toLowerCase());
    if (index === -1) return null;

    const start = Math.max(0, index - 30);
    const end = Math.min(text.length, index + query.length + 50);
    const snippet = text.slice(start, end);
    
    return (
      <span className="text-xs text-gray-500 block mt-2 italic bg-yellow-50 p-1 rounded border border-yellow-100">
        "...{snippet}..."
      </span>
    );
  };

  // If a belief is selected, show the detail view
  if (selectedBelief) {
    return (
      <div className="pb-20">
         <div className="bg-blue-800 text-white p-4 -mt-1 shadow-inner">
            <button onClick={handleBack} className="text-sm flex items-center text-blue-200 hover:text-white mb-2">
               <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
               Back to List
            </button>
            <h2 className="text-2xl font-bold leading-tight">#{selectedBelief.id} {selectedBelief.title}</h2>
         </div>
         
         <div className="p-4 max-w-3xl mx-auto">
             <div className="prose prose-blue max-w-none text-gray-800 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="whitespace-pre-wrap leading-relaxed">
                   {selectedBelief.fullText}
                </div>
             </div>
         </div>
      </div>
    );
  }

  // Otherwise list all beliefs
  return (
    <div className="flex flex-col h-full max-w-3xl mx-auto w-full">
      <div className="p-4 bg-white sticky top-14 z-40 border-b border-gray-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search beliefs..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      <div className="p-4 pb-24 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredBeliefs.map((belief) => {
          const showSnippet = searchQuery && !belief.title.toLowerCase().includes(searchQuery.toLowerCase()) && !belief.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());

          return (
            <button
              key={belief.id}
              onClick={() => handleSelect(belief)}
              className="group flex flex-col items-start p-4 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all text-left w-full active:scale-[0.98]"
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
        {filteredBeliefs.length === 0 && (
          <div className="col-span-full text-center py-10 text-gray-400">
            <p>No beliefs found matching "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BeliefsTab;