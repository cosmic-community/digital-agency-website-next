import { Metadata } from 'next';
import { getAboutPage } from '@/lib/cosmic';
import AboutSection from '@/components/AboutSection';

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutPage();
  
  return {
    title: aboutData?.metadata.page_title || 'About Us',
    description: aboutData?.metadata.hero_subheadline || 'Learn more about our digital agency',
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutPage();

  if (!aboutData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            About page content not found
          </h1>
          <p className="text-gray-600">
            Please check your Cosmic CMS configuration.
          </p>
        </div>
      </div>
    );
  }

  return (
    <main>
      <AboutSection aboutData={aboutData} />
    </main>
  );
}