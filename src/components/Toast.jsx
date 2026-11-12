import React from 'react';
import { CheckCircle, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-[1000] max-w-sm animate-fadeIn">
      <div className={`flex items-start gap-3 p-4 rounded-2xl shadow-lg border ${
        isSuccess 
          ? 'bg-white border-emerald-300 text-emerald-950' 
          : 'bg-white border-amber-300 text-amber-950'
      }`}>
        {isSuccess ? (
          <CheckCircle className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
        ) : (
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
        )}
        <div className="flex-1 text-sm text-[#14243B]">
          <p className="font-bold">{isSuccess ? 'Success' : 'Notice'}</p>
          <p className="text-xs text-[#526175] mt-0.5 leading-relaxed">{toast.message}</p>
        </div>
        <button
          onClick={onClose}
          className="text-[#526175] hover:text-[#14243B] transition p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
