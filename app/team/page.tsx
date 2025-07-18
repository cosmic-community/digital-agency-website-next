import { getTeamMembers } from '@/lib/cosmic'
import TeamMemberCard from '@/components/TeamMemberCard'
import { TeamMember } from '@/types'

export const metadata = {
  title: 'Our Team - Digital Agency',
  description: 'Meet our talented team of designers, developers, and digital marketing experts dedicated to helping your business succeed.',
}

export default async function TeamPage() {
  const teamMembers = await getTeamMembers()

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in design, development, and digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member: TeamMember) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </div>
  )
}