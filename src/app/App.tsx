import { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { AuthPage } from './components/AuthPage';
import { StudentPortal } from './components/StudentPortal';

export default function App() {
  const [currentView, setCurrentView] = useState<'landing' | 'auth' | 'portal'>('landing');

  return (
    <div className="size-full bg-gray-50">
      {currentView === 'landing' && (
        <LandingPage onNavigateToAuth={() => setCurrentView('auth')} />
      )}
      {currentView === 'auth' && (
        <AuthPage
          onBack={() => setCurrentView('landing')}
          onAuthSuccess={() => setCurrentView('portal')}
        />
      )}
      {currentView === 'portal' && (
        <StudentPortal onBack={() => setCurrentView('auth')} />
      )}
    </div>
  );
}