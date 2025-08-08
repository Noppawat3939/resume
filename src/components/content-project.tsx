import * as d from "@/data/profile";
import Link from "next/link";
import { type ComponentProps } from "react";

type NextLinkProps = ComponentProps<typeof Link>;

const { projects } = d;

export default function ContentProject() {
  const NextLink = (props: NextLinkProps) => (
    <Link
      target="_blank"
      rel="noreferrer nofollow"
      className="underline hover:opacity-50 duration-200 transition-all"
      {...props}
    />
  );

  return (
    <div aria-label="projects_content" className="flex flex-col space-y-1">
      {projects.map(
        (
          {
            name,
            description,
            repository: { client = "", server = "" },
            url = "",
          },
          i
        ) => (
          <div
            key={`project-${i}`}
            className="flex justify-between items-start max-md:text-sm max-sm:text-[8px] max-sm:leading-[14px]"
          >
            <li aria-label="project_name" className="mr-2">
              <span>
                <b className="mr-1">{`${name}:`}</b>
                {description}
              </span>
            </li>
            <div className="flex space-x-2 max-sm:text-[8px]">
              {client && <NextLink href={client}>{"client"}</NextLink>}
              {server && <NextLink href={server}>{"server"}</NextLink>}
              {url && <NextLink href={url}>{"demo"}</NextLink>}
            </div>
          </div>
        )
      )}
    </div>
  );
}
