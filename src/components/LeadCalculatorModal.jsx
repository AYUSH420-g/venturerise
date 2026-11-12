import React, { useState, useEffect } from 'react';
import { X, Sparkles, TrendingUp, Users, Target, CheckCircle2, ArrowRight } from 'lucide-react';

export default function LeadCalculatorModal({ isOpen, onClose, onSelectPlan }) {
  if (!isOpen) return null;

  const [budget, setBudget] = useState(25000);
  const [industry, setIndustry] = useState('real-estate');
  const [estimate, setEstimate] = useState({
    leads: 138,
    qualified: 58,
    reach: 362500,
    plan: 'Gold Plan (₹19,999)'
  });

  const cplData = {
    'real-estate': { cpl: 180, name: 'Real Estate' },
    'healthcare': { cpl: 95, name: 'Healthcare & Clinics' },
    'education': { cpl: 110, name: 'Education & EdTech' },
    'b2b-saas': { cpl: 260, name: 'B2B / SaaS' },
    'ecommerce': { cpl: 75, name: 'E-Commerce / D2C' },
    'local': { cpl: 130, name: 'Local Business & Services' }
  };

  useEffect(() => {
    const selected = cplData[industry] || cplData['local'];
    const totalLeads = Math.round((budget * 0.8) / selected.cpl);
    const qualified = Math.round(totalLeads * 0.44);
    const reach = Math.round(budget * 14.5);

    let plan = 'Trial (₹4,999)';
    if (budget >= 12000 && budget < 20000) plan = 'Basic (₹11,999)';
    else if (budget >= 20000 && budget < 40000) plan = 'Gold (₹19,999)';
    else if (budget >= 40000) plan = 'Premium (₹24,999)';

    setEstimate({ leads: totalLeads, qualified, reach, plan });
  }, [budget, industry]);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl text-slate-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-600/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Lead Estimator</span>
          </div>
          <h3 className="text-2xl font-black text-white">
            Estimate Your <span className="text-rose-500">Monthly Growth</span>
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            See how many high-intent leads Digital Rise can generate for your ad budget.
          </p>
        </div>

        {/* Industry selector */}
        <div className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-semibold mb-1.5">Select Your Industry</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {Object.entries(cplData).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setIndustry(key)}
                  className={`p-2.5 rounded-xl border text-left transition ${
                    industry === key
                      ? 'bg-rose-600/15 border-rose-500 text-white font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <p className="truncate text-xs">{item.name}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Budget slider */}
          <div className="pt-2">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300 font-semibold">Monthly Marketing Budget:</span>
              <span className="text-base font-black text-rose-400">
                ₹{budget.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min="5000"
              max="200000"
              step="5000"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="w-full accent-rose-500 bg-slate-950 h-2 rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1">
              <span>₹5,000 (Starter)</span>
              <span>₹1,00,000 (Growth)</span>
              <span>₹2,00,000+ (Scale)</span>
            </div>
          </div>

          {/* Computed Results Matrix */}
          <div className="grid grid-cols-3 gap-3 pt-3">
            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-rose-600/20 text-rose-400 flex items-center justify-center">
                <Target className="w-4 h-4" />
              </div>
              <p className="text-xl font-black text-white">{estimate.leads}</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Total Inquiries</p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-rose-500/40 text-center shadow-lg shadow-rose-950/30">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <p className="text-xl font-black text-emerald-400">{estimate.qualified}</p>
              <p className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">High-Intent Leads</p>
            </div>

            <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-center">
              <div className="w-8 h-8 mx-auto mb-1 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-xl font-black text-white">{(estimate.reach / 1000).toFixed(0)}k+</p>
              <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Est. Target Reach</p>
            </div>
          </div>

          {/* Recommended plan card */}
          <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-center justify-between mt-2">
            <div>
              <p className="text-[10px] uppercase font-bold text-slate-400">Recommended Growth Tier</p>
              <p className="text-sm font-extrabold text-white">{estimate.plan}</p>
            </div>
            <button
              onClick={() => {
                onClose();
                onSelectPlan?.(estimate.plan);
              }}
              className="px-4 py-2 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs transition flex items-center gap-1.5 shadow-md shadow-rose-600/30"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
