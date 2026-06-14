import { useEffect, useRef } from "react";

const audioSrc = new URL("../heaventune-traditional-melody-soft-music-465231.mp3", import.meta.url).href;

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    audioEl.loop = true;
    audioEl.volume = 0.7;
    audioEl.preload = "auto";
    audioEl.playsInline = true;
    audioEl.muted = true;
    audioEl.src = audioSrc;
    audioEl.load();

    let started = false;

    const tryPlay = async () => {
      if (started) {
        return;
      }

      try {
        const promise = audioEl.play();
        if (promise && typeof promise.catch === "function") {
          await promise;
        }
        started = true;
      } catch {
        // Autoplay blocked until user gesture.
      }
    };

    const unmuteOnGesture = () => {
      if (!started) {
        return;
      }
      audioEl.muted = false;
    };

    const handleGesture = () => {
      void tryPlay().then(() => {
        if (audioEl.paused === false) {
          audioEl.muted = false;
        }
      });
    };

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        void tryPlay();
      }
    };

    void tryPlay();
    const timeoutId = window.setTimeout(() => void tryPlay(), 200);

    audioEl.addEventListener("canplaythrough", tryPlay, { once: true });
    window.addEventListener("pointerdown", handleGesture, { once: true });
    window.addEventListener("keydown", handleGesture, { once: true });
    window.addEventListener("touchend", handleGesture, { once: true });
    window.addEventListener("scroll", handleGesture, { once: true });
    window.addEventListener("focus", handleVisibility);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      window.clearTimeout(timeoutId);
      audioEl.removeEventListener("canplaythrough", tryPlay);
      window.removeEventListener("pointerdown", handleGesture);
      window.removeEventListener("keydown", handleGesture);
      window.removeEventListener("touchend", handleGesture);
      window.removeEventListener("scroll", handleGesture);
      window.removeEventListener("focus", handleVisibility);
      document.removeEventListener("visibilitychange", handleVisibility);
      audioEl.pause();
      audioEl.currentTime = 0;
    };
  }, []);

  return <audio ref={audioRef} style={{ display: "none" }} />;
}
