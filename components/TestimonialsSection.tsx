import { Testimonial } from '@/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 relative">
              {/* Featured Badge */}
              {testimonial.metadata.featured_testimonial && (
                <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </div>
              )}

              <div className="flex items-center mb-4">
                {testimonial.metadata.client_photo && (
                  <img
                    src={`${testimonial.metadata.client_photo.imgix_url}?w=120&h=120&fit=crop&auto=format,compress`}
                    alt={testimonial.metadata.client_name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.metadata.client_name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.metadata.client_title}
                    {testimonial.metadata.client_title && testimonial.metadata.company_name && ', '}
                    {testimonial.metadata.company_name}
                  </p>
                </div>
              </div>
              
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
              
              <p className="text-gray-700 mb-4 line-clamp-4">
                "{testimonial.metadata.testimonial_text}"
              </p>
              
              {testimonial.metadata.company_logo && (
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-center">
                  <img
                    src={`${testimonial.metadata.company_logo.imgix_url}?w=200&h=80&fit=max&auto=format,compress`}
                    alt={`${testimonial.metadata.company_name} logo`}
                    className="h-8 opacity-60 grayscale hover:opacity-80 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View All Testimonials Link */}
        {testimonials.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="/testimonials"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
            >
              View All Testimonials
              <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}