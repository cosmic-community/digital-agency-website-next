import { createBucketClient } from '@cosmicjs/sdk'
import { Service, TeamMember, CaseStudy, Testimonial, AboutPage } from '@/types'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  writeKey: process.env.COSMIC_WRITE_KEY || '',
})

export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Service[]
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object as Service
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

// Add alias for backward compatibility
export const getService = getServiceBySlug

export async function getAboutPage(): Promise<AboutPage | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'about-page', slug: 'about' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object as AboutPage
  } catch (error) {
    console.error('Error fetching about page:', error)
    return null
  }
}

export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as TeamMember[]
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as CaseStudy[]
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object as CaseStudy
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects as Testimonial[]
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getCompanyInfo() {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'company-info', slug: 'company-info' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object
  } catch (error) {
    console.error('Error fetching company info:', error)
    return null
  }
}