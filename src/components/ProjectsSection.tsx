
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const projects = [
    {
      id: "budgetlyzer",
      title: "Budgetlyzer – AI-Powered Budgeting for Project-Based Businesses",
      description: "An intelligent budgeting platform that helps project-based businesses track, analyze, and optimize expenses in real-time through Payman AI's multi-account system. Built with React.js/Next.js frontend, Node.js/Python backend, and PostgreSQL/Firebase database, it features AI-powered transaction monitoring, predictive analytics, custom reporting, automated alerts, and secure multi-account budget tracking. The platform addresses critical challenges for freelancers, startups, enterprises, and NGOs by providing real-time financial monitoring, contextual project-based segregation, and intelligent forecasting capabilities.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/Budgetlyzer"
    },
    {
      id: "nexalyst",
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      description: "A comprehensive web-based forensic analysis platform for the Solana blockchain that empowers security researchers, investigators, and compliance teams to visualize, track, and analyze on-chain fund movements with precision. Features transaction flow mapping, wallet analysis, clustering algorithms, and entity labeling to detect suspicious patterns and ensure regulatory compliance in the DeFi ecosystem.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/solana-trace-nexus"
    },
    {
      id: "solarshare",
      title: "SolarShare - DePIN Solar Energy Marketplace",
      description: "A revolutionary DePIN (Decentralized Physical Infrastructure Network) project built on Solana blockchain, designed to transform how communities in India share and trade solar energy. This platform enables peer-to-peer energy trading through a secure, real-time marketplace where households can monetize excess solar power, promoting sustainable energy distribution and community ownership in developing regions.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/solana-depin-breakout"
    },
    {
      id: "trendpulse",
      title: "TrendPulse - AI Trading News Application",
      description: "An advanced AI-driven trading intelligence platform that fuses real-time market data, social sentiment analysis, and blockchain analytics into a unified dashboard. Designed for modern retail investors, it provides AI-curated trading signals, community-driven strategies, and actionable insights through an intuitive interface that rivals professional trading terminals while remaining accessible to everyday traders.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/trend-pulse-trade"
    },
    {
      id: "defi",
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      description: "A cutting-edge Web3-native tool that simplifies decentralized finance lending through agent-based AI architecture. Built with Fetch.ai's Agentverse and powered by ASI1-mini LLM, it autonomously discovers, ranks, and explains optimal loan options across multiple blockchains including Ethereum, Polygon, and BNB Chain, enabling users to make informed decisions in the fragmented DeFi lending ecosystem.",
      profileImage: "/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png",
      projectLink: "https://github.com/RSN601KRI/Cross-Chain-Loan-Agent"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Projects
          </h2>
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Explore a curated selection of my most impactful projects, showcasing innovation and technical expertise across AI, Blockchain, and Cloud technologies.
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
                    className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/80 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors text-xs font-medium inline-flex items-center"
                    >
                      Read Case Study →
                    </a>
                    <a 
                      href={project.projectLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors text-xs font-medium inline-flex items-center"
                    >
                      View project →
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
