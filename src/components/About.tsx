import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md text-white rounded-full text-sm font-semibold mb-6">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sparkles From Dust is More Than Cleaning
            </h2>
            <p className="text-lg text-primary-100 mb-6 leading-relaxed">
              Founded with a passion for cleanliness and customer satisfaction, we've grown into one of the most trusted cleaning service providers in the area. What started as a small team has blossomed into a company that cares deeply about every job we take on.
            </p>
            <p className="text-lg text-primary-100 mb-8 leading-relaxed">
              Our team consists of dedicated professionals who treat every home and business as if it were their own. We believe that cleaning isn't just about removing dirt—it's about creating spaces where people can thrive, relax, and flourish.
            </p>

            {/* Values grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "⭐", title: "Quality First", description: "We never compromise on the quality of our cleaning services." },
                { icon: "🤝", title: "Trust & Integrity", description: "Our cleaners are background-checked and fully insured." },
                { icon: "💚", title: "Eco-Friendly", description: "We use safe, environmentally friendly cleaning products." },
                { icon: "⏰", title: "Reliable Service", description: "We show up on time, every single time." },
              ].map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/15 transition-colors">
                  <span className="text-3xl mb-3 block">{value.icon}</span>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-primary-100">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image placeholder with decorative element */}
          <div className="relative">
            <div className="aspect-square bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 p-8">
              <div className="w-full h-full flex items-center justify-center relative">
                {/* Abstract decorative pattern */}
                <div className="absolute inset-0 opacity-30">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        backgroundColor: `rgba(255,255,255,${Math.random() * 0.3 + 0.1})`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Content overlay */}
                <div className="relative z-10 text-center">
                  <svg className="w-32 h-32 mx-auto mb-6 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-xl font-medium">Team in Action</p>
                  <p className="text-white/70 mt-2">Our dedicated professionals</p>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-primary-800 rounded-xl px-6 py-4 shadow-lg max-w-xs">
              <p className="text-sm font-medium text-gray-500">Founded</p>
              <p className="text-2xl font-bold">2021</p>
              <p className="text-xs text-gray-400 mt-1">And counting!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
