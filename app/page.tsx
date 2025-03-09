import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Accounts",
    description: "Comprehensive annual accounts preparation for businesses of all sizes",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  },
  {
    title: "Bookkeeping Services",
    description: "Regular bookkeeping and financial record maintenance",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  },
  {
    title: "Business Advisory",
    description: "Strategic guidance and support for business growth",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  },
  {
    title: "Construction Industry Scheme",
    description: "Specialist CIS and IR35 compliance services",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  },
  {
    title: "Corporation Tax",
    description: "Corporate tax returns and planning services",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
    </svg>
  },
  {
    title: "Making Tax Digital",
    description: "MTD compliance and digital tax submissions",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  },
  {
    title: "Payroll",
    description: "Complete payroll management and PAYE services",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  },
  {
    title: "VAT",
    description: "VAT returns and compliance services",
    icon: <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  }
]

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-80px)] bg-white">
          <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="h-full flex items-center justify-center text-center">
              <div className="relative z-10">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900">
                  Professional Accounting<br />
                  & Business Advisory Services
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 mx-auto max-w-2xl">
                  Expert accounting, tax planning, and business advisory services in Nottingham. We help businesses grow, save money, and achieve their goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/contact"
                    className="bg-[#104265] text-white flex items-center justify-center px-8 py-4 rounded-lg font-semibold hover:bg-[#104265]/90 transition-colors group"
                  >
                    Book Free Consultation
                    <svg 
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/services"
                    className="border-2 border-[#104265] text-[#104265] flex items-center justify-center px-8 py-4 rounded-lg font-semibold hover:bg-[#104265]/5 transition-colors"
                  >
                    Explore Our Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Comprehensive Financial Services
              </h2>
              <p className="text-lg text-gray-600">
                From day-to-day accounting to strategic business planning, we provide all the financial services your business needs to succeed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 flex flex-col h-full border border-gray-200"
                >
                  <div>
                    <div className="bg-[#104265]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                  <div className="mt-auto pt-6">
                    <Link 
                      href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-[#104265] font-semibold hover:text-[#104265]/80 inline-flex items-center group"
                    >
                      Learn more 
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              ))}
              <Link 
                href="/services" 
                className="bg-white rounded-xl p-8 flex flex-col h-full items-center justify-center text-center group hover:bg-gray-50 transition-colors border border-gray-200"
              >
                <div className="bg-[#104265]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[#104265] group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">See More Services</h3>
                <p className="text-gray-600">Explore our full range of accounting services</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h2>
              <p className="text-lg text-gray-600">
                We combine expertise, technology, and personalized service to deliver exceptional value to our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {siteConfig.features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 flex flex-col items-center text-center">
                    <div className="bg-[#104265]/5 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#104265]" strokeWidth={2} />
                    </div>
                    <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Businesses Like Yours
              </h2>
              <p className="text-lg text-gray-600">
                See what our clients say about working with JTA Accountants
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "JTA Accountants has transformed how we manage our finances. Their expert guidance has been invaluable to our growth.",
                  author: "Mark Thompson",
                  company: "Tech Innovations UK",
                  initials: "MT"
                },
                {
                  quote: "Professional, proactive and always available when we need them. They've helped us save significantly on our tax bill.",
                  author: "Sarah Johnson",
                  company: "Retail Solutions Ltd",
                  initials: "SJ"
                },
                {
                  quote: "Their expertise in construction accounting has been crucial for our business. Highly recommended for any construction firm.",
                  author: "David Williams",
                  company: "BuildPro Construction",
                  initials: "DW"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-8 border border-gray-200"
                >
                  <div className="flex mb-6">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-900 mb-8 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-[#104265] text-white flex items-center justify-center font-semibold text-lg mr-4">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg mb-0.5">{testimonial.author}</p>
                      <p className="text-gray-600 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-[#104265] rounded-2xl px-8 py-12 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Book your free consultation today and discover how we can help your business thrive
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-[#104265] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center min-h-[48px]"
                >
                  Book Free Consultation
                </Link>
                <Link
                  href="/services"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center min-h-[48px]"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
