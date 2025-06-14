
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  return (
    <div className="w-full">
      <Navigation />
      <Hero />
      <ProjectsSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
