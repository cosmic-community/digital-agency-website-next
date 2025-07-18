import { createBucketClient } from '@cosmicjs/sdk'

const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
  writeKey: process.env.COSMIC_WRITE_KEY || '',
})

export async function getServices() {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects
  } catch (error) {
    console.error('Error fetching services:', error)
    return []
  }
}

export async function getServiceBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object
  } catch (error) {
    console.error('Error fetching service:', error)
    return null
  }
}

export async function getTeamMembers() {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects
  } catch (error) {
    console.error('Error fetching team members:', error)
    return []
  }
}

export async function getCaseStudies() {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return []
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.object
  } catch (error) {
    console.error('Error fetching case study:', error)
    return null
  }
}

export async function getFeaturedTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects
  } catch (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
}

export async function getTestimonials() {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['title', 'slug', 'metadata'])
      .depth(1)
    return response.objects
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