import { header } from "@/data";

export default function Header() {
  return (
    <section
      aria-label="header-section"
      className="flex flex-col items-center space-y-5 max-sm:space-y-2"
    >
      <h1 className="font-bold text-3xl capitalize max-sm:text-xl">
        {header.full_name}
      </h1>
      <div className="flex space-x-3 max-sm:flex-col max-sm:space-y-1 max-sm:items-center max-sm:text-xs">
        <a href={header.mail_to}>{header.mail}</a>
        <a target="_blank" rel="noopener noreferrer" href={header.github_url}>
          {header.github}
        </a>
        <a href={header.tel_to}>{header.phone}</a>
        <p className="capitalize">{header.address}</p>
      </div>
    </section>
  );
}
