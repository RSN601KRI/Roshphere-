
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectData = {
    budgetlyzer: {
      title: "Budgetlyzer - AI-Powered Budgeting Tool",
      subtitle: "AI-Powered Project Budget Management",
      date: "December 15, 2024",
      overview: "I developed and led Budgetlyzer, an AI-powered budgeting tool designed for project-based businesses. It leverages Payman AI's multi-account feature to help businesses efficiently track, analyze, and manage their project budgets in real-time.",
      strategies: [
        {
          title: "AI Budget Analysis",
          points: [
            "Used Payman AI's multi-account feature to provide intelligent budget recommendations.",
            "Implemented real-time budget tracking with automated alerts for budget overruns."
          ]
        },
        {
          title: "Project Management Integration",
          points: [
            "Built seamless integration with popular project management tools.",
            "Created automated reporting systems for stakeholder updates."
          ]
        }
      ]
    },
    nexalyst: {
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      subtitle: "Blockchain Forensic Analysis Platform",
      date: "November 20, 2024",
      overview: "I developed Nexalyst, a powerful web-based forensic analysis platform for the Solana blockchain that enables security researchers, investigators and compliance teams to visualise, track and analyse on-chain fund movements precisely and clearly.",
      strategies: [
        {
          title: "Blockchain Data Visualization",
          points: [
            "Used advanced graph algorithms to map complex transaction networks.",
            "Implemented real-time tracking of fund movements across multiple addresses."
          ]
        },
        {
          title: "Security & Compliance",
          points: [
            "Built compliance tools for regulatory reporting requirements.",
            "Created automated flagging systems for suspicious transaction patterns."
          ]
        }
      ]
    },
    solarshare: {
      title: "SolarShare - DePIN Solar Energy Marketplace",
      subtitle: "Decentralized Solar Energy Trading Platform",
      date: "October 10, 2024",
      overview: "I developed SolarShare, a DePIN (Decentralized Physical Infrastructure Network) project built on Solana, designed to revolutionize how communities in India share solar energy. Leveraging blockchain technology, SolarShare allows users to sell and buy excess solar energy locally through a secure, real-time marketplace.",
      strategies: [
        {
          title: "DePIN Infrastructure",
          points: [
            "Used Solana blockchain for fast and low-cost energy transactions.",
            "Implemented smart contracts for automated energy trading and payments."
          ]
        },
        {
          title: "Community Network",
          points: [
            "Built a peer-to-peer energy sharing network for local communities.",
            "Created incentive mechanisms to encourage renewable energy adoption."
          ]
        }
      ]
    },
    trendpulse: {
      title: "TrendPulse - AI Trading News Application",
      subtitle: "AI-Powered Trading Intelligence Platform",
      date: "September 25, 2024",
      overview: "I developed TrendPulse, an intuitive and powerful trading news application designed for modern retail investors. Track real-time market signals, social trends and on-chain data with ease—backed by AI and a sleek, dashboard-style interface.",
      strategies: [
        {
          title: "Real-time Market Analysis",
          points: [
            "Used AI algorithms to analyze market sentiment from multiple data sources.",
            "Implemented real-time alerts for significant market movements and trends."
          ]
        },
        {
          title: "Social Trading Intelligence",
          points: [
            "Built social sentiment analysis tools to track market psychology.",
            "Created personalized trading recommendations based on user preferences."
          ]
        }
      ]
    },
    defi: {
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      subtitle: "Cross-Chain DeFi Lending Platform",
      date: "August 30, 2024",
      overview: "I developed a DeFi loan options platform across blockchains using AI-powered autonomous agents with Fetch.ai's Agentverse and powered by the ASI1-mini LLM.",
      strategies: [
        {
          title: "Cross-Chain Integration",
          points: [
            "Used Fetch.ai's Agentverse for autonomous cross-chain loan discovery.",
            "Implemented ASI1-mini LLM for intelligent loan matching and recommendations."
          ]
        },
        {
          title: "AI-Powered Optimization",
          points: [
            "Built automated loan comparison across multiple DeFi protocols.",
            "Created risk assessment tools for loan evaluation and portfolio management."
          ]
        }
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/work')}
            className="flex items-center text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Projects
          </button>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <h2 className="text-xl sm:text-2xl text-white/80 mb-6">{project.subtitle}</h2>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white/60">{project.date}</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Overview</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Key Strategies Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Key Strategies</h3>
            
            <div className="space-y-8">
              {project.strategies.map((strategy, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <h4 className="text-xl font-bold">{strategy.title}</h4>
                  </div>
                  
                  <div className="ml-9 space-y-3">
                    {strategy.points.map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-white/80 leading-relaxed">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
