import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms and Conditions | JTA Accountants and Business Advisors',
  description: 'Our terms and conditions of service for accounting and business advisory services.',
}

export default function TermsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Terms and Conditions
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full bg-white pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <p className="text-gray-600">
                Welcome to JTA Accountants. By using our services, you agree to comply with and be bound by the following terms and conditions. These terms, along with our privacy policy, govern JTA Accountants' relationship with you in relation to our services.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">1. Definitions</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>"JTA Accountants", "we", "our", or "us" refers to JTA Accountants and Business Advisors</li>
                <li>"Client", "you", or "your" refers to the person or entity engaging our services</li>
                <li>"Services" refers to any accounting, tax, advisory, or other professional services provided by us</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">2. Services</h2>
              <p className="text-gray-600">
                We provide professional accounting and business advisory services as outlined in our service agreement. The specific services to be provided will be detailed in our engagement letter or service agreement with you.
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>All services are provided in accordance with applicable professional standards</li>
                <li>We will use reasonable skill and care in providing our services</li>
                <li>Services are subject to applicable laws and professional regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">3. Client Responsibilities</h2>
              <p className="text-gray-600">
                To enable us to perform our services effectively, you agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Provide accurate and complete information in a timely manner</li>
                <li>Notify us promptly of any changes that may affect our services</li>
                <li>Cooperate with our reasonable requests for information</li>
                <li>Meet agreed payment terms</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">4. Fees and Payment</h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Fees will be charged as agreed in our engagement letter or service agreement</li>
                <li>Payment terms are strictly 30 days from the date of invoice</li>
                <li>We reserve the right to charge interest on overdue amounts</li>
                <li>Additional services may incur additional fees, which will be agreed upon in advance</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">5. Confidentiality</h2>
              <p className="text-gray-600">
                We maintain strict confidentiality regarding all client information. However, we may be required to disclose information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>As required by law or regulatory requirements</li>
                <li>To our professional indemnity insurers</li>
                <li>To our quality reviewers</li>
                <li>Where you have provided specific consent</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-600">
                Our liability is limited to the extent permitted by law and as specified in our engagement letter. We maintain professional indemnity insurance as required by our professional body.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">7. Termination</h2>
              <p className="text-gray-600">
                Either party may terminate the engagement by giving written notice. Upon termination:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>You agree to pay for all services provided up to the date of termination</li>
                <li>We will provide reasonable assistance in transitioning to another service provider</li>
                <li>All confidentiality obligations continue after termination</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">8. Governing Law</h2>
              <p className="text-gray-600">
                These terms and conditions are governed by and construed in accordance with the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the English courts.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-600">
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services following any changes constitutes acceptance of those changes.
              </p>

              <p className="text-gray-600 mt-8">
                If you have any questions about these terms and conditions, please contact us at info@jtaaccountants.co.uk or call us on 0115 8544 081.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-[#104265] rounded-2xl px-8 py-12 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us if you need clarification about our terms and conditions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#104265] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center justify-center min-h-[48px]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
} 