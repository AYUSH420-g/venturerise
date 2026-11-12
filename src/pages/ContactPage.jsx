import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, PhoneCall, MessageCircle } from 'lucide-react';
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
      `Hello VentureRise Team,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'No additional note'}`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-slate-200/80 bg-white overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#005A9C]"></span>
            <span>LET'S CONNECT</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Let's Build Something <br />
            <span className="bg-gradient-to-r from-[#005A9C] via-[#0072C6] to-[#004A82] bg-clip-text text-transparent">
              That Truly Scales.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            Have a project in mind, need help with your digital marketing, or simply want to explore your options? Let's start a conversation.
          </p>
        </div>
      </section>

      {/* 4 CONTACT INFO CARDS (NO WORKING HOURS) */}
      <section className="py-12 bg-[#F8F9FA] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-[#005A9C] shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#E1EEF8] text-[#005A9C] flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#005A9C] group-hover:text-white transition">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Email Us</h3>
              <p className="text-xs font-semibold text-[#005A9C] truncate mb-1">{siteConfig.email}</p>
              <p className="text-[11px] text-slate-500">Send us your requirements anytime.</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-600 shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Call Us</h3>
              <p className="text-xs font-semibold text-emerald-600 mb-1">{siteConfig.phone}</p>
              <p className="text-[11px] text-slate-500">Talk directly with our team.</p>
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-white border border-slate-200 hover:border-emerald-500 shadow-sm hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">WhatsApp Chat</h3>
              <p className="text-xs font-semibold text-emerald-600 mb-1">+91 8780788923</p>
              <p className="text-[11px] text-slate-500">Instant response on WhatsApp.</p>
            </a>

            {/* Location (Ahmedabad, Gujarat) */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#005A9C] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 mb-1">Our Location</h3>
              <p className="text-xs font-semibold text-[#005A9C] mb-1">{siteConfig.location}</p>
              <p className="text-[11px] text-slate-500">Serving businesses across India & Globally.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN PROJECT INQUIRY SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Guarantees & Call Box */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Tell Us About Your Project.
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Share a few details about your business and what you're looking to achieve. Our team will review your requirements and get back to you promptly.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Free initial consultation & audit</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Customized strategy recommendations</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Transparent communication & metrics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>No unnecessary long-term commitments</span>
                </div>
              </div>

              {/* Direct call box */}
              <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200 space-y-3 mt-6">
                <p className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Prefer a quick conversation?
                </p>
                <p className="text-xs text-slate-600">
                  Give us a direct call and speak with one of our growth strategists right away.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs transition flex items-center justify-center gap-2 border border-slate-300 shadow-sm block text-center hover:border-[#005A9C]"
                >
                  <PhoneCall className="w-4 h-4 text-[#005A9C]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#F8F9FA] border border-slate-200/90 p-8 sm:p-10 shadow-lg relative">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900">Message Sent Successfully!</h3>
                    <p className="text-sm text-slate-600 max-w-md mx-auto">
                      Thank you for reaching out to VentureRise. Our strategy team is reviewing your requirements and will connect with you promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-slate-900">Start Your Project</h3>
                      <p className="text-xs text-slate-500 mt-1">
                        Fill in the form and tell us what you need.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div>
                        <label className="block text-slate-700 font-semibold mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 87807 88923"
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-slate-700 font-semibold mb-1">Service Needed</label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
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
                          <label className="block text-slate-700 font-semibold mb-1">Estimated Budget</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
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
                        <label className="block text-slate-700 font-semibold mb-1">Tell Us About Your Project</label>
                        <textarea
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your business, goals or requirements..."
                          className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#005A9C] focus:ring-1 focus:ring-[#005A9C] text-sm"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0 mt-2"
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

      {/* WHY VENTURERISE - MORE THAN JUST A SERVICE */}
      <section className="py-16 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-slate-900">Why VentureRise? More Than Just A Service.</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">Goal Focused</span>
              <span className="text-slate-500">Everything we do aligns with your targets.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">Custom Strategy</span>
              <span className="text-slate-500">No generic copy-paste templates.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">Dedicated Support</span>
              <span className="text-slate-500">Ongoing guidance every step of the way.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <span className="font-bold text-slate-900 block mb-1">Digital Growth</span>
              <span className="text-slate-500">Building sustainable long-term value.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
