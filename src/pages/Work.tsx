import Navigation from '../components/Navigation';
import { ExternalLink } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      id: "budgetlyzer",
      title: "Budgetlyzer - AI-Powered Budgeting Tool",
      description: "An AI-powered budgeting tool designed for project-based businesses. It leverages Payman AI's multi-account feature to help businesses efficiently track, analyze, and manage their project budgets in real-time.",
      tags: ["AI", "Budgeting", "Project Management", "Real-time Analytics"],
      projectLink: "https://github.com/RSN601KRI/Budgetlyzer"
    },
    {
      id: "nexalyst",
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      description: "A powerful web-based forensic analysis platform for the Solana blockchain enables security researchers, investigators and compliance teams to visualise, track and analyse on-chain fund movements precisely and clearly.",
      tags: ["Blockchain", "Forensics", "Solana", "Security"],
      projectLink: "https://github.com/RSN601KRI/solana-trace-nexus"
    },
    {
      id: "solarshare",
      title: "SolarShare - DePIN Solar Energy Marketplace",
      description: "A DePIN (Decentralized Physical Infrastructure Network) project built on Solana, designed to revolutionize how communities in India share solar energy. Leveraging blockchain technology, SolarShare allows users to sell and buy excess solar energy locally through a secure, real-time marketplace.",
      tags: ["DePIN", "Solar Energy", "Blockchain", "Solana"],
      projectLink: "https://github.com/RSN601KRI/solana-depin-breakout"
    },
    {
      id: "trendpulse",
      title: "TrendPulse - AI Trading News Application",
      description: "An intuitive and powerful trading news application designed for modern retail investors. Track real-time market signals, social trends and on-chain data with ease—backed by AI and a sleek, dashboard-style interface.",
      tags: ["Trading", "AI", "Market Analysis", "Real-time Data"],
      projectLink: "https://github.com/RSN601KRI/trend-pulse-trade"
    },
    {
      id: "defi",
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      description: "DeFi loan options across blockchains using AI-powered autonomous agents with Fetch.ai's Agentverse and powered by the ASI1-mini LLM.",
      tags: ["DeFi", "AI", "Cross-Chain", "Autonomous Agents"],
      projectLink: "https://crosschain-loan-whisperer.vercel.app/"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(135,206,235,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(135,206,235,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">My Work</h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
              A showcase of my projects spanning AI, Blockchain, DeFi, and Data-driven Solutions
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {projects.map((project, index) => (
              <div key={index} className="border-b border-white/10 pb-8 sm:pb-12">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="lg:w-2/3">
                    <div className="flex items-center mb-4">
                      <img 
                        src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                        alt="Profile" 
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full mr-3 object-cover"
                      />
                      <span className="text-white/60 text-sm sm:text-base">Roshni Kumari</span>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">{project.title}</h2>
                    <p className="text-base sm:text-lg text-white/80 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-sm border border-white/20 text-white/90">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:w-1/3 lg:text-right">
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                      <a 
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 transition-colors font-medium"
                      >
                        Live Demo →
                      </a>
                      <a 
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center lg:justify-end text-blue-400 hover:text-blue-300 transition-colors font-medium"
                      >
                        View project
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-white/60 text-sm">
              © 2025 / Roshni Kumari
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
