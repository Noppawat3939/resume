import * as d from "@/data/profile";

const { educations } = d;

export default function ContentEducation() {
  return (
    <div aria-label="education_content">
      {educations.map(({ graduate, university, periods }, i) => (
        <div key={`education-${i}`}>
          <li className="flex justify-between space-x-2 items-end max-sm:items-center">
            <p
              className="max-md:text-sm max-sm:text-[10px]"
              aria-label="graduate"
            >
              {graduate}
            </p>
            <p
              className="text-sm max-sm:text-[8px] max-sm:leading-3 max-sm:text-nowrap"
              aria-label="education_periods"
            >{`${periods.start.month} ${periods.start.year} - ${periods.end.month} ${periods.end.year}`}</p>
          </li>
          <p
            aria-label="university"
            className="text-sm max-sm:text-[8px] max-sm:font-[300] max-sm:leading-4"
          >
            {university}
          </p>
        </div>
      ))}
    </div>
  );
}
