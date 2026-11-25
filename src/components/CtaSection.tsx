import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Experience the Sparkles From Dust Difference?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Get in touch today for a free, no-obligation quote. We'll discuss your needs and create a custom cleaning plan that works perfectly for you.
              </p>

              {/* Contact info cards */}
              <div className="space-y-4">
                <a href="mailto:person@email.com" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <a href="mailto:person@email.com" className="text-blue-600 hover:underline">
                      person@email.com
                    </a>
                  </div>
                </a>

                <a href="tel:+15555555555" className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <a href="tel:+15555555555" className="text-green-600 hover:underline">
                      555-555-5555
                    </a>
                  </div>
                </a>

                <Link
                  href="/request-service"
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group w-full"
                >
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.726a5 5 0 01-1.959-3.958l4-1c.585 1.276 2.69 1.737 3.65 1L14.856 8.21a5.002 5.002 0 015.965-.97l.2-1H18c-2.06 0-3.862 1.235-4.5 3A5.004 5.004 0 0112 8v1a5 5 0 00-5 5l-.794-.697C7.733 15.339 9.936 15 12 15c2.07 0 4.226.463 6.065 1.285L19.5 16l-1.5 4h-.5l-.2-1a5 5 0 01-3.362 1.21c-1.794 0-3.682-.797-4.5-2A5 5 0 017 15H4l.2-1c.96-.844 1.07-2.37 1.07-2.37z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-gray-900">Get a Free Quote</p>
                    <span className="text-purple-600 group-hover:text-purple-700 transition-colors">
                      Fill out our quick form →
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Form preview */}
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Quick Quote</h3>
                <p className="text-gray-600">Get instant pricing for basic services</p>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-500 focus:ring-0 transition-colors bg-white/80 text-gray-900 placeholder-gray-400"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-xl border-2 border-transparent focus:border-primary-500 focus:ring-0 transition-colors bg-white/80 text-gray-900">
                    <option>House Cleaning</option>
                    <option>Office Cleaning</option>
                    <option>Move-In/Out</option>
                  </select>
                </div>
                <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all">
                  Request Quote
                </button>
              </form>

              <p className="text-xs text-center text-gray-500 mt-4">
                Or call us at 555-555-5555 for instant assistance
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
