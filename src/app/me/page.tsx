"use client";

import { useRouter } from "next/navigation";
// import TypingText from "@/components/typing-text";
import { memo, useState } from "react";

const data = {
  profile: [
    "Enthusiastic Software Engineer with hands-on experience in building scalable web applications and reliable backend systems. Strong understanding of clean architecture, scalable API design, and system reliability. Passionate about turning complex business requirements into clean, maintainable, and high-performance solutions.",
    "I enjoy solving challenging technical problems, designing robust system flows, and creating smooth user experiences that deliver real value. Continuously learning modern technologies and software design principles, with a strong interest in system scalability, performance optimization, and microservices architecture. I am committed to writing clean, testable code and continuously growing as an engineer.",
  ],
  stack: [
    "[language]: Javascript, Typescript, Go",
    "[frontend]: React, Next.js, React Native",
    "[backend]: Express, NestJS, Gin, Fiber",
    "[database]: PostgreSQL, Redis, Firebase, MongoDB",
    "[testing]: bun:test, go test",
    "[tools]: Docker, AWS, K6, Tableplus",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/noppawat3939" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/noppawat-chochaipantawong-659180214",
    },
  ],
};

/**
 * font - 9aa0a6
 * btn - 8ab4f8
 */

export default function Page() {
  const router = useRouter();
  const [show, setShow] = useState(false);

  return (
    <section className="min-h-screen flex justify-center items-center bg-[#202124] w-screen">
      <div
        className="max-w-[600px] h-[700px] w-full leading-tight text-[#9aa0a6]"
        aria-label="wrapepr"
      >
        <div className="mb-[40px]">
          <img
            className="object-contain"
            loading="lazy"
            width={72}
            height={72}
            style={{ filter: "invert(1)" }}
            alt="err-img"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEgAAABIAQMAAABvIyEEAAAABlBMVEUAAABTU1OoaSf/AAAAAXRSTlMAQObYZgAAAENJREFUeF7tzbEJACEQRNGBLeAasBCza2lLEGx0CxFGG9hBMDDxRy/72O9FMnIFapGylsu1fgoBdkXfUHLrQgdfrlJN1BdYBjQQm3UAAAAASUVORK5CYII="
          />
        </div>
        <div className="flex flex-col space-y-[15px]">
          <h2 className="text-[24px] font-bold tracking-tighter">
            This site can’t be reached
          </h2>
          <span className="text-[15px] leading-[1.6em]">
            <span className="font-[900]">localhost </span>
            refused to connect.
          </span>
          <div className="flex flex-col space-y-1">
            <p>Try:</p>
            <ul className="ml-[40px] space-y-1 text-[15px]">
              <li className="list-disc">Checking the connection</li>
              <li className="list-disc">
                <span
                  className="text-[#8ab4f8] cursor-pointer"
                  onClick={() => setShow((prev) => !prev)}
                >
                  Checking the proxy and the firewall
                </span>
              </li>
            </ul>
          </div>
          <span className="text-xs">ERR_CONNECTION_REFUSED</span>
        </div>
        <div
          aria-label="buttons"
          className="flex justify-between mt-[51px] pb-4"
        >
          <button
            onClick={() => setShow((prev) => !prev)}
            className="h-[31px] flex items-center justify-center rounded-2xl py-2 px-4 ring-0 text-[#8ab4f8] text-[13px] border border-[#5f6368] transition-all duration-200 hover:bg-[#303339] hover:border-[#80868b]"
          >
            {show ? "Hide deatils" : "Details"}
          </button>
          <button
            onClick={() => router.push("/")}
            className="h-[31px] flex items-center justify-center text-[13px] bg-[#8ab4f8] py-2 px-4 text-[#202124] rounded-2xl ring-0"
          >
            Resume
          </button>
        </div>
        {show && (
          <div className="flex flex-col space-y-6 text-[15px] mt-[15px] mb-[50px]">
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold">Check your internet connection</h2>
              <p>
                Check any cables and reboot any routers, modems, or other
                network devices you may be using.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold">
                Allow Chrome to access the network in your firewall or antivirus
                settings.
              </h2>
              <p>
                If it is already listed as a program allowed to access the
                network, try removing it from the list and adding it again.
              </p>
            </div>
            <div className="flex flex-col space-y-1">
              <h2 className="font-semibold">If you use a proxy server…</h2>
              <p>
                {
                  "Go to Applications > System Settings > Network, select the active network, click the Details… button, and deselect any proxies that may have been selected."
                }
              </p>
            </div>
          </div>
        )}
      </div>
      {/* <div className="max-w-5xl max-sm:max-w-xs mx-auto h-full py-12 max-sm:py-8">
        <div className="flex items-baseline space-x-2 mb-4">
          <Header text="WHOAMI" />
          <TypingText
            texts={["Gopgap", "Noppawat Chochaipantawong"]}
            className="text-[#b5bfe2] font-sans font-semibold text-xl max-sm:text-[16px]"
          />
        </div>
        <div className="flex flex-col space-y-4">
          {data.profile.map((p, i) => (
            <Text text={p} key={`profile-${i}`} />
          ))}
        </div>
        <div className="flex flex-col mt-4">
          <div className="flex items-center space-x-3">
            <Label text="tech" />
            <Text text="~ $ stack" />
          </div>
          {data.stack.map((s, i) => (
            <Text text={s} key={`stack-${i}`} />
          ))}
        </div>
        <div className="flex items-center space-x-3 mt-4 mb-2">
          <Label text="noppawat3084@gmail.com" />
          <Text text="~ $ contact" />
        </div>
        {data.links.map((l, i) => (
          <li key={`link-${i}`} className="text-[#838ba7] ml-3">
            <a
              className="font-sans font-bold text-lg duration-200 transition-all hover:text-[#ef9f76] max-sm:text-sm"
              target="_blank"
              href={l.url}
            >
              {l.label}
            </a>
          </li>
        ))}
      </div> */}
    </section>
  );
}

const Header = memo(function (props: { text: string }) {
  return (
    <h1 className="text-[#8caaee] font-sans font-extrabold text-xl max-sm:text-[16px]">
      {props.text}
    </h1>
  );
});

const Text = memo(function (props: { text: string }) {
  return (
    <p className="text-[#838ba7] font-sans font-bold text-lg max-sm:text-sm">
      {props.text}
    </p>
  );
});

const Label = memo(function (props: { text: string }) {
  return (
    <p className="text-[#f4b8e4] font-sans font-bold text-lg max-sm:text-sm">
      {props.text}
    </p>
  );
});
