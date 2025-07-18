// Base Cosmic object type
export interface CosmicObject {
  id: string;
  title: string;
  slug: string;
  content?: string;
  metadata: Record<string, any>;
  created_at: string;
  modified_at: string;
  status: string;
  published_at?: string;
  type: string;
}

// File/Media type from Cosmic
export interface CosmicFile {
  url: string;
  imgix_url: string;
  name?: string;
  size?: number;
  type?: string;
}

// Rating type for testimonials
export interface Rating {
  key: string;
  value: string;
}

// Service type
export interface Service extends CosmicObject {
  metadata: {
    service_name: string;
    description: string;
    key_features: string;
    starting_price: string;
    service_icon?: CosmicFile;
    featured_service: boolean;
  };
}

// Team Member type
export interface TeamMember extends CosmicObject {
  metadata: {
    full_name: string;
    job_title: string;
    bio: string;
    profile_photo?: CosmicFile;
    linkedin_url?: string;
    twitter_url?: string;
    email?: string;
    years_experience?: number;
  };
}

// Case Study type
export interface CaseStudy extends CosmicObject {
  metadata: {
    project_title: string;
    client_name: string;
    project_overview: string;
    project_description?: string;
    challenges?: string;
    solution?: string;
    results?: string;
    project_images?: CosmicFile[];
    services_used?: Service[];
    project_duration?: string;
    project_date?: string;
    project_url?: string;
  };
}

// Testimonial type
export interface Testimonial extends CosmicObject {
  metadata: {
    client_name: string;
    client_title?: string;
    company_name: string;
    testimonial_text: string;
    rating?: Rating;
    client_photo?: CosmicFile;
    company_logo?: CosmicFile;
    featured_testimonial: boolean;
  };
}

// About Page type
export interface AboutPage extends CosmicObject {
  metadata: {
    page_title: string;
    hero_headline: string;
    hero_subheadline: string;
    hero_image?: CosmicFile;
    mission_statement: string;
    vision_statement: string;
    company_story: string;
    years_in_business: number;
    projects_completed: number;
    happy_clients: number;
    team_members_count: number;
    why_choose_us_title: string;
    why_choose_us_content: string;
  };
}