import { createBucketClient } from '@cosmicjs/sdk';
import { CaseStudy, Testimonial, Service, TeamMember } from '@/types';

// Initialize Cosmic client
const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG || '',
  readKey: process.env.COSMIC_READ_KEY || '',
});

// Get all case studies
export async function getCaseStudies(): Promise<CaseStudy[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'case-studies' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

// Get a single case study by slug
export async function getCaseStudy(slug: string): Promise<CaseStudy | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'case-studies', slug })
      .depth(1);
    return response.object;
  } catch (error) {
    console.error('Error fetching case study:', error);
    return null;
  }
}

// Get all testimonials
export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return [];
  }
}

// Get featured testimonials
export async function getFeaturedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'testimonials' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    const testimonials = response.objects;
    const featured = testimonials.filter(t => t.metadata.featured_testimonial);
    
    // Return featured testimonials, or first 3 if no featured ones
    return featured.length > 0 ? featured : testimonials.slice(0, 3);
  } catch (error) {
    console.error('Error fetching featured testimonials:', error);
    return [];
  }
}

// Get all services
export async function getServices(): Promise<Service[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'services' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
}

// Get a single service by slug
export async function getService(slug: string): Promise<Service | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'services', slug })
      .depth(1);
    return response.object;
  } catch (error) {
    console.error('Error fetching service:', error);
    return null;
  }
}

// Get all team members
export async function getTeamMembers(): Promise<TeamMember[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'team-members' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    return response.objects;
  } catch (error) {
    console.error('Error fetching team members:', error);
    return [];
  }
}