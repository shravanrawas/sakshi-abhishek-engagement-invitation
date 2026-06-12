import { useEffect, type RefObject } from "react";

type UseAutoScrollOptions = {
  /** Milliseconds to wait before auto-scroll begins */
  delay?: number;
  /** Scroll speed in pixels per second */
  speed?: number;
  /** Scrollable container element */
  containerRef: RefObject<HTMLElement | null>;
};

export function useAutoScroll({
  delay = 3500,
  speed = 35,
  containerRef,
}: UseAutoScrollOptions) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let rafId = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let active = false;
    let paused = false;
    let lastTime = 0;
    let currentScroll = 0;

    const getContainer = () => containerRef.current;

    const maxScrollY = (container: HTMLElement) =>
      container.scrollHeight - container.clientHeight;

    const tick = (time: number) => {
      const container = getContainer();
      if (!container) {
        active = false;
        return;
      }

      if (paused || container.scrollTop >= maxScrollY(container) - 2) {
        active = false;
        return;
      }

      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      const step = (speed * delta) / 1000;
      currentScroll += step;
      container.scrollTop = Math.round(currentScroll);

      rafId = requestAnimationFrame(tick);
    };

    const start = () => {
      const container = getContainer();
      if (paused || !container) return;

      active = true;
      lastTime = 0;
      currentScroll = container.scrollTop;
      rafId = requestAnimationFrame(tick);
    };

    const pause = () => {
      if (!active) return;
      paused = true;
      active = false;
      cancelAnimationFrame(rafId);
    };

    const onUserInput = () => {
      if (active) pause();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const scrollKeys = ["ArrowUp", "ArrowDown", "PageUp", "PageDown", "Home", "End", " "];
      if (active && scrollKeys.includes(event.key)) pause();
    };

    timeoutId = setTimeout(start, delay);

    // Register user input handlers on window level so they are bound immediately
    // and reliably capture interactions anywhere on the page/scrollarea.
    window.addEventListener("wheel", onUserInput, { passive: true });
    window.addEventListener("touchmove", onUserInput, { passive: true });
    window.addEventListener("mousedown", onUserInput, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
      window.removeEventListener("wheel", onUserInput);
      window.removeEventListener("touchmove", onUserInput);
      window.removeEventListener("mousedown", onUserInput);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [delay, speed, containerRef]);
}
