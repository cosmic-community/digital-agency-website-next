import { Service } from '@/types'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const features = service.metadata?.key_features?.split('\n').slice(0, 3) || []

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col">
      {service.metadata?.service_icon && (
        <div className="mb-4">
          <img
            src={`${service.metadata.service_icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={service.metadata?.service_name || service.title}
            width="60"
            height="60"
            className="rounded-lg object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {service.metadata?.service_name || service.title}
      </h3>

      <div className="text-gray-600 mb-4 flex-grow">
        <p className="text-sm leading-relaxed">
          {service.metadata?.description?.replace(/<[^>]*>/g, '').slice(0, 120)}
          {service.metadata?.description && service.metadata.description.length > 120 ? '...' : ''}
        </p>
      </div>

      {features.length > 0 && (
        <ul className="space-y-1 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="text-gray-600 text-sm flex items-start">
              <span className="text-blue-600 mr-2">•</span>
              <span>{feature.trim()}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto">
        {service.metadata?.starting_price && (
          <div className="mb-4">
            <span className="text-2xl font-bold text-blue-600">
              {service.metadata.starting_price}
            </span>
          </div>
        )}
        
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors font-medium text-sm group"
        >
          Learn More 
          <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  )
}