"use client";

import { useState } from "react";

const testimonials = [
  {
    quote: "Sparkles from Dust transformed our home completely! The team was professional, thorough, and left everything spotless. We've never had better cleaners.",
    author: "Sarah M.",
    location: "Homeowner",
    rating: 5,
  },
  {
    quote: "We hire them for our office every week. Consistent quality, reliable scheduling, and they always go above and beyond. Highly recommend!",
    author: "Michael Chen",
    location: "Office Manager",
    rating: 5,
  },
  {
    quote: "After moving into a new apartment, I wanted everything perfect before we unpacked. They exceeded my expectations. Worth every penny.",
    author: "Jessica Rodriguez",
    location: "New Homeowner",
    rating: 5,
  },
  {
    quote: "Best investment for our rental properties. Tenants keep their homes cleaner knowing Sparkles from Dust does the deep cleaning. Simple as that.",
    author: "David Park",
    location: "Property Manager",
    rating: 5,
  },
];

const starRating = (rating: number) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-accent-50 text-accent-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their Sparkles from Dust experience.
          </p>
        </div>

        {/* Testimonials carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`p-8 md:p-12 min-h-[280px] flex items-center justify-center transition-opacity duration-500 ${
                  activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none absolute inset-0"
                }`}
              >
                <div className="max-w-2xl w-full text-center">
                  {/* Stars */}
                  {starRating(testimonial.rating)}

                  {/* Quote */}
                  <p className="text-xl md:text-2xl text-gray-700 font-medium mt-6 mb-8 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>

                  {/* Author info */}
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-primary-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 text-center">
          {[
            { icon: "⭐", label: "5-Star Rated" },
            { icon: "🏆", label: "Top Rated Provider" },
            { icon: "❤️", label: "Love by Clients" },
            { icon: "📣", label: "Trusted Community Choice" },
          ].map((badge, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
              <span className="text-3xl mb-2 block">{badge.icon}</span>
              <p className="font-semibold text-gray-900">{badge.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
