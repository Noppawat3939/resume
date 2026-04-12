import TypingText from "@/components/typing-text";
import { memo } from "react";

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

export default function Page() {
  return (
    <section className="min-h-screen bg-[#11111b] w-screen">
      <div className="max-w-5xl max-sm:max-w-xs mx-auto h-full py-12 max-sm:py-8">
        <div className="flex items-baseline space-x-2 mb-4">
          <Header text="WHOAMI" />
          <TypingText
            texts={["Gopgap", "Noppawat Chochaipantawong"]}
            className="text-[#b5bfe2] font-monoIBM font-semibold text-xl max-sm:text-[16px]"
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
              className="font-monoIBM font-bold text-lg duration-200 transition-all hover:text-[#ef9f76] max-sm:text-sm"
              target="_blank"
              href={l.url}
            >
              {l.label}
            </a>
          </li>
        ))}
      </div>
    </section>
  );
}

const Header = memo(function (props: { text: string }) {
  return (
    <h1 className="text-[#8caaee] font-monoIBM font-extrabold text-xl max-sm:text-[16px]">
      {props.text}
    </h1>
  );
});

const Text = memo(function (props: { text: string }) {
  return (
    <p className="text-[#838ba7] font-monoIBM font-bold text-lg max-sm:text-sm">
      {props.text}
    </p>
  );
});

const Label = memo(function (props: { text: string }) {
  return (
    <p className="text-[#f4b8e4] font-monoIBM font-bold text-lg max-sm:text-sm">
      {props.text}
    </p>
  );
});
