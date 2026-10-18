import React, { useState, useEffect } from 'react';
import { ConferenceProvider, useConference } from './context/ConferenceContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CallForPapersPage } from './pages/CallForPapersPage';
import { SubmissionPage } from './pages/SubmissionPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { CommitteePage } from './pages/CommitteePage';
import { ImportantDatesPage } from './pages/ImportantDatesPage';
import { SubmitPaperPage } from './pages/SubmitPaperPage';
import { AwardsPage } from './pages/AwardsPage';
import { ProgramPage } from './pages/ProgramPage';
import { AcceptedPapersPage } from './pages/AcceptedPapersPage';
import { SponsorsPage } from './pages/SponsorsPage';
import { InformationPage } from './pages/InformationPage';
import { ContactPage } from './pages/ContactPage';
import { ArrowUp } from 'lucide-react';

const AppContent: React.FC = () => {
  const { setActiveModal } = useConference();

  // Normalize path from window.location
  const getInitialPath = () => {
    const path = window.location.pathname;
    return path || '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render Page Component
  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={navigateTo} />;
      case '/about':
        return <AboutPage onNavigate={navigateTo} />;
      case '/call-for-papers':
        return <CallForPapersPage onNavigate={navigateTo} />;
      case '/submission':
        return <SubmissionPage onNavigate={navigateTo} />;
      case '/registration':
        return <RegistrationPage onNavigate={navigateTo} />;
      case '/committee':
        return <CommitteePage onNavigate={navigateTo} />;
      case '/important-dates':
        return <ImportantDatesPage onNavigate={navigateTo} />;
      case '/submit-paper':
        return <SubmitPaperPage onNavigate={navigateTo} />;
      case '/awards':
        return <AwardsPage onNavigate={navigateTo} />;
      case '/program':
        return <ProgramPage onNavigate={navigateTo} />;
      case '/accepted-papers':
        return <AcceptedPapersPage onNavigate={navigateTo} />;
      case '/sponsors':
        return <SponsorsPage onNavigate={navigateTo} />;
      case '/information':
        return <InformationPage onNavigate={navigateTo} />;
      case '/contact':
        return <ContactPage onNavigate={navigateTo} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-slate-800 antialiased">
      {/* 1. Primary Navigation */}
      <Navbar
        currentPath={currentPath}
        onNavigate={navigateTo}
        onOpenSubmitModal={() => setActiveModal('submissionPortal')}
      />

      {/* 3. Main Page Content */}
      <main id="main-content" className="main-content flex-1">
        {renderPage()}
      </main>

      {/* 4. Global Footer */}
      <Footer onNavigate={navigateTo} />

      {/* 5. Interactive Modals (IEEE Template, Portal Status, Alerts) */}
      <Modals />

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-900/30 transition-all duration-200 cursor-pointer animate-in fade-in"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default function App() {
  return (
    <ConferenceProvider>
      <AppContent />
    </ConferenceProvider>
  );
}
