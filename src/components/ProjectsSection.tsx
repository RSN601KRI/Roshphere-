
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const featuredProjects = [
    {
      title: "Budgetlyzer - AI-Powered Budgeting Tool",
      description: "An AI-powered budgeting tool designed for project-based businesses. It leverages Payman AI's multi-account feature to help businesses efficiently track, analyze, and manage their project budgets in real-time.",
      url: "https://budgetlyzer.vercel.app/",
      tags: ["AI", "Budgeting", "Project Management"]
    },
    {
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      description: "A powerful web-based forensic analysis platform for the Solana blockchain enables security researchers, investigators and compliance teams to visualise, track and analyse on-chain fund movements precisely and clearly.",
      url: "https://solana-trace-nexus.vercel.app/",
      tags: ["Blockchain", "Forensics", "Solana"]
    },
    {
      title: "SolarShare - DePIN Solar Energy Marketplace",
      description: "A DePIN (Decentralized Physical Infrastructure Network) project built on Solana, designed to revolutionize how communities in India share solar energy. Leveraging blockchain technology, SolarShare allows users to sell and buy excess solar energy locally through a secure, real-time marketplace.",
      url: "https://solana-depin.vercel.app/",
      tags: ["DePIN", "Solar Energy", "Blockchain"]
    },
    {
      title: "TrendPulse - AI Trading News Application",
      description: "An intuitive and powerful trading news application designed for modern retail investors. Track real-time market signals, social trends and on-chain data with ease—backed by AI and a sleek, dashboard-style interface.",
      url: "http://trend-pulse-trade.vercel.app/",
      tags: ["Trading", "AI", "Market Analysis"]
    },
    {
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      description: "DeFi loan options across blockchains using AI-powered autonomous agents with Fetch.ai's Agentverse and powered by the ASI1-mini LLM.",
      url: "https://crosschain-loan-whisperer.vercel.app/",
      tags: ["DeFi", "AI", "Cross-Chain"]
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
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Projects Section */}
        <div className="space-y-12 sm:space-y-16">
          {featuredProjects.map((project, index) => (
            <div key={index} className="text-center">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-base sm:text-lg text-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="flex items-center justify-center text-green-400 hover:text-green-300 transition-colors font-medium text-base">
                  Read case study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center text-white/60 hover:text-white transition-colors font-medium text-base"
                >
                  View project
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Latest from the blog Section */}
        <div className="mt-20 sm:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
              Latest from
              <br />
              the blog
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="text-center space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight">
                  {post.title}
                </h3>
                <p className="text-white/60 text-sm">{post.date}</p>
                <div className="inline-block">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === 'Data Science' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    'bg-green-500/20 text-green-400 border border-green-500/30'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 sm:mt-20">
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
