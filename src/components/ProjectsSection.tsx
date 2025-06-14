import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "DevOps Project: Flask App Deployment on Azure",
      description: "Designed and deployed a Flask app on Azure using Docker, Terraform, and GitHub Actions, automating deployments and reducing manual effort by 80%.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      tags: ["Azure", "Docker", "Terraform", "CI/CD"]
    },
    {
      title: "YouTube Slide Extractor: AI-Powered Presentation Generator",
      description: "Engineered an AI-powered Python application to automate the creation of editable PowerPoint presentations from YouTube videos.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Python", "AI", "OpenCV", "Machine Learning"]
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(135,206,235,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(135,206,235,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">Featured Projects</h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of my recent work in Data Science, Machine Learning, and DevOps
          </p>
        </div>

        <div className="space-y-16 sm:space-y-24">
          {featuredProjects.map((project, index) => (
            <div key={index} className={`flex flex-col lg:flex-row gap-8 sm:gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 sm:h-80 object-cover rounded-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-4">
                  <img 
                    src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                    alt="Profile" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="text-white/60">Roshni Kumari</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">{project.title}</h3>
                <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center lg:justify-start">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                  <button className="flex items-center justify-center text-green-400 hover:text-green-300 transition-colors font-medium">
                    Read case study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                  <button className="flex items-center justify-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                    View project
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 sm:mt-16">
          <Link 
            to="/work"
            className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white hover:bg-white/15 transition-all duration-300 hover:scale-105"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
