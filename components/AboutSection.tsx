import { AboutPage } from '@/types';

interface AboutSectionProps {
  aboutData: AboutPage;
}

export default function AboutSection({ aboutData }: AboutSectionProps) {
  const { metadata } = aboutData;

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {metadata.hero_headline}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {metadata.hero_subheadline}
          </p>
          {metadata.hero_image && (
            <div className="max-w-4xl mx-auto">
              <img
                src={`${metadata.hero_image.imgix_url}?w=1200&h=600&fit=crop&auto=format,compress`}
                alt="About us hero image"
                className="w-full h-96 object-cover rounded-lg shadow-xl"
              />
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {metadata.years_in_business}+
            </div>
            <div className="text-gray-600">Years in Business</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {metadata.projects_completed}+
            </div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {metadata.happy_clients}+
            </div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">
              {metadata.team_members_count}+
            </div>
            <div className="text-gray-600">Team Members</div>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              {metadata.mission_statement}
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed">
              {metadata.vision_statement}
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Story
          </h2>
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.company_story }}
            />
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {metadata.why_choose_us_title}
          </h2>
          <div className="max-w-4xl mx-auto">
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: metadata.why_choose_us_content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}