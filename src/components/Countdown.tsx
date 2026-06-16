import { useEffect, useState } from "react";

const ENGAGEMENT_DATE = new Date("2026-06-23T11:30:00+05:30");

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = ENGAGEMENT_DATE.getTime() - Date.now();

  if (isNaN(diff) || diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const UNITS: { key: keyof TimeLeft; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const hasArrived =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-display text-xs tracking-[0.4em] text-[color:var(--henna)]">
          COUNTING DOWN TO
        </p>
        <h2 className="font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2">
          Our Special Day
        </h2>
        <div className="flex items-center justify-center gap-3 mt-4 mb-12">
          <span className="h-px w-12 bg-[color:var(--gold)]" />
          <span className="text-[color:var(--gold)]">✦</span>
          <span className="h-px w-12 bg-[color:var(--gold)]" />
        </div>

        {hasArrived ? (
          <p className="font-script text-5xl md:text-6xl text-[color:var(--maroon)] animate-reveal">
            The celebration has begun!
          </p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {UNITS.map(({ key, label }) => (
              <div
                key={key}
                className="relative bg-card/80 backdrop-blur rounded-2xl p-6 md:p-8 border border-[color:var(--gold)]/40 shadow-gold"
              >
                <span className="font-display text-4xl md:text-5xl text-[color:var(--maroon-deep)] tabular-nums">
                  {String(timeLeft[key]).padStart(2, "0")}
                </span>
                <div className="my-3 h-px bg-[color:var(--gold)]/50" />
                <span className="font-display text-xs md:text-sm tracking-[0.25em] text-[color:var(--henna)]">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}

        <p className="mt-10 font-display text-sm tracking-[0.2em] text-[color:var(--henna)]">
          23 JUNE 2026 · 11:30 AM
        </p>
      </div>
    </section>
  );
}
