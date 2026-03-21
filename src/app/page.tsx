"use client";

import { Education, Header, Line, Profile, Skill, Work } from "@/components";
import { Fragment, JSX, Suspense, useMemo } from "react";

type TCompoent = {
  key: string;
  component: JSX.Element;
};

export default function Page() {
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
      { key: "skill", component: <Skill /> },
      {
        key: "work",
        component: <Work />,
      },
      { key: "education", component: <Education /> },
    ],
    []
  );

  return (
    <Suspense>
      <div className="min-h-dvh max-w-screen-xl mx-auto py-10 px-16 max-lg:py-8 max-lg:px-12 max-sm:py-5 max-sm:px-4">
        {memorizedComponents.map(({ component, key }) => (
          <Fragment key={key}>
            {component}
            <Line />
          </Fragment>
        ))}
      </div>
    </Suspense>
  );
}
