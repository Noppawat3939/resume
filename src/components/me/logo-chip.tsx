"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

type Props = {
  logo?: { src: string; width: number; height: number };
  fallback: string;
  small?: boolean;
  /** 0, 1, 2 ... picks a slightly different angle and lightness of the same blue */
  variant?: number;
  /** the current job: a soft breathing glow and an occasional sheen */
  live?: boolean;
};

/**
 * A company logo shown as a white, single-tone mark on one blue family of tiles.
 * The logo files are the companies' own published logos; only their display color is unified.
 * - tone ladder: each company gets a slightly different angle/lightness of the same hue
 * - live tile: the current job glows and shines; past jobs stay calm
 * - pointer tilt + glare on devices with a mouse (no tilt under reduced motion)
 */
export default function LogoChip({
  logo,
  fallback,
  small = false,
  variant = 0,
  live = false,
}: Props) {
  const wrap = useRef<HTMLSpanElement>(null);
  const chip = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);
  const reduced = useReducedMotion();

  // pause the always-on animations while the tile is off screen
  useEffect(() => {
    const el = wrap.current;
    if (!live || !el || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, [live]);

  const onPointerMove = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = chip.current;
    const box = wrap.current?.getBoundingClientRect();
    if (!el || !box) return;
    const px = (e.clientX - box.left) / box.width - 0.5;
    const py = (e.clientY - box.top) / box.height - 0.5;
    el.style.setProperty("--gx", `${((px + 0.5) * 100).toFixed(0)}%`);
    el.style.setProperty("--gy", `${((py + 0.5) * 100).toFixed(0)}%`);
    if (!reduced) {
      el.style.setProperty("--rx", `${(-py * 16).toFixed(1)}deg`);
      el.style.setProperty("--ry", `${(px * 16).toFixed(1)}deg`);
    }
  };

  const onPointerLeave = () => {
    chip.current?.style.setProperty("--rx", "0deg");
    chip.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <span
      ref={wrap}
      className={`logo-wrap${live ? " live" : ""}${live && !visible ? " paused" : ""}`}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-hidden="true"
    >
      <span ref={chip} className={`logo-chip${small ? " sm" : ""}`} data-v={variant % 3}>
        {logo ? (
          <Image src={logo.src} alt="" width={logo.width} height={logo.height} unoptimized />
        ) : (
          <b>{fallback}</b>
        )}
      </span>
    </span>
  );
}
