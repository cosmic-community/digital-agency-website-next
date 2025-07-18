import Link from 'next/link';
import { CaseStudy } from '@/types';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {caseStudy.metadata.project_images && caseStudy.metadata.project_images.length > 0 && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={`${caseStudy.metadata.project_images[0].imgix_url}?w=800&h=400&fit=crop&auto=format,compress`}
            alt={caseStudy.metadata.project_title || 'Case Study'}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">
          {caseStudy.metadata.project_title}
        </h3>
        
        <p className="text-gray-600 mb-2">
          <strong>Client:</strong> {caseStudy.metadata.client_name}
        </p>
        
        <p className="text-gray-700 mb-4 line-clamp-3">
          {caseStudy.metadata.project_overview}
        </p>
        
        {caseStudy.metadata.services_used && caseStudy.metadata.services_used.length > 0 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-900 mb-2">Services Used:</p>
            <div className="flex flex-wrap gap-2">
              {caseStudy.metadata.services_used.map((service) => (
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
        
        <div className="flex justify-between items-center mt-6">
          <div className="text-sm text-gray-500">
            {caseStudy.metadata.project_duration && (
              <span>Duration: {caseStudy.metadata.project_duration}</span>
            )}
          </div>
          
          <Link
            href={`/case-studies/${caseStudy.slug}`}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
          >
            View Case Study
          </Link>
        </div>
      </div>
    </div>
  );
}