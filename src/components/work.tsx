import { works as _w } from "@/data";

export default function Work() {
  const filteredHidden = _w.filter((w) => !w.hidden);

  return (
    <section aria-label="works-section" className="flex flex-col space-y-3">
      <p className="max-sm:text-xs font-bold">Work Experiences</p>
      {filteredHidden.map((w, i) => (
        <div key={`work-${i}`}>
          <p className="text-[15px] max-sm:text-[10px]">{`${w.position} - ${w.company}`}</p>
          <i>
            <p
              aria-label="perioid"
              className="text-xs text-gray-600/80 max-sm:text-[10px]"
            >
              {w.period}
            </p>
          </i>
          <ul className="ml-2 space-y-1 flex flex-col">
            {w.tasks.map((t, ti) => (
              <li
                key={`task-${ti}`}
                className="list-none text-[15px] text-gray-800/90 max-sm:text-[10px]"
              >
                {`• ${t}`}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
