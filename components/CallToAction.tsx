import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's work together to create something amazing. Get in touch today and let's discuss your project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors border border-blue-500"
            >
              View Our Services
            </Link>
          </div>
          
          <div className="mt-12 pt-8 border-t border-blue-500">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
                <p className="text-blue-100">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">95%</h3>
                <p className="text-blue-100">Client Satisfaction</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">24/7</h3>
                <p className="text-blue-100">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}