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
      <div className="min-h-screen bg-[#F7F4EC] text-[#526175] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1554B8]">HELP & GUIDANCE</span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#14243B] mt-2">Frequently Asked Questions</h1>
            <p className="text-sm text-[#526175] mt-2">Find clear answers about our services, working process, and project scopes.</p>
          </div>

          <div className="space-y-4">
            {faqList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl transition border ${
                    isOpen ? 'bg-[#F7F4EC] border-[#1554B8]/40 shadow-xs' : 'bg-white border-[#E3DFD5] hover:border-slate-300 shadow-xs'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-sm sm:text-base text-[#14243B]">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#1554B8] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#526175] leading-relaxed border-t border-[#E3DFD5]/60">
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
          icon: <FileText className="w-8 h-8 text-[#1554B8]" />,
          sections: [
            {
              heading: '1. Services & Agreements',
              text: 'By accessing or utilizing services provided by venturerise, you agree to comply with and be bound by the terms detailed herein. venturerise provides digital marketing, website development, AI automation, and technology integration services for small businesses and commercial clients.'
            },
            {
              heading: '2. Client Deliverables & Campaign Budgets',
              text: 'Clients are responsible for timely provision of necessary text content, approvals, and dedicated ad spend budgets. Third-party advertising platform fees (payable to Google, Meta, or other ad networks) and software subscription fees remain separate and are managed transparently within client billing accounts.'
            },
            {
              heading: '3. Intellectual Property Ownership',
              text: 'Upon full payment for services rendered, clients retain ownership of custom landing pages, copy, website designs, and assets created specifically on their behalf.'
            },
            {
              heading: '4. Limitation of Liability',
              text: 'While venturerise applies thoughtful strategies and industry best practices to improve visibility and simplify operations, external marketplace conditions, search algorithm adjustments, and third-party platform policy changes remain outside of our direct control.'
            }
          ]
        };
      case 'refund':
        return {
          title: 'Refund & Cancellation Policy',
          subtitle: 'Transparent & Customer Friendly',
          icon: <RefreshCw className="w-8 h-8 text-[#1554B8]" />,
          sections: [
            {
              heading: '1. Starter & Trial Packages',
              text: 'If a client purchases our Starter or Trial package and venturerise has not commenced project setup or creative drafting within 72 hours of onboarding, a 100% full refund is issued upon written request.'
            },
            {
              heading: '2. Active Advertising & Third-Party Spend',
              text: 'Once advertising budgets have been deployed directly onto third-party ad networks (Meta, Google) or custom design assets have been produced, external ad network spend cannot be refunded as it has been disbursed to the respective network.'
            },
            {
              heading: '3. Cancellation of Ongoing Services',
              text: 'Monthly service arrangements may be cancelled at any time with a 14-day notice prior to the next billing cycle. We do not enforce unnecessary long-term lock-in contracts.'
            }
          ]
        };
      case 'privacy':
      default:
        return {
          title: 'Privacy Policy',
          subtitle: 'Your Data Protection & Privacy',
          icon: <ShieldCheck className="w-8 h-8 text-[#1554B8]" />,
          sections: [
            {
              heading: '1. Information We Collect',
              text: 'venturerise collects information submitted voluntarily through our enquiry forms and contact requests (including Name, Phone Number, Email, Business Name, and Service Requirements) solely to provide requested services and project communications.'
            },
            {
              heading: '2. Use of Information',
              text: 'We use your information to coordinate project onboarding, share updates, answer questions, and deliver requested estimates. We do not sell, rent, or trade client information to third parties.'
            },
            {
              heading: '3. Data Security & Storage',
              text: 'We apply standard security protocols and secure cloud infrastructure to safeguard your information against unauthorized access, disclosure, or misuse.'
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
    <div className="min-h-screen bg-[#F7F4EC] text-[#526175] py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E3DFD5] shadow-xs">
          <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#E3DFD5]">
            <div className="p-3.5 rounded-2xl bg-[#EAF1FC] border border-[#D5E4F9]">
              {content.icon}
            </div>
            <div>
              <h1 className="text-3xl font-black text-[#14243B]">{content.title}</h1>
              <p className="text-xs text-[#1554B8] font-semibold mt-0.5">{content.subtitle}</p>
            </div>
          </div>

          <div className="space-y-8 text-xs sm:text-sm text-[#526175] leading-relaxed">
            {content.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-[#14243B]">{sec.heading}</h3>
                <p>{sec.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-6 border-t border-[#E3DFD5] flex flex-wrap gap-4 justify-between items-center text-xs">
            <span className="text-[#526175]">venturerise • Ahmedabad, Gujarat</span>
            <button
              onClick={() => nav('/contact')}
              className="text-[#1554B8] hover:underline font-bold"
            >
              Contact Us →
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
