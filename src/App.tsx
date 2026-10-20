import React, { useState, useEffect } from 'react';
import { ConferenceProvider, useConference } from './context';
import { Navbar, Footer, Modals } from './components';
import {
  HomePage,
  AboutPage,
  CallForPapersPage,
  SubmissionPage,
  RegistrationPage,
  CommitteePage,
  ImportantDatesPage,
  SubmitPaperPage,
  AwardsPage,
  ProgramPage,
  AcceptedPapersPage,
  SponsorsPage,
  InformationPage,
  ContactPage
} from './pages';
import { ArrowUp } from 'lucide-react';

const KNOWN_ROUTES = [
  '/about',
  '/call-for-papers',
  '/submission',
  '/registration',
  '/committee',
  '/important-dates',
  '/submit-paper',
  '/awards',
  '/program',
  '/accepted-papers',
  '/sponsors',
  '/information',
  '/contact'
];

const AppContent: React.FC = () => {
  const { setActiveModal } = useConference();

  // Normalize path from window.location (supports root, subdirectory, and hash fallback)
  const getInitialPath = () => {
    // 1. Check hash first (e.g., #/about or #about)
    const hash = window.location.hash.replace(/^#\/?/, '/');
    if (hash && hash !== '/') {
      for (const route of KNOWN_ROUTES) {
        if (hash === route || hash.startsWith(route)) {
          return route;
        }
      }
    }

    // 2. Check pathname (works even if hosted under /amlis-2027/ or other subfolder)
    const path = window.location.pathname;
    for (const route of KNOWN_ROUTES) {
      if (path.endsWith(route)) {
        return route;
      }
    }
    return '/';
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(getInitialPath());
    };
    window.addEventListener('popstate', handleNavigation);
    window.addEventListener('hashchange', handleNavigation);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleNavigation);
      window.removeEventListener('hashchange', handleNavigation);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (path: string) => {
    // If user is using hash or static host
    if (window.location.hash.startsWith('#')) {
      window.location.hash = path;
    } else {
      // Preserve subdirectory prefix if hosted in a subfolder
      const pathname = window.location.pathname;
      let basePrefix = '';
      for (const route of KNOWN_ROUTES) {
        if (pathname.endsWith(route)) {
          basePrefix = pathname.slice(0, pathname.length - route.length);
          break;
        }
      }
      if (!basePrefix && pathname !== '/') {
        basePrefix = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
      }
      const targetUrl = (basePrefix ? basePrefix : '') + (path === '/' ? (basePrefix ? '/' : '/') : path);
      if (window.location.pathname !== targetUrl) {
        window.history.pushState({}, '', targetUrl);
      }
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
