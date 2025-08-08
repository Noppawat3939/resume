import Link from "next/link";
import * as d from "@/data/profile";

const { workExperiences: works } = d;

export default function ContentWork() {
  return (
    <div
      aria-label="work_content"
      className="flex flex-col space-y-3 max-sm:space-y-2"
    >
      {works.map(
        (
          { periods: { start, end }, position, details, companyUrl, company },
          i
        ) => (
          <div
            key={`work-${i}`}
            aria-label={`work_${position.toLowerCase().replaceAll(" ", "_")}`}
          >
            <header
              aria-label="work-header"
              className="flex justify-between items-end max-sm:items-center max-sm:pb-0"
            >
              <div className="font-semibold flex space-x-1 items-baseline mb-1 max-md:text-sm max-sm:text-[10px]">
                <p>{position}</p>
                <p className="max-sm:hidden">|</p>
                <Link
                  rel="noreferrer nofollow"
                  target="_blank"
                  className="max-sm:hidden"
                  href={companyUrl}
                >
                  {company}
                </Link>
              </div>
              <p
                className="text-sm max-sm:text-[8px] max-sm:leading-3"
                aria-label="periods"
              >{`${start.month} ${start.year} - ${
                end.current ? "Present" : `${end.month} ${end.year}`
              }`}</p>
            </header>
            <i className="hidden max-sm:flex">
              <Link
                rel="noreferrer nofollow"
                target="_blank"
                className="text-gray-800 max-sm:text-[8px] opacity-65"
                href={companyUrl}
              >
                {company}
              </Link>
            </i>
            {details.map((detail, i) => (
              <li
                key={`detail-w-${i}`}
                className="max-w-[90%] max-md:text-sm max-sm:text-[8px] max-sm:leading-[14px] max-sm:max-w-[95%]"
              >
                {detail}
              </li>
            ))}
          </div>
        )
      )}
    </div>
  );
}
