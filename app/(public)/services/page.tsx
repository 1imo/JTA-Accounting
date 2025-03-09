import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    id: "accounts",
    title: "Accounts",
    description: "Comprehensive accounting services for companies, sole traders, and charities",
    details: "Every business, regardless of its structure, must maintain accurate financial records and submit timely accounts. For companies, this means preparing and filing annual accounts with Companies House and HMRC. Sole traders must maintain records of income and expenses for their Self Assessment tax returns. Charities have specific reporting requirements to the Charity Commission. Our comprehensive service ensures all statutory requirements are met while providing valuable insights into your financial performance. We handle everything from day-to-day bookkeeping to annual accounts preparation, ensuring your business maintains perfect compliance while having the financial clarity needed for informed decision-making.",
    image: "https://placehold.co/800x600?text=Accounting",
    features: [
      "Annual accounts preparation",
      "Statutory accounts filing",
      "Management accounts",
      "Financial statements",
      "Compliance monitoring"
    ]
  },
  {
    id: "bookkeeping",
    title: "Bookkeeping Services",
    description: "Accurate and timely bookkeeping to keep your business finances organized",
    details: "Effective bookkeeping is the foundation of sound financial management. Our bookkeeping service ensures your financial records are accurate, up-to-date, and compliant with current legislation. We handle all aspects of your day-to-day financial record keeping, from processing invoices and receipts to reconciling bank statements and managing accounts payable and receivable. Using the latest accounting software, we provide real-time insights into your business's financial position, helping you make informed decisions. Our service can be tailored to your needs, whether you require weekly, monthly, or quarterly bookkeeping support.",
    image: "https://placehold.co/800x600?text=Bookkeeping",
    features: [
      "Transaction recording",
      "Bank reconciliation",
      "Invoice processing",
      "Credit control",
      "Financial reporting"
    ]
  },
  {
    id: "business-advisory",
    title: "Business Advisory",
    description: "Strategic guidance and support to help your business grow and succeed",
    details: "Our business advisory service provides strategic support to help you navigate challenges and capitalize on opportunities. We work closely with you to understand your business goals and develop practical strategies to achieve them. Our advisors offer insights on business structure, growth strategies, succession planning, and performance improvement. We help identify key performance indicators, analyze trends, and provide actionable recommendations to enhance profitability and efficiency. Whether you're looking to expand, streamline operations, or plan for the future, our experienced team provides the guidance you need.",
    image: "https://placehold.co/800x600?text=Advisory",
    features: [
      "Strategic planning",
      "Performance analysis",
      "Growth strategies",
      "Risk assessment",
      "Business optimization"
    ]
  },
  {
    id: "capital-gains-tax",
    title: "Capital Gains Tax",
    description: "Expert guidance on CGT planning and compliance for personal and business asset disposals",
    details: "Capital Gains Tax applies when you dispose of assets that have increased in value. This includes property (excluding your main residence), shares, business assets, and certain personal possessions. Our CGT service helps you understand your obligations and identify opportunities for tax efficiency. We assist with calculating gains, claiming reliefs, and timing disposals strategically. Our experts ensure you're aware of all available exemptions and reliefs while maintaining full compliance with HMRC requirements. We provide comprehensive support from initial planning through to final reporting.",
    image: "https://placehold.co/800x600?text=CGT",
    features: [
      "CGT calculations",
      "Relief claims",
      "Disposal planning",
      "Record keeping",
      "Tax efficiency advice"
    ]
  },
  {
    id: "cis-ir35",
    title: "Construction Industry Scheme - IR35",
    description: "Specialist compliance and advisory services for construction businesses and contractors",
    details: "The Construction Industry Scheme (CIS) and IR35 regulations represent complex areas of tax legislation affecting contractors and construction businesses. Under CIS, contractors must verify subcontractors, deduct the correct amount of tax, file monthly returns, and maintain detailed records. IR35 rules determine employment status for tax purposes, with significant implications for both contractors and businesses. We provide comprehensive support for both regimes, ensuring proper registration, accurate returns, and full compliance. Our team helps determine employment status, manage CIS verifications and returns, and provides strategic advice on structuring contracts and working arrangements.",
    image: "https://placehold.co/800x600?text=Construction",
    features: [
      "CIS registration",
      "Status determinations",
      "Monthly returns",
      "Compliance checks",
      "Contract reviews"
    ]
  },
  {
    id: "corporation-tax",
    title: "Corporation Tax",
    description: "Strategic corporation tax planning and compliance for UK companies",
    details: "Corporation tax compliance and planning is crucial for all limited companies. Our service ensures you meet all filing obligations while minimizing your tax liability through legitimate planning. We handle the preparation and submission of corporation tax returns, calculate tax liabilities, and identify available reliefs and allowances. Our proactive approach helps you plan for tax payments, structure transactions efficiently, and maintain accurate records. We stay current with tax legislation changes to ensure you benefit from all available opportunities for tax efficiency.",
    image: "https://placehold.co/800x600?text=Corporation",
    features: [
      "Tax return preparation",
      "Liability calculations",
      "Relief claims",
      "Payment planning",
      "Strategic advice"
    ]
  },
  {
    id: "forecasting",
    title: "Forecasting",
    description: "Financial forecasting and budgeting to support informed business decisions",
    details: "Financial forecasting is essential for business planning and growth. Our forecasting service helps you understand your future financial position and make informed decisions. We create detailed financial models incorporating cash flow projections, budget forecasts, and scenario planning. Using advanced forecasting tools and techniques, we help you anticipate future challenges and opportunities, plan for growth, and manage working capital effectively. Our forecasts provide valuable insights for business planning, funding applications, and strategic decision-making.",
    image: "https://placehold.co/800x600?text=Forecasting",
    features: [
      "Cash flow forecasting",
      "Budget planning",
      "Scenario analysis",
      "Financial modeling",
      "Performance tracking"
    ]
  },
  {
    id: "forensic-accounting",
    title: "Forensic Accounting",
    description: "Detailed financial investigations and expert analysis for dispute resolution",
    details: "Our forensic accounting service provides detailed financial analysis and expert testimony for legal proceedings, disputes, and investigations. We conduct thorough investigations to uncover financial irregularities, quantify losses, and provide expert witness services when required. Our team has experience in fraud investigations, business valuations for legal proceedings, and complex financial analysis. We prepare detailed reports that stand up to legal scrutiny and provide expert testimony when needed.",
    image: "https://placehold.co/800x600?text=Forensic",
    features: [
      "Financial investigations",
      "Expert witness services",
      "Fraud analysis",
      "Dispute resolution",
      "Detailed reporting"
    ]
  },
  {
    id: "inheritance-tax",
    title: "Inheritance Tax",
    description: "Strategic inheritance tax planning and estate administration support",
    details: "Inheritance tax planning requires careful consideration to ensure your assets are passed on efficiently. Our service helps you understand and plan for inheritance tax implications, identify available exemptions and reliefs, and structure your affairs tax-efficiently. We provide comprehensive advice on lifetime gifts, trusts, and estate planning strategies. Our team assists with estate administration, calculating inheritance tax liabilities, and ensuring compliance with HMRC requirements.",
    image: "https://placehold.co/800x600?text=IHT",
    features: [
      "Estate planning",
      "Tax liability calculations",
      "Relief identification",
      "Trust planning",
      "Estate administration"
    ]
  },
  {
    id: "mtd",
    title: "Making Tax Digital (MTD)",
    description: "Comprehensive support for MTD compliance for both sole traders and companies",
    details: "Making Tax Digital is transforming how businesses interact with HMRC. Our MTD service ensures you're fully compliant with digital tax requirements, whether you're a sole trader or limited company. We help select and implement appropriate software, set up digital record-keeping systems, and ensure smooth quarterly reporting. Our team provides training and ongoing support to help you navigate the digital tax landscape confidently. We ensure your business is prepared for current and future MTD requirements.",
    image: "https://placehold.co/800x600?text=MTD",
    features: [
      "Software implementation",
      "Digital record keeping",
      "Quarterly reporting",
      "Training support",
      "Compliance monitoring"
    ]
  },
  {
    id: "moss-vat",
    title: "Mini One Stop Shop (MOSS) VAT",
    description: "Specialized VAT support for digital service providers in the EU market",
    details: "The MOSS VAT scheme simplifies VAT reporting for businesses selling digital services to EU consumers. Our service helps you navigate the complexities of cross-border VAT compliance, ensuring you meet all reporting requirements efficiently. We assist with registration, quarterly returns, and ensuring compliance with varying EU VAT rates. Our team keeps track of regulatory changes and helps you adapt your systems and processes accordingly.",
    image: "https://placehold.co/800x600?text=MOSS",
    features: [
      "MOSS registration",
      "EU VAT compliance",
      "Quarterly returns",
      "Rate management",
      "Regulatory updates"
    ]
  },
  {
    id: "paye",
    title: "Pay As You Earn (PAYE)",
    description: "Complete PAYE management and compliance services",
    details: "Our PAYE service ensures your payroll taxes are managed efficiently and compliantly. We handle all aspects of PAYE administration, from initial registration to ongoing management and year-end reporting. Our team ensures accurate calculation of tax and National Insurance contributions, manages tax codes, and handles communications with HMRC. We provide regular updates on legislative changes and ensure your business remains compliant with all PAYE requirements.",
    image: "https://placehold.co/800x600?text=PAYE",
    features: [
      "Tax code management",
      "NIC calculations",
      "Real-time reporting",
      "Year-end returns",
      "Compliance monitoring"
    ]
  },
  {
    id: "payroll",
    title: "Payroll",
    description: "Comprehensive payroll management for businesses of all sizes",
    details: "Our payroll service provides end-to-end management of your employee payments and related obligations. We handle salary calculations, tax deductions, pension contributions, and statutory payments. Our team ensures accurate processing of regular and variable payments, manages employee benefits and deductions, and provides detailed payroll reports. We keep up with legislative changes and ensure your payroll remains compliant with current regulations.",
    image: "https://placehold.co/800x600?text=Payroll",
    features: [
      "Salary processing",
      "Statutory payments",
      "Pension administration",
      "Employee benefits",
      "Payroll reporting"
    ]
  },
  {
    id: "tax-investigation",
    title: "Tax Investigation",
    description: "Expert support and representation during HMRC investigations",
    details: "When facing a tax investigation, our experienced team provides comprehensive support throughout the process. We handle all communications with HMRC, gather and present required evidence, and work to achieve the best possible outcome. Our service includes reviewing your records, identifying potential issues, preparing responses to HMRC queries, and representing you during meetings. We aim to minimize disruption to your business while ensuring a thorough and professional response to the investigation.",
    image: "https://placehold.co/800x600?text=Investigation",
    features: [
      "HMRC liaison",
      "Evidence preparation",
      "Response management",
      "Record review",
      "Professional representation"
    ]
  },
  {
    id: "vat",
    title: "VAT",
    description: "Complete VAT management and advisory services",
    details: "Our VAT service covers all aspects of VAT compliance and planning. We assist with registration, handle quarterly returns, and provide strategic advice on VAT planning. Our team ensures you're using the most appropriate VAT scheme for your business, manages complex transactions, and keeps you updated on regulatory changes. We help optimize your VAT position while maintaining full compliance with HMRC requirements.",
    image: "https://placehold.co/800x600?text=VAT",
    features: [
      "VAT registration",
      "Return preparation",
      "Scheme selection",
      "Planning advice",
      "Compliance checks"
    ]
  }
]

