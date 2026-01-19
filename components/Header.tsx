
import React from 'react';
import { AppTab } from '../types';

interface HeaderProps {
  currentTab: AppTab;
  onBack?: () => void;
  showBack?: boolean;
}

const Header: React.FC<HeaderProps> = ({ currentTab, onBack, showBack }) => {
  const getTitle = () => {
    switch (currentTab) {
      case AppTab.BELIEFS: return 'Fundamental Beliefs';
      case AppTab.MANUAL: return 'Church Manual';
      case AppTab.MINISTER: return "Minister's Handbook";
      case AppTab.ELDER: return "Elder's Handbook";
      case AppTab.QUESTIONS: return 'Questions';
      default: return 'Adventist Info';
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-blue-900 text-white shadow-md">
      <div className="max-w-3xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {showBack && (
            <button 
              onClick={onBack}
              className="p-1 rounded-full hover:bg-blue-800 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
          )}
          <h1 className="text-lg font-bold tracking-wide truncate">{getTitle()}</h1>
        </div>
        <div className="w-8 h-8 rounded-full bg-blue-800 flex items-center justify-center flex-shrink-0">
          <img src="https://picsum.photos/32/32" alt="Logo" className="rounded-full opacity-80" />
        </div>
      </div>
    </header>
  );
};

export default Header;
