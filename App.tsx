
import React, { useState } from 'react';
import { AppTab, NavigationTarget } from './types';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import BeliefsTab from './components/BeliefsTab';
import ManualTab from './components/ManualTab';
import MinisterTab from './components/MinisterTab';
import ElderTab from './components/ElderTab';
import IssuesTab from './components/IssuesTab';
import BackToTop from './components/BackToTop';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<AppTab>(AppTab.BELIEFS);
  const [isDetailView, setIsDetailView] = useState(false);
  const [navigationTarget, setNavigationTarget] = useState<NavigationTarget | null>(null);

  const handleTabChange = (tab: AppTab) => {
    if (tab === currentTab) {
      if (isDetailView) {
        // If clicking active tab while in detail view, go back to root of that tab
        setIsDetailView(false);
      } else {
        // Optional: If already at root, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      setCurrentTab(tab);
      setIsDetailView(false); // Reset detail view when switching tabs
      // Clear navigation target so we don't re-trigger it inadvertently
      setNavigationTarget(null);
    }
  };

  const handleNavigate = (target: NavigationTarget) => {
    setCurrentTab(target.tab);
    setNavigationTarget(target);
    // Detail view is handled inside the specific tab component when it receives the target
  };

  const renderContent = () => {
    switch (currentTab) {
      case AppTab.BELIEFS:
        return (
          <BeliefsTab 
            isDetailView={isDetailView}
            setDetailView={setIsDetailView} 
            initialSelection={navigationTarget?.tab === AppTab.BELIEFS ? navigationTarget : null}
            onNavigate={handleNavigate}
          />
        );
      case AppTab.MANUAL:
        return (
          <ManualTab 
            isDetailView={isDetailView}
            setDetailView={setIsDetailView} 
            initialSelection={navigationTarget?.tab === AppTab.MANUAL ? navigationTarget : null}
            onNavigate={handleNavigate}
          />
        );
      case AppTab.MINISTER:
        return (
          <MinisterTab
            isDetailView={isDetailView}
            setDetailView={setIsDetailView}
            initialSelection={navigationTarget?.tab === AppTab.MINISTER ? navigationTarget : null}
            onNavigate={handleNavigate}
          />
        );
      case AppTab.ELDER:
        return (
          <ElderTab
            isDetailView={isDetailView}
            setDetailView={setIsDetailView}
            initialSelection={navigationTarget?.tab === AppTab.ELDER ? navigationTarget : null}
            onNavigate={handleNavigate}
          />
        );
      case AppTab.QUESTIONS:
        return <IssuesTab />;
      default:
        return <BeliefsTab isDetailView={isDetailView} setDetailView={setIsDetailView} onNavigate={handleNavigate} />;
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

      <BottomNav 
        currentTab={currentTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
};

export default App;
