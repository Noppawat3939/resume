import { skill } from "@/data";

export default function Skill() {
  return (
    <section aria-label="skill-section" className="flex flex-col space-y-2">
      <p className="max-sm:text-xs">Skills</p>
      <ul className="ml-2 flex flex-col">
        {skill.map((s, i) => (
          <li
            key={`skill-${i}`}
            className="list-none text-[15px] text-gray-800/90 max-sm:text-[10px]"
          >
            {`• ${s}`}
          </li>
        ))}
      </ul>
    </section>
  );
}
