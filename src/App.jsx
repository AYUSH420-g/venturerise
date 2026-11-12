import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import CampaignsPage from './pages/CampaignsPage';
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname || '/');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync route with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    setCurrentRoute(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const showToast = (toastData) => {
    setToast(toastData);
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/about':
        return <AboutPage setCurrentRoute={navigateTo} />;
      case '/services':
        return <ServicesPage setCurrentRoute={navigateTo} onOpenRegister={() => setRegisterOpen(true)} />;
      case '/how-it-works':
        return <HowItWorksPage setCurrentRoute={navigateTo} />;
      case '/campaigns':
        return <CampaignsPage setCurrentRoute={navigateTo} />;
      case '/contact':
        return <ContactPage onShowToast={showToast} />;
      case '/privacy-policy':
        return <LegalPage type="privacy" setCurrentRoute={navigateTo} />;
      case '/terms-and-conditions':
        return <LegalPage type="terms" setCurrentRoute={navigateTo} />;
      case '/refund-policy':
        return <LegalPage type="refund" setCurrentRoute={navigateTo} />;
      case '/faq':
        return <LegalPage type="faq" setCurrentRoute={navigateTo} />;
      case '/':
      default:
        return (
          <HomePage
            setCurrentRoute={navigateTo}
            onOpenRegister={() => setRegisterOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] flex flex-col font-sans selection:bg-[#005A9C] selection:text-white">
      {/* Announcement Top Bar */}
      <TopBar />

      {/* Main Header / Navigation */}
      <Navbar
        currentRoute={currentRoute}
        setCurrentRoute={navigateTo}
        onOpenRegister={() => setRegisterOpen(true)}
      />

      {/* Page Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        setCurrentRoute={navigateTo}
        onShowToast={showToast}
      />

      {/* Register Modal */}
      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onShowToast={showToast}
      />

      {/* Floating Notifications */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
}
