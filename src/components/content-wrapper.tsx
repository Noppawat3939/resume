import { Suspense, type ReactNode } from "react";

type ContentWrapeprProps = {
  about: string;
  title: string;
  content?: ReactNode;
};

export default function ContentWrapepr({
  about,
  title,
  content,
}: Readonly<ContentWrapeprProps>) {
  if (!about) throw Error("about is required");

  return (
    <Suspense>
      <section aria-details={about}>
        <div className="flex border-b py-1 mb-1">
          <h2
            aria-label={title.trim().toLowerCase()}
            className="uppercase font-semibold text-[22px] max-md:text-lg max-sm:text-[10px] max-sm:leading-[14px]"
          >
            {title}
          </h2>
        </div>
        {content && content}
      </section>
    </Suspense>
  );
}
