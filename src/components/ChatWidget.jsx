import React, { useState } from 'react';
import { Send, X, ChevronRight, ArrowLeft, Phone, Mail } from 'lucide-react';
import { siteConfig, pricingPlans } from '../data/websiteData';

export default function ChatWidget({ onShowToast, setCurrentRoute }) {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState('menu'); // 'menu' | 'plans' | 'plan-enquiry' | 'lead-gen' | 'contact'
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    setView('plan-enquiry');
  };

  const handleSubmitPlanEnquiry = async (e) => {
    e.preventDefault();
    if (!enquiryForm.name || !enquiryForm.phone) {
      onShowToast?.({ type: 'error', message: 'Please provide at least your Name and Phone.' });
      return;
    }

    setSubmitting(true);
    try {
      await fetch('/api/chat-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: enquiryForm.name,
          phone: enquiryForm.phone,
          email: enquiryForm.email,
          plan: selectedPlan ? `${selectedPlan.name} Plan (${selectedPlan.price})` : 'General Plan'
        })
      });
    } catch (e) {
      // client continue
    } finally {
      setSubmitting(false);
    }

    // Format WhatsApp message
    const textMsg = encodeURIComponent(
      `Hello Khushbu, I am interested in the ${selectedPlan?.name || 'Selected'} Plan (${selectedPlan?.price || ''}).\nName: ${enquiryForm.name}\nContact: ${enquiryForm.phone}\nEmail: ${enquiryForm.email || 'N/A'}`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');

    onShowToast?.({ type: 'success', message: 'Enquiry submitted! Opening WhatsApp...' });
    setEnquiryForm({ name: '', phone: '', email: '' });
    setView('menu');
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[999] flex h-14 w-14 items-center justify-center rounded-full bg-[#005A9C] text-white shadow-2xl transition hover:scale-105 hover:bg-[#004A82] active:scale-95 group shadow-[#005A9C]/40"
        aria-label="Toggle Live Chat Support"
      >
        {isOpen ? (
          <X className="w-6 h-6 transition-transform rotate-0 group-hover:rotate-90" />
        ) : (
          <Send className="w-5 h-5 -rotate-45 ml-0.5" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-[999] w-[calc(100vw-2rem)] sm:w-96 max-h-[580px] bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-fadeIn">
          
          {/* Header */}
          <div className="bg-[#005A9C] p-4 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center font-bold text-lg text-white">
                  K
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-[#005A9C] rounded-full"></span>
              </div>
              <div>
                <h4 className="font-bold text-sm tracking-wide">Khushbu Patel</h4>
                <div className="flex items-center gap-1.5 text-xs text-blue-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Online • Digital Rise Support</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/15 transition text-white"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-[#F8F9FA] text-sm">
            
            {/* Bot message greeting */}
            <div className="flex items-start gap-2">
              <div className="w-7 h-7 rounded-full bg-[#E1EEF8] text-[#005A9C] border border-[#C2DCF1] flex items-center justify-center text-xs font-bold shrink-0">
                K
              </div>
              <div className="space-y-1">
                <div className="bg-white text-slate-800 p-3.5 rounded-2xl rounded-tl-sm text-xs leading-relaxed max-w-[280px] border border-slate-200 shadow-sm">
                  Hello! 👋 Welcome to <strong className="text-[#005A9C]">DIGITAL RISE</strong>.
                  <br />
                  How can we help scale your business today?
                </div>
                <span className="text-[10px] text-slate-400 ml-1">Just now</span>
              </div>
            </div>

            {/* View: Main Menu */}
            {view === 'menu' && (
              <div className="space-y-2 pt-1 animate-fadeIn">
                <p className="text-xs font-semibold text-slate-600">Choose an option:</p>

                <button
                  onClick={() => setView('plans')}
                  className="w-full text-left p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#005A9C] shadow-sm transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">💰</span>
                    <div>
                      <p className="font-semibold text-xs text-slate-900 group-hover:text-[#005A9C] transition">Plans & Pricing</p>
                      <p className="text-[11px] text-slate-500">View our transparent packages</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] transition" />
                </button>

                <button
                  onClick={() => setView('lead-gen')}
                  className="w-full text-left p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#005A9C] shadow-sm transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🚀</span>
                    <div>
                      <p className="font-semibold text-xs text-slate-900 group-hover:text-[#005A9C] transition">Lead Generation</p>
                      <p className="text-[11px] text-slate-500">Generate qualified sales leads</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] transition" />
                </button>

                <button
                  onClick={() => {
                    setCurrentRoute?.('/services');
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#005A9C] shadow-sm transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🛠️</span>
                    <div>
                      <p className="font-semibold text-xs text-slate-900 group-hover:text-[#005A9C] transition">Our Services</p>
                      <p className="text-[11px] text-slate-500">Explore our digital services</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] transition" />
                </button>

                <button
                  onClick={() => {
                    setCurrentRoute?.('/how-it-works');
                    setIsOpen(false);
                  }}
                  className="w-full text-left p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#005A9C] shadow-sm transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">⚙️</span>
                    <div>
                      <p className="font-semibold text-xs text-slate-900 group-hover:text-[#005A9C] transition">How It Works</p>
                      <p className="text-[11px] text-slate-500">Know our working process</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] transition" />
                </button>

                <button
                  onClick={() => setView('contact')}
                  className="w-full text-left p-3 rounded-2xl bg-white hover:bg-slate-50 border border-slate-200 hover:border-[#005A9C] shadow-sm transition flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">📞</span>
                    <div>
                      <p className="font-semibold text-xs text-slate-900 group-hover:text-[#005A9C] transition">Contact Us</p>
                      <p className="text-[11px] text-slate-500">Get in touch with our team</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#005A9C] transition" />
                </button>
              </div>
            )}

            {/* View: Plans */}
            {view === 'plans' && (
              <div className="space-y-2 pt-1 animate-fadeIn">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>💰</span> Available Plans
                  </span>
                  <button
                    onClick={() => setView('menu')}
                    className="text-xs text-[#005A9C] hover:underline flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {pricingPlans.map((plan) => (
                    <button
                      key={plan.name}
                      onClick={() => handleSelectPlan(plan)}
                      className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] text-left transition shadow-sm group"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold text-xs text-slate-900 group-hover:text-[#005A9C]">{plan.name}</span>
                        {plan.popular && (
                          <span className="text-[9px] px-1.5 py-0.5 bg-[#005A9C] text-white rounded font-bold">HOT</span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500">Click to enquire</p>
                      <p className="text-xs font-black text-[#005A9C] mt-1">{plan.price}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* View: Plan Enquiry Form */}
            {view === 'plan-enquiry' && (
              <div className="space-y-3 pt-1 animate-fadeIn">
                <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                  <div>
                    <span className="text-xs font-bold text-slate-900">
                      {selectedPlan?.name} Plan
                    </span>
                    <span className="text-xs font-black text-[#005A9C] ml-2">
                      {selectedPlan?.price}
                    </span>
                  </div>
                  <button
                    onClick={() => setView('plans')}
                    className="text-xs text-[#005A9C] hover:underline flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Change
                  </button>
                </div>

                <form onSubmit={handleSubmitPlanEnquiry} className="space-y-2">
                  <div>
                    <label className="text-[11px] text-slate-700 block mb-1">👤 Full Name *</label>
                    <input
                      type="text"
                      required
                      value={enquiryForm.name}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 block mb-1">📞 Contact Number *</label>
                    <input
                      type="tel"
                      required
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      placeholder="+91 87807 88923"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C]"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] text-slate-700 block mb-1">📧 Email ID (Optional)</label>
                    <input
                      type="email"
                      value={enquiryForm.email}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-3 py-2 bg-white border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-2.5 rounded-xl text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] transition shadow-md shadow-[#005A9C]/25 flex items-center justify-center gap-1.5 mt-2"
                  >
                    <span>Submit Enquiry on WhatsApp</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>
            )}

            {/* View: Lead Gen flow */}
            {view === 'lead-gen' && (
              <div className="space-y-2 pt-1 animate-fadeIn">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>🚀</span> Lead Generation
                  </span>
                  <button
                    onClick={() => setView('menu')}
                    className="text-xs text-[#005A9C] hover:underline flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setCurrentRoute?.('/contact');
                      setIsOpen(false);
                    }}
                    className="w-full p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] text-left text-xs text-slate-800 hover:text-[#005A9C] shadow-sm flex items-center justify-between"
                  >
                    <span>📈 I Want More Leads</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => {
                      setCurrentRoute?.('/services');
                      setIsOpen(false);
                    }}
                    className="w-full p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] text-left text-xs text-slate-800 hover:text-[#005A9C] shadow-sm flex items-center justify-between"
                  >
                    <span>📱 Facebook & Instagram Ads</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => {
                      setCurrentRoute?.('/services');
                      setIsOpen(false);
                    }}
                    className="w-full p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] text-left text-xs text-slate-800 hover:text-[#005A9C] shadow-sm flex items-center justify-between"
                  >
                    <span>🔎 Google Ads</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full p-3 rounded-2xl bg-[#E1EEF8] border border-[#C2DCF1] text-left text-xs text-[#005A9C] font-semibold flex items-center justify-between block hover:bg-[#C2DCF1]/50"
                  >
                    <span>👩‍💼 Talk to Expert on WhatsApp</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#005A9C]" />
                  </a>
                </div>
              </div>
            )}

            {/* View: Contact Direct */}
            {view === 'contact' && (
              <div className="space-y-2.5 pt-1 animate-fadeIn">
                <div className="flex items-center justify-between pb-1">
                  <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <span>📞</span> Direct Support
                  </span>
                  <button
                    onClick={() => setView('menu')}
                    className="text-xs text-[#005A9C] hover:underline flex items-center gap-1"
                  >
                    <ArrowLeft className="w-3 h-3" /> Back
                  </button>
                </div>

                <div className="space-y-2">
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] flex items-center gap-3 text-left transition shadow-sm block"
                  >
                    <div className="w-8 h-8 rounded-xl bg-[#E1EEF8] text-[#005A9C] flex items-center justify-center">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Call Team</p>
                      <p className="text-[11px] text-slate-500">{siteConfig.phone}</p>
                    </div>
                  </a>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-emerald-600 flex items-center gap-3 text-left transition shadow-sm block"
                  >
                    <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Send className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">WhatsApp Chat</p>
                      <p className="text-[11px] text-slate-500">Instant reply online</p>
                    </div>
                  </a>

                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-[#005A9C] flex items-center gap-3 text-left transition shadow-sm block"
                  >
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#005A9C] flex items-center justify-center">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Email Us</p>
                      <p className="text-[11px] text-slate-500">{siteConfig.email}</p>
                    </div>
                  </a>
                </div>
              </div>
            )}

          </div>

          {/* Quick Chat Footer Bar */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
            <span>Powered by Digital Rise India</span>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="text-[#005A9C] hover:underline font-semibold"
            >
              Open WhatsApp
            </a>
          </div>

        </div>
      )}
    </>
  );
}
