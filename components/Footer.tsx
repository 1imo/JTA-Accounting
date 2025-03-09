import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | JTA Accountants and Business Advisors',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
          {/* Company Info and Contact */}
          <div className="md:col-span-6 md:pr-8">
            <Image
              src="/logo.png"
              alt="JTA Accountants"
              width={180}
              height={54}
              className="h-12 w-auto mb-6"
            />
            <p className="text-gray-600 mb-8 max-w-md text-base leading-relaxed">
              Professional accounting and business advisory services helping businesses thrive across Nottingham and beyond.
            </p>
            <div className="space-y-3">
              <p className="text-gray-600">
                {siteConfig.contact.address.street}, {siteConfig.contact.address.city}, {siteConfig.contact.address.postcode}
              </p>
              <p className="text-gray-600">
                {siteConfig.contact.phone}
              </p>
              <p className="text-gray-600">
                {siteConfig.contact.email}
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-6 grid grid-cols-2 gap-8 md:gap-12 md:pl-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {siteConfig.navigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect With Us */}
            <div>
              <h3 className="text-gray-900 font-semibold text-lg mb-6">Connect With Us</h3>
              <ul className="space-y-3">
                {siteConfig.navigation.socials.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} JTA Accountants. Company No: {siteConfig.contact.companyNumber}
            </div>
            <div className="flex space-x-8">
              {siteConfig.navigation.footer.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-blue-900 text-sm transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}