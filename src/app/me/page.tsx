"use client";

import {
  header as _h,
  profile as _p,
  works as _w,
  skill as _s,
  education as _e,
} from "@/data";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useState, useCallback } from "react";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "500", "600", "700"],
});

const NAV_ITEMS = [
  {
    id: "about",
    label: "About",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
      </svg>
    ),
  },
  {
    id: "experience",
    label: "Experience",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      </svg>
    ),
  },
  {
    id: "skills",
    label: "Skills",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    id: "education",
    label: "Education",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
];

export default function Page() {
  const filteredWorks = _w.filter((w) => !w.hidden);
  const [toast, setToast] = useState<string | null>(null);
  const [activeNav, setActiveNav] = useState<string>("about");

  const copyToClipboard = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setToast(`${label} copied!`);
      setTimeout(() => setToast(null), 2000);
    });
  }, []);

  const scrollToSection = useCallback((id: string) => {
    setActiveNav(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <main
      className={`${jakarta.variable} font-[family-name:var(--font-jakarta)] min-h-screen bg-zinc-900 text-zinc-50`}
    >
      {/* Toast */}
      {toast && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 md:hidden">
          <div className="bg-zinc-50 text-zinc-900 text-xs font-[family-name:var(--font-geist-mono)] px-4 py-2 rounded-full shadow-lg">
            {toast}
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-14 sm:px-10 md:px-16 md:py-20 pb-28 md:pb-20">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-50 capitalize mb-1.5">
            {_h.full_name}
          </h1>
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-zinc-500 mb-6">
            Software Engineer · Bangkok, Thailand
          </p>
          <div className="flex flex-wrap gap-2">
            {/* Email — tap to copy on mobile */}
            <button
              onClick={() => copyToClipboard(_h.mail, "Email")}
              className="md:hidden font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 border border-zinc-700 rounded-md px-3 py-1.5 active:bg-zinc-800 transition-colors duration-150"
            >
              {_h.mail}
            </button>
            <a
              href={_h.mail_to}
              className="hidden md:inline-flex font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 border border-zinc-700 rounded-md px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-50 transition-colors duration-150"
            >
              {_h.mail}
            </a>

            {/* GitHub — always a link */}
            <a
              href={_h.github_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-400 border border-zinc-700 rounded-md px-3 py-1.5 hover:border-zinc-400 hover:text-zinc-50 transition-colors duration-150"
            >
              Github.com
            </a>
          </div>
        </header>

        <Divider />

        {/* About */}
        <section id="about" className="mb-12 scroll-mt-6">
          <SectionLabel text="about" />
          <p className="text-sm text-zinc-400 leading-relaxed">{_p}</p>
        </section>

        <Divider />

        {/* Experience */}
        <section id="experience" className="mb-12 scroll-mt-6">
          <SectionLabel text="experience" />
          <div className="space-y-10">
            {filteredWorks.map((w, i) => (
              <div key={i} className="flex gap-4">
                <div className="flex flex-col items-center pt-1">
                  <span className="w-2 h-2 rounded-full bg-zinc-600 shrink-0" />
                  {i < filteredWorks.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-800 mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-0.5 mb-0.5">
                    <span className="font-semibold text-zinc-50 text-sm">
                      {w.company}
                    </span>
                    <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 shrink-0">
                      {w.startDate} – {w.endDate ?? "Present"}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 font-medium mb-2">
                    {w.position} · {w.location}
                  </p>
                  {w.description && (
                    <p className="text-xs text-zinc-500 leading-relaxed mb-4 border-l-2 border-zinc-700 pl-3">
                      {w.description}
                    </p>
                  )}
                  <div className="space-y-4">
                    {w.sections.map((s, si) => (
                      <div key={si}>
                        {s.title && (
                          <p className="font-[family-name:var(--font-geist-mono)] text-[11px] text-zinc-500 uppercase tracking-wide mb-1.5">
                            {s.title}
                          </p>
                        )}
                        <ul className="space-y-1.5">
                          {s.tasks.map((t, ti) => (
                            <li
                              key={ti}
                              className="flex gap-2.5 text-xs text-zinc-400 leading-relaxed"
                            >
                              <span className="text-zinc-600 shrink-0 mt-0.5 select-none">
                                ›
                              </span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Skills */}
        <section id="skills" className="mb-12 scroll-mt-6">
          <SectionLabel text="skills" />
          <div className="space-y-3">
            {_s.map((s, i) => {
              const colonIdx = s.indexOf(": ");
              const category = s.slice(0, colonIdx);
              const items = s.slice(colonIdx + 2).split(", ");
              return (
                <div
                  key={i}
                  className="flex flex-wrap items-start gap-x-4 gap-y-2"
                >
                  <span className="font-[family-name:var(--font-geist-mono)] text-[11px] text-zinc-500 w-28 shrink-0 pt-0.5 uppercase tracking-wide">
                    {category}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item, ii) => (
                      <span
                        key={ii}
                        className="text-[11px] font-medium bg-zinc-700 text-zinc-50 rounded-full px-2.5 py-0.5 tracking-tight"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <Divider />

        {/* Education */}
        <section id="education" className="scroll-mt-6">
          <SectionLabel text="education" />
          <div className="flex gap-4">
            <div className="flex flex-col items-center pt-1">
              <span className="w-2 h-2 rounded-full bg-zinc-600 shrink-0" />
            </div>
            <div>
              <div className="flex flex-wrap justify-between items-baseline gap-x-4 gap-y-0.5 mb-1">
                <span className="font-semibold text-zinc-50 text-sm">
                  {_e.university}
                </span>
                <span className="font-[family-name:var(--font-geist-mono)] text-xs text-zinc-500 shrink-0">
                  {_e.period}
                </span>
              </div>
              {_e.details.map((d, i) => (
                <p key={i} className="text-xs text-zinc-400 leading-relaxed">
                  {d}
                </p>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Bottom Navigation — mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 md:hidden bg-zinc-900/90 backdrop-blur-md border-t border-zinc-800 z-40">
        <div className="flex items-center justify-around px-2 py-2 max-w-sm mx-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`flex flex-col items-center gap-1 px-4 py-1.5 rounded-xl transition-colors duration-150 ${
                activeNav === item.id ? "text-zinc-50" : "text-zinc-600"
              }`}
            >
              {item.icon}
              <span className="font-[family-name:var(--font-geist-mono)] text-[10px] tracking-wide">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}

function SectionLabel({ text }: { text: string }) {
  return (
    <p className="font-[family-name:var(--font-geist-mono)] text-[11px] uppercase tracking-widest text-zinc-500 mb-5">
      {text}
    </p>
  );
}

function Divider() {
  return <hr className="border-zinc-800 mb-12" />;
}
