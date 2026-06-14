import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import mandala from "@/assets/mandala.png";
import heroCouple from "@/assets/hero-couple.jpg";
import diya from "@/assets/diya.png";
import { Countdown } from "@/components/Countdown";
import { FallingPetals } from "@/components/FallingPetals";
import { BackgroundAudio } from "@/components/BackgroundAudio";
import { useAutoScroll } from "@/hooks/use-auto-scroll";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi & Abhishek — Engagement Invitation" },
      { name: "description", content: "With the blessings of our families, we joyfully invite you to the engagement ceremony of Sakshi & Abhishek." },
      { property: "og:title", content: "Sakshi weds Abhishek — Engagement" },
      { property: "og:description", content: "Join us as we celebrate the engagement of Sakshi & Abhishek with love, laughter and blessings." },
    ],
  }),
  component: Index,
});

function Index() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [opened, setOpened] = useState(false);
  useAutoScroll({ delay: opened ? 2000 : 999999, speed: 75, containerRef: scrollRef });

  return (
    <div
      ref={scrollRef}
      className="relative h-screen overflow-y-auto overflow-x-hidden paper-texture text-foreground"
    >
      <FallingPetals />
      <main className="relative z-20">
        <BackgroundAudio />
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <img
            src={mandala}
            alt=""
            aria-hidden
            className="absolute inset-0 m-auto w-[min(90vw,800px)] opacity-20 animate-slow-spin"
          />
          {!opened ? (
            <div className="absolute inset-0 z-30 flex items-center justify-center bg-[rgba(12,8,4,0.92)] px-6">
              <div className="max-w-md rounded-[2.25rem] border-2 border-[color:var(--gold)]/80 bg-[rgba(255,255,255,0.12)] p-10 text-center shadow-[0_50px_120px_-55px_rgba(112,76,41,0.8)] backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.55em] text-[color:var(--gold)] mb-4">ENGAGEMENT INVITATION</p>
                <h2 className="font-script text-5xl text-[color:var(--maroon)] mb-4 leading-tight">
                  
                  <span className="block text-2xl font-display text-[color:var(--gold-light)] mt-2">Open The Door</span>
                </h2>
                <p className="text-sm leading-7 text-[color:var(--gold-light)]/95 mb-10">
                  आमच्या प्रेमाच्या प्रवासात<br />सहभागी होण्यासाठी स्वागत आहे
                </p>
                <p className="text-[0.78rem] uppercase tracking-[0.35em] text-[color:var(--gold)] mb-8">
                  Tap to begin
                </p>
                <button
                  type="button"
                  onClick={() => setOpened(true)}
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[color:var(--gold)] to-[color:var(--gold-light)] px-10 py-3 text-sm font-semibold text-[color:var(--maroon-deep)] shadow-lg shadow-[rgba(149,115,16,0.35)] transition-transform duration-300 hover:-translate-y-0.5"
                >
                  सुरू करा
                  
                </button>
              </div>
            </div>
          ) : null}
          <div className="relative animate-reveal">
            <p className="font-hindi text-2xl md:text-3xl text-[color:var(--maroon)] mb-2">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="font-display font-bold text-sm md:text-base tracking-[0.4em] text-[color:var(--henna)] mb-8">
              ENGAGEMENT CEREMONY
            </p>

            <h1 className="font-script text-7xl md:text-9xl leading-none text-maroon-700 drop-shadow-sm">
              Sakshi
            </h1>
            <div className="flex items-center justify-center gap-4 my-3">
              <span className="h-px w-16 md:w-24 bg-[color:var(--gold)]" />
              <span className="font-display text-xl md:text-2xl text-[color:var(--maroon)]">&amp;</span>
              <span className="h-px w-16 md:w-24 bg-[color:var(--gold)]" />
            </div>
            <h1 className="font-script text-7xl md:text-9xl leading-none text-maroon-700 drop-shadow-sm">
              Abhishek
            </h1>

            <p className="mt-8 max-w-xl mx-auto italic font-bold text-lg md:text-xl text-[color:var(--henna)] leading-relaxed">
              "Two souls, one journey — bound by destiny, blessed by tradition.
              Together with our families, we invite you to celebrate our union."
            </p>

            <div className="mt-10 inline-flex flex-col items-center gap-2">
              <span className="font-display text-xs tracking-[0.3em] text-[color:var(--henna)]">SAVE THE DATE</span>
              <span className="font-display text-2xl md:text-3xl text-[color:var(--maroon-deep)]">
                23 · JUNE · 2026
              </span>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-scroll">
            <span className="font-display text-[10px] tracking-[0.3em] text-[color:var(--henna)]">SCROLL</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[color:var(--maroon)]">
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        {/* GANESH BLESSING */}
        <section className="relative py-20 px-6 text-center bg-gradient-royal text-[color:var(--gold-light)]">
          <div className="max-w-3xl mx-auto">
            <p className="font-hindi text-3xl md:text-4xl mb-4">
              वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ
            </p>
            <p className="font-hindi text-3xl md:text-4xl mb-8">
              निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा ॥
            </p>
            <div className="flex items-center justify-center gap-6 mb-8">
              <span className="h-px flex-1 bg-[color:var(--gold)]/40" />
              <img src={diya} alt="" aria-hidden className="w-14 h-14 animate-flicker" />
              <span className="h-px flex-1 bg-[color:var(--gold)]/40" />
            </div>
            <p className="font-display tracking-[0.3em] text-sm md:text-base text-[color:var(--gold-light)]/90">
              WITH THE DIVINE BLESSINGS OF LORD GANESHA<br />
              AND OUR BELOVED FAMILIES
            </p>
          </div>
        </section>

        {/* COUNTDOWN */}
        <Countdown />

        {/* COUPLE IMAGE */}
        <section className="relative py-24 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-deep border-4 border-[color:var(--gold)]/60">
              <img src={heroCouple} alt="Sakshi and Abhishek" className="w-full h-auto" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[color:var(--gold)]/40 rounded-3xl pointer-events-none" />
            </div>
            <p className="text-center mt-8 font-script text-5xl md:text-6xl text-[color:var(--maroon)]">
              Forever begins with a promise
            </p>
          </div>
        </section>

        {/* EVENT DETAILS */}
        <section className="relative py-24 px-6">
          <div className="text-center mb-16">
            <p className="font-display text-xs tracking-[0.4em] text-[color:var(--henna)]">CEREMONIES</p>
            <h2 className="font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2">Our Celebrations</h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-12 bg-[color:var(--gold)]" />
              <span className="text-[color:var(--gold)]">✦</span>
              <span className="h-px w-12 bg-[color:var(--gold)]" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Date", date: "23 june 2026", icon: "🗓️" },
              { name: "Time", time: "11:30 AM", icon: "🕒" },
            ].map((e) => (
              <div
                key={e.name}
                className="group relative bg-card/80 backdrop-blur rounded-2xl p-8 text-center border border-[color:var(--gold)]/40 shadow-gold hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">{e.icon}</div>
                <h3 className="font-display text-2xl text-[color:var(--maroon)] tracking-widest">{e.name}</h3>
                <div className="my-4 h-px bg-[color:var(--gold)]/50" />
                <p className="font-display text-sm tracking-widest font-bold text-[color:var(--maroon)]/80 mt-1">
                  {e.date}
                </p>
                <p className="font-display text-sm tracking-widest font-bold text-[color:var(--maroon)]/80 mt-1">{e.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VENUE / LOCATION */}
        <section className="relative py-24 px-6 bg-gradient-royal text-[color:var(--gold-light)]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-xs tracking-[0.4em] opacity-80">VENUE</p>
            <h2 className="font-script text-6xl md:text-7xl mt-2 text-[color:var(--gold-light)]">Arjuna Lawns</h2>
            <div className="flex items-center justify-center gap-3 mt-4 mb-10">
              <span className="h-px w-12 bg-[color:var(--gold)]/60" />
              <span>✦</span>
              <span className="h-px w-12 bg-[color:var(--gold)]/60" />
            </div>

            <p className="mt-3 text-lg font-bold opacity-90 leading-relaxed">
              Shevgaon - Pathardi Road <br />
              Pathardi, Maharashtra
            </p>

            <a
              href="https://maps.google.com/maps?q=Arjuna%20Lawns%20Pathardi&t=&z=17&ie=UTF8&iwloc=&output=embed"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-8 py-3 bg-[color:var(--gold)] text-[color:var(--maroon-deep)] font-display tracking-[0.25em] text-sm rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              📍 VIEW ON MAP
            </a>

            <div className="mt-12 rounded-2xl overflow-hidden border-2 border-[color:var(--gold)]/50 shadow-deep">
              <iframe
                title="Venue location"
                src="https://maps.google.com/maps?q=Arjuna%20Lawns%20Pathardi&t=&z=17&ie=UTF8&iwloc=&output=embed"
                className="w-full h-80 grayscale-[0.2] contrast-105"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* FAMILIES */}
        <section className="relative py-24 px-6 text-center">
          <p className="font-display text-xs tracking-[0.4em] text-[color:var(--henna)]">WITH BLESSINGS OF</p>
          <h2 className="font-script text-6xl md:text-7xl text-[color:var(--maroon)] mt-2">Our Families</h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto mt-12">
            <div className="bg-card/70 backdrop-blur rounded-2xl p-10 border border-[color:var(--gold)]/40 shadow-gold">
              <p className="font-hindi text-2xl text-[color:var(--saffron)]">Bride</p>
              <h3 className="font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider">Rawas's Family</h3>
              <div className="h-px w-16 bg-[color:var(--gold)] mx-auto my-4" />
            </div>
            <div className="bg-card/70 backdrop-blur rounded-2xl p-10 border border-[color:var(--gold)]/40 shadow-gold">
              <p className="font-hindi text-2xl text-[color:var(--saffron)]">Groom</p>
              <h3 className="font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider">Rodi's Family</h3>
              <div className="h-px w-16 bg-[color:var(--gold)] mx-auto my-4" />
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section className="relative py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-royal text-[color:var(--gold-light)] rounded-3xl p-12 shadow-deep border-2 border-[color:var(--gold)]/50">
            <img src={diya} alt="" aria-hidden className="w-12 h-12 mx-auto animate-flicker" />
            <p className="font-hindi text-2xl mt-4">
              तुमची उपस्थिती हाच आमच्यासाठी आशीर्वाद आहे
            </p>
            <h2 className="font-script text-5xl md:text-6xl mt-4 text-[color:var(--gold-light)]">Bless us with your presence</h2>
            <p className="mt-6 opacity-90 leading-relaxed">
              Kindly confirm your attendance so we may welcome you with all our love.
            </p>
            {/* <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+919876543210"
                className="px-8 py-3 bg-[color:var(--gold)] text-[color:var(--maroon-deep)] font-display tracking-[0.25em] text-sm rounded-full shadow-gold hover:scale-105 transition-transform"
              >
                CALL TO RSVP
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-3 border border-[color:var(--gold)] text-[color:var(--gold-light)] font-display tracking-[0.25em] text-sm rounded-full hover:bg-[color:var(--gold)] hover:text-[color:var(--maroon-deep)] transition-colors"
              >
                WHATSAPP
              </a>
            </div> */}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-12 px-6 text-center border-t border-[color:var(--gold)]/40">
          <img src={mandala} alt="" aria-hidden className="w-24 mx-auto opacity-60 animate-slow-spin" />
          <p className="font-script text-4xl text-[color:var(--maroon)] mt-4">Sakshi &amp; Abhishek</p>
          {/* <p className="font-display text-xs tracking-[0.3em] text-[color:var(--henna)] mt-4">
            #SAKSHIxABHISHEK  ·  2026
          </p> */}
        </footer>
      </main>
    </div>
  );
}
