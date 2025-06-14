
import Navigation from '../components/Navigation';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "DevOps Project: Flask App Deployment on Azure",
      description: "Designed and deployed a Flask app on Azure using Docker, Terraform, and GitHub Actions, automating deployments and reducing manual effort by 80%.",
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=250&fit=crop",
      tags: ["Azure", "Docker", "Terraform", "CI/CD"],
      links: {
        case: "#",
        project: "#"
      }
    },
    {
      title: "InFocus Photography Studio - Digital Marketing Campaign",
      description: "Developed and led a digital marketing campaign for InFocus Photography Studio to enhance its online presence and attract more clients.",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=250&fit=crop",
      tags: ["Digital Marketing", "Analytics", "SEO"],
      links: {
        case: "#",
        project: "#"
      }
    },
    {
      title: "YouTube Slide Extractor: AI-Powered Presentation Generator",
      description: "Engineered an AI-powered Python application to automate the creation of editable PowerPoint presentations from YouTube videos.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      tags: ["Python", "AI", "OpenCV", "Machine Learning"],
      links: {
        case: "#",
        project: "#"
      }
    },
    {
      title: "E-commerce Analytics Dashboard",
      description: "Built a comprehensive analytics dashboard for e-commerce data visualization using Power BI and Python, providing real-time insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tags: ["Power BI", "Python", "Data Analysis", "SQL"],
      links: {
        case: "#",
        project: "#"
      }
    },
    {
      title: "Predictive Maintenance System",
      description: "Developed a machine learning model to predict equipment failures in manufacturing, reducing downtime by 35%.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=250&fit=crop",
      tags: ["Machine Learning", "Python", "IoT", "Predictive Analytics"],
      links: {
        case: "#",
        project: "#"
      }
    },
    {
      title: "Cloud Migration Strategy",
      description: "Led the migration of legacy applications to Azure cloud, implementing microservices architecture and improving scalability.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop",
      tags: ["Azure", "Microservices", "Cloud Migration", "DevOps"],
      links: {
        case: "#",
        project: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">My Work</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A showcase of my projects spanning Data Science, Machine Learning, DevOps, and Digital Solutions
            </p>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col lg:flex-row gap-12 items-center">
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl border border-white/10"
                  />
                </div>
                
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-center mb-4">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
                      alt="Profile" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <span className="text-white/60">Roshni Kumari</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold mb-6">{project.title}</h2>
                  <p className="text-lg text-white/80 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center text-green-400 hover:text-green-300 transition-colors font-medium">
                      Read case study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                    <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors font-medium">
                      View project
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
