import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing — Cardly",
  description: "Choose the Cardly plan that fits your networking needs. Free, Pro, and Enterprise tiers available.",
};

type Feature = {
  name: string;
  benefit: string;
  free: boolean;
  pro: boolean;
  enterprise: boolean;
};

type Category = {
  name: string;
  features: Feature[];
};

const categories: Category[] = [
  {
    name: "Profile & Card Creation",
    features: [
      { name: "Basic profile (Name, Company, Title)", benefit: "Get started networking with essential info", free: true, pro: true, enterprise: true },
      { name: "Profile photo", benefit: "Put a face to your name — boost recall after events", free: false, pro: true, enterprise: true },
      { name: "Social links", benefit: "Drive traffic to LinkedIn, portfolio, or socials", free: false, pro: true, enterprise: true },
      { name: "Custom questions / work style", benefit: "Stand out with personality and communication preferences", free: false, pro: true, enterprise: true },
      { name: "Generate & share a digital card", benefit: "Ditch paper cards — share instantly via link or QR", free: true, pro: true, enterprise: true },
      { name: "Edit basic profile info", benefit: "Keep your card current as roles change", free: true, pro: true, enterprise: true },
      { name: "Custom card templates & branding", benefit: "Company-branded cards that reinforce your identity", free: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Card Exchange & Storage",
    features: [
      { name: "Trade cards 1:1", benefit: "Seamless mutual exchange — both parties get each other's info", free: true, pro: true, enterprise: true },
      { name: "View & store received cards", benefit: "Build a digital Rolodex of every connection", free: true, pro: true, enterprise: true },
      { name: "View advanced profile data on cards", benefit: "See the full picture — photo, links, work style", free: false, pro: true, enterprise: true },
      { name: "Tag relationships", benefit: "Organize contacts by context (client, mentor, lead, etc.)", free: false, pro: true, enterprise: true },
      { name: "Add notes & emojis to contacts", benefit: "Remember key details and conversation highlights", free: false, pro: true, enterprise: true },
      { name: "Filter, search & enrich cards", benefit: "Instantly find the right person when you need them", free: false, pro: true, enterprise: true },
      { name: "Bulk card management & export", benefit: "Integrate with CRM or share contact lists with your team", free: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Events & Networking",
    features: [
      { name: "View & join events", benefit: "Discover networking opportunities in your area or industry", free: false, pro: true, enterprise: true },
      { name: "See event attendees", benefit: "Know who's in the room before you walk in", free: false, pro: true, enterprise: true },
      { name: "Unlock event context on cards", benefit: "See where you met someone and shared connections", free: false, pro: true, enterprise: true },
      { name: "Create & host events", benefit: "Run your own networking events with built-in card exchange", free: false, pro: false, enterprise: true },
      { name: "Event analytics & engagement reports", benefit: "Measure ROI on networking events and sponsorships", free: false, pro: false, enterprise: true },
    ],
  },
  {
    name: "Enterprise & Admin",
    features: [
      { name: "Team management dashboard", benefit: "Centralized control over all employee cards and branding", free: false, pro: false, enterprise: true },
      { name: "SSO / SAML integration", benefit: "Secure, seamless login aligned with company IT policies", free: false, pro: false, enterprise: true },
      { name: "CRM integration (Salesforce, HubSpot)", benefit: "Auto-sync new contacts into your sales pipeline", free: false, pro: false, enterprise: true },
      { name: "Analytics & reporting", benefit: "Track networking activity and connection ROI across the org", free: false, pro: false, enterprise: true },
      { name: "Priority support & onboarding", benefit: "Dedicated help to get your team up and running fast", free: false, pro: false, enterprise: true },
    ],
  },
];

const Check = () => (
  <svg className="mx-auto h-5 w-5 text-brand-green" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const Cross = () => (
  <svg className="mx-auto h-5 w-5 text-foreground/20" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-brand-cream py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
            Simple, transparent pricing
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-foreground/60">
            Start free. Upgrade when you&apos;re ready. Enterprise solutions for teams that mean business.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="-mt-8 pb-24">
        <div className="mx-auto grid max-w-5xl gap-8 px-6 lg:grid-cols-3">
          {/* Free */}
          <div className="flex flex-col rounded-2xl border border-brand-sage/30 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy">Free</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-brand-navy">$0</span>
              <span className="text-sm text-foreground/50">/forever</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Get started with the basics. Create a card, trade with others, and build your digital Rolodex.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Basic profile (Name, Company, Title)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Generate & share a digital card
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Trade cards 1:1
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                View & store received cards
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Edit basic profile info
              </li>
            </ul>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="block rounded-full bg-brand-navy px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-brand-navy/90"
              >
                Get Started Free
              </a>
            </div>
          </div>

          {/* Pro */}
          <div className="relative flex flex-col rounded-2xl border-2 border-brand-orange bg-white p-8 shadow-lg shadow-brand-orange/10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy">
              Most Popular
            </div>
            <h3 className="text-lg font-semibold text-brand-navy">Pro</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-brand-navy">$1.99</span>
              <span className="text-sm text-foreground/50">/month</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              Unlock the full experience. Photos, social links, events, smart search, and more.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Everything in Free
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Profile photo & social links
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Custom questions / work style
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Tags, notes & smart search
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Events, attendees & event context
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Advanced profile data on cards
              </li>
            </ul>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="block rounded-full bg-brand-orange px-6 py-3 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-orange/90"
              >
                Start Pro Subscription
              </a>
            </div>
          </div>

          {/* Enterprise */}
          <div className="flex flex-col rounded-2xl border border-brand-sage/30 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy">Enterprise</h3>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-brand-navy">Custom</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/60">
              For teams and organizations. Branded cards, CRM integrations, SSO, analytics, and dedicated support.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-foreground/70">
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Everything in Pro
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Custom card templates & branding
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Team management dashboard
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                SSO / SAML & CRM integration
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Event hosting & analytics
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-0.5 text-brand-green">&#10003;</span>
                Priority support & onboarding
              </li>
            </ul>
            <div className="mt-auto pt-8">
              <a
                href="#"
                className="block rounded-full border-2 border-brand-navy px-6 py-3 text-center text-sm font-semibold text-brand-navy transition hover:bg-brand-navy hover:text-white"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="bg-brand-cream py-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-brand-navy">
            Full feature comparison
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-brand-sage/30 bg-white">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-brand-sage/30">
                  <th className="px-6 py-4 text-left font-semibold text-brand-navy">Feature</th>
                  <th className="px-4 py-4 text-center font-semibold text-brand-navy">Free</th>
                  <th className="px-4 py-4 text-center font-semibold text-brand-navy">Pro</th>
                  <th className="px-4 py-4 text-center font-semibold text-brand-navy">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat) => (
                  <>
                    <tr key={cat.name} className="border-b border-brand-sage/20 bg-brand-cream/50">
                      <td colSpan={4} className="px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-navy/60">
                        {cat.name}
                      </td>
                    </tr>
                    {cat.features.map((f) => (
                      <tr key={f.name} className="border-b border-brand-sage/10 transition hover:bg-brand-cream/30">
                        <td className="px-6 py-3 text-foreground/80">
                          <div>{f.name}</div>
                          <div className="mt-0.5 text-xs text-foreground/40">{f.benefit}</div>
                        </td>
                        <td className="px-4 py-3 text-center">{f.free ? <Check /> : <Cross />}</td>
                        <td className="px-4 py-3 text-center">{f.pro ? <Check /> : <Cross />}</td>
                        <td className="px-4 py-3 text-center">{f.enterprise ? <Check /> : <Cross />}</td>
                      </tr>
                    ))}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-navy py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Ready to upgrade your networking?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/70">
            Start free today and see why professionals choose Cardly.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center rounded-full bg-brand-orange px-8 py-3.5 text-sm font-semibold text-brand-navy transition hover:bg-brand-orange/90"
            >
              Get Started Free
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
