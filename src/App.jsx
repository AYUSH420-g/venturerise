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
import ContactPage from './pages/ContactPage';
import LegalPage from './pages/LegalPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname || '/');
  const [registerOpen, setRegisterOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Sync route with browser history & manage page title/meta
  useEffect(() => {
    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    let title = 'venturerise | Digital Marketing, Websites & AI Automation';
    let metaDesc = 'venturerise helps small businesses grow with digital marketing, professional websites, practical tech solutions, and AI automation—all built around your goals.';

    switch (currentRoute) {
      case '/about':
        title = 'About venturerise | Your Digital Growth Partner';
        metaDesc = 'venturerise helps small businesses build their online presence, reach relevant customers, and simplify everyday work through marketing, websites, and technology.';
        break;
      case '/services':
        title = 'Our Services | venturerise';
        metaDesc = 'Explore digital marketing, website development, AI automation, and tech solutions tailored for small businesses.';
        break;
      case '/how-it-works':
        title = 'How We Work | venturerise';
        metaDesc = 'A clear, practical 6-step process from discovery to launch and ongoing improvement.';
        break;
      case '/contact':
        title = 'Contact venturerise | Discuss Your Project';
        metaDesc = 'Tell us what is next for your business. Let us discuss your website, marketing, or automation goals.';
        break;
      case '/privacy-policy':
        title = 'Privacy Policy | venturerise';
        break;
      case '/terms-and-conditions':
        title = 'Terms & Conditions | venturerise';
        break;
      case '/refund-policy':
        title = 'Refund & Cancellation Policy | venturerise';
        break;
      case '/faq':
        title = 'Frequently Asked Questions | venturerise';
        break;
      case '/campaigns':
        title = 'Our Services | venturerise';
        break;
      default:
        break;
    }

    document.title = title;
    const metaTag = document.querySelector('meta[name="description"]');
    if (metaTag) {
      metaTag.setAttribute('content', metaDesc);
    }
  }, [currentRoute]);

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
        // Redirect /campaigns to /services
        window.history.replaceState({}, '', '/services');
        return <ServicesPage setCurrentRoute={navigateTo} onOpenRegister={() => setRegisterOpen(true)} />;
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
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175] flex flex-col font-sans selection:bg-[#1554B8] selection:text-white">
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

      {/* Register / Consultation Modal */}
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
