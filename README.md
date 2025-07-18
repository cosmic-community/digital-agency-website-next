# LFG Cosmic

![Digital Agency Website](https://imgix.cosmicjs.com/fa3b88d0-63ed-11f0-a051-23c10f41277a-photo-1414235077428-338989a2e8c0-1752853419599.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A modern, professional digital agency website built with Next.js that showcases services, team members, case studies, and client testimonials. The website features a clean, responsive design with smooth animations and optimized performance.

## Features

- **Services Showcase**: Display all digital services with detailed descriptions and pricing
- **Team Member Profiles**: Professional team presentations with social media links
- **Case Studies Portfolio**: Detailed project showcases with challenges, solutions, and results
- **Client Testimonials**: Social proof with ratings and client photos
- **Dynamic Content Management**: Fully integrated with Cosmic CMS for easy content updates
- **Responsive Design**: Mobile-first approach ensuring perfect display across all devices
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **TypeScript**: Full type safety and better development experience

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=687a6a5c7ce43d105ef5eba2&clone_repository=687a6ca57ce43d105ef5ebc3)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a content model for a digital agency website with services, team members, testimonials, and case studies"

### Code Generation Prompt

> "Build a Next.js website that uses my existing objects in this bucket. Set apiEnvironment: "staging" in cosmic config"

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless CMS for content management
- **React Icons** - Icon library for UI elements

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account with your content bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Create a `.env.local` file with your Cosmic credentials:
   ```env
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

4. Run the development server:
   ```bash
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Services
```typescript
import { cosmic } from '@/lib/cosmic'

const services = await cosmic.objects
  .find({ type: 'services' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Team Members
```typescript
const teamMembers = await cosmic.objects
  .find({ type: 'team-members' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Case Studies
```typescript
const caseStudies = await cosmic.objects
  .find({ type: 'case-studies' })
  .props(['id', 'title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application integrates with [Cosmic](https://www.cosmicjs.com) to manage:

- **Services**: Digital marketing services with descriptions, features, and pricing
- **Team Members**: Staff profiles with photos, bios, and social media links
- **Case Studies**: Project showcases with challenges, solutions, and results
- **Testimonials**: Client feedback with ratings and company information

For more information about Cosmic CMS, visit the [Cosmic docs](https://www.cosmicjs.com/docs).

## Deployment

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/digital-agency-website)

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/digital-agency-website)

### Environment Variables

Make sure to set these environment variables in your hosting platform:

- `COSMIC_BUCKET_SLUG`
- `COSMIC_READ_KEY`
- `COSMIC_WRITE_KEY`

<!-- README_END -->