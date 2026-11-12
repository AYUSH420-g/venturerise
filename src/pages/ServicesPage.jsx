import React, { useState } from 'react';
import { 
  ArrowRight, CheckCircle2, Target, BarChart3, 
  Search, Globe, Share2, Palette, Sparkles 
} from 'lucide-react';
import { servicesDetailed, pricingPlans } from '../data/websiteData';

export default function ServicesPage({ setCurrentRoute }) {
  const [selectedService, setSelectedService] = useState(null);

  const nav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getServiceIcon = (id) => {
    switch (id) {
      case 'seo': return <Search className="w-6 h-6 text-[#005A9C]" />;
      case 'performance-marketing': return <BarChart3 className="w-6 h-6 text-[#005A9C]" />;
      case 'social-media': return <Share2 className="w-6 h-6 text-[#005A9C]" />;
      case 'website-dev': return <Globe className="w-6 h-6 text-[#005A9C]" />;
      case 'lead-generation-service': return <Target className="w-6 h-6 text-[#005A9C]" />;
      case 'branding': return <Palette className="w-6 h-6 text-[#005A9C]" />;
      default: return <Sparkles className="w-6 h-6 text-[#005A9C]" />;
    }
  };

  const handleEnquirePlan = (plan) => {
    const textMsg = encodeURIComponent(
      `Hello VentureRise, I would like to enquire about the ${plan.name} Plan (${plan.price}). Please share the onboarding process.`
    );
    window.open(`https://wa.me/918780788923?text=${textMsg}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#0F172A]">
      
      {/* HERO SECTION */}
      <section className="relative pt-14 pb-20 border-b border-slate-200/80 bg-white overflow-hidden text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E1EEF8] border border-[#C2DCF1] text-[#005A9C] text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#005A9C]"></span>
            <span>OUR DIGITAL SERVICES</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15]">
            Digital Solutions <br />
            <span className="bg-gradient-to-r from-[#005A9C] via-[#0072C6] to-[#004A82] bg-clip-text text-transparent">
              Built to Grow.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 mt-4 leading-relaxed max-w-2xl mx-auto">
            From SEO and paid advertising to websites, social media and branding — we create digital solutions designed to attract, engage and convert.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <button
              onClick={() => nav('/contact')}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('services-grid');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-3.5 rounded-full text-sm font-bold text-slate-700 hover:text-slate-900 bg-[#F1F5F9] hover:bg-slate-200 border border-slate-200 transition"
            >
              Explore Services
            </button>
          </div>
        </div>
      </section>

      {/* DETAILED 6-SERVICE GRID */}
      <section id="services-grid" className="py-20 lg:py-24 border-b border-slate-200/80 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              WHAT WE DO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Everything You Need to Grow Online.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              We combine strategy, creativity, technology and data to create digital campaigns that deliver measurable business results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesDetailed.map((svc) => (
              <div
                key={svc.id}
                className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 hover:border-[#005A9C] shadow-sm hover:shadow-xl transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#E1EEF8] border border-[#C2DCF1] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#005A9C] transition">
                      <div className="group-hover:[&>svg]:text-white transition">
                        {getServiceIcon(svc.id)}
                      </div>
                    </div>
                    <span className="text-2xl font-black text-slate-300 font-mono">
                      {svc.num}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#005A9C] transition">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {svc.description}
                  </p>

                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {svc.details}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {svc.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F8F9FA] border border-slate-200 text-slate-600 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => nav('/contact')}
                  className="w-full py-2.5 rounded-xl text-xs font-bold text-[#005A9C] hover:text-white bg-[#E1EEF8]/60 hover:bg-[#005A9C] border border-[#C2DCF1]/60 hover:border-[#005A9C] transition flex items-center justify-center gap-1.5 pt-3"
                >
                  <span>Explore Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE HELP 4-STEP STRATEGY */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              HOW WE HELP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              One Partner. Complete Growth.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our proven process takes your business from strategy to sustainable digital growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200 hover:border-[#005A9C]/40 transition">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-widest block mb-1">STEP 01</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Discover</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We understand your business, target audience, competition and growth goals.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200 hover:border-[#005A9C]/40 transition">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-widest block mb-1">STEP 02</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Strategize</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We create a customized digital strategy built around your objectives.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200 hover:border-[#005A9C]/40 transition">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-widest block mb-1">STEP 03</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Execute</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our team turns strategy into campaigns, content and digital experiences.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F8F9FA] border border-slate-200 hover:border-[#005A9C]/40 transition">
              <span className="text-xs font-bold text-[#005A9C] uppercase tracking-widest block mb-1">STEP 04</span>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Measure & Scale</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                We track important metrics, optimize funnels, and scale winning campaigns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* PACKAGES & PRICING PLANS */}
      <section className="py-20 lg:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#005A9C]">
              TRANSPARENT PACKAGES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Simple, Predictable Growth Plans.
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              No hidden agency markups. Choose the package that matches your current business stage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`p-6 sm:p-7 rounded-3xl bg-white border transition-all duration-300 flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-[#005A9C] shadow-xl shadow-[#005A9C]/10 ring-2 ring-[#005A9C]/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-sm'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-1 rounded-full bg-[#005A9C] text-white text-[10px] font-black uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1">
                      {plan.badge}
                    </span>
                    <h3 className="text-2xl font-black text-slate-900">{plan.name}</h3>
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-3xl font-black text-[#005A9C]">{plan.price}</span>
                      <span className="text-[11px] text-slate-500">/{plan.period}</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-2.5 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#005A9C] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => handleEnquirePlan(plan)}
                  className={`w-full py-3 rounded-xl text-xs font-bold transition flex items-center justify-center gap-1.5 ${
                    plan.popular
                      ? 'bg-[#005A9C] hover:bg-[#004A82] text-white shadow-md shadow-[#005A9C]/25'
                      : 'bg-[#F8F9FA] hover:bg-slate-100 text-slate-800 border border-slate-300'
                  }`}
                >
                  <span>Enquire on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-16 bg-white text-center border-t border-slate-200 space-y-4">
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Need a Custom Solution for Your Brand?
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
          We build customized hybrid marketing funnels and enterprise lead infrastructure.
        </p>
        <button
          onClick={() => nav('/contact')}
          className="px-8 py-3.5 rounded-full text-xs font-bold text-white bg-[#005A9C] hover:bg-[#004A82] shadow-md shadow-[#005A9C]/25 transition inline-flex items-center gap-2"
        >
          <span>Request Custom Proposal</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </section>

    </div>
  );
}
