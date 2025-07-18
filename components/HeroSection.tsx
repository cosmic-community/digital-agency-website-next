import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=2000&auto=format,compress&fit=crop"
          alt="Digital workspace background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600/80 to-primary-800/80 z-10"></div>
      
      <div className="relative z-20 container section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Transform Your Digital Presence
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-100 animate-slide-up">
            We create stunning websites, boost your SEO rankings, and elevate your brand 
            to drive real business results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Explore Our Services
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-lg hover:bg-white hover:text-primary-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}