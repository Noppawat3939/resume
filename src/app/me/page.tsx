import { header } from "@/data";
import { PropsWithChildren } from "react";

export default function MePage() {
  return (
    <section className="h-screen flex flex-col justify-center items-center bg-[#202224] text-[#F0F1F2]">
      <div className=" max-w-3xl border border-[#627072] px-7 py-4 rounded">
        <div className="pb-2 border-b border-[#627072]">
          <p className="text-center font-bold">{"Hi"}</p>
        </div>
        <div className="flex flex-col space-y-4 py-4">
          <h2 className="text-[#50B7E0] capitalize font-semibold">
            {header.full_name}
          </h2>
          <p>{"Software Engineer"}</p>
          <Code>
            <a href={`mailto:${header.mail_to}`}>{header.mail}</a>
            <a href={header.github_url}>{"Github.com"}</a>
          </Code>
        </div>
        <div className="pt-2 text-center mt-10 border-t border-[#627072]">
          <a className="text-xs" href="/">
            {"Full CV"}
          </a>
        </div>
      </div>
    </section>
  );
}

function Code({ children }: PropsWithChildren) {
  return (
    <pre
      className={"bg-[#2D2D2D] text-sm flex flex-col space-y-2 rounded-sm p-2"}
    >
      {children}
    </pre>
  );
}
