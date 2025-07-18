import { TeamMember } from '@/types'
import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'

interface TeamMemberCardProps {
  member: TeamMember
}

export default function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
      {member.metadata?.profile_photo && (
        <div className="mb-6">
          <img
            src={`${member.metadata.profile_photo.imgix_url}?w=240&h=240&fit=crop&auto=format,compress`}
            alt={member.metadata?.full_name || member.title}
            width="120"
            height="120"
            className="w-32 h-32 rounded-full mx-auto object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {member.metadata?.full_name || member.title}
      </h3>

      <p className="text-primary-600 font-medium mb-4">
        {member.metadata?.job_title}
      </p>

      {member.metadata?.bio && (
        <p className="text-gray-600 mb-6 line-clamp-3">
          {member.metadata.bio}
        </p>
      )}

      <div className="flex justify-center space-x-4">
        {member.metadata?.linkedin_url && (
          <a
            href={member.metadata.linkedin_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        )}
        {member.metadata?.twitter_url && (
          <a
            href={member.metadata.twitter_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary-600 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
        )}
        {member.metadata?.email && (
          <a
            href={`mailto:${member.metadata.email}`}
            className="text-gray-400 hover:text-primary-600 transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        )}
      </div>

      {member.metadata?.years_experience && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <span className="text-sm text-gray-500">
            {member.metadata.years_experience} years of experience
          </span>
        </div>
      )}
    </div>
  )
}