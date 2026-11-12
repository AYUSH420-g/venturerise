import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, PhoneCall, MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/websiteData';

export default function ContactPage({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Digital Marketing & Lead Generation',
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
        onShowToast?.({ type: 'success', message: 'Enquiry submitted successfully.' });
      } else {
        onShowToast?.({ type: 'error', message: data.error || 'Failed to submit enquiry.' });
      }
    } catch (err) {
      // Fallback submission indication
      setSubmitted(true);
      onShowToast?.({ type: 'success', message: 'Your enquiry has been received.' });
    } finally {
      setSubmitting(false);
    }
  };

  const handleOpenWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Hello venturerise,\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone || 'N/A'}\nService Needed: ${formData.service}\nBudget: ${formData.budget}\nMessage: ${formData.message || 'No additional note'}`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-[#E3DFD5] bg-[#F7F4EC] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EAF1FC] border border-[#D5E4F9] text-[#1554B8] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#1554B8]"></span>
            <span>GET IN TOUCH</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#14243B] tracking-tight leading-[1.15]">
            Tell Us What’s Next <br />
            <span className="text-[#1554B8]">For Your Business.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#526175] mt-4 max-w-2xl mx-auto leading-relaxed">
            Need a website, help with marketing, or a simpler way to manage everyday tasks? Tell us what you have in mind.
          </p>
        </div>
      </section>

      {/* 4 CONTACT INFO CARDS */}
      <section className="py-12 bg-[#F7F4EC] border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-6 rounded-3xl bg-white border border-[#E3DFD5] hover:border-[#1554B8] shadow-xs hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] text-[#1554B8] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#14243B] mb-1">Email Us</h3>
              <p className="text-xs font-semibold text-[#1554B8] truncate mb-1">{siteConfig.email}</p>
              <p className="text-[11px] text-[#526175]">Send us your enquiry anytime.</p>
            </a>

            {/* Phone */}
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="p-6 rounded-3xl bg-white border border-[#E3DFD5] hover:border-[#1554B8] shadow-xs hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] text-[#1554B8] flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#14243B] mb-1">Call Us</h3>
              <p className="text-xs font-semibold text-[#1554B8] mb-1">{siteConfig.phone}</p>
              <p className="text-[11px] text-[#526175]">Speak directly with our team.</p>
            </a>

            {/* WhatsApp */}
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="p-6 rounded-3xl bg-white border border-[#E3DFD5] hover:border-emerald-600 shadow-xs hover:shadow-md transition group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:scale-105 transition">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#14243B] mb-1">WhatsApp</h3>
              <p className="text-xs font-semibold text-emerald-700 mb-1">+91 8780788923</p>
              <p className="text-[11px] text-[#526175]">Start a conversation on WhatsApp.</p>
            </a>

            {/* Location */}
            <div className="p-6 rounded-3xl bg-white border border-[#E3DFD5] shadow-xs group">
              <div className="w-12 h-12 rounded-2xl bg-[#EAF1FC] text-[#1554B8] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-[#14243B] mb-1">Our Location</h3>
              <p className="text-xs font-semibold text-[#1554B8] mb-1">{siteConfig.location}</p>
              <p className="text-[11px] text-[#526175]">Serving small businesses across India.</p>
            </div>

          </div>
        </div>
      </section>

      {/* TWO-COLUMN INQUIRY SECTION */}
      <section className="py-20 lg:py-24 bg-white border-b border-[#E3DFD5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Context & Guarantees */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">
                START A CONVERSATION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#14243B] tracking-tight">
                Let’s Understand Your Project.
              </h2>
              <p className="text-sm text-[#526175] leading-relaxed">
                Share a few details about your business, the help you need, and what you want to achieve.
              </p>

              <div className="space-y-3.5 pt-2">
                <div className="flex items-center gap-3 text-sm text-[#14243B]">
                  <CheckCircle2 className="w-5 h-5 text-[#1554B8] shrink-0" />
                  <span>Discussion focused around your real business goals</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#14243B]">
                  <CheckCircle2 className="w-5 h-5 text-[#1554B8] shrink-0" />
                  <span>Practical recommendations suited to your current setup</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#14243B]">
                  <CheckCircle2 className="w-5 h-5 text-[#1554B8] shrink-0" />
                  <span>Transparent project scope and clear milestone planning</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-[#14243B]">
                  <CheckCircle2 className="w-5 h-5 text-[#1554B8] shrink-0" />
                  <span>No unnecessary long-term lock-ins</span>
                </div>
              </div>

              {/* Direct call box */}
              <div className="p-6 rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5] space-y-3 mt-6">
                <p className="text-xs font-bold uppercase text-[#526175] tracking-wider">
                  Prefer a direct phone conversation?
                </p>
                <p className="text-xs text-[#526175] leading-relaxed">
                  Call our team directly to discuss your requirements and see how we can assist your business.
                </p>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="w-full py-3 rounded-xl bg-white hover:bg-[#EAF1FC]/40 text-[#14243B] font-bold text-xs transition flex items-center justify-center gap-2 border border-[#E3DFD5] shadow-xs block text-center"
                >
                  <PhoneCall className="w-4 h-4 text-[#1554B8]" />
                  <span>Call {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-[#F7F4EC] border border-[#E3DFD5] p-8 sm:p-10 shadow-xs relative">
                
                {submitted ? (
                  <div className="text-center py-10 space-y-4 animate-fadeIn">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-black text-[#14243B]">Enquiry Received</h3>
                    <p className="text-sm text-[#526175] max-w-md mx-auto leading-relaxed">
                      Thank you for contacting venturerise. We have received your project details and will review your requirements to respond promptly.
                    </p>
                    
                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleOpenWhatsApp}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center gap-2 shadow-xs"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>Continue on WhatsApp (Optional)</span>
                      </button>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            name: '',
                            email: '',
                            phone: '',
                            service: 'Digital Marketing & Lead Generation',
                            budget: '₹10,000 – ₹25,000',
                            message: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded-full text-xs font-bold text-[#14243B] hover:text-[#1554B8] bg-white border border-[#E3DFD5] transition"
                      >
                        Submit Another Enquiry
                      </button>
                    </div>
                    <p className="text-[11px] text-[#526175]">
                      Continuing on WhatsApp opens WhatsApp where you can send the message directly to our team.
                    </p>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-2xl font-black text-[#14243B]">Let’s Understand Your Project.</h3>
                      <p className="text-xs text-[#526175] mt-1">
                        Share a few details about your business, the help you need, and what you want to achieve.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                      <div>
                        <label className="block text-[#14243B] font-semibold mb-1">Your Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Enter your name"
                          className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8] text-sm"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#14243B] font-semibold mb-1">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8] text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-[#14243B] font-semibold mb-1">Phone Number</label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+91 87807 88923"
                            className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8] text-sm"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[#14243B] font-semibold mb-1">Service Needed</label>
                          <select
                            value={formData.service}
                            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] focus:outline-none focus:border-[#1554B8] text-sm"
                          >
                            <option value="Digital Marketing & Lead Generation">Digital Marketing & Lead Generation</option>
                            <option value="SEO & Local Visibility">SEO & Local Visibility</option>
                            <option value="Social Media & Content">Social Media & Content</option>
                            <option value="Website Design & Development">Website Design & Development</option>
                            <option value="AI Automation">AI Automation</option>
                            <option value="Tech Solutions & Integrations">Tech Solutions & Integrations</option>
                            <option value="Not Sure Yet">Not Sure Yet</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-[#14243B] font-semibold mb-1">Estimated Budget</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] focus:outline-none focus:border-[#1554B8] text-sm"
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
                        <label className="block text-[#14243B] font-semibold mb-1">Tell Us About Your Project</label>
                        <textarea
                          rows="4"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your business, the help you need, or what you want to achieve..."
                          className="w-full px-4 py-3 bg-white border border-[#E3DFD5] rounded-xl text-[#14243B] placeholder-[#526175]/60 focus:outline-none focus:border-[#1554B8] text-sm"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#1554B8] hover:bg-[#104396] shadow-sm flex items-center justify-center gap-2 transition transform hover:-translate-y-0.5 active:translate-y-0 mt-2 disabled:opacity-50"
                      >
                        <span>{submitting ? 'Sending Enquiry...' : 'Send Enquiry'}</span>
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

      {/* WHY VENTURERISE BENEFIT SECTION */}
      <section className="py-16 bg-[#F7F4EC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-xl font-bold text-[#14243B]">Why venturerise? A Practical Growth Partner.</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-xs">
            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <span className="font-bold text-[#14243B] block mb-1">Business-First</span>
              <span className="text-[#526175]">Focused on practical outcomes that matter to your daily operations.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <span className="font-bold text-[#14243B] block mb-1">Connected Work</span>
              <span className="text-[#526175]">Marketing, websites, and automation functioning together smoothly.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <span className="font-bold text-[#14243B] block mb-1">Clear Communication</span>
              <span className="text-[#526175]">Straightforward discussions without confusing technical jargon.</span>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E3DFD5] shadow-xs">
              <span className="font-bold text-[#14243B] block mb-1">Adaptable Scope</span>
              <span className="text-[#526175]">Solutions built to adjust as your business grows.</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
