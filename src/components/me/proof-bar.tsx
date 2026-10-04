import Image from "next/image";
import { hero as _hero, monthIndex, techStart, works } from "~/data";
import { css } from "./css";

const LOGOS = works.flatMap((w) =>
  w.logo ? [{ name: w.shortName ?? w.company, logo: w.logo }] : [],
);

/** At-a-glance proof under the call-to-action: years, scope and where the work happened. */
export default function ProofBar({ index }: { index: number }) {
  const now = new Date();
  const years = Math.floor(
    (now.getFullYear() * 12 + now.getMonth() - monthIndex(techStart)) / 12,
  );

  return (
    <div
      className="proof in"
      style={css({ "--i": index })}
      aria-label="At a glance"
    >
      <div className="stat">
        <b>{years}+</b>
        <span>{_hero.proof.years}</span>
      </div>
      <span className="sep" aria-hidden="true" />
      <div className="stat">
        <b>{_hero.proof.platforms.value}</b>
        <span>{_hero.proof.platforms.label}</span>
      </div>
      <span className="sep" aria-hidden="true" />
      <div className="proof-logos">
        <small>{_hero.proof.logos}</small>
        <ul>
          {LOGOS.map(({ name, logo }) => (
            <li key={name}>
              <Image
                src={logo.src}
                width={logo.width}
                height={logo.height}
                alt={name}
                style={{ height: logo.width / logo.height > 3 ? 22 : 30 }}
                unoptimized
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
