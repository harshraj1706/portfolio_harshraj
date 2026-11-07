"use client";

import React, { useState, useEffect } from "react";
import { Copy, Check, FileText, Menu, X, Sun, Moon } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

interface NavbarProps {
  onCopyEmail: () => void;
  copied: boolean;
  theme: "day" | "night";
  onToggleTheme: () => void;
}

export function Navbar({ onCopyEmail, copied, theme, onToggleTheme }: NavbarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(scrolled);

      // Section scrollspy
      const sections = ["about", "trajectory", "focus", "toolkit", "projects", "education", "leadership", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "trajectory", label: "Trajectory" },
    { id: "focus", label: "Focus" },
    { id: "toolkit", label: "Toolkit" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Academics" },
    { id: "leadership", label: "Leadership" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#1d4ed8] z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#fdf8f6]/92 backdrop-blur-md border-b border-[#e6e2df] transition-all">
        <div className="h-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Logo / Affiliation */}
          <div className="flex items-center gap-3">
            <a
              href="#about"
              className="flex flex-col group focus-visible:ring-1 focus-visible:ring-[#0037b0] rounded p-0.5"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1c1b1a] group-hover:text-[#0037b0] transition-colors">
                {PORTFOLIO_DATA.profile.name} {"//"} {PORTFOLIO_DATA.profile.shortInstitution}
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] text-[#434655]">
                B.Tech Mechatronics &amp; Automation · Minor in CSE
              </span>
            </a>

            {/* Academic Status Chip */}
            <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#f2edeb] border border-[#e6e2df]">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-mono text-[11px] text-[#434655] font-medium">
                2024–2028 · CGPA 7.81 · ACTIVE
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Primary"
            className="hidden lg:flex items-center gap-1 py-1 px-1.5 rounded-full bg-[#f7f3f0] border border-[#e6e2df]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all duration-150 ${
                    isActive
                      ? "bg-[#ece7e5] text-[#1c1b1a] font-semibold shadow-xs"
                      : "text-[#434655] hover:text-[#1c1b1a] hover:bg-[#f2edeb]"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Day / Night Lighting Switch */}
            <button
              onClick={onToggleTheme}
              type="button"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded bg-[#f2edeb] hover:bg-[#ece7e5] active:scale-95 text-[#1c1b1a] font-mono text-[11px] font-semibold transition-all border border-[#e6e2df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0037b0]"
              title={
                theme === "night"
                  ? "Switch to Day Lighting (Warm Monograph)"
                  : "Switch to Night Lighting (Tactical Obsidian)"
              }
              aria-label={
                theme === "night"
                  ? "Current: Night mode. Click to activate Day lighting"
                  : "Current: Day mode. Click to activate Night lighting"
              }
            >
              {theme === "night" ? (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span className="hidden sm:inline">Day Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#0037b0]" />
                  <span className="hidden sm:inline">Night Mode</span>
                </>
              )}
            </button>

            {/* Copy Email Button */}
            <button
              onClick={onCopyEmail}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#f2edeb] hover:bg-[#ece7e5] active:scale-95 text-[#1c1b1a] font-mono text-[11px] font-semibold uppercase transition-all border border-[#e6e2df] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0037b0]"
              title="Copy Harsh's Email"
              aria-label="Copy Email Address"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-600" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#434655]" />
              )}
              <span>{copied ? "Copied" : "Copy Email"}</span>
            </button>

            {/* GitHub Link */}
            <a
              href={PORTFOLIO_DATA.profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center px-3 py-1.5 rounded bg-[#f2edeb] hover:bg-[#ece7e5] active:scale-95 text-[#1c1b1a] font-mono text-[11px] font-semibold uppercase transition-all border border-[#e6e2df]"
            >
              GitHub
            </a>

            {/* Resume PDF Link (Opens Real Resume PDF) */}
            <a
              href={PORTFOLIO_DATA.profile.resumePdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-[#0037b0] text-white hover:bg-[#1d4ed8] active:scale-95 font-mono text-[11px] font-semibold uppercase transition-all shadow-[2px_2px_0px_#001551]"
              title="Download Harsh Raj's Resume (PDF)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="lg:hidden p-2 rounded bg-[#f2edeb] text-[#1c1b1a] hover:bg-[#ece7e5] transition-colors focus-visible:ring-2 focus-visible:ring-[#0037b0]"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#fdf8f6] border-b border-[#e6e2df] px-6 py-4 space-y-3 shadow-lg animate-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#e6e2df]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2 rounded text-xs font-mono transition-colors ${
                    activeSection === item.id
                      ? "bg-[#0037b0] text-white font-semibold"
                      : "bg-[#f7f3f0] text-[#434655] hover:text-[#1c1b1a]"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Theme Toggle Strip */}
            <div className="flex items-center justify-between p-2.5 rounded bg-[#f7f3f0] border border-[#e6e2df]">
              <span className="font-mono text-xs text-[#434655]">
                LIGHTING: {theme === "night" ? "TACTICAL NIGHT [OBSIDIAN]" : "DAY [WARM LAB]"}
              </span>
              <button
                type="button"
                onClick={onToggleTheme}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#ece7e5] text-xs font-mono font-semibold"
              >
                {theme === "night" ? (
                  <>
                    <Sun className="w-3.5 h-3.5 text-amber-400" />
                    <span>Day Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#0037b0]" />
                    <span>Night Mode</span>
                  </>
                )}
              </button>
            </div>

            <div className="pt-1 flex flex-wrap gap-2">
              <button
                onClick={onCopyEmail}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded bg-[#f2edeb] text-xs font-mono uppercase font-semibold"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? "Copied Email" : "Copy Email"}</span>
              </button>
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center px-3 py-2 rounded bg-[#f2edeb] text-xs font-mono uppercase font-semibold"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
