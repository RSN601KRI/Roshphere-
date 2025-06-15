
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import Gallery from '../components/Gallery';
import NewsletterSection from '../components/NewsletterSection';
import SparkleEffect from '../components/SparkleEffect';

const Index = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <Gallery />
      <NewsletterSection />
      <SparkleEffect />
    </div>
  );
};

export default Index;
