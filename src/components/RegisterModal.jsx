import React, { useState } from 'react';
import { X, Send, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function RegisterModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Local Business',
    targetLeads: '50-100 leads/mo'
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      onShowToast?.({ type: 'error', message: 'Name and Phone Number are required.' });
      return;
    }

    setSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          service: `Onboarding Registration - ${form.businessType}`,
          budget: form.targetLeads,
          message: `Onboarding request for ${form.businessType}. Target lead volume: ${form.targetLeads}`
        })
      });
    } catch (e) {
      // client fallback
    } finally {
      setSubmitting(false);
    }

    // Direct WhatsApp redirect
    const waText = encodeURIComponent(
      `Hello Digital Rise Team, I want to Register Now!\nName: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.businessType}\nGoal: ${form.targetLeads}`
    );
    window.open(`https://wa.me/918780788923?text=${waText}`, '_blank');

    onShowToast?.({ type: 'success', message: 'Registration submitted! Opening WhatsApp...' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Track Onboarding</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            Register with <span className="text-rose-500">DIGITAL RISE</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Connect with our growth strategist and launch your lead pipeline in 48 hours.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
            </div>
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Business Category</label>
              <select
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500"
              >
                <option value="Real Estate">Real Estate</option>
                <option value="Education & Coaching">Education & Coaching</option>
                <option value="Healthcare & Clinic">Healthcare & Clinic</option>
                <option value="B2B / SaaS">B2B / SaaS</option>
                <option value="E-Commerce / D2C">E-Commerce / D2C</option>
                <option value="Local Business">Local Business</option>
                <option value="Other">Other Category</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Target Monthly Leads</label>
              <select
                value={form.targetLeads}
                onChange={(e) => setForm({ ...form, targetLeads: e.target.value })}
                className="w-full px-4 py-2.5 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500"
              >
                <option value="50-100 leads/mo">50 – 100 leads/mo</option>
                <option value="100-300 leads/mo">100 – 300 leads/mo</option>
                <option value="300-800 leads/mo">300 – 800 leads/mo</option>
                <option value="1000+ leads/mo">1,000+ leads/mo</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
          >
            <span>Proceed to WhatsApp Confirmation</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-center gap-6 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            100% Privacy
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-rose-400" />
            No Long-Term Lock-in
          </span>
        </div>

      </div>
    </div>
  );
}
