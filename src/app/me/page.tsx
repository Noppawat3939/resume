"use client";

import Blobs from "~/components/me/blobs";
import Contact from "~/components/me/contact";
import Experience from "~/components/me/experience";
import Hero from "~/components/me/hero";
import MeEducation from "~/components/me/me-education";
import MeNav from "~/components/me/me-nav";
import Projects from "~/components/me/projects";
import SkillsBoard from "~/components/me/skills-board";
import { useGlassPointer } from "~/components/me/use-glass-pointer";
import { Caveat } from "next/font/google";
import { useRef } from "react";
import "./me.css";

// handwriting face used only on the skill sticky notes
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
  weight: ["500", "700"],
});

export default function Page() {
  const root = useRef<HTMLElement>(null);
  useGlassPointer(root);

  return (
    <main className={`me ${caveat.variable}`} ref={root}>
      <Blobs />
      <div className="page">
        <MeNav />
        <Hero />
        <Experience />
        <Projects />
        <SkillsBoard />
        <MeEducation />
        <Contact />
      </div>
    </main>
  );
}
