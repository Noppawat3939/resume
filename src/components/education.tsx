import { education as _e } from "@/data";

export default function Education() {
  return (
    <section aria-label="education-section" className="flex flex-col space-y-2">
      <p className="max-sm:text-xs font-bold">Education</p>
      <ul>
        {Object.entries(_e).map(([k, v], i) => (
          <li
            key={`edu-${i}`}
            className="flex flex-col text-[15px] text-gray-800/90 max-sm:text-[10px]"
          >
            {k === "period" ? (
              <p className="text-xs italic text-gray-600/80 max-sm:text-[10px]">
                {v}
              </p>
            ) : (
              <p className="text-gray-800/80 max-sm:text-[10px]">{v}</p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
