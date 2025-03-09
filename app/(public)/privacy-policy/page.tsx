import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | JTA Accountants and Business Advisors',
  description: 'Our privacy policy outlines how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy
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
                At JTA Accountants, we are committed to protecting and respecting your privacy. This policy explains when and why we collect personal information about people who visit our website or seek our services, how we use it, the conditions under which we may disclose it to others, and how we keep it secure.
              </p>

              <p className="text-gray-600">
                We may change this policy from time to time by updating this page. You should check this page occasionally to ensure that you are happy with any changes. This policy is effective from March 2024.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What We Collect</h2>
              <p className="text-gray-600">
                We may collect the following information:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Name and job title</li>
                <li>Contact information including email address</li>
                <li>Demographic information such as postcode, preferences and interests</li>
                <li>Other information relevant to customer surveys and/or offers</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">What We Do With The Information We Gather</h2>
              <p className="text-gray-600">
                We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Internal record keeping</li>
                <li>We may use the information to improve our products and services</li>
                <li>We may periodically send promotional emails about new services, special offers or other information which we think you may find interesting using the email address which you have provided</li>
                <li>From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, phone, or mail</li>
                <li>We may use the information to customize the website according to your interests</li>
              </ul>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Security</h2>
              <p className="text-gray-600">
                We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">How We Use Cookies</h2>
              <p className="text-gray-600">
                A cookie is a small file which asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Links to Other Websites</h2>
              <p className="text-gray-600">
                Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Controlling Your Personal Information</h2>
              <p className="text-gray-600">
                You may choose to restrict the collection or use of your personal information in the following ways:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Whenever you are asked to fill in a form on the website, look for the box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes</li>
                <li>If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by writing to or emailing us</li>
              </ul>

              <p className="text-gray-600 mt-8">
                We will not sell, distribute or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.
              </p>

              <p className="text-gray-600">
                You may request details of personal information which we hold about you under the Data Protection Act 1998. A small fee will be payable. If you would like a copy of the information held on you please write to our office address.
              </p>

              <p className="text-gray-600">
                If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible at the above address. We will promptly correct any information found to be incorrect.
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
              Questions About Our Privacy Policy?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us if you have any questions about how we handle your data
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