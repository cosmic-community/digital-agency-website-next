import { Testimonial } from '@/types'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Featured Badge */}
      {testimonial.metadata.featured_testimonial && (
        <div className="inline-block bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
          Featured
        </div>
      )}
      
      {/* Rating */}
      {testimonial.metadata.rating && (
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < parseInt(testimonial.metadata.rating?.key || '0') 
                  ? 'text-yellow-400' 
                  : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-gray-600">
            {testimonial.metadata.rating.value}
          </span>
        </div>
      )}
      
      {/* Testimonial Text */}
      <blockquote className="text-gray-700 text-lg italic leading-relaxed mb-6">
        "{testimonial.metadata.testimonial_text}"
      </blockquote>
      
      {/* Client Info */}
      <div className="flex items-center">
        {testimonial.metadata.client_photo && (
          <img
            src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
            alt={testimonial.metadata.client_name}
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
        )}
        <div className="flex-1">
          <div className="font-semibold text-gray-900">
            {testimonial.metadata.client_name}
          </div>
          <div className="text-sm text-gray-600">
            {testimonial.metadata.client_title}
            {testimonial.metadata.client_title && testimonial.metadata.company_name && ', '}
            {testimonial.metadata.company_name}
          </div>
        </div>
      </div>
      
      {/* Company Logo */}
      {testimonial.metadata.company_logo && (
        <div className="mt-6 pt-6 border-t border-gray-100 flex justify-center">
          <img
            src={`${testimonial.metadata.company_logo.imgix_url}?w=200&h=80&fit=max&auto=format,compress`}
            alt={`${testimonial.metadata.company_name} logo`}
            className="h-10 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
          />
        </div>
      )}
    </div>
  )
}