const packages = [
  {
    title: "Starter",
    description: "Perfect for small businesses and startups",
    features: [
      "Annual accounts preparation",
      "Self-assessment tax return",
      "Basic bookkeeping",
      "Quarterly review meetings",
      "Email & phone support"
    ]
  },
  {
    title: "Professional",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Monthly management accounts",
      "VAT returns",
      "Payroll services",
      "Tax planning advice"
    ]
  },
  {
    title: "Enterprise",
    description: "Comprehensive solution for established businesses",
    features: [
      "Everything in Professional",
      "Strategic business planning",
      "CFO services",
      "International tax advice",
      "Unlimited consultations"
    ]
  }
]

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="w-full bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive accounting and business advisory services tailored to help your business grow and succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section with Nav */}
      <section className="w-full bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16">
            {/* Navigation */}
            <div className="hidden lg:block lg:col-span-4">
              <div className="space-y-2">
                <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
                  Our Services
                </h2>
                {services.map((service) => (
                  <a
                    key={service.id}
                    href={`#${service.id}`}
                    className="block py-2 text-gray-600 hover:text-[#104265] transition-colors"
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-8">
              {services.map((service, index) => (
                <div 
                  key={service.title}
                  id={service.id}
                  className={`scroll-mt-24 ${index !== 0 ? 'mt-32' : ''}`}
                >
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>
                    
                    <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-12 mb-12">
                      <div>
                        <h3 className="text-lg font-semibold text-[#104265] mb-4">
                          Key Features
                        </h3>
                        <ul className="space-y-3">
                          {service.features.map((feature) => (
                            <li key={feature} className="flex items-center">
                              <svg
                                className="h-5 w-5 text-green-500 mr-2"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path d="M5 13l4 4L19 7" />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-[#104265] mb-4">
                          Why Choose Us
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {service.details}
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 pt-8">
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center text-[#104265] font-semibold group"
                      >
                        Enquire about this service
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
  )
}