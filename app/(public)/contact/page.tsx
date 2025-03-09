'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
  service: string
  marketing: boolean
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  message: '',
  service: '',
  marketing: false,
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Failed to submit inquiry')
      setStatus('success')
      setFormData(initialFormData)
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or ready to explore how we can help your business? We're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">
            {/* Form */}
            <div className="relative h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                {/* First row: Name and Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-base font-medium text-gray-900 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:ring-1 focus:ring-[#104265] focus:border-[#104265] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-base font-medium text-gray-900 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:ring-1 focus:ring-[#104265] focus:border-[#104265] transition-colors"
                    />
                  </div>
                </div>

                {/* Second row: Phone and Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-base font-medium text-gray-900 mb-1">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:ring-1 focus:ring-[#104265] focus:border-[#104265] transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-base font-medium text-gray-900 mb-1">
                      Service Interested In <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData(prev => ({ ...prev, service: e.target.value }))}
                        className="block w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:ring-1 focus:ring-[#104265] focus:border-[#104265] transition-colors appearance-none"
                      >
                        {[
                          { id: 'default', value: '', label: 'Select a service' },
                          ...siteConfig.services.map((service, index) => ({
                            id: service.id,
                            value: service.id,
                            label: service.title,
                            key: index
                          })),
                          { id: 'other', value: 'other', label: 'Other' }
                        ].map((option, index) => (
                          <option key={index} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3">
                        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message - will expand to fill space */}
                <div className="flex-grow flex flex-col">
                  <label htmlFor="message" className="block text-base font-medium text-gray-900 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="flex-grow w-full px-4 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-900 focus:ring-1 focus:ring-[#104265] focus:border-[#104265] transition-colors resize-none"
                  />
                </div>

                {/* Marketing checkbox */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="marketing"
                    name="marketing"
                    checked={formData.marketing}
                    onChange={(e) => setFormData(prev => ({ ...prev, marketing: e.target.checked }))}
                    className="h-5 w-5 rounded border-gray-200 text-[#104265] focus:ring-[#104265]"
                  />
                  <label htmlFor="marketing" className="ml-3 text-base text-gray-700">
                    I agree to receive marketing communications
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full px-8 py-4 text-lg font-semibold rounded-xl text-white bg-[#104265] hover:bg-[#104265]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#104265] disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-all duration-200"
                >
                  {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status messages */}
                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-50 border border-green-200">
                    <p className="text-green-800 text-center font-medium">
                      Thank you! We'll be in touch soon.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-50 border border-red-200">
                    <p className="text-red-800 text-center font-medium">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="bg-[#104265] rounded-2xl shadow-lg p-8 text-white h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-8">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Opening Hours</h4>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Saturday & Sunday</span>
                      <span>Closed</span>
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Get in Touch</h4>
                  <div className="space-y-4">
                    <a 
                      href={`tel:${siteConfig.contact.phone}`}
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span>{siteConfig.contact.phone}</span>
                    </a>
                    <a 
                      href={`mailto:${siteConfig.contact.email}`}
                      className="flex items-center space-x-3 hover:text-white/80 transition-colors"
                    >
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span>{siteConfig.contact.email}</span>
                    </a>
                    <div className="flex items-center space-x-3">
                      <svg className="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{`${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.postcode}`}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Our Location</h4>
                  <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden mt-4">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2404.4486170789376!2d-1.1729034233769685!3d52.96419087200125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c17945f0c9e5%3A0x1d4c5c8fe2c42c85!2sJTA%20Accountants%20%26%20Business%20Advisors!5e0!3m2!1sen!2suk!4v1710835013089!5m2!1sen!2suk"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-white/90 text-sm">
                  Visit our office or contact us for a free consultation. We provide professional accounting 
                  and business advisory services across Nottingham and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}