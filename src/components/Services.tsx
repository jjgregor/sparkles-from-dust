"use client";

import { useState } from "react";

const services = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "Residential Cleaning",
    description: "Deep clean your home with our thorough residential service. We handle everything from dusting to floor care.",
    features: ["Dusting & Vacuuming", "Bathroom Sanitization", "Kitchen Deep Clean", "Floor Care"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: "Office Cleaning",
    description: "Keep your workspace pristine and productive. Our commercial cleaning services are scheduled around your business hours.",
    features: ["Daily/Weekly Service", "Trash Removal", "Desk Cleaning", "Restroom Sanitization"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h6l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Move-In/Move-Out",
    description: "Get your deposit back or give yourself a fresh start. We ensure every spot is clean for the next tenant.",
    features: ["Full Deep Cleaning", "Inside Cabinets & Drawers", "Appliance Cleaning", "Stain Removal"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: "Estate Cleaning",
    description: "Handling a special property? Our compassionate team provides respectful, thorough cleaning for estates.",
    features: ["Full Home Service", "Gentle Handling", "Before Photography Available", "Flexible Scheduling"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Rental Cleaning",
    description: "Showcase your rental property with our inspection-ready cleaning. Impress potential tenants!",
    features: ["Inspection Ready", "High-Touch Point Sanitization", "Fresh Odor Removal", "Window Cleaning"],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    ),
    title: "Specialized Cleaning",
    description: "Need something extra? We offer specialized services like oven cleaning, carpet treatment, and more.",
    features: ["Oven & Appliance Cleaning", "Carpet Deep Treatment", "Blind & Curtain Cleaning", "Gutter Cleaning"],
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Cleaning Solutions for Every Need
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From residential homes to commercial offices, we provide professional cleaning services tailored to your specific requirements.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => setActiveTab(index)}
              className={`bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg cursor-pointer border-2 transition-all duration-300 ${
                activeTab === index ? "border-primary-500" : "border-transparent"
              }`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center text-primary-600 mb-6 border-2 border-white">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Not seeing what you need?</p>
          <button className="px-8 py-3 bg-primary-50 text-primary-700 rounded-full font-semibold hover:bg-primary-100 transition-colors">
            Contact Us for Custom Services
          </button>
        </div>
      </div>
    </section>
  );
}
