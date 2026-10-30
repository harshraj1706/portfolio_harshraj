"use client";

import React, { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  Phone,
  Share2,
  Code2,
  Terminal,
  Send,
  Info,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface ContactSectionProps {
  onCopyEmail: () => void;
  copied: boolean;
}

export function ContactSection({ onCopyEmail, copied }: ContactSectionProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [dispatched, setDispatched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailSubject = encodeURIComponent(
      subject.trim()
        ? `[Portfolio Contact] ${subject.trim()} - from ${name || "Visitor"}`
        : `[Portfolio Inquiry] from ${name || "Visitor"}`
    );

    const bodyText = `Name / Affiliation: ${name || "Not provided"}
Sender Email: ${email || "Not provided"}

Inquiry / Project Brief:
${message}

---
Dispatched via Harsh Raj's Portfolio (https://github.com/harshraj1706)`;

    const mailBody = encodeURIComponent(bodyText);
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${mailSubject}&body=${mailBody}`;

    setDispatched(true);

    // Direct user to their local email client with all inputs pre-filled
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Direct Transmission Channels (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="font-mono text-xs text-[#0037b0] font-semibold">
            § 07 // DIRECT TRANSMISSION
          </div>
          <h2 className="text-3xl text-[#1c1b1a] tracking-tight font-semibold">
            Let’s connect over engineering and ideas.
          </h2>
          <p className="text-base text-[#434655] max-w-xl leading-relaxed">
            Open to research collaborations, technical discussions, open-source initiatives, and engineering internship opportunities in AI/ML &amp; Generative Systems.
          </p>

          {/* Primary Correspondence Box */}
          <div className="bg-[#f7f3f0] p-6 rounded shadow-sm border border-[#e6e2df]">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-[#1c1b1a] font-semibold">
                PRIMARY CORRESPONDENCE
              </span>
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3 pt-3 border-t border-[#e6e2df]">
              <div>
                <span className="text-base sm:text-lg text-[#1c1b1a] font-mono select-all font-semibold">
                  {PORTFOLIO_DATA.profile.email}
                </span>
                <p className="font-mono text-[11px] text-[#434655] mt-0.5">
                  Direct student inbox · Monitored regularly
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#f2edeb] hover:bg-[#ece7e5] active:scale-95 text-[#1c1b1a] font-mono text-xs font-semibold uppercase transition-all border border-[#e6e2df] focus-visible:ring-2 focus-visible:ring-[#0037b0]"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#434655]" />
                  )}
                  <span>{copied ? "Copied" : "Copy Email"}</span>
                </button>

                <a
                  href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded bg-[#0037b0] text-white font-mono text-xs font-semibold uppercase hover:bg-[#1d4ed8] active:scale-95 transition-all shadow-xs"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open Client</span>
                </a>
              </div>
            </div>
          </div>

          {/* Direct Channels Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1 font-mono text-xs">
            <div className="bg-[#f7f3f0] p-4 rounded border border-[#e6e2df] hover:border-[#747686] transition-colors">
              <span className="text-[#434655] text-[11px] block mb-1">
                DIRECT TELEPHONE
              </span>
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                className="text-[#1c1b1a] font-semibold hover:text-[#0037b0] transition-colors inline-flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#0037b0]" />
                <span>{PORTFOLIO_DATA.profile.phone}</span>
              </a>
            </div>

            <div className="bg-[#f7f3f0] p-4 rounded border border-[#e6e2df] hover:border-[#747686] transition-colors">
              <span className="text-[#434655] text-[11px] block mb-1">
                PROFESSIONAL NETWORK
              </span>
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0037b0] font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>LinkedIn Profile →</span>
              </a>
            </div>

            <div className="bg-[#f7f3f0] p-4 rounded border border-[#e6e2df] hover:border-[#747686] transition-colors">
              <span className="text-[#434655] text-[11px] block mb-1">
                SOURCE ARCHIVE
              </span>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0037b0] font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>github.com/harshraj1706 →</span>
              </a>
            </div>

            <div className="bg-[#f7f3f0] p-4 rounded border border-[#e6e2df] hover:border-[#747686] transition-colors">
              <span className="text-[#434655] text-[11px] block mb-1">
                ALGORITHMIC TRACKER
              </span>
              <a
                href={PORTFOLIO_DATA.profile.codolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0037b0] font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>codolio.com/profile/harsh1706 →</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Working Email Dispatch Form (5 Cols) */}
        <div className="lg:col-span-5 bg-[#f7f3f0] p-6 rounded shadow-sm border border-[#e6e2df]">
          <div className="flex items-center justify-between pb-3 mb-4 bg-[#ece7e5] px-3 py-1.5 rounded border border-[#e6e2df]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#0037b0]" />
              <span className="font-mono text-xs font-bold text-[#1c1b1a] uppercase">
                DIRECT EMAIL COMPOSER
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#434655]">
              MAILTO DISPATCH
            </span>
          </div>

          <p className="text-xs text-[#434655] mb-4 leading-relaxed">
            Draft your collaboration inquiry below. Submitting will open your default email application with this pre-formatted message addressed to Harsh Raj.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div>
              <label
                htmlFor="contact-name"
                className="block font-mono text-[11px] text-[#1c1b1a] font-semibold mb-1 uppercase"
              >
                YOUR NAME OR AFFILIATION
              </label>
              <input
                id="contact-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Dr. A. Sharma / Engineering Lead"
                className="w-full px-3 py-2 rounded bg-white text-[#1c1b1a] text-xs outline-none focus:ring-2 focus:ring-[#0037b0] border border-[#e6e2df] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="block font-mono text-[11px] text-[#1c1b1a] font-semibold mb-1 uppercase"
              >
                YOUR EMAIL ADDRESS
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="colleague@institution.edu"
                className="w-full px-3 py-2 rounded bg-white text-[#1c1b1a] text-xs outline-none focus:ring-2 focus:ring-[#0037b0] border border-[#e6e2df] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="block font-mono text-[11px] text-[#1c1b1a] font-semibold mb-1 uppercase"
              >
                TOPIC / SUBJECT
              </label>
              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Multi-Agent Systems Collaboration / Internship"
                className="w-full px-3 py-2 rounded bg-white text-[#1c1b1a] text-xs outline-none focus:ring-2 focus:ring-[#0037b0] border border-[#e6e2df] transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block font-mono text-[11px] text-[#1c1b1a] font-semibold mb-1 uppercase"
              >
                COLLABORATION OR PROJECT BRIEF
              </label>
              <textarea
                id="contact-message"
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Outline prospective multi-agent research questions, robotics projects, or engineering roles..."
                className="w-full px-3 py-2 rounded bg-white text-[#1c1b1a] text-xs outline-none focus:ring-2 focus:ring-[#0037b0] border border-[#e6e2df] resize-none transition-all"
              />
            </div>

            <div className="flex items-start gap-2 text-[11px] text-[#434655] font-mono bg-[#ece7e5] p-2.5 rounded border border-[#e6e2df]">
              <Info className="w-3.5 h-3.5 text-[#0037b0] shrink-0 mt-0.5" />
              <span>
                Note: Clicking below launches your email program (Outlook, Apple Mail, Gmail) with this message pre-filled.
              </span>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded bg-[#1d4ed8] text-white hover:bg-[#0037b0] active:scale-[0.99] font-mono text-xs uppercase font-bold transition-all shadow-[2px_2px_0px_#001551] flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Launch Email Client (mailto:)</span>
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {dispatched && (
            <div className="mt-4 p-3.5 rounded bg-[#32302f] text-[#f5f0ee] font-mono text-xs border border-[#747686]/40 animate-in fade-in">
              <div className="flex items-center gap-2 text-emerald-400 font-bold mb-1">
                <Check className="w-4 h-4" />
                <span>[CLIENT LAUNCHED]</span>
              </div>
              <p className="text-neutral-300 font-mono text-[11px]">
                Your email client was triggered with pre-formatted inquiry text addressed to {PORTFOLIO_DATA.profile.email}. If it did not launch automatically, please copy the email above!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
