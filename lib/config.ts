import {
    CalculatorIcon,
    DocumentTextIcon,
    ChartBarIcon,
    UserGroupIcon,
    CurrencyPoundIcon,
    RocketLaunchIcon,
    UserIcon,
    ComputerDesktopIcon,
    ClockIcon,
    BuildingOfficeIcon,
    DocumentChartBarIcon,
    ClipboardDocumentCheckIcon,
    BanknotesIcon,
    MagnifyingGlassIcon,
    LanguageIcon
} from '@heroicons/react/24/outline'

export const siteConfig = {
    name: "JTA Accountants and Business Advisors",
    description: "Professional accounting and business advisory services in Nottingham",
    contact: {
        phone: "0115 8544 081",
        email: "info@jtaaccountants.co.uk",
        address: {
            street: "22 Nuthall Road",
            city: "Nottingham",
            postcode: "NG8 5AT"
        },
        companyNumber: "10923422"
    },
    social: {
        facebook: "https://www.facebook.com/JTA-Accountants-293403091382162",
        twitter: "https://twitter.com/JTAAccountants",
        instagram: "https://www.instagram.com/jtaaccountants/?hl=en",
        linkedin: "https://www.linkedin.com/company/jta-accountants/about/"
    },
    services: [
        {
            title: "Accounts for Companies, Sole Traders and Charities",
            description: "Comprehensive accounting services tailored to your business structure, ensuring compliance and financial clarity",
            icon: BuildingOfficeIcon,
            link: "/services#accounts"
        },
        {
            title: "VAT & Mini One Stop Shop (MOSS) VAT",
            description: "Expert VAT registration, returns and planning to keep your business compliant and efficient",
            icon: CalculatorIcon,
            link: "/services#vat"
        },
        {
            title: "Payroll & PAYE",
            description: "Complete payroll management services, handling PAYE, pensions, and employee benefits",
            icon: UserGroupIcon,
            link: "/services#payroll"
        },
        {
            title: "Corporation Tax",
            description: "Strategic corporation tax planning and compliance for UK companies and foreign branches",
            icon: DocumentChartBarIcon,
            link: "/services#corporation-tax"
        },
        {
            title: "Construction Industry Scheme - IR35",
            description: "Specialist advice and compliance services for contractors and construction businesses",
            icon: ClipboardDocumentCheckIcon,
            link: "/services#cis-ir35"
        },
        {
            title: "Making Tax Digital (MTD)",
            description: "Supporting your transition to digital tax systems, ensuring seamless compliance with MTD requirements",
            icon: ComputerDesktopIcon,
            link: "/services#mtd"
        },
        {
            title: "Capital Gains Tax",
            description: "Expert guidance on CGT planning and compliance for personal and business asset disposals",
            icon: BanknotesIcon,
            link: "/services#cgt"
        },
        {
            title: "Business Advisory & Forecasting",
            description: "Strategic business planning and financial forecasting to drive your business growth",
            icon: ChartBarIcon,
            link: "/services#advisory"
        },
        {
            title: "Tax Investigation & Forensic Accounting",
            description: "Professional support and expertise for tax investigations and complex financial analysis",
            icon: MagnifyingGlassIcon,
            link: "/services#investigations"
        }
    ],
    features: [
        {
            title: "Experienced Team",
            description: "Over 100+ years of combined experience",
            icon: UserIcon
        },
        {
            title: "Multilingual Support",
            description: "Services in English, Russian, Urdu, and Punjabi",
            icon: LanguageIcon
        },
        {
            title: "Personalized Service",
            description: "Tailored solutions for your business",
            icon: BuildingOfficeIcon
        },
        {
            title: "Modern Technology",
            description: "Using the latest accounting software",
            icon: ComputerDesktopIcon
        }
    ],
    navigation: {
        main: [
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: "About", href: "/about" },
            { name: "Contact Us", href: "/contact" },
        ],
        footer: [
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms" },
            { name: "Sitemap", href: "/sitemap" }
        ],
        socials: [
            { name: "Instagram", href: "https://www.instagram.com/jtaaccountants/?hl=en" },
            { name: "Facebook", href: "https://www.facebook.com/JTA-Accountants-293403091382162" },
            { name: "LinkedIn", href: "https://www.linkedin.com/company/jta-accountants/about/" },
            { name: "Twitter", href: "https://twitter.com/JTAAccountants" }
        ]
    }
} 