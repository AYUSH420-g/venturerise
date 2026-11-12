import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-24 right-6 z-[1000] max-w-sm animate-bounce-once">
      <div className={`flex items-start gap-3 p-4 rounded-xl shadow-2xl border backdrop-blur-md ${
        isSuccess 
          ? 'bg-slate-900/95 border-emerald-500/40 text-emerald-200' 
          : 'bg-slate-900/95 border-rose-500/40 text-rose-200'
      }`}>
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
        )}
        <div className="flex-1 text-sm text-slate-100">
          <p className="font-semibold text-white">{isSuccess ? 'Success!' : 'Notice'}</p>
          <p className="text-xs text-slate-300 mt-0.5">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-white transition p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
