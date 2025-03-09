import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Expert Accounting Services for Your Business
              </h1>
              <p className="text-xl mb-8">
                Professional accounting and business advisory services tailored to your needs
              </p>
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50"
              >
                Get Started
              </Link>
            </div>
            <div className="hidden md:block">
              <Image
                src="/accounting-hero.jpg"
                alt="Accounting Services"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose JTA Accountants?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center"
              >
                <div className="text-blue-600 mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

const services = [
  {
    title: "Accounting & Bookkeeping",
    description: "Comprehensive accounting services to keep your finances in order",
    icon: "📊",
  },
  {
    title: "Tax Planning",
    description: "Strategic tax planning to minimize your tax liability",
    icon: "📋",
  },
  {
    title: "Business Advisory",
    description: "Expert advice to help your business grow and succeed",
    icon: "💡",
  },
]

const values = [
  {
    title: "80+ Years Combined Experience",
    description: "Our team brings over eight decades of combined expertise in accounting and business advisory services",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Multilingual Services",
    description: "We provide services in English, Russian, Urdu, and Punjabi to better serve our diverse community",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  },
  {
    title: "Professional Excellence",
    description: "Our team maintains the highest standards of professional expertise and ethical conduct",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Clear Communication",
    description: "We believe in transparent, jargon-free communication to ensure our clients always understand their financial position",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  }
]