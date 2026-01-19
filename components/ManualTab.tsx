import React, { useState, useCallback } from 'react';
import { MANUAL_CONTENT } from '../manualData';
import { ManualChapter } from '../types';
import { Scroll, Search } from './Icons';

const MANUAL_CHAPTERS: ManualChapter[] = [
  { id: '1', title: 'Why a Church Manual?', category: 'Introduction', fullText: MANUAL_CONTENT.chapter1 },
  { id: '2', title: 'Church of the Living God', category: 'The Church', fullText: MANUAL_CONTENT.chapter2 },
  { id: '3', title: 'Organization and Authority', category: 'Organization', fullText: MANUAL_CONTENT.chapter3 },
  { id: '4', title: 'Pastors and Other Church Employees', category: 'Ministry', fullText: MANUAL_CONTENT.chapter4 },
  { id: '5', title: 'Organizing, Uniting, and Dissolving Churches and Companies', category: 'Organization', fullText: MANUAL_CONTENT.chapter5 },
  { id: '6', title: 'Making Disciples', category: 'Discipleship', fullText: MANUAL_CONTENT.chapter6 },
  { id: '7', title: 'Membership', category: 'Membership', fullText: MANUAL_CONTENT.chapter7 },
  { id: '8', title: 'Discipline', category: 'Discipline', fullText: MANUAL_CONTENT.chapter8 },
  { id: '9', title: 'Local Church Officers and Organizations', category: 'Local Officers', fullText: MANUAL_CONTENT.chapter9 },
  { id: '10', title: 'Elections', category: 'Elections', fullText: MANUAL_CONTENT.chapter10 },
  { id: '11', title: 'Services and Other Meetings', category: 'Services', fullText: MANUAL_CONTENT.chapter11 },
  { id: '12', title: 'Finance', category: 'Stewardship', fullText: MANUAL_CONTENT.chapter12 },
  { id: '13', title: 'Standards of Christian Living', category: 'Lifestyle', fullText: MANUAL_CONTENT.chapter13 },
  { id: '14', title: 'Marriage, Divorce, and Remarriage', category: 'Family', fullText: MANUAL_CONTENT.chapter14 },
  { id: 'notes', title: 'Notes', category: 'Appendices', fullText: MANUAL_CONTENT.notes },
];

interface ManualTabProps {
  setDetailView: (isDetail: boolean) => void;
}

const ManualTab: React.FC<ManualTabProps> = ({ setDetailView }) => {
  const [selectedTopic, setSelectedTopic] = useState<ManualChapter | null>(null);
  const [filter, setFilter] = useState('');

  const handleSelect = useCallback((topic: ManualChapter) => {
    setSelectedTopic(topic);
    setDetailView(true);
  }, [setDetailView]);

  const handleBack = () => {
    setSelectedTopic(null);
    setDetailView(false);
  };

  const filteredChapters = MANUAL_CHAPTERS.filter(c => {
    const searchLower = filter.toLowerCase();
    // Simple text search on the raw html string might be a bit messy but acceptable for this use case
    // Ideally we strip tags for search, but for now we search the raw string.
    return (
      c.title.toLowerCase().includes(searchLower) || 
      c.category.toLowerCase().includes(searchLower) ||
      c.fullText.toLowerCase().includes(searchLower)
    );
  });

  if (selectedTopic) {
    return (
      <div className="pb-20 flex flex-col h-full bg-white">
         <div className="bg-slate-900 text-white p-4 -mt-1 shadow-md sticky top-14 z-30">
            <button onClick={handleBack} className="text-sm flex items-center text-slate-300 hover:text-white mb-2">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Back to Manual
            </button>
            <h2 className="text-xl font-bold">{selectedTopic.title}</h2>
            <span className="text-xs uppercase tracking-wider bg-slate-800 px-2 py-1 rounded text-slate-300 mt-2 inline-block">
              {selectedTopic.category}
            </span>
         </div>
         
         <div className="p-5 max-w-3xl mx-auto w-full flex-1 overflow-y-auto">
             <div 
                className="manual-content text-gray-800 leading-relaxed space-y-4"
                dangerouslySetInnerHTML={{ __html: selectedTopic.fullText }}
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
            placeholder="Search manual topics..." 
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3.5" />
        </div>
      </div>

      <div className="p-4 pb-24 space-y-3">
        {filteredChapters.map((chapter) => (
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
                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </div>
            </div>
          </button>
        ))}
        {filteredChapters.length === 0 && (
          <div className="text-center py-10 text-gray-400">
            <p>No topics found matching "{filter}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualTab;