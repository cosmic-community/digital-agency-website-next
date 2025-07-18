import { Metadata } from 'next'
import { getTestimonials } from '@/lib/cosmic'
import TestimonialCard from '@/components/TestimonialCard'
import CallToAction from '@/components/CallToAction'
import { Testimonial } from '@/types'

export const metadata: Metadata = {
  title: 'Client Testimonials - DigitalAgency',
  description: 'Read what our satisfied clients have to say about our digital marketing services, web development, and business growth solutions.',
}

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Client Testimonials
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Don't just take our word for it. Here's what our satisfied clients have to say 
              about working with us and the results we've delivered for their businesses.
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold">150+</div>
                <div className="text-primary-200">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-primary-200">Client Retention</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-primary-200">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {testimonials.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial: Testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                No testimonials found
              </h2>
              <p className="text-gray-600">
                Check back soon for client testimonials and reviews.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <CallToAction />
    </div>
  )
}