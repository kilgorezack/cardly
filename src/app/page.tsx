import Link from "next/link";

const features = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
      </svg>
    ),
    title: "Digital Business Cards",
    description:
      "Create a polished digital card with your name, title, photo, social links, and custom questions that showcase your personality.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    title: "Seamless Card Exchange",
    description:
      "Trade cards 1:1 instantly via QR code or link. Both parties get each other's info in one smooth interaction.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
    title: "Events & Networking",
    description:
      "Discover and join events, see who's attending, and unlock event context on every card you collect.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
      </svg>
    ),
    title: "Smart Organization",
    description:
      "Tag relationships, add notes and emojis, filter and search your contacts. Never lose track of a connection.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
      </svg>
    ),
    title: "Enterprise Ready",
    description:
      "Team dashboards, SSO integration, CRM syncing, branded card templates, and analytics for the whole organization.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-7 w-7">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: "Eco-Friendly Networking",
    description:
      "Go paperless. Reduce waste and always have your card ready — no reprinting when your info changes.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-cream">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-sage/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-brand-orange/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28 lg:pt-36">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-brand-navy/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-navy">
              Now available on iOS
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-5xl lg:text-6xl">
              Your business card,{" "}
              <span className="text-brand-green">reimagined</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Cardly replaces paper business cards with a beautiful digital experience.
              Exchange contact info instantly, organize your network, and never lose a connection again.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center rounded-full bg-brand-navy px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-navy/25 transition hover:bg-brand-navy/90"
              >
                Download for Free
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-brand-sage/30 bg-white py-8">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 text-sm font-medium text-foreground/50">
          <span>Trusted by professionals worldwide</span>
          <span className="hidden h-4 w-px bg-brand-sage/50 sm:block" />
          <span>Paperless networking</span>
          <span className="hidden h-4 w-px bg-brand-sage/50 sm:block" />
          <span>Enterprise-grade security</span>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Everything you need to network smarter
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-foreground/60">
              From creating your card to managing an entire team, Cardly has you covered.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-brand-sage/30 bg-white p-8 transition hover:border-brand-orange/50 hover:shadow-lg hover:shadow-brand-orange/10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-cream text-brand-navy transition group-hover:bg-brand-orange/20">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-brand-cream py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-brand-navy sm:text-4xl">
              Get started in minutes
            </h2>
          </div>
          <div className="mx-auto mt-16 grid max-w-4xl gap-12 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "Create your card",
                desc: "Add your name, title, photo, and social links to build a stunning digital card.",
              },
              {
                step: "02",
                title: "Share & exchange",
                desc: "Swap cards via QR code or link at events, meetings, or anywhere you connect.",
              },
              {
                step: "03",
                title: "Grow your network",
                desc: "Organize contacts with tags, notes, and search. Your digital Rolodex, always in your pocket.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy text-lg font-bold text-white">
                  {item.step}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/60">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to ditch the paper?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-white/70">
            Join thousands of professionals who have upgraded to Cardly. Start free and upgrade when you&apos;re ready.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-brand-navy shadow-lg transition hover:bg-brand-orange/90"
            >
              Download Cardly Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
