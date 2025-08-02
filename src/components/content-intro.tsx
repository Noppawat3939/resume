import type { ComponentProps } from "react";
import * as d from "@/data/profile";
import Link from "next/link";

type NextLinkProps = ComponentProps<typeof Link>;
interface IContact {
  key: string;
  props: NextLinkProps;
}

const { intro } = d;

export default function ContentIntro() {
  const contacts: IContact[] = [
    {
      key: "email",
      props: { href: `mailto:${intro.email}`, children: intro.email },
    },
    {
      key: "phone",
      props: {
        href: `tel:${intro.phone}`,
        children: `(+66) ${intro.phone.slice(1)}`,
      },
    },
    {
      key: "github",
      props: {
        href: intro.githubUrl,
        target: "_blank",
        rel: "noreferrer nofollow",
        children: "github.com",
      },
    },
    {
      key: "linkedIn",
      props: {
        target: "_blank",
        href: intro.linkedinUrl,
        rel: "noreferrer nofollow",
        children: "linkedin.com",
      },
    },
  ];

  return (
    <section
      aria-details="introduce_content"
      className="flex flex-col space-y-6 max-md:space-y-4 max-sm:space-y-2 max-sm:mb-2"
    >
      <h1
        aria-label="full_name"
        className="font-semibold font-sans capitalize text-5xl text-center max-lg:text-3xl max-sm:text-xl max-sm:font-bold"
      >{`${intro.firstName} ${intro.lastName}`}</h1>
      <section
        aria-details="contacts"
        className="grid grid-cols-4 w-full max-w-[80%] mx-auto max-lg:max-w-full max-md:grid-cols-2"
      >
        {contacts.map((contact) => (
          <Link
            key={contact.key}
            className="w-fit mx-auto hover:opacity-50 duration-200 transition-all text-sm max-sm:text-[8px] max-sm:leading-3"
            {...contact.props}
          />
        ))}
      </section>
      <p
        aria-label="introduce"
        className="max-md:text-sm max-sm:text-[10px] max-md:py-3 max-sm:leading-4"
      >
        {intro.introduce}
      </p>
    </section>
  );
}
