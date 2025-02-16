import {
  ContentEducation as Education,
  ContentIntro as Intro,
  ContentSkill as Skills,
  ContentWork as Works,
  ContentProject as Project,
} from "@/components";
import { Suspense, lazy } from "react";

const Wrapper = lazy(() => import("@/components/content-wrapper"));

export default function MainPage() {
  return (
    <Suspense>
      <div className="min-h-dvh py-10 px-16 max-lg:py-8 max-lg:px-12 max-sm:py-5 max-sm:px-4">
        <Intro />
        <div aria-label="wrap-contents" className="flex flex-col space-y-2">
          <Wrapper about="skills" title="skills" content={<Skills />} />
          <Wrapper
            about="work-experiences"
            title="work experiences"
            content={<Works />}
          />
          <Wrapper about="projects" title="projects" content={<Project />} />
          <Wrapper
            about="education"
            title="education"
            content={<Education />}
          />
        </div>
      </div>
    </Suspense>
  );
}
