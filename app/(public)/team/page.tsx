import Image from 'next/image'

export default function TeamPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Meet Our Team</h1>
          <p className="text-xl">
            Experienced professionals dedicated to your success
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.position}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex space-x-4">
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-blue-600"
                      >
                        <span className="sr-only">LinkedIn</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-blue-600 text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "John Smith",
    position: "Managing Director",
    image: "/images/team/john.jpg",
    description: "Over 20 years of experience in accounting and business advisory.",
    linkedin: "https://linkedin.com/in/john-smith",
  },
  {
    name: "Sarah Johnson",
    position: "Senior Accountant",
    image: "/images/team/sarah.jpg",
    description: "Specializes in tax planning and corporate accounting.",
    linkedin: "https://linkedin.com/in/sarah-johnson",
  },
  {
    name: "Michael Brown",
    position: "Business Advisor",
    image: "/images/team/michael.jpg",
    description: "Expert in business growth strategies and financial planning.",
    linkedin: "https://linkedin.com/in/michael-brown",
  },
]

const values = [
  {
    title: "Integrity",
    description: "We maintain the highest professional standards",
    icon: "🤝",
  },
  {
    title: "Excellence",
    description: "We strive for excellence in everything we do",
    icon: "⭐",
  },
  {
    title: "Innovation",
    description: "We embrace modern solutions and technologies",
    icon: "💡",
  },
  {
    title: "Partnership",
    description: "We build long-term relationships with our clients",
    icon: "🤝",
  },
]