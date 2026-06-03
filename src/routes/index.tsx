import { createFileRoute } from "@tanstack/react-router";
import mandala from "@/assets/mandala.png";
import heroCouple from "@/assets/hero-couple.jpg";
import garland from "@/assets/marigold-garland.png";
import diya from "@/assets/diya.png";
import { FallingPetals } from "@/components/FallingPetals";

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
  return (
    <div className="relative min-h-screen paper-texture text-foreground overflow-hidden">
      <FallingPetals />

      {/* Top garland */}
      <img
        src={garland}
        alt=""
        aria-hidden
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-10"
      />

      <main className="relative z-20">
        {/* HERO */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20 text-center">
          <img
            src={mandala}
            alt=""
            aria-hidden
            className="absolute inset-0 m-auto w-[min(90vw,800px)] opacity-20 animate-slow-spin"
          />
          <div className="relative animate-reveal">
            <p className="font-hindi text-2xl md:text-3xl text-[color:var(--maroon)] mb-2">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="font-display text-sm md:text-base tracking-[0.4em] text-[color:var(--henna)] mb-8">
              ENGAGEMENT  ·  सगाई
            </p>

            <h1 className="font-script text-7xl md:text-9xl leading-none text-gradient-gold animate-shimmer drop-shadow-sm"
                style={{ backgroundImage: "linear-gradient(90deg,#b8860b,#fde68a,#b8860b,#7c2d12)" }}>
              Sakshi
            </h1>
            <div className="flex items-center justify-center gap-4 my-3">
              <span className="h-px w-16 md:w-24 bg-[color:var(--gold)]" />
              <span className="font-display text-xl md:text-2xl text-[color:var(--maroon)]">&amp;</span>
              <span className="h-px w-16 md:w-24 bg-[color:var(--gold)]" />
            </div>
            <h1 className="font-script text-7xl md:text-9xl leading-none text-gradient-gold animate-shimmer drop-shadow-sm"
                style={{ backgroundImage: "linear-gradient(90deg,#b8860b,#fde68a,#b8860b,#7c2d12)" }}>
              Abhishek
            </h1>

            <p className="mt-8 max-w-xl mx-auto italic text-lg md:text-xl text-[color:var(--henna)] leading-relaxed">
              "Two souls, one journey — bound by destiny, blessed by tradition.
              Together with our families, we invite you to celebrate our union."
            </p>

            <div className="mt-10 inline-flex flex-col items-center gap-2">
              <span className="font-display text-xs tracking-[0.3em] text-[color:var(--henna)]">SAVE THE DATE</span>
              <span className="font-display text-2xl md:text-3xl text-[color:var(--maroon-deep)]">
                15 · FEBRUARY · 2026
              </span>
            </div>
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
              WITH THE DIVINE BLESSINGS OF LORD GANESHA<br/>
              AND OUR BELOVED FAMILIES
            </p>
          </div>
        </section>

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

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Haldi", hindi: "हल्दी", time: "10:00 AM", date: "14 Feb 2026", icon: "🌼" },
              { name: "Sagai", hindi: "सगाई", time: "6:30 PM", date: "15 Feb 2026", icon: "💍" },
              { name: "Reception", hindi: "स्वागत", time: "8:00 PM", date: "15 Feb 2026", icon: "🎉" },
            ].map((e) => (
              <div
                key={e.name}
                className="group relative bg-card/80 backdrop-blur rounded-2xl p-8 text-center border border-[color:var(--gold)]/40 shadow-gold hover:-translate-y-2 transition-transform duration-500"
              >
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">{e.icon}</div>
                <h3 className="font-display text-2xl text-[color:var(--maroon)] tracking-widest">{e.name}</h3>
                <p className="font-hindi text-xl text-[color:var(--saffron)] mt-1">{e.hindi}</p>
                <div className="my-4 h-px bg-[color:var(--gold)]/50" />
                <p className="text-[color:var(--henna)] text-lg">{e.date}</p>
                <p className="font-display text-sm tracking-widest text-[color:var(--maroon)]/80 mt-1">{e.time}</p>
              </div>
            ))}
          </div>
        </section>

        {/* VENUE / LOCATION */}
        <section className="relative py-24 px-6 bg-gradient-royal text-[color:var(--gold-light)]">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-display text-xs tracking-[0.4em] opacity-80">VENUE</p>
            <h2 className="font-script text-6xl md:text-7xl mt-2 text-[color:var(--gold-light)]">The Sacred Place</h2>
            <div className="flex items-center justify-center gap-3 mt-4 mb-10">
              <span className="h-px w-12 bg-[color:var(--gold)]/60" />
              <span>✦</span>
              <span className="h-px w-12 bg-[color:var(--gold)]/60" />
            </div>

            <h3 className="font-display text-3xl md:text-4xl tracking-wider">The Leela Palace</h3>
            <p className="mt-3 text-lg opacity-90 leading-relaxed">
              Diplomatic Enclave, Chanakyapuri<br/>
              New Delhi, India — 110023
            </p>

            <a
              href="https://maps.google.com/?q=The+Leela+Palace+New+Delhi"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-8 px-8 py-3 bg-[color:var(--gold)] text-[color:var(--maroon-deep)] font-display tracking-[0.25em] text-sm rounded-full shadow-gold hover:scale-105 transition-transform"
            >
              VIEW ON MAP
            </a>

            <div className="mt-12 rounded-2xl overflow-hidden border-2 border-[color:var(--gold)]/50 shadow-deep">
              <iframe
                title="Venue location"
                src="https://www.google.com/maps?q=The+Leela+Palace+New+Delhi&output=embed"
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
              <p className="font-hindi text-2xl text-[color:var(--saffron)]">वधू पक्ष</p>
              <h3 className="font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider">Sakshi's Family</h3>
              <div className="h-px w-16 bg-[color:var(--gold)] mx-auto my-4" />
              <p className="text-lg text-[color:var(--henna)]">Mr. & Mrs. Sharma</p>
              <p className="text-sm italic mt-1 text-[color:var(--maroon)]/70">Proud Parents</p>
            </div>
            <div className="bg-card/70 backdrop-blur rounded-2xl p-10 border border-[color:var(--gold)]/40 shadow-gold">
              <p className="font-hindi text-2xl text-[color:var(--saffron)]">वर पक्ष</p>
              <h3 className="font-display text-2xl text-[color:var(--maroon)] mt-2 tracking-wider">Abhishek's Family</h3>
              <div className="h-px w-16 bg-[color:var(--gold)] mx-auto my-4" />
              <p className="text-lg text-[color:var(--henna)]">Mr. & Mrs. Verma</p>
              <p className="text-sm italic mt-1 text-[color:var(--maroon)]/70">Proud Parents</p>
            </div>
          </div>
        </section>

        {/* RSVP */}
        <section className="relative py-24 px-6 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-royal text-[color:var(--gold-light)] rounded-3xl p-12 shadow-deep border-2 border-[color:var(--gold)]/50">
            <img src={diya} alt="" aria-hidden className="w-12 h-12 mx-auto animate-flicker" />
            <p className="font-hindi text-2xl mt-4">आपकी उपस्थिति ही हमारा आशीर्वाद है</p>
            <h2 className="font-script text-5xl md:text-6xl mt-4 text-[color:var(--gold-light)]">Bless us with your presence</h2>
            <p className="mt-6 opacity-90 leading-relaxed">
              Kindly confirm your attendance so we may welcome you with all our love.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="relative py-12 px-6 text-center border-t border-[color:var(--gold)]/40">
          <img src={mandala} alt="" aria-hidden className="w-24 mx-auto opacity-60 animate-slow-spin" />
          <p className="font-script text-4xl text-[color:var(--maroon)] mt-4">Sakshi &amp; Abhishek</p>
          <p className="font-hindi text-lg text-[color:var(--saffron)] mt-1">शुभ विवाह</p>
          <p className="font-display text-xs tracking-[0.3em] text-[color:var(--henna)] mt-4">
            #SAKSHIxABHISHEK  ·  2026
          </p>
        </footer>
      </main>
    </div>
  );
}
