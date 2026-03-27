import { useEffect, useState } from "react";

/**
 * Animates a number from 0 to target when active becomes true.
 * SSR/prerender-safe: returns target immediately when data-prerendered="true".
 */
export function useCounter(target, active, duration = 1400) {
  const isPrerendered =
    typeof window === "undefined" ||
    (typeof document !== "undefined" &&
      document.documentElement.getAttribute("data-prerendered") === "true");

  const [val, setVal] = useState(isPrerendered ? target : 0);

  useEffect(() => {
    if (isPrerendered) return undefined;
    if (!active) return;
    let cur = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      cur += step;
      if (cur >= target) {
        setVal(target);
        clearInterval(timer);
      } else {
        setVal(Math.floor(cur));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, duration, isPrerendered, target]);

  return val;
}
