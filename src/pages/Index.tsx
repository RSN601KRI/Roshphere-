
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import Gallery from '../components/Gallery';
import NewsletterSection from '../components/NewsletterSection';
import SparkleEffect from '../components/SparkleEffect';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <Gallery />
      <NewsletterSection />
      <SparkleEffect />
      <Toaster />
    </div>
  );
};

export default Index;
