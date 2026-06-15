import { skill as _s } from "@/data";

export default function Skill() {
  return (
    <section aria-label="skill-section" className="flex flex-col space-y-2">
      <p className="max-sm:text-[11px] font-bold">Skills</p>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-1 max-sm:grid-cols-1">
        {_s.map((s, i) => {
          const colonIdx = s.indexOf(": ");
          const category = s.slice(0, colonIdx);
          const items = s.slice(colonIdx + 2);
          return (
            <li
              key={`skill-${i}`}
              className="list-none text-[13px] text-gray-800/90 max-sm:text-[9px] leading-snug"
            >
              <span className="font-semibold">{category}:</span> {items}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
