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
    },
    {
      id: "solarshare",
      title: "SolarShare - DePIN Solar Energy Marketplace",
      description: "A revolutionary DePIN project built on Solana blockchain, enabling peer-to-peer solar energy trading where households can monetize excess solar power in developing regions.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/solana-depin-breakout"
    },
    {
      id: "trendpulse",
      title: "TrendPulse - AI Trading News Application",
      description: "An advanced AI-driven trading intelligence platform that fuses real-time market data, social sentiment analysis, and blockchain analytics into a unified dashboard for modern retail investors.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/trend-pulse-trade"
    },
    {
      id: "defi",
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      description: "A cutting-edge Web3 tool that simplifies DeFi lending through agent-based AI architecture, autonomously discovering and ranking optimal loan options across multiple blockchains.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/Cross-Chain-Loan-Agent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Explore a curated selection of my most impactful projects, showcasing innovation and technical expertise across AI, Blockchain, and Cloud technologies.
          </p>
        </div>

        <div className="space-y-20 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
                <div className="lg:w-2/3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center mb-6">
                    <img 
                      src={project.profileImage}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover border border-white/20 mr-3"
                    />
                    <span className="text-white/60 text-sm">Roshni Kumari</span>
                  </div>
                  
                  <p className="text-white/80 text-base leading-relaxed mb-8">
                    {project.description}
                  </p>
                  
                  <a 
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                </div>
              </div>
              
              {/* Divider line except for last item */}
              {index < projects.length - 1 && (
                <div className="mt-20 border-b border-white/10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
