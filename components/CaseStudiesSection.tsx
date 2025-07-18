import Link from 'next/link';
import { getCaseStudies } from '@/lib/cosmic';
import CaseStudyCard from './CaseStudyCard';

export default async function CaseStudiesSection() {
  const caseStudies = await getCaseStudies();
  
  // Show only the first 3 case studies on the homepage
  const featuredCaseStudies = caseStudies.slice(0, 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCaseStudies.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}