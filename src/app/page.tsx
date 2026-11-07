"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutTrajectory } from "@/components/AboutTrajectory";
import { EngineeringFocus } from "@/components/EngineeringFocus";
import { SkillsToolkit } from "@/components/SkillsToolkit";
import { ProjectsSection } from "@/components/ProjectsSection";
import { EducationAchievements } from "@/components/EducationAchievements";
import { Leadership } from "@/components/Leadership";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Home() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [theme, setTheme] = useState<"day" | "night">(() => {
    if (typeof window !== "undefined") {
      const isDark =
        document.documentElement.classList.contains("dark") ||
        localStorage.getItem("harsh_portfolio_theme") === "night" ||
        (!localStorage.getItem("harsh_portfolio_theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
      return isDark ? "night" : "day";
    }
    return "day";
  });
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Sync classList on mount with initial theme
    const saved = localStorage.getItem("harsh_portfolio_theme");
    const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "night" || (!saved && systemDark);

    if (shouldBeDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Pointer move listener for interactive ambient lighting spotlight
    const handlePointerMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty("--mouse-x", `${e.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${e.clientY}px`);
    };

    // Scroll listener for back-to-top progress
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = height > 0 ? (winScroll / height) * 100 : 0;
      setScrollProgress(pct);
      setShowScrollTop(winScroll > 360);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "night" ? "day" : "night";
    setTheme(nextTheme);
    if (nextTheme === "night") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("harsh_portfolio_theme", "night");
      setToastMessage("🌙 Activated Night Mode (Tactical Obsidian)");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("harsh_portfolio_theme", "day");
      setToastMessage("☀️ Activated Day Mode (Warm Monograph)");
    }
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleCopyEmail = () => {
    const email = PORTFOLIO_DATA.profile.email;
    if (navigator?.clipboard) {
      navigator.clipboard
        .writeText(email)
        .then(() => {
          setCopied(true);
          setToastMessage(`✓ Email copied: ${email}`);
          setTimeout(() => {
            setCopied(false);
            setToastMessage(null);
          }, 3200);
        })
        .catch(() => {
          setToastMessage(`Email address: ${email}`);
          setTimeout(() => setToastMessage(null), 3200);
        });
    } else {
      setToastMessage(`Email address: ${email}`);
      setTimeout(() => setToastMessage(null), 3200);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fdf8f6] text-[#1c1b1a] relative">
      {/* Ambient Lighting Overlays (Day / Night Spotlight) */}
      <div className="ambient-night-glow" aria-hidden="true" />
      <div className="ambient-day-glow" aria-hidden="true" />

      {/* Toast Notification Container */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Navigation Header */}
      <Navbar
        onCopyEmail={handleCopyEmail}
        copied={copied}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Portfolio Sections */}
      <main className="w-full pt-16 flex-1 relative z-10">
        {/* § 01: Hero & Blueprint Specimen */}
        <Hero />

        {/* § 02: Trajectory & Intellectual Genesis */}
        <AboutTrajectory />

        {/* § 03: Engineering Focus & Active Lab Log */}
        <EngineeringFocus />

        {/* § 04: Engineering Toolkit */}
        <SkillsToolkit />

        {/* § 05: Projects & Case Studies */}
        <ProjectsSection />

        {/* § 06: Academics & Honors */}
        <EducationAchievements />

        {/* Leadership & Activities */}
        <Leadership />

        {/* § 07: Direct Contact & Mailto Dispatch */}
        <ContactSection onCopyEmail={handleCopyEmail} copied={copied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Scroll-To-Top Button with Radial Progress */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-white text-[#1c1b1a] shadow-lg border border-[#e6e2df] hover:scale-110 active:scale-95 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0037b0]"
          title="Scroll to top"
          aria-label="Scroll to top"
        >
          <svg className="w-12 h-12 absolute inset-0 -rotate-90 pointer-events-none" viewBox="0 0 44 44">
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="currentColor"
              className="text-[#e6e2df] opacity-40"
              strokeWidth="2.5"
            />
            <circle
              cx="22"
              cy="22"
              r="19"
              fill="none"
              stroke="currentColor"
              className="text-[#0037b0]"
              strokeWidth="2.5"
              strokeDasharray={119.38}
              strokeDashoffset={119.38 - (119.38 * scrollProgress) / 100}
              strokeLinecap="round"
            />
          </svg>
          <ArrowUp className="w-4 h-4 text-[#0037b0] relative z-10" />
        </button>
      )}
    </div>
  );
}
