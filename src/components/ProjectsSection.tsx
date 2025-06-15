
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: "budgetlyzer",
      title: "Budgetlyzer – AI-Powered Budgeting for Project-Based Businesses",
      description: "An intelligent budgeting platform that helps project-based businesses track, analyze, and optimize expenses in real-time through AI-powered transaction monitoring and predictive analytics.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/Budgetlyzer"
    },
    {
      id: "nexalyst",
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      description: "A comprehensive web-based forensic analysis platform for the Solana blockchain that empowers security researchers to visualize, track, and analyze on-chain fund movements with precision.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/solana-trace-nexus"
    }
  ];

  const blogPosts = [
    {
      title: "How Machine Learning and DevOps Are Revolutionizing Data-Driven Decision Making",
      date: "March 15, 2025",
      category: "Data Science"
    },
    {
      title: "The Role of AI in Modern DevOps: Automating the Future of Software Development",
      date: "February 20, 2025",
      category: "DevOps"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Projects Section */}
        <div className="space-y-20 max-w-5xl mx-auto mb-20">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                {/* Left side - Project Title */}
                <div className="lg:pr-8">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {project.title}
                  </h3>
                </div>
                
                {/* Right side - Description and Actions */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={project.profileImage} 
                      alt="Profile" 
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to={`/case-study/${project.id}`}
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium group"
                    >
                      Read case study
                      <svg 
                        className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    
                    <a 
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-sm font-medium group"
                    >
                      View project
                      <svg 
                        className="w-4 h-4 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Divider line except for last item */}
              {index < projects.length - 1 && (
                <div className="mt-20 border-b border-white/10"></div>
              )}
            </div>
          ))}
        </div>

        {/* Latest from the blog Section */}
        <div className="mt-32">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            {/* Left side - "Latest from the blog" heading */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Latest from<br />the blog
              </h2>
            </div>

            {/* Right side - Blog posts */}
            <div className="lg:col-span-2 space-y-12">
              {blogPosts.map((post, index) => (
                <div key={index} className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-white/60 text-sm">{post.date}</p>
                  <div className="inline-block">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      post.category === 'Data Science' ? 'bg-blue-500/20 text-blue-400 border-blue-500/30' :
                      'bg-green-500/20 text-green-400 border-green-500/30'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
