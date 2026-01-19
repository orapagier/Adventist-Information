
import React from 'react';
import { AppTab } from '../types';
import { BookOpen, Scroll, MessageCircleQuestion, Briefcase, Award } from './Icons';

interface BottomNavProps {
  currentTab: AppTab;
  onTabChange: (tab: AppTab) => void;
  isHidden?: boolean;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onTabChange, isHidden }) => {
  if (isHidden) return null;

  const tabs = [
    { id: AppTab.BELIEFS, label: 'Beliefs', icon: BookOpen },
    { id: AppTab.MANUAL, label: 'Manual', icon: Scroll },
    { id: AppTab.MINISTER, label: 'Minister', icon: Briefcase },
    { id: AppTab.ELDER, label: 'Elder', icon: Award },
    { id: AppTab.QUESTIONS, label: 'Q&A', icon: MessageCircleQuestion },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="max-w-3xl mx-auto flex justify-between items-center h-16 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = currentTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex flex-col items-center justify-center h-full space-y-1 transition-all duration-200 ${
                isActive ? 'text-blue-700' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <div className={`p-1.5 rounded-full transition-all ${isActive ? 'bg-blue-100' : 'bg-transparent'}`}>
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[9px] font-medium ${isActive ? 'opacity-100' : 'opacity-80'}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
      {/* Safe area spacer for iOS */}
      <div className="h-[env(safe-area-inset-bottom)] bg-white"></div>
    </nav>
  );
};

export default BottomNav;
