import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | JTA Accountants and Business Advisors',
  description: 'Learn more about JTA Accountants, your trusted accounting and business advisory firm in Nottingham.',
}

const languages = [
  { name: "English", level: "Professional" },
  { name: "Russian", level: "Professional" },
  { name: "Urdu", level: "Professional" },
  { name: "Punjabi", level: "Professional" }
]

const values = [
  {
    title: "Client-Focused Approach",
    description: "We put our clients at the heart of everything we do, providing personalized solutions that meet their specific needs.",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  },
  {
    title: "Professional Excellence",
    description: "Our team maintains the highest standards of professional expertise and ethical conduct.",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    )
  },
  {
    title: "Clear Communication",
    description: "We believe in transparent, jargon-free communication to ensure our clients always understand their financial position.",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    )
  },
  {
    title: "Multilingual Service",
    description: "We provide services in English, Russian, Urdu, and Punjabi to better serve our diverse client base.",
    icon: (
      <svg className="w-12 h-12 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
      </svg>
    )
  }
]

const qualifications = [
  {
    name: "ACCA",
    fullName: "Association of Chartered Certified Accountants",
    description: "Globally recognized professional accounting qualification",
    icon: (
      <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    )
  },
  {
    name: "ICAEW",
    fullName: "Institute of Chartered Accountants in England and Wales",
    description: "Premier professional membership organization for chartered accountants",
    icon: (
      <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
      </svg>
    )
  },
  {
    name: "AAT",
    fullName: "Association of Accounting Technicians",
    description: "Leading qualification and membership body for accounting staff",
    icon: (
      <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    )
  },
  {
    name: "MTI",
    fullName: "Member of Taxation Institute",
    description: "Specialized qualification for tax professionals",
    icon: (
      <svg className="w-6 h-6 text-[#104265]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
      </svg>
    )
  }
]

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Your Trusted Accounting Partner in Nottingham
            </h1>
            <p className="text-xl text-gray-600">
              Since 2017, we've been helping businesses and individuals navigate their financial journey with confidence and clarity.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="prose prose-lg text-gray-600">
                <p>
                  At JTA Accountants, we believe that language should never be a barrier to accessing quality financial services. Our mission is to provide exceptional accounting and advisory services that empower businesses to achieve their financial goals through clear communication and expert guidance.
                </p>
                <p className="mt-4">
                  Founded in 2017, we've built our practice on the foundation of accessibility, expertise, and personalized service. Our team brings together over 80 years of combined experience in accounting and business advisory services.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{lang.name}</h3>
                  <p className="text-[#104265]">{lang.level}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* CTA Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
  )
} 