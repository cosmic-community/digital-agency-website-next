import { getCaseStudies } from '@/lib/cosmic'
import CaseStudyCard from '@/components/CaseStudyCard'
import { CaseStudy } from '@/types'

export const metadata = {
  title: 'Case Studies - Digital Agency',
  description: 'Explore our successful digital projects and see how we\'ve helped businesses achieve their goals through innovative solutions.',
}

export default async function CaseStudiesPage() {
  const caseStudies = await getCaseStudies()

  return (
    <div className="min-h-screen bg-white">
      <div className="container section-padding">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((caseStudy: CaseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </div>
  )
}