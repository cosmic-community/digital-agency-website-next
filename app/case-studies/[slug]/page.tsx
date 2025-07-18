// app/case-studies/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getCaseStudyBySlug } from '@/lib/cosmic'
import { CaseStudy, Service, CosmicFile } from '@/types'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)
  
  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata.project_title} - Case Study`,
    description: caseStudy.metadata.project_overview,
  }
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudyBySlug(slug)

  if (!caseStudy) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {caseStudy.metadata.project_title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {caseStudy.metadata.project_overview}
            </p>
          </div>

          {caseStudy.metadata.project_images && caseStudy.metadata.project_images.length > 0 && (
            <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
              <img
                src={`${caseStudy.metadata.project_images[0].imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt={caseStudy.metadata.project_title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Project Overview</h2>
              <div className="text-gray-700 leading-relaxed">
                {caseStudy.metadata.project_description ? (
                  <div dangerouslySetInnerHTML={{ __html: caseStudy.metadata.project_description }} />
                ) : (
                  <p>{caseStudy.metadata.project_overview}</p>
                )}
              </div>

              {caseStudy.metadata.challenges && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Challenges</h3>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenges }} />
                </div>
              )}

              {caseStudy.metadata.solution && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }} />
                </div>
              )}

              {caseStudy.metadata.results && (
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }} />
                </div>
              )}
            </div>
          </div>

          <div className="md:col-span-1">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="text-sm font-medium text-gray-500">Client</span>
                  <p className="text-gray-900">{caseStudy.metadata.client_name}</p>
                </div>

                {caseStudy.metadata.project_duration && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Duration</span>
                    <p className="text-gray-900">{caseStudy.metadata.project_duration}</p>
                  </div>
                )}

                {caseStudy.metadata.project_date && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Date</span>
                    <p className="text-gray-900">{new Date(caseStudy.metadata.project_date).toLocaleDateString()}</p>
                  </div>
                )}

                {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Services Used</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {caseStudy.metadata.services_used.map((service: Service) => (
                        <span
                          key={service.id}
                          className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {service.metadata?.service_name || service.title}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {caseStudy.metadata.project_url && (
                  <div>
                    <span className="text-sm font-medium text-gray-500">Live Project</span>
                    <a
                      href={caseStudy.metadata.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      View Live Site
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Images */}
        {caseStudy.metadata.project_images && caseStudy.metadata.project_images.length > 1 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Project Gallery</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {caseStudy.metadata.project_images.slice(1).map((image: CosmicFile, index: number) => (
                <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src={`${image.imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
                    alt={`${caseStudy.metadata.project_title} - Image ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to start your project?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can help transform your digital presence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="/case-studies"
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
            >
              View More Case Studies
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}