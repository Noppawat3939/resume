import Link from "next/link";
import * as d from "@/data/profile";

const { workExperiences: works } = d;

export default function ContentWork() {
  return (
    <div
      aria-label="work_content"
      className="flex flex-col space-y-3 max-sm:space-y-2"
    >
      {works
        .filter((w) => !w.hide)
        .map(
          (
            {
              periods: { start, end },
              position,
              details,
              companyUrl,
              company,
              isFullTime,
            },
            i
          ) => (
            <div
              key={`work-${i}`}
              aria-label={`work_${position.toLowerCase().replaceAll(" ", "_")}`}
            >
              <header
                aria-label="work-header"
                className="flex justify-between items-end"
              >
                <h3
                  aria-label="position"
                  className="font-semibold max-md:text-sm max-sm:text-xs max-sm:font-medium max-sm:leading-[10px]"
                >
                  {`${position}${!isFullTime ? " (internship)" : ""}`}
                </h3>
                <p
                  className="text-sm max-sm:text-[9px] max-sm:leading-3"
                  aria-label="periods"
                >{`${start.month} ${start.year} - ${
                  end.current ? "Current" : `${end.month} ${end.year}`
                }`}</p>
              </header>
              <Link
                aria-label="company_name"
                href={companyUrl}
                rel="noreferrer nofollow"
                target="_blank"
                className="text-sm text-gray-900/50 max-sm:text-[9px] max-sm:leading-3"
              >
                {company}
              </Link>
              {details.map((detail, i) => (
                <li
                  key={`detail-w-${i}`}
                  className="max-w-[90%] max-md:text-sm max-sm:text-[9px] max-sm:leading-[14px] max-sm:max-w-[95%]"
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
