import * as d from "@/data/profile";

const { skills } = d;

export default function ContentSkill() {
  return (
    <div aria-label="skills_content">
      <div className="max-md:text-sm max-sm:text-[8px] max-sm:gap-y-1 max-sm:leading-[15px] flex flex-col">
        {skills.map(({ label, values }, i) => (
          <li
            className="flex w-full flex-wrap sm:space-x-3 max-sm:items-start"
            key={`skill-${i}`}
          >
            <span className="max-sm:mr-1">{`${label}:`}</span>
            <span>{values.join(", ")}</span>
          </li>
        ))}
      </div>
    </div>
  );
}
