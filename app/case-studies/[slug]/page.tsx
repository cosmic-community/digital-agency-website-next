// app/case-studies/[slug]/page.tsx
import { getCaseStudy, getCaseStudies } from '@/lib/cosmic'
import { notFound } from 'next/navigation'
import { FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa'
import Link from 'next/link'

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies()
  
  return caseStudies.map((caseStudy) => ({
    slug: caseStudy.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    return {
      title: 'Case Study Not Found',
    }
  }

  return {
    title: `${caseStudy.metadata?.project_title || caseStudy.title} - Case Study`,
    description: caseStudy.metadata?.project_overview?.slice(0, 160) || '',
  }
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params
  const caseStudy = await getCaseStudy(slug)

  if (!caseStudy) {
    notFound()
  }

  const projectImages = caseStudy.metadata?.project_images || []

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="mb-8">
          <Link 
            href="/case-studies" 
            className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
          >
            <FaArrowLeft className="mr-2" />
            Back to Case Studies
          </Link>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {caseStudy.metadata?.project_title || caseStudy.title}
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-600 mb-6">
              {caseStudy.metadata?.client_name && (
                <span className="font-medium">
                  Client: {caseStudy.metadata.client_name}
                </span>
              )}
              {caseStudy.metadata?.project_duration && (
                <span>
                  Duration: {caseStudy.metadata.project_duration}
                </span>
              )}
              {caseStudy.metadata?.launch_date && (
                <span>
                  Launch: {new Date(caseStudy.metadata.launch_date).toLocaleDateString()}
                </span>
              )}
            </div>

            {caseStudy.metadata?.website_url && (
              <Link
                href={caseStudy.metadata.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
              >
                Visit Website <FaExternalLinkAlt className="ml-2 text-sm" />
              </Link>
            )}
          </div>

          {projectImages.length > 0 && (
            <div className="mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projectImages.map((image, index) => (
                  <div key={index} className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={`${image.imgix_url}?w=600&h=400&fit=crop&auto=format,compress`}
                      alt={`Project image ${index + 1}`}
                      width="300"
                      height="200"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="prose prose-lg max-w-none space-y-8">
            {caseStudy.metadata?.project_overview && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Project Overview
                </h2>
                <p className="text-gray-600">{caseStudy.metadata.project_overview}</p>
              </div>
            )}

            {caseStudy.metadata?.challenge && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Challenge
                </h2>
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.challenge }}
                />
              </div>
            )}

            {caseStudy.metadata?.solution && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Solution
                </h2>
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.solution }}
                />
              </div>
            )}

            {caseStudy.metadata?.results && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Results
                </h2>
                <div 
                  className="text-gray-600"
                  dangerouslySetInnerHTML={{ __html: caseStudy.metadata.results }}
                />
              </div>
            )}
          </div>

          {caseStudy.metadata?.services_used && caseStudy.metadata.services_used.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                Services Used
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {caseStudy.metadata.services_used.map((service) => (
                  <div key={service.id} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    {service.metadata?.service_icon && (
                      <img
                        src={`${service.metadata.service_icon.imgix_url}?w=48&h=48&fit=crop&auto=format,compress`}
                        alt={service.metadata?.service_name || service.title}
                        width="24"
                        height="24"
                        className="w-6 h-6 mr-3"
                      />
                    )}
                    <span className="font-medium text-gray-900">
                      {service.metadata?.service_name || service.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}