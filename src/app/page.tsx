"use client";

import { Education, Header, Line, Profile, Skill, Work } from "@/components";
import { Fragment, JSX, Suspense, useEffect, useMemo } from "react";

type TCompoent = {
  key: string;
  component: JSX.Element;
};

export default function Page() {
  // "/?print=1" (used by the "Save as PDF" buttons on /me) opens the print dialog straight away
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("print")) window.print();
  }, []);

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
      <div className="min-h-dvh max-w-[794px] mx-auto py-10 px-16 max-lg:py-8 max-lg:px-12 max-sm:py-5 max-sm:px-4">
        {memorizedComponents.map(({ component, key }, idx) => (
          <Fragment key={key}>
            {component}
            {idx < memorizedComponents.length - 1 && <Line />}
          </Fragment>
        ))}
      </div>
      <button
        onClick={() => window.print()}
        className="print:hidden fixed bottom-6 right-6 bg-black text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-gray-800"
      >
        Download PDF
      </button>
    </Suspense>
  );
}
