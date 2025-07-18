import { getServices, getTeamMembers, getCaseStudies, getFeaturedTestimonials } from '@/lib/cosmic'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import TeamSection from '@/components/TeamSection'
import CaseStudiesSection from '@/components/CaseStudiesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import CallToAction from '@/components/CallToAction'

export default async function HomePage() {
  const [services, teamMembers, caseStudies, testimonials] = await Promise.all([
    getServices(),
    getTeamMembers(),
    getCaseStudies(),
    getFeaturedTestimonials(),
  ])

  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesSection services={services} />
      <TeamSection teamMembers={teamMembers} />
      <CaseStudiesSection caseStudies={caseStudies} />
      <TestimonialsSection testimonials={testimonials} />
      <CallToAction />
    </div>
  )
}