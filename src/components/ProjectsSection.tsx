import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GreenGuardian",
      description: "AI-powered environmental monitoring platform with real-time data analytics and predictive insights for sustainable practices.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      image: "/lovable-uploads/1515876d-049d-4ff7-bbbf-7296661a9c1d.png",
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "CloudNative Dashboard",
      description: "Comprehensive cloud infrastructure monitoring and management platform with automated scaling and cost optimization.",
      tech: ["Vue.js", "Node.js", "Docker", "Kubernetes"],
      image: "/lovable-uploads/cbc33d3c-5a4d-4292-9f93-d4173c06f41e.png",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding deep learning model architectures and training processes.",
      tech: ["D3.js", "Python", "PyTorch", "Flask"],
      image: "/lovable-uploads/f2a2c04d-24c0-442f-a85a-47f640d709b4.png",
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "DevOps Pipeline Automator",
      description: "End-to-end CI/CD pipeline automation tool with integrated testing, deployment, and monitoring capabilities.",
      tech: ["Jenkins", "Terraform", "Ansible", "Prometheus"],
      image: "/lovable-uploads/5b1b3909-9b75-44db-b8b5-0549d6f87766.png",
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Grid Pattern Background with navy blue theme */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore a curated selection of my most impactful projects, showcasing innovation and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{project.description}</p>
                  <div className="flex space-x-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-blue-600/20 text-blue-300 text-xs px-2 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                  <div className="flex space-x-3 mt-4">
                    <a href={project.github} className="text-white hover:text-blue-400 transition-colors flex items-center">
                      <Github className="w-4 h-4 mr-1" /> GitHub
                    </a>
                    <a href={project.demo} className="text-white hover:text-green-400 transition-colors flex items-center">
                      <ExternalLink className="w-4 h-4 mr-1" /> Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
