
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "GreenGuardian",
      description: "AI-powered environmental monitoring platform with real-time data analytics and predictive insights for sustainable practices.",
      tech: ["React", "Python", "TensorFlow", "AWS"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "CloudNative Dashboard",
      description: "Comprehensive cloud infrastructure monitoring and management platform with automated scaling and cost optimization.",
      tech: ["Vue.js", "Node.js", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Neural Network Visualizer",
      description: "Interactive tool for visualizing and understanding deep learning model architectures and training processes.",
      tech: ["D3.js", "Python", "PyTorch", "Flask"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "DevOps Pipeline Automator",
      description: "End-to-end CI/CD pipeline automation tool with integrated testing, deployment, and monitoring capabilities.",
      tech: ["Jenkins", "Terraform", "Ansible", "Prometheus"],
      github: "#",
      demo: "#",
      featured: true
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore a curated selection of my most impactful projects, showcasing innovation and technical expertise.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <p className="text-white/80 text-base mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="bg-blue-600/20 text-blue-300 text-xs px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    className="text-white/70 hover:text-blue-400 transition-colors flex items-center text-sm"
                  >
                    <Github className="w-4 h-4 mr-2" /> 
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    className="text-white/70 hover:text-green-400 transition-colors flex items-center text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" /> 
                    Demo
                  </a>
                </div>
                <button className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium">
                  Read case study →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
