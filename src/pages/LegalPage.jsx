import React, { useState } from 'react';
import { ShieldCheck, FileText, RefreshCw, ChevronDown } from 'lucide-react';
import { faqList, siteConfig } from '../data/websiteData';

export default function LegalPage({ type = 'privacy', setCurrentRoute }) {
  const [openFaq, setOpenFaq] = useState(0);

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (type === 'faq') {
    return (
      <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">KNOWLEDGE BASE</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-2">Frequently Asked Questions</h1>
            <p className="text-sm text-slate-600 mt-2">Find answers about our lead generation services, pricing, and execution.</p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition border ${
                    isOpen ? 'bg-white border-[#005A9C] shadow-md ring-1 ring-[#005A9C]/20' : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-sm sm:text-base text-slate-900">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#005A9C] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms & Conditions',
          subtitle: 'Last updated: January 2026',
          icon: <FileText className="w-8 h-8 text-[#005A9C]" />,
          sections: [
            {
              heading: '1. Services & Agreements',
              text: 'By accessing or utilizing services provided by VentureRise (venturerise.com), you agree to comply with and be bound by the terms detailed herein. VentureRise provides performance marketing, lead generation, website development, and advisory services for commercial and individual clients.'
            },
            {
              heading: '2. Client Deliverables & Campaign Budgets',
              text: 'Clients are responsible for timely provision of creative approvals, website access, and dedicated ad spend budgets. Third-party ad fees (payable to Google, Meta, or LinkedIn) are strictly managed transparently within client billing accounts or as pre-agreed in packaged tiers.'
            },
            {
              heading: '3. Intellectual Property Ownership',
              text: 'Upon full payment for services rendered, clients retain full ownership of all custom landing pages, copy, and ad creatives designed on their behalf. VentureRise retains ownership of proprietary internal campaign architecture and algorithms.'
            },
            {
              heading: '4. Limitation of Liability',
              text: 'While VentureRise applies industry-leading techniques and optimization strategies to maximize conversion and qualified lead volume, marketplace conditions and third-party advertising network policy changes are outside of our direct control.'
            }
          ]
        };
      case 'refund':
        return {
          title: 'Refund & Cancellation Policy',
          subtitle: 'Transparent & Customer Friendly',
          icon: <RefreshCw className="w-8 h-8 text-[#005A9C]" />,
          sections: [
            {
              heading: '1. Starter & Trial Packages',
              text: 'If a client purchases our Starter or Trial package and VentureRise has not commenced campaign setup or creative drafting within 72 hours of onboarding, a 100% full refund is issued upon written request.'
            },
            {
              heading: '2. Active Advertising & Ad Spend',
              text: 'Once advertising budgets have been deployed directly onto third-party ad networks (Meta, Google, LinkedIn) or custom assets have been produced, ad network spend cannot be refunded as it has been disbursed to the respective network.'
            },
            {
              heading: '3. Cancellation of Monthly Retainers',
              text: 'Monthly retainer clients may cancel ongoing campaign management at any time with a 14-day notice prior to the next billing cycle. No long-term lock-in contracts are enforced.'
            }
          ]
        };
      case 'privacy':
      default:
        return {
          title: 'Privacy Policy',
          subtitle: 'Your Data Protection & Privacy',
          icon: <ShieldCheck className="w-8 h-8 text-[#005A9C]" />,
          sections: [
            {
              heading: '1. Information We Collect',
              text: 'VentureRise collects information submitted voluntarily through our lead generation forms, contact requests, and chat inquiries (including Name, Phone Number, Email, Business Name, and Service Requirements) solely to provide requested services and marketing communications.'
            },
            {
              heading: '2. Use of Information',
              text: 'We use your information to coordinate campaign onboarding, share weekly performance audits, dispatch WhatsApp notification alerts, and deliver requested digital marketing estimates. We do not sell, rent, or trade client data to third parties.'
            },
            {
              heading: '3. Data Security & Storage',
              text: 'We apply industry-standard SSL encryption and secure cloud infrastructure to safeguard your information against unauthorized access, disclosure, or misuse.'
            },
            {
              heading: '4. Contact Regarding Privacy',
              text: `If you have questions or wish to request data modification or deletion, please contact us anytime at ${siteConfig.email} or by calling ${siteConfig.phone}.`
            }
          ]
        };
    }
  };

  const content = getContent();

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200/90 shadow-xl">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-200">
            <div className="p-3.5 rounded-2xl bg-[#E1EEF8] border border-[#C2DCF1]">
              {content.icon}
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900">{content.title}</h1>
              <p className="text-xs text-[#005A9C] font-semibold mt-0.5">{content.subtitle}</p>
            </div>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">{sec.heading}</h3>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 flex flex-wrap gap-4 justify-between items-center text-xs">
            <span className="text-slate-500">VentureRise India • Ahmedabad, Gujarat</span>
            <button
              onClick={() => nav('/contact')}
              className="text-[#005A9C] hover:text-[#004A82] font-bold"
            >
              Contact Support →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
