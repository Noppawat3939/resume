import { TypingText } from "@/components";
import { header } from "@/data";
import { type PropsWithChildren, memo } from "react";

type TDayNumber = Readonly<1 | 2 | 3 | 4 | 5 | 6 | 7>;

const mappingThemeColorWithDay = {
  1: "#FFE52A", // Mon
  2: "#F472B6", // Tue
  3: "#3DB6B1", // Wed
  4: "#FF9644", // Thur
  5: "#50B7E0", // Fri
  6: "#9B5DE0", // Sat
  7: "#FA5C5C", // Sun
} satisfies Record<TDayNumber, string>;

export default function MePage() {
  const day = new Date().getDay();
  const color = mappingThemeColorWithDay[day as TDayNumber];

  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#101010] text-[#F0F1F2]">
      <div className=" max-w-3xl border border-[#627072] px-7 py-4 rounded">
        <div className="pb-2 border-b border-[#627072]">
          <p className="text-center font-medium">
            <span style={{ color }}>package</span>
            <span className="text-white">{" main"}</span>
          </p>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <h2 className="capitalize font-semibold" style={{ color }}>
            {header.full_name}
          </h2>
          <TypingText texts={["echo", "Software engineer"]} />

          <Code>
            <a
              className="hover:opacity-60 transition-all duration-200"
              href={`mailto:${header.mail_to}`}
            >
              {`m := ${header.mail}`}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={header.github_url}
              className="hover:opacity-60 transition-all duration-200"
            >
              {"g := Github"}
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={header.linked_in_url}
              className="hover:opacity-60 transition-all duration-200"
            >
              {"l := Linkedin"}
            </a>
          </Code>
        </div>
        <div className="pt-2 text-center mt-10 border-t border-[#627072] hidden">
          <a className="text-xs" href="/resume">
            {"Full CV"}
          </a>
        </div>
      </div>
    </section>
  );
}

const Code = memo(function ({ children }: PropsWithChildren) {
  return (
    <pre
      className={"bg-[#181818] text-[12px] flex flex-col space-y-2 rounded p-2"}
    >
      {children}
    </pre>
  );
});
