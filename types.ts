// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Service interface
export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    description?: string;
    key_features?: string;
    starting_price?: string;
    service_icon?: {
      url: string;
      imgix_url: string;
    };
    featured_service?: boolean;
  };
}

// Team Member interface
export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    full_name?: string;
    job_title?: string;
    bio?: string;
    profile_photo?: {
      url: string;
      imgix_url: string;
    };
    linkedin_url?: string;
    twitter_url?: string;
    email?: string;
    years_experience?: number;
  };
}

// Case Study interface
export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    project_overview?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    project_images?: Array<{
      url: string;
      imgix_url: string;
    }>;
    services_used?: Service[];
    project_duration?: string;
    launch_date?: string;
    website_url?: string;
  };
}

// Testimonial interface
export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    client_name?: string;
    client_title?: string;
    company_name?: string;
    testimonial_text?: string;
    rating?: {
      key: string;
      value: string;
    };
    client_photo?: {
      url: string;
      imgix_url: string;
    };
    company_logo?: {
      url: string;
      imgix_url: string;
    };
    featured_testimonial?: boolean;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit?: number;
  skip?: number;
}

// Type guards for runtime validation
export function isService(obj: CosmicObject): obj is Service {
  return obj.type === 'services';
}

export function isTeamMember(obj: CosmicObject): obj is TeamMember {
  return obj.type === 'team-members';
}

export function isCaseStudy(obj: CosmicObject): obj is CaseStudy {
  return obj.type === 'case-studies';
}

export function isTestimonial(obj: CosmicObject): obj is Testimonial {
  return obj.type === 'testimonials';
}