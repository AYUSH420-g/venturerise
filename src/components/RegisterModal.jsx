import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function RegisterModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: 'Small Business',
    serviceInterest: 'Digital Marketing & Lead Generation'
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
          service: form.serviceInterest,
          budget: 'Project Registration',
          message: `Onboarding request for ${form.businessType}. Service interest: ${form.serviceInterest}`
        })
      });
    } catch (e) {
      // client fallback
    } finally {
      setSubmitting(false);
    }

    const waText = encodeURIComponent(
      `Hello venturerise,\nName: ${form.name}\nPhone: ${form.phone}\nBusiness: ${form.businessType}\nInterest: ${form.serviceInterest}`
    );
    window.open(`https://wa.me/918780788923?text=${waText}`, '_blank');

    onShowToast?.({ type: 'success', message: 'Registration submitted! Opening WhatsApp...' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-[#14243B]/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-[#E3DFD5] rounded-3xl p-6 sm:p-8 shadow-xl text-[#526175]">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-[#526175] hover:text-[#14243B] hover:bg-[#F7F4EC] transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Project Registration</span>
          </div>
          <h3 className="text-2xl font-black text-[#14243B]">
            Connect with <span className="text-[#1554B8]">venturerise</span>
          </h3>
          <p className="text-xs text-[#526175] mt-1">
            Share your project focus and discuss a practical way forward with our team.
          </p>
        </div>

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-[#14243B] font-semibold mb-1">Your Full Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Rahul Sharma"
              className="w-full px-4 py-2.5 bg-[#F7F4EC] border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#14243B] font-semibold mb-1">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 87807 88923"
                className="w-full px-4 py-2.5 bg-[#F7F4EC] border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8]"
              />
            </div>
            <div>
              <label className="block text-[#14243B] font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                className="w-full px-4 py-2.5 bg-[#F7F4EC] border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[#14243B] font-semibold mb-1">Business Type</label>
              <select
                value={form.businessType}
                onChange={(e) => setForm({ ...form, businessType: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#F7F4EC] border border-[#E3DFD5] rounded-xl text-[#14243B] focus:outline-none focus:border-[#1554B8]"
              >
                <option value="Small Business">Small Business</option>
                <option value="Local Service">Local Service</option>
                <option value="Professional Practice">Professional Practice</option>
                <option value="Trade & Retail">Trade & Retail</option>
                <option value="Online Business">Online Business</option>
                <option value="Other">Other Business</option>
              </select>
            </div>

            <div>
              <label className="block text-[#14243B] font-semibold mb-1">Service Interest</label>
              <select
                value={form.serviceInterest}
                onChange={(e) => setForm({ ...form, serviceInterest: e.target.value })}
                className="w-full px-4 py-2.5 bg-[#F7F4EC] border border-[#E3DFD5] rounded-xl text-[#14243B] focus:outline-none focus:border-[#1554B8]"
              >
                <option value="Digital Marketing & Lead Generation">Digital Marketing & Lead Gen</option>
                <option value="SEO & Local Visibility">SEO & Local Visibility</option>
                <option value="Website Design & Development">Website Design & Dev</option>
                <option value="AI Automation">AI Automation</option>
                <option value="Tech Solutions & Integrations">Tech Solutions & Integrations</option>
                <option value="General Guidance">General Guidance</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="w-full py-3.5 rounded-xl text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0 mt-2 disabled:opacity-50"
          >
            <span>Confirm on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-4 pt-4 border-t border-[#E3DFD5] flex items-center justify-center gap-6 text-[11px] text-[#526175]">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            100% Privacy
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#1554B8]" />
            Practical Scope
          </span>
        </div>

      </div>
    </div>
  );
}
