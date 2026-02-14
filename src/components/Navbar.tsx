"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-sage/30 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-2xl font-bold tracking-tight text-brand-navy">
          Cardly
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="/#features" className="text-sm font-medium text-foreground/70 transition hover:text-brand-navy">
            Features
          </Link>
          <a
            href="#"
            className="rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-navy/90"
          >
            Get the App
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-brand-navy transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-navy transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-brand-navy transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-brand-sage/30 bg-white px-6 pb-6 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            <Link
              href="/#features"
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-foreground/70 transition hover:text-brand-navy"
            >
              Features
            </Link>
            <a
              href="#"
              className="inline-block rounded-full bg-brand-navy px-5 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-brand-navy/90"
            >
              Get the App
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
