import { useEffect, useRef } from "react";

/**
 * A handler measures first and, if it has anything to change, returns a function that applies it.
 * The scheduler runs every handler's measuring step before any of the applying steps, so one frame
 * never alternates between reading layout and writing styles (which would force a re-layout each time).
 */
type Handler = () => void | (() => void);

const handlers = new Set<{ current: Handler }>();
let queued = false;

const flush = () => {
  queued = false;
  const writes: (() => void)[] = [];
  handlers.forEach((h) => {
    const write = h.current();
    if (write) writes.push(write);
  });
  writes.forEach((write) => write());
};

const schedule = () => {
  if (queued) return;
  queued = true;
  requestAnimationFrame(flush);
};

/**
 * Runs `callback` once per animation frame while the page scrolls or resizes (and once on mount).
 * All callers share one scroll listener and one animation frame.
 */
export function useRafScroll(callback: Handler) {
  const latest = useRef(callback);

  useEffect(() => {
    latest.current = callback;
  });

  useEffect(() => {
    handlers.add(latest);
    if (handlers.size === 1) {
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
    }
    latest.current()?.();
    return () => {
      handlers.delete(latest);
      if (handlers.size === 0) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
    };
  }, []);
}
