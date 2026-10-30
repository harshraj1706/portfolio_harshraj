import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsh Raj // Engineering Portfolio & Systems Dossier",
  description:
    "Personal engineering portfolio of Harsh Raj — Mechatronics & Automation scholar at IIIT Bhagalpur (Minor in CSE). Specializing in Machine Learning, Generative AI, and Multi-Agent Orchestration.",
  keywords: [
    "Harsh Raj",
    "IIIT Bhagalpur",
    "Mechatronics",
    "Machine Learning",
    "Generative AI",
    "LangGraph",
    "CogniSynth",
    "Multi-Agent Systems",
    "Python",
    "AI-Readiness",
  ],
  authors: [{ name: "Harsh Raj", url: "https://github.com/harshraj1706" }],
  creator: "Harsh Raj",
  openGraph: {
    title: "Harsh Raj // Engineering Portfolio & Systems Dossier",
    description:
      "Engineering portfolio of Harsh Raj (IIIT Bhagalpur · 2024–2028). Systems Dossier covering Multi-Agent Systems, Machine Learning, and Applied AI Engineering.",
    url: "https://github.com/harshraj1706",
    siteName: "Harsh Raj Portfolio",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#fdf8f6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#fdf8f6] text-[#1c1b1a] antialiased selection:bg-[#dce1ff] selection:text-[#001551]">
        {children}
      </body>
    </html>
  );
}
