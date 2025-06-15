
const ProjectsSection = () => {
  const projects = [
    {
      title: "Budgetlyzer - AI-Powered Budgeting Tool",
      description: "An AI-powered budgeting tool designed for project-based businesses. It leverages Payman AI's multi-account feature to help businesses efficiently track, analyze, and manage their project budgets in real-time.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      caseStudyLink: "#"
    },
    {
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      description: "A powerful web-based forensic analysis platform for the Solana blockchain enables security researchers, investigators and compliance teams to visualise, track and analyse on-chain fund movements precisely and clearly.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      caseStudyLink: "#"
    },
    {
      title: "SolarShare - DePIN Solar Energy Marketplace",
      description: "A DePIN (Decentralized Physical Infrastructure Network) project built on Solana, designed to revolutionize how communities in India share solar energy. Leveraging blockchain technology, SolarShare allows users to sell and buy excess solar energy locally through a secure, real-time marketplace.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      caseStudyLink: "#"
    },
    {
      title: "TreadPulse - AI Trading News Application",
      description: "An intelligent trading news application that leverages artificial intelligence to provide real-time market insights, sentiment analysis, and personalized trading recommendations for cryptocurrency and traditional markets.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      caseStudyLink: "#"
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
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <img 
                    src={project.profileImage}
                    alt="Profile"
                    className="w-12 h-12 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 text-base mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-start">
                    <a 
                      href={project.caseStudyLink}
                      className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium inline-flex items-center"
                    >
                      Read case study →
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
