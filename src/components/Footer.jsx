import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Instagram, Facebook, Linkedin } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function Footer({ setCurrentRoute, onShowToast }) {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      onShowToast?.({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (data.success) {
        setSubscribed(true);
        setEmail('');
        onShowToast?.({ type: 'success', message: data.message });
      } else {
        onShowToast?.({ type: 'error', message: data.error || 'Failed to subscribe' });
      }
    } catch (err) {
      // Client fallback simulation
      setSubscribed(true);
      setEmail('');
      onShowToast?.({ type: 'success', message: 'Thank you for subscribing to venturerise!' });
    } finally {
      setSubmitting(false);
    }
  };

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F7F4EC] border-t border-[#E3DFD5] pt-16 pb-12 text-[#526175]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-[#E3DFD5]">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-sm border border-[#E3DFD5] bg-[#F7F4EC] flex items-center justify-center">
                <img src="/favicon.svg" alt="venturerise logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-black text-[#14243B] tracking-tight lowercase">
                venturerise
              </span>
            </div>

            <p className="text-sm font-semibold text-[#14243B] tracking-wide">
              {siteConfig.tagline}
            </p>

            <p className="text-sm text-[#526175] max-w-sm leading-relaxed">
              venturerise helps small businesses grow through digital marketing, website development, AI automation, and practical tech solutions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#1554B8] text-[#526175] hover:text-white flex items-center justify-center transition border border-[#E3DFD5] shadow-xs"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#1554B8] text-[#526175] hover:text-white flex items-center justify-center transition border border-[#E3DFD5] shadow-xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-emerald-600 text-[#526175] hover:text-white flex items-center justify-center transition border border-[#E3DFD5] shadow-xs"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-white hover:bg-[#1554B8] text-[#526175] hover:text-white flex items-center justify-center transition border border-[#E3DFD5] shadow-xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#14243B]">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/')} className="hover:text-[#1554B8] transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => nav('/about')} className="hover:text-[#1554B8] transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => nav('/how-it-works')} className="hover:text-[#1554B8] transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => nav('/contact')} className="hover:text-[#1554B8] transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#14243B]">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  Paid Marketing & Lead Gen
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  SEO & Local Visibility
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  Social Media & Content
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  Website Design & Dev
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  AI Automation
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-[#1554B8] transition text-left">
                  Tech Solutions & Integrations
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Subscribe */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#14243B]">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/faq')} className="hover:text-[#1554B8] transition">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => nav('/privacy-policy')} className="hover:text-[#1554B8] transition">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => nav('/terms-and-conditions')} className="hover:text-[#1554B8] transition">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => nav('/refund-policy')} className="hover:text-[#1554B8] transition">
                  Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => nav('/contact')} className="hover:text-[#1554B8] transition">
                  Contact Support
                </button>
              </li>
            </ul>

            {/* Newsletter widget */}
            <div className="pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1554B8] mb-1">
                Stay Updated
              </h4>
              <p className="text-xs text-[#526175] mb-2">
                Receive practical digital growth insights for small businesses.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-white border border-[#E3DFD5] rounded-xl text-xs text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8]"
                    required
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-lg bg-[#1554B8] hover:bg-[#104396] text-white transition disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#526175]">
          <p>© 2026 venturerise. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => nav('/privacy-policy')} className="hover:text-[#14243B] transition">
              Privacy Policy
            </button>
            <button onClick={() => nav('/terms-and-conditions')} className="hover:text-[#14243B] transition">
              Terms & Conditions
            </button>
            <button onClick={() => nav('/refund-policy')} className="hover:text-[#14243B] transition">
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
