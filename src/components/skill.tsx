import { skill as _s } from "@/data";

export default function Skill() {
  return (
    <section aria-label="skill-section" className="flex flex-col space-y-2">
      <p className="max-sm:text-[11px] font-bold">Skills</p>
      <ul className="ml-2 flex flex-col">
        {_s.map((s, i) => (
          <li
            key={`skill-${i}`}
            className="list-none text-[14px] text-gray-800/90 max-sm:text-[9px]"
          >
            {`• ${s}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
