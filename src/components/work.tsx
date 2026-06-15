import { works as _w } from "@/data";

export default function Work() {
  const filteredHidden = _w.filter((w) => !w.hidden);

  return (
    <section aria-label="works-section" className="flex flex-col space-y-4">
      <p className="max-sm:text-[11px] font-bold">Work Experiences</p>
      {filteredHidden.map((w, i) => (
        <div key={`work-${i}`} className="flex flex-col space-y-1">
          <p className="text-[14px] max-sm:text-[9px]">
            <b>{w.company}</b>
            {` - ${w.position}`}
          </p>
          <i>
            <p
              aria-label="period"
              className="text-[11px] text-gray-600/80 max-sm:text-[9px]"
            >
              {`${w.location} · ${w.startDate} – ${w.endDate ?? "Present"}`}
            </p>
          </i>
          {w.description && (
            <p className="text-[12px] text-gray-600 max-sm:text-[9px]">
              {w.description}
            </p>
          )}
          <div className="flex flex-col space-y-2 mt-1">
            {w.sections.map((s, si) => (
              <div key={`section-${si}`} className={!s.title && si > 0 ? "mt-2" : ""}>
                {s.title && (
                  <p className="text-[12px] font-semibold text-gray-700 max-sm:text-[9px] mb-1">
                    {s.title}
                  </p>
                )}
                <ul className="ml-2 flex flex-col space-y-1">
                  {s.tasks.map((t, ti) => (
                    <li
                      key={`task-${ti}`}
                      className="list-none text-[14px] text-gray-800/90 max-sm:text-[9px]"
                    >
                      {`• ${t}`}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
