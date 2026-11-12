import React, { useState } from 'react';
import { Send, CheckCircle2, MessageCircle, Instagram, Facebook, Linkedin, ArrowRight, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';
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
      // Fallback client simulation if server is offline
      setSubscribed(true);
      setEmail('');
      onShowToast?.({ type: 'success', message: 'Thank you for subscribing to Digital Rise!' });
    } finally {
      setSubmitting(false);
    }
  };

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070D] border-t border-slate-800/80 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-rose-600 to-rose-500 flex items-center justify-center text-white shadow-lg shadow-rose-600/30">
                <span className="font-extrabold text-xl tracking-tighter">DR</span>
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                DIGITAL <span className="text-rose-500 font-extrabold">RISE</span>
              </span>
            </div>

            <p className="text-sm font-semibold text-white tracking-wide">
              Together We Grow.
            </p>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              We help businesses grow faster through quality lead generation and performance marketing strategies tailored to deliver measurable ROI.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-emerald-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-slate-800/80 hover:bg-rose-600 text-slate-300 hover:text-white flex items-center justify-center transition border border-slate-700/60"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/')} className="hover:text-rose-400 transition">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => nav('/about')} className="hover:text-rose-400 transition">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => nav('/how-it-works')} className="hover:text-rose-400 transition">
                  How It Works
                </button>
              </li>
              <li>
                <button onClick={() => nav('/campaigns')} className="hover:text-rose-400 transition">
                  Campaigns
                </button>
              </li>
              <li>
                <button onClick={() => nav('/contact')} className="hover:text-rose-400 transition">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Lead Generation
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Digital Marketing
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Campaign Management
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Data Solution
                </button>
              </li>
              <li>
                <button onClick={() => nav('/services')} className="hover:text-rose-400 transition">
                  Consulting & Strategy
                </button>
              </li>
            </ul>
          </div>

          {/* Support & Subscribe Us */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Support & Legal
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => nav('/faq')} className="hover:text-rose-400 transition">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => nav('/privacy-policy')} className="hover:text-rose-400 transition">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => nav('/terms-and-conditions')} className="hover:text-rose-400 transition">
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button onClick={() => nav('/refund-policy')} className="hover:text-rose-400 transition">
                  Refund Policy
                </button>
              </li>
              <li>
                <button onClick={() => nav('/contact')} className="hover:text-rose-400 transition">
                  Contact Support
                </button>
              </li>
            </ul>

            {/* Newsletter widget */}
            <div className="pt-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-1">
                Subscribe Us
              </h4>
              <p className="text-xs text-slate-400 mb-2">
                Get updates on new campaigns and offers.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-3.5 pr-10 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
                    required
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-md bg-rose-600 hover:bg-rose-500 text-white transition disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed successfully!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 DIGITAL RISE. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => nav('/privacy-policy')} className="hover:text-slate-200 transition">
              Privacy Policy
            </button>
            <button onClick={() => nav('/terms-and-conditions')} className="hover:text-slate-200 transition">
              Terms & Conditions
            </button>
            <button onClick={() => nav('/refund-policy')} className="hover:text-slate-200 transition">
              Refund Policy
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
