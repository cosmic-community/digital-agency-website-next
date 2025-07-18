import { getServices } from '@/lib/cosmic'
import ServiceCard from '@/components/ServiceCard'
import { Service } from '@/types'

export const metadata = {
  title: 'Our Services - Digital Agency',
  description: 'Explore our comprehensive digital services including web development, SEO optimization, brand identity design, and social media marketing.',
}

export default async function ServicesPage() {
  const services = await getServices()

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service: Service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  )
}