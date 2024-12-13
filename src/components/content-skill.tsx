import * as d from "@/data/profile";
import { concatSkill as cs } from "@/helper";

interface ISkills {
  label: string;
  details: string[];
}

const { technologies: tech, language: lang } = d;

export default function ContentSkill() {
  const skills: ISkills[] = [
    {
      label: "Programming languages",
      details: cs(tech.language),
    },
    {
      label: "Framework",
      details: cs(
        tech.frameworkProgramming,
        tech.javascriptLibrary,
        tech.cssFramework,
        tech.cssLibrary
      ),
    },
    {
      label: "Database and ORM",
      details: cs(
        tech.database,
        tech.objectRelationalMapping,
        tech.objectDataModeling
      ),
    },
    {
      label: "Others",
      details: cs(tech.others, tech.container, tech.design, tech.guiTools),
    },
    {
      label: "Languages",
      details: lang.map((item) => `${item.name} - ${item.details.join(" ")}`),
    },
  ];

  return (
    <div aria-label="skills_content">
      {skills.map(({ label, details }, i) => (
        <li
          key={`skill-${i}`}
          className="max-md:text-sm max-sm:text-[9px] max-sm:leading-[14px]"
        >{`${label}: ${details.join(", ")}`}</li>
      ))}
    </div>
  );
}
