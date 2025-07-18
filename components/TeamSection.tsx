import { TeamMember } from '@/types'
import TeamMemberCard from './TeamMemberCard'
import Link from 'next/link'

interface TeamSectionProps {
  teamMembers: TeamMember[]
}

export default function TeamSection({ teamMembers }: TeamSectionProps) {
  return (
    <section className="bg-white section-padding">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in design, development, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/team"
            className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            View Full Team
          </Link>
        </div>
      </div>
    </section>
  )
}