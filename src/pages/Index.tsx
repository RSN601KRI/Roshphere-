
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import NewsletterSection from '../components/NewsletterSection';
import SparkleEffect from '../components/SparkleEffect';

const Index = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <NewsletterSection />
      <SparkleEffect />
    </div>
  );
};

export default Index;
