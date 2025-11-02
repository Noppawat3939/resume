"use client";

import { Education, Header, Line, Profile, Skill, Work } from "@/components";
import { Fragment, JSX, Suspense, useMemo } from "react";
import { usePDF } from "react-to-pdf";

type TCompoent = {
  key: string;
  component: JSX.Element;
};

export default function MainPage() {
  const { targetRef, toPDF } = usePDF({
    filename: "noppawat_chochaipantawong_cv.pdf",
  });

  const memorizedComponents = useMemo<TCompoent[]>(
    () => [
      {
        key: "header",
        component: <Header />,
      },
      {
        key: "profile",
        component: <Profile />,
      },
      {
        key: "work",
        component: <Work />,
      },
      { key: "skill", component: <Skill /> },
      { key: "education", component: <Education /> },
    ],
    [targetRef.current]
  );

  return (
    <Suspense>
      <div
        ref={targetRef}
        className="min-h-dvh max-w-screen-xl mx-auto py-10 px-16 max-lg:py-8 max-lg:px-12 max-sm:py-5 max-sm:px-4"
      >
        {memorizedComponents.map(({ component, key }) => (
          <Fragment key={key}>
            {component}
            <Line />
          </Fragment>
        ))}
      </div>
      <footer hidden className="flex justify-center items-center min-h-[80px]">
        <button
          className="text-xs max-sm:text-[8px] opacity-65"
          onClick={() => toPDF()}
        >
          {"PDF version"}
        </button>
      </footer>
    </Suspense>
  );
}
