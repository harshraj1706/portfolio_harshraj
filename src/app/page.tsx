"use client";

import React, { useState } from "react";
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

  return (
    <div className="w-full min-h-screen flex flex-col bg-[#fdf8f6] text-[#1c1b1a]">
      {/* Toast Notification Container */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Navigation Header */}
      <Navbar onCopyEmail={handleCopyEmail} copied={copied} />

      {/* Main Portfolio Sections */}
      <main className="w-full pt-16 flex-1">
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
    </div>
  );
}
