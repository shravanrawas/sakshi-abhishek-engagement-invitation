import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
const mandala = "/assets/mandala-BOhiDTCa.png";
const heroCouple = "/assets/hero-couple-oEN1AHQZ.jpg";
const diya = "/assets/diya-CvOohRzz.png";
const ENGAGEMENT_DATE = /* @__PURE__ */ new Date("2026-06-23T11:30:00+05:30");
function getTimeLeft() {
  const diff = ENGAGEMENT_DATE.getTime() - Date.now();
  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(diff / (1e3 * 60 * 60 * 24)),
    hours: Math.floor(diff / (1e3 * 60 * 60) % 24),
    minutes: Math.floor(diff / (1e3 * 60) % 60),
    seconds: Math.floor(diff / 1e3 % 60)
  };
}
const UNITS = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" }
];
function Countdown() {
  const [timeLeft, setTimeLeft] = reactExports.useState(getTimeLeft);
  const hasArrived = timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0;
  reactExports.useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1e3);
    return () => clearInterval(timer);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-[0.4em] text-[color:var(--henna)]", children: "COUNTING DOWN TO" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2", children: "Our Special Day" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-4 mb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--gold)]", children: "✦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]" })
    ] }),
    hasArrived ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-5xl md:text-6xl text-[color:var(--maroon)] animate-reveal", children: "The celebration has begun!" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6", children: UNITS.map(({ key, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative bg-card/80 backdrop-blur rounded-2xl p-6 md:p-8 border border-[color:var(--gold)]/40 shadow-gold",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-4xl md:text-5xl text-[color:var(--maroon-deep)] tabular-nums", children: String(timeLeft[key]).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-3 h-px bg-[color:var(--gold)]/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs md:text-sm tracking-[0.25em] text-[color:var(--henna)]", children: label })
        ]
      },
      key
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 font-display text-sm tracking-[0.2em] text-[color:var(--henna)]", children: "23 JUNE 2026 · 11:30 AM" })
  ] }) });
}
function FallingPetals() {
  const petals = Array.from({ length: 18 });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 overflow-hidden z-0", children: petals.map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 12;
    const duration = 10 + Math.random() * 12;
    const size = 10 + Math.random() * 14;
    const colors = ["#f59e0b", "#ea580c", "#dc2626", "#fbbf24"];
    const color = colors[i % colors.length];
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute top-0 block rounded-full",
        style: {
          left: `${left}%`,
          width: size,
          height: size,
          background: `radial-gradient(circle at 30% 30%, ${color}, transparent 70%)`,
          animation: `float-petal ${duration}s linear ${delay}s infinite`,
          opacity: 0.7
        }
      },
      i
    );
  }) });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen paper-texture text-foreground overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(FallingPetals, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mandala, alt: "", "aria-hidden": true, className: "absolute inset-0 m-auto w-[min(90vw,800px)] opacity-20 animate-slow-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative animate-reveal", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-2xl md:text-3xl text-[color:var(--maroon)] mb-2", children: "॥ श्री गणेशाय नमः ॥" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display font-bold text-sm md:text-base tracking-[0.4em] text-[color:var(--henna)] mb-8", children: "ENGAGEMENT CEREMONY" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-script text-7xl md:text-9xl leading-none text-maroon-700 drop-shadow-sm", children: "Sakshi" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-4 my-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 md:w-24 bg-[color:var(--gold)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xl md:text-2xl text-[color:var(--maroon)]", children: "&" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-16 md:w-24 bg-[color:var(--gold)]" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-script text-7xl md:text-9xl leading-none text-maroon-700 drop-shadow-sm", children: "Abhishek" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 max-w-xl mx-auto italic font-bold text-lg md:text-xl text-[color:var(--henna)] leading-relaxed", children: '"Two souls, one journey — bound by destiny, blessed by tradition. Together with our families, we invite you to celebrate our union."' }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 inline-flex flex-col items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs tracking-[0.3em] text-[color:var(--henna)]", children: "SAVE THE DATE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl md:text-3xl text-[color:var(--maroon-deep)]", children: "23 · JUNE · 2026" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-scroll", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[10px] tracking-[0.3em] text-[color:var(--henna)]", children: "SCROLL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "text-[color:var(--maroon)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12l7 7 7-7" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-20 px-6 text-center bg-gradient-royal text-[color:var(--gold-light)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-3xl md:text-4xl mb-4", children: "वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-3xl md:text-4xl mb-8", children: "निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-6 mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-[color:var(--gold)]/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: diya, alt: "", "aria-hidden": true, className: "w-14 h-14 animate-flicker" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px flex-1 bg-[color:var(--gold)]/40" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display tracking-[0.3em] text-sm md:text-base text-[color:var(--gold-light)]/90", children: [
          "WITH THE DIVINE BLESSINGS OF LORD GANESHA",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "AND OUR BELOVED FAMILIES"
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Countdown, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden shadow-deep border-4 border-[color:var(--gold)]/60", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroCouple, alt: "Sakshi and Abhishek", className: "w-full h-auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/40 rounded-3xl pointer-events-none" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center mt-8 font-script text-5xl md:text-6xl text-[color:var(--maroon)]", children: "Forever begins with a promise" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-[0.4em] text-[color:var(--henna)]", children: "CEREMONIES" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2", children: "Our Celebrations" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[color:var(--gold)]", children: "✦" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: [{
          name: "Date",
          date: "23 june 2026",
          icon: "🗓️"
        }, {
          name: "Time",
          time: "11:30 AM",
          icon: "🕒"
        }].map((e) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative bg-card/80 backdrop-blur rounded-2xl p-8 text-center border border-[color:var(--gold)]/40 shadow-gold hover:-translate-y-2 transition-transform duration-500", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-5xl mb-4 transition-transform duration-500 group-hover:scale-110", children: e.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-[color:var(--maroon)] tracking-widest", children: e.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "my-4 h-px bg-[color:var(--gold)]/50" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm tracking-widest font-bold text-[color:var(--maroon)]/80 mt-1", children: e.date }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm tracking-widest font-bold text-[color:var(--maroon)]/80 mt-1", children: e.time })
        ] }, e.name)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 bg-gradient-royal text-[color:var(--gold-light)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-[0.4em] opacity-80", children: "VENUE" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-script text-6xl md:text-7xl mt-2 text-[color:var(--gold-light)]", children: "Arjuna Lawns" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-center gap-3 mt-4 mb-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]/60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "✦" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-12 bg-[color:var(--gold)]/60" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-lg font-bold opacity-90 leading-relaxed", children: [
          "Shevgaon - Pathardi Road ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Pathardi, Maharashtra"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/maps/place/Arjuna+Lawns/@19.182145,75.1713894,17z", target: "_blank", rel: "noreferrer", className: "inline-block mt-8 px-8 py-3 bg-[color:var(--gold)] text-[color:var(--maroon-deep)] font-display tracking-[0.25em] text-sm rounded-full shadow-gold hover:scale-105 transition-transform", children: "📍 VIEW ON MAP" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 rounded-2xl overflow-hidden border-2 border-[color:var(--gold)]/50 shadow-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Venue location", src: "https://maps.google.com/maps?q=Arjuna%20Lawns%20Pathardi&t=&z=17&ie=UTF8&iwloc=&output=embed", className: "w-full h-80 grayscale-[0.2] contrast-105", loading: "lazy" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative py-24 px-6 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-xs tracking-[0.4em] text-[color:var(--henna)]", children: "WITH BLESSINGS OF" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2", children: "Our Families" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-12", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/70 backdrop-blur rounded-2xl p-10 border border-[color:var(--gold)]/40 shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-2xl text-[color:var(--saffron)]", children: "Bride" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider", children: "Rawas's Family" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-[color:var(--gold)] mx-auto my-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card/70 backdrop-blur rounded-2xl p-10 border border-[color:var(--gold)]/40 shadow-gold", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-2xl text-[color:var(--saffron)]", children: "Groom" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider", children: "Rodi's Family" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-16 bg-[color:var(--gold)] mx-auto my-4" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative py-24 px-6 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl mx-auto bg-gradient-royal text-[color:var(--gold-light)] rounded-3xl p-12 shadow-deep border-2 border-[color:var(--gold)]/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: diya, alt: "", "aria-hidden": true, className: "w-12 h-12 mx-auto animate-flicker" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-hindi text-2xl mt-4", children: "तुमची उपस्थिती हाच आमच्यासाठी आशीर्वाद आहे" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-script text-5xl md:text-6xl mt-4 text-[color:var(--gold-light)]", children: "Bless us with your presence" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 opacity-90 leading-relaxed", children: "Kindly confirm your attendance so we may welcome you with all our love." })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative py-12 px-6 text-center border-t border-[color:var(--gold)]/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mandala, alt: "", "aria-hidden": true, className: "w-24 mx-auto opacity-60 animate-slow-spin" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-script text-4xl text-[color:var(--maroon)] mt-4", children: "Sakshi & Abhishek" })
      ] })
    ] })
  ] });
}
export {
  Index as component
};
