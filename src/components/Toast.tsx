"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

interface ToastProps {
  message: string | null;
  onClose?: () => void;
}

export function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-md bg-[#32302f] text-[#f5f0ee] shadow-2xl border border-[#747686]/40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span className="font-mono text-xs font-medium tracking-wide">{message}</span>
    </div>
  );
}
