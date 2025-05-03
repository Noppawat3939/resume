"use client";

import {
  ContentEducation as Education,
  ContentIntro as Intro,
  ContentSkill as Skills,
  ContentWork as Works,
  ContentProject as Project,
} from "@/components";
import { Suspense, lazy } from "react";
import { usePDF } from "react-to-pdf";

const Wrapper = lazy(() => import("@/components/content-wrapper"));

export default function MainPage() {
  const { targetRef, toPDF } = usePDF({ filename: "noppawat-cv.pdf" });

  return (
    <Suspense>
      <div
        ref={targetRef}
        className="min-h-dvh py-10 px-16 max-lg:py-8 max-lg:px-12 max-sm:py-5 max-sm:px-4"
      >
        <Intro />
        <div aria-label="wrap-contents" className="flex flex-col space-y-2">
          <Wrapper
            about="work-experiences"
            title="work experiences"
            content={<Works />}
          />
          <Wrapper about="projects" title="projects" content={<Project />} />
          <Wrapper about="skills" title="skills" content={<Skills />} />
          <Wrapper
            about="education"
            title="education"
            content={<Education />}
          />
        </div>
      </div>
      <footer className="flex justify-center items-center min-h-[80px]">
        <button
          className="text-sm max-sm:text-[8px] opacity-65"
          onClick={() => toPDF()}
        >
          {"Download PDF"}
        </button>
      </footer>
    </Suspense>
  );
}
