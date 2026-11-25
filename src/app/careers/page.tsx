import Link from "next/link";

const jobListings = [
  {
    id: 1,
    title: "Cleaning Specialist",
    department: "Operations",
    location: "On-site (Various Locations)",
    salary: "$20-25/hr",
    type: "Full-time / Part-time Available",
    summary: "Join our growing team of cleaning professionals! We provide comprehensive training and competitive pay.",
    requirements: [
      "Previous cleaning experience preferred but not required",
      "Strong attention to detail",
      "Ability to lift up to 25 lbs regularly",
      "Pass for background check",
      "Reliable transportation"
    ],
    responsibilities: [
      "Perform thorough residential and commercial cleaning",
      "Follow detailed cleaning checklists",
      "Maintain professional appearance and demeanor",
      "Use cleaning equipment safely and efficiently",
      "Report maintenance issues promptly"
    ],
  },
  {
    id: 2,
    title: "Office Manager",
    department: "Management",
    location: "Corporate Office",
    salary: "$45-60k/year",
    type: "Full-time",
    summary: "Lead our operations team and manage day-to-day activities. Perfect for an organized professional ready to grow.",
    requirements: [
      "2+ years experience in office or facility management",
      "Strong organizational and leadership skills",
      "Experience with scheduling and staff coordination",
      "Proficiency in Microsoft Office Suite",
      "Excellent communication skills"
    ],
    responsibilities: [
      "Supervise cleaning staff and schedule routes",
      "Manage inventory and equipment ordering",
      "Handle customer inquiries and complaints",
      "Coordinate with clients on special requests",
      "Prepare reports and maintain records"
    ],
  },
  {
    id: 3,
    title: "Marketing Coordinator",
    department: "Marketing",
    location: "Corporate Office",
    salary: "$40-55k/year",
    type: "Full-time",
    summary: "Help grow our brand and reach more customers. Creative role perfect for marketing enthusiasts.",
    requirements: [
      "1+ years experience in marketing or social media",
      "Strong writing and communication skills",
      "Familiarity with social media platforms",
      "Creative thinking abilities",
      "Portfolio of previous work (preferred)"
    ],
    responsibilities: [
      "Manage social media accounts",
      "Create email newsletters and content",
      "Design graphics for marketing materials",
      "Coordinate promotional campaigns",
      "Research market trends and competitor analysis"
    ],
  },
];

export default function Careers() {
  const handleApplication = (jobId: number) => {
    // In a real app, this would submit the form to an API
    alert(`Thanks for your interest in ${jobId === 1 ? "Cleaning Specialist" : jobId === 2 ? "Office Manager" : "Marketing Coordinator"}! We'll review your application and contact you soon.`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-primary-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold mb-4">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Careers at Sparkles From Dust</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              We're growing! Join a team that values excellence, integrity, and customer satisfaction. Check out our open positions and see how you fit in.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture Highlight */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're more than just a cleaning company - we're a community of dedicated professionals who take pride in their work. Here's what makes Sparkles From Dust a great place to build your career:
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "💰", title: "Competitive Pay", description: "Fair wages and tips for all team members" },
                { icon: "📈", title: "Growth Opportunities", description: "Clear paths for advancement and skill development" },
                { icon: "❤️", title: "Great Culture", description: "Supportive, friendly team environment" },
                { icon: "🦺", title: "Fully Insured", description: "We handle insurance, so you can work with confidence" },
              ].map((item) => (
                <div key={item.title} className="flex items-start space-x-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Open Positions</h2>

          <div className="space-y-8">
            {jobListings.map((job) => (
              <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Job Header */}
                <div className="px-8 py-6 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <p className="text-primary-100">{job.department} • {job.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm">
                      <span className="px-3 py-1 bg-white/20 rounded-full">{job.salary}</span>
                      <span className="px-3 py-1 bg-white/20 rounded-full">{job.type}</span>
                    </div>
                  </div>
                </div>

                {/* Job Content */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6">{job.summary}</p>

                  {/* Requirements */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req) => (
                        <li key={req} className="flex items-start space-x-2 text-gray-600">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Responsibilities */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-3">You'll be responsible for:</h4>
                    <ul className="space-y-2">
                      {job.responsibilities.map((resp) => (
                        <li key={resp} className="flex items-start space-x-2 text-gray-600">
                          <svg className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 013 3v1a1 1 0 00.74 1h.78a1 1 0 01.69.8l.8 4a1 1 0 001 .8h.2a1 1 0 01.69.8l.5 3a1 1 0 001 .9h1a1 1 0 01.7.8l.5 4A1 1 0 0118 21h-1a1 1 0 01-1-1v-1a1 1 0 00-.7-.9H16a1 1 0 00-1 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-3a1 1 0 00-.7-1H4a1 1 0 01-1-.9l-.5-4A1 1 0 002.8 8h-.2a1 1 0 01-.7-.9V6a3 3 0 013-3 2 2 0 012 2z" clipRule="evenodd" />
                          </svg>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Application Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleApplication(job.id);
                    }}
                    className="border-t border-gray-200 pt-8"
                  >
                    <h4 className="font-semibold text-gray-900 mb-4">Apply Now</h4>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          placeholder="jane@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          required
                          placeholder="(555) 123-4567"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Available Start Date</label>
                        <input
                          type="date"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Why are you interested in this position?</label>
                        <textarea
                          required
                          rows={4}
                          placeholder="Tell us about your interest and relevant experience..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>

                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                        <textarea
                          rows={3}
                          placeholder="Any questions, portfolio links, or other information..."
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="mt-6 px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                    >
                      Submit Application
                    </button>

                    <p className="mt-4 text-sm text-gray-500 text-center">
                      We'll review your application and contact you within 2-3 business days.
                    </p>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions About These Roles?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about any position or want to tell us more about your skills? Reach out directly!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="mailto:person@email.com" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Email Us</p>
              <a href="mailto:person@email.com" className="text-blue-600 hover:underline">
                person@email.com
              </a>
            </a>

            <a href="tel:+15555555555" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Call Us</p>
              <a href="tel:+15555555555" className="text-green-600 hover:underline">
                555-555-5555
              </a>
            </a>

            <Link href="/request-service" className="flex flex-col items-center text-center group">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.726a5 5 0 01-1.959-3.958l4-1c.585 1.276 2.69 1.737 3.65 1L14.856 8.21a5.002 5.002 0 015.965-.97l.2-1H18c-2.06 0-3.862 1.235-4.5 3A5.004 5.004 0 0112 8v1a5 5 0 00-5 5l-.794-.697C7.733 15.339 9.936 15 12 15c2.07 0 4.226.463 6.065 1.285L19.5 16l-1.5 4h-.5l-.2-1a5 5 0 01-3.362 1.21c-1.794 0-3.682-.797-4.5-2A5 5 0 017 15H4l.2-1c.96-.844 1.07-2.37 1.07-2.37z" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Contact via Form</p>
              <span className="text-gray-600">Reach us through our main contact form</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © 2026 Sparkles From Dust. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
