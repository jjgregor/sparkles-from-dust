import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand & About */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Sparkles From Dust
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional cleaning services that bring sparkle to any space. We're dedicated to excellence in every job we do.
            </p>
            <div className="flex space-x-4">
              {/* Social placeholders - can be added later */}
              {["facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`/#${social}`}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={`${social} link`}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/careers", label: "Careers" },
                { href: "/request-service", label: "Request Service" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                "Residential Cleaning",
                "Office Cleaning",
                "Move-In/Move-Out",
                "Estate Cleaning",
                "Rental Cleaning",
                "Specialized Services",
              ].map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="mailto:person@email.com" className="hover:text-white transition-colors">
                  person@email.com
                </a>
              </li>
              <li>
                <a href="tel:+15555555555" className="hover:text-white transition-colors">
                  555-555-5555
                </a>
              </li>
            </ul>

            {/* Address placeholder */}
            <div className="mt-6 p-4 bg-gray-800 rounded-lg">
              <p className="text-xs text-gray-400 mb-1">Service Area</p>
              <p className="text-sm text-white">Serving the greater metropolitan area and surrounding communities.</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-2">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for cleaning tips, promotions, and updates.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-12"></div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2026 Sparkles From Dust. All rights reserved.
          </p>

          {/* Legal links */}
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.98h-2v-4h2v4z" />
              </svg>
              Fully Insured
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L1 9l11 14 11-14-11-7zm0 12.68c-3.54-2.76-9.61-7.17-8.5-12h17c1.11 4.83-4.96 9.24-8.5 12z" />
              </svg>
              Background Checked
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
