// app/services/[slug]/page.tsx
import { getService, getServices } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { FaCheck, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const services = await getServices()
  
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: `${service.metadata?.service_name || service.title} - Digital Agency`,
    description: service.metadata?.description?.replace(/<[^>]*>/g, '').slice(0, 160) || '',
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = await getService(slug)

  if (!service) {
    notFound()
  }

  const features = service.metadata?.key_features?.split('\n').filter(Boolean) || []

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="mb-8">
          <Link 
            href="/services" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Services
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            {service.metadata?.service_icon && (
              <div className="mb-6">
                <img
                  src={`${service.metadata.service_icon.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                  alt={service.metadata?.service_name || service.title}
                  width="60"
                  height="60"
                  className="mx-auto rounded-lg"
                />
              </div>
            )}
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {service.metadata?.service_name || service.title}
            </h1>
            
            {service.metadata?.starting_price && (
              <p className="text-2xl font-semibold text-primary-600 mb-6">
                Starting at {service.metadata.starting_price}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Service Description
              </h2>
              <div 
                className="prose prose-lg text-gray-600"
                dangerouslySetInnerHTML={{ __html: service.metadata?.description || '' }}
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}