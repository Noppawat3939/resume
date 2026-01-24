import { header as _h } from "@/data";

export default function Header() {
  return (
    <section
      aria-label="header-section"
      className="flex flex-col items-center space-y-5 max-sm:space-y-2"
    >
      <h1 className="font-bold text-3xl capitalize max-sm:text-xl">
        {_h.full_name}
      </h1>
      <div className="flex space-x-3 max-sm:flex-col max-sm:space-y-1 max-sm:items-center max-sm:text-[8px]">
        <a href={_h.mail_to}>{_h.mail}</a>
        <a target="_blank" rel="noopener noreferrer" href={_h.github_url}>
          {_h.github}
        </a>
        <a href={_h.tel_to}>{_h.phone}</a>
        <p className="capitalize">{_h.address}</p>
      </div>
    </section>
  );
}
