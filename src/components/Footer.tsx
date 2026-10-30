"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export function Footer() {
  const [utcTime, setUtcTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "UTC",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }) + " UTC"
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#f7f3f0] mt-16 border-t border-[#e6e2df]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {/* Col 01: Colophon */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#1c1b1a] uppercase font-bold tracking-wider">
              Colophon // 01
            </div>
            <p className="text-xs text-[#434655] leading-relaxed">
              Crafted as an architectural systems monograph for artificial intelligence research, multi-agent workflows, and mechatronics automation.
            </p>
          </div>

          {/* Col 02: System Spec */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#1c1b1a] uppercase font-bold tracking-wider">
              System Spec // 02
            </div>
            <div className="font-mono text-[11px] text-[#434655] space-y-1">
              <p>FRAMEWORK: Next.js 16 (App Router)</p>
              <p>STYLING: Tailwind CSS v4</p>
              <p>LANGUAGE: TypeScript 5</p>
            </div>
          </div>

          {/* Col 03: Affiliation */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#1c1b1a] uppercase font-bold tracking-wider">
              Affiliation // 03
            </div>
            <p className="text-xs text-[#434655] font-semibold text-[#1c1b1a]">
              {PORTFOLIO_DATA.profile.institution}
            </p>
            <p className="font-mono text-[11px] text-[#434655]">
              Mechatronics &amp; Automation Lab
            </p>
            <p className="font-mono text-[11px] text-[#a73a00]">
              Minor in Computer Science &amp; Engineering
            </p>
          </div>

          {/* Col 04: Local Telemetry */}
          <div className="space-y-2">
            <div className="font-mono text-xs text-[#1c1b1a] uppercase font-bold tracking-wider">
              Local Clock // 04
            </div>
            <div className="font-mono text-[11px] text-[#434655] space-y-1">
              <p>TIME: {utcTime || "CALIBRATING UTC"}</p>
              <p>LOCATION: IIIT Bhagalpur, Bihar, India</p>
              <p className="text-emerald-700 font-medium">SYS.STATUS: OPERATIONAL</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar (PGP KEY removed) */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[#434655] border-t border-[#e6e2df]">
          <span className="font-mono text-[11px] text-center md:text-left">
            © 2024–2028 {PORTFOLIO_DATA.profile.name.toUpperCase()}. ALL SCHEMATICS &amp; PROVENANCE PRESERVED.
          </span>
          <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center items-center gap-6 font-mono text-[11px]">
            <a href="#about" className="hover:text-[#1c1b1a] transition-colors">
              ABOUT
            </a>
            <a href="#trajectory" className="hover:text-[#1c1b1a] transition-colors">
              TRAJECTORY
            </a>
            <a href="#toolkit" className="hover:text-[#1c1b1a] transition-colors">
              TOOLKIT
            </a>
            <a href="#projects" className="hover:text-[#1c1b1a] transition-colors">
              PROJECTS
            </a>
            <a href="#education" className="hover:text-[#1c1b1a] transition-colors">
              ACADEMICS
            </a>
            <a href="#contact" className="hover:text-[#1c1b1a] transition-colors">
              CONTACT
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
