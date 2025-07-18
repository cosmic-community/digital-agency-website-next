import { Service } from '@/types'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const features = service.metadata?.key_features?.split('\n').slice(0, 3) || []

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      {service.metadata?.service_icon && (
        <div className="mb-6">
          <img
            src={`${service.metadata.service_icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name || service.title}
            width="60"
            height="60"
            className="rounded-lg"
          />
        </div>
      )}

      <h3 className="text-2xl font-bold text-gray-900 mb-4">
        {service.metadata?.service_name || service.title}
      </h3>

      <div 
        className="text-gray-600 mb-6 line-clamp-3"
        dangerouslySetInnerHTML={{ 
          __html: service.metadata?.description?.replace(/<[^>]*>/g, '').slice(0, 120) + '...' || ''
        }}
      />

      {features.length > 0 && (
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm">
              • {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="flex items-center justify-between">
        {service.metadata?.starting_price && (
          <span className="text-2xl font-bold text-primary-600">
            {service.metadata.starting_price}
          </span>
        )}
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors font-medium"
        >
          Learn More <FaArrowRight className="ml-2" />
        </Link>
      </div>
    </div>
  )
}