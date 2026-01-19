import React, { useState } from 'react';
import { AppTab } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import BeliefsTab from './components/BeliefsTab';
import ManualTab from './components/ManualTab';
import IssuesTab from './components/IssuesTab';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.BELIEFS);
  
  // State to track if we are in a detail view within a tab
  // This allows us to hide the bottom nav or change the header back button behavior
  const [isDetailView, setIsDetailView] = useState(false);

  const handleTabChange = (tab: AppTab) => {
    if (tab === currentTab && isDetailView) {
      // If clicking active tab, go back to root of that tab
      setIsDetailView(false);
    } else {
      setCurrentTab(tab);
      setIsDetailView(false); // Reset detail view when switching tabs
    }
  };

  const renderContent = () => {
    switch (currentTab) {
      case AppTab.BELIEFS:
        return <BeliefsTab setDetailView={setIsDetailView} />;
      case AppTab.MANUAL:
        return <ManualTab setDetailView={setIsDetailView} />;
      case AppTab.QUESTIONS:
        return <IssuesTab />;
      default:
        return <BeliefsTab setDetailView={setIsDetailView} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-slate-900">
      <Header 
        currentTab={currentTab} 
        onBack={() => setIsDetailView(false)} 
        showBack={isDetailView} 
      />
      
      <main className="flex-1 w-full relative">
        {renderContent()}
      </main>

      <BackToTop />

      {/* 
        On mobile Android apps, sometimes the nav hides on detail views. 
        Here we keep it unless strictly necessary, but typically SPA bottom navs persist.
        We will keep it persistent for better UX.
      */}
      <BottomNav 
        currentTab={currentTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
};

export default App;