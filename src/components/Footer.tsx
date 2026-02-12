import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-brand-sage/30 bg-brand-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold tracking-tight">Cardly</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              The modern way to exchange business cards. Network smarter, not harder.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Product</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/#features" className="text-sm text-white/70 transition hover:text-white">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-white/70 transition hover:text-white">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Company</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-sm text-white/70 transition hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 transition hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-orange">Legal</h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-white/70 transition hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-white/70 transition hover:text-white">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Cardly. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
