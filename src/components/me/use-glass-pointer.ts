import { useEffect, type RefObject } from "react";

const GLASS_TARGETS = ".btn, .btn-sm, .pbtn, .btn-reset, .more-btn, .link-quiet, .xnav-link";

/** Feeds the pointer position (--mx / --my) to whichever glass button is under it, using one listener for the whole page. */
export function useGlassPointer(root: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(GLASS_TARGETS);
      if (!target) return;
      const r = target.getBoundingClientRect();
      target.style.setProperty("--mx", `${e.clientX - r.left}px`);
      target.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, [root]);
}
