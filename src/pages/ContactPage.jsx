import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ArrowRight, PhoneCall, Sparkles } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Lead Generation',
    budget: '₹10,000 – ₹25,000',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      onShowToast?.({ type: 'error', message: 'Name and Email are required.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        onShowToast?.({ type: 'success', message: data.message });
      } else {
        onShowToast?.({ type: 'error', message: data.error || 'Failed to submit' });
      }
    } catch (err) {
      // client fallback
      setSubmitted(true);
      onShowToast?.({ type: 'success', message: 'Inquiry received! Opening WhatsApp...' });
    } finally {
      setSubmitting(false);
    }

    // Direct WhatsApp redirect with populated details
    const textMsg = encodeURIComponent(
      `Hello Digital Rise Team,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'No additional note'}`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-16 border-b border-slate-800/80 overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-rose-500"></span>
            <span>LET'S TALK</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-rose-500 via-rose-400 to-amber-300 bg-clip-text text-transparent">
              That Grows.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, need help with your digital marketing, or simply want to explore your options? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* 4 CONTACT INFO CARDS */}
      <section className="py-12 bg-[#080B12] border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition group"
            >
              <div className="w-10 h-10 rounded-xl bg-rose-600/15 text-rose-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Email Us</h3>
              <p className="text-xs font-semibold text-rose-400 truncate mb-1">{siteConfig.email}</p>
              <p className="text-[11px] text-slate-400">Send us your requirements anytime.</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-rose-500/50 transition group"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-600/15 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Call Us</h3>
              <p className="text-xs font-semibold text-emerald-400 mb-1">{siteConfig.phone}</p>
              <p className="text-[11px] text-slate-400">Talk directly with our team.</p>
            </a>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 group">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 text-blue-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Our Location</h3>
              <p className="text-xs font-semibold text-blue-400 mb-1">{siteConfig.location}</p>
              <p className="text-[11px] text-slate-400">Serving businesses across India.</p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 group">
              <div className="w-10 h-10 rounded-xl bg-purple-600/15 text-purple-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Working Hours</h3>
              <p className="text-xs font-semibold text-purple-400 mb-1">{siteConfig.hours}</p>
              <p className="text-[11px] text-slate-400">We're here when you need us.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN PROJECT INQUIRY SECTION */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Guarantees & Call Box */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-rose-500">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Tell Us About Your Project.
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Share a few details about your business and what you're looking to achieve. Our team will review your requirements and get back to you promptly.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Free initial consultation & audit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Customized strategy recommendations</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Transparent communication & metrics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>No unnecessary long-term commitments</span>
                </div>
              </div>

              {/* Direct call box */}
              <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3 mt-6">
                <p className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                  Prefer a quick conversation?
                </p>
                <p className="text-xs text-slate-300">
                  Give us a direct call and speak with one of our lead generation strategists right away.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition flex items-center justify-center gap-2 border border-slate-700 block text-center"
                >
                  <PhoneCall className="w-4 h-4 text-rose-500" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-white">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto">
                      Thank you for reaching out to Digital Rise. Our strategy team is reviewing your requirements and will connect with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-white">Start Your Project</h3>
                      <p className="text-xs text-slate-400 mt-1">
                        Fill in the form and tell us what you need.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 font-semibold mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-300 font-semibold mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-300 font-semibold mb-1">Service Needed</label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500 text-sm"
                          >
                            <option value="Lead Generation">Lead Generation</option>
                            <option value="Digital Marketing">Digital Marketing</option>
                            <option value="SEO">SEO</option>
                            <option value="Google Ads">Google Ads</option>
                            <option value="Meta Ads">Meta Ads</option>
                            <option value="Social Media Marketing">Social Media Marketing</option>
                            <option value="Website Development">Website Development</option>
                            <option value="Branding">Branding</option>
                            <option value="Other">Other Service</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-slate-300 font-semibold mb-1">Estimated Budget</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-rose-500 text-sm"
                          >
                            <option value="Under ₹10,000">Under ₹10,000</option>
                            <option value="₹10,000 – ₹25,000">₹10,000 – ₹25,000</option>
                            <option value="₹25,000 – ₹50,000">₹25,000 – ₹50,000</option>
                            <option value="₹50,000 – ₹1,00,000">₹50,000 – ₹1,00,000</option>
                            <option value="₹1,00,000+">₹1,00,000+</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-slate-300 font-semibold mb-1">Tell Us About Your Project</label>
                        <textarea
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your business, goals or requirements..."
                          className="w-full px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-rose-500 text-sm"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-600 shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
                      >
                        <span>{submitting ? 'Sending Request...' : 'Send Message & Open WhatsApp'}</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WHY DIGITAL RISE - MORE THAN JUST A SERVICE */}
      <section className="py-16 bg-[#080B12] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-white">Why Digital Rise? More Than Just A Service.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="font-bold text-white block mb-1">Goal Focused</span>
              <span className="text-slate-400">Everything we do aligns with your targets.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="font-bold text-white block mb-1">Custom Strategy</span>
              <span className="text-slate-400">No generic copy-paste templates.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="font-bold text-white block mb-1">Dedicated Support</span>
              <span className="text-slate-400">Ongoing guidance every step of the way.</span>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <span className="font-bold text-white block mb-1">Digital Growth</span>
              <span className="text-slate-400">Building sustainable long-term value.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
