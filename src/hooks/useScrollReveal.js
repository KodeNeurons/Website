import { useEffect, useRef, useState } from "react";

/**
 * Triggers a visibility flag when the element enters the viewport.
 * SSR/prerender-safe: defaults to visible=true when data-prerendered="true".
 */
export function useScrollReveal(threshold = 0.15) {
  const isPrerendered =
    typeof window === "undefined" ||
    (typeof document !== "undefined" &&
      document.documentElement.getAttribute("data-prerendered") === "true");

  const ref = useRef(null);
  const [visible, setVisible] = useState(isPrerendered);

  useEffect(() => {
    if (isPrerendered) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, isPrerendered]);

  return [ref, visible];
}
