import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Navigation from '../components/Navigation';

const CaseStudy = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const projectData = {
    budgetlyzer: {
      title: "📊 Case Study: Budgetlyzer – AI-Powered Budgeting for Project-Based Businesses",
      subtitle: "AI-Powered Project Budget Management",
      date: "December 15, 2024",
      introduction: "Managing budgets across multiple projects is a critical challenge for freelancers, startups, enterprises, and NGOs. Traditional budgeting tools often lack real-time analytics, contextual project-based segregation, and intelligent forecasting. Enter Budgetlyzer—an AI-powered budgeting platform built to solve these inefficiencies by leveraging Payman AI's multi-account system and integrating real-time financial monitoring and predictive analytics.",
      objective: "To create an intelligent budgeting tool that helps project-based businesses track, analyze, and optimize their expenses in real time, with advanced reporting, AI insights, and multi-account capabilities.",
      architecture: [
        { component: "Frontend", stack: "React.js / Next.js" },
        { component: "Backend", stack: "Node.js / Python" },
        { component: "Database", stack: "PostgreSQL / Firebase" },
        { component: "AI & ML", stack: "OpenAI API / Custom Models" },
        { component: "SDK Integration", stack: "Payman AI SDK" },
        { component: "Deployment", stack: "Vercel (Frontend)" }
      ],
      workflow: [
        {
          step: "Integration with Payman AI",
          description: "Users connect their Payman account to the platform, enabling real-time multi-account transaction tracking."
        },
        {
          step: "Project Configuration",
          description: "Users define budgets for each project (e.g., client campaigns, departments, or grants)."
        },
        {
          step: "AI-Powered Transaction Monitoring",
          description: "The AI engine classifies transactions, tracks budget usage, and identifies anomalies or overspending."
        },
        {
          step: "Budget Alerts & Insights",
          description: "Smart alerts notify users when they're nearing or exceeding budgets. The system also provides insights on trends."
        },
        {
          step: "Analytics Dashboard",
          description: "A visual dashboard offers breakdowns by project, category, or time period—ideal for both quick glances and in-depth reviews."
        }
      ],
      features: [
        {
          feature: "Multi-Account Budget Tracking",
          description: "Separates and monitors budgets across multiple projects/accounts."
        },
        {
          feature: "Real-Time Expense Monitoring",
          description: "Uses AI to provide up-to-the-minute insights into financial health."
        },
        {
          feature: "Custom Reporting",
          description: "Users can export detailed summaries for stakeholders or internal use."
        },
        {
          feature: "Automated Alerts",
          description: "Sends email/SMS/notification alerts when budgets are about to be breached."
        },
        {
          feature: "Secure Transactions",
          description: "Built with Payman AI's SDK and safeguards for transactional integrity."
        }
      ],
      techHighlights: [
        "Payman AI SDK enables seamless multi-account financial data management.",
        "OpenAI & Custom ML Models offer forecasting for future budget utilization.",
        "PostgreSQL + Firebase ensures scalable and real-time data management.",
        "Next.js + Tailwind for efficient and responsive UI/UX."
      ],
      useCases: [
        {
          title: "Freelancers",
          description: "Manage client-specific budgets and track payments from different platforms."
        },
        {
          title: "Startups & Enterprises",
          description: "Track department-wise spending and generate monthly/quarterly reports for leadership."
        },
        {
          title: "NGOs & Grant Managers",
          description: "Ensure transparency by tracking disbursed funds and generating reports for donors."
        }
      ],
      marketContext: [
        "According to Statista, the global budgeting software market is expected to grow by 7.5% CAGR, reaching $9.87 billion by 2028.",
        "AI-powered fintech tools have shown a 22% increase in productivity and 37% reduction in financial errors across SMBs and nonprofits."
      ],
      testimonials: [
        {
          quote: "With Budgetlyzer, we've reduced budget overruns by 45% in just 3 months.",
          author: "Maya Singh, CFO at GreenRoots NGO"
        },
        {
          quote: "Finally a tool that understands how I manage my freelance gigs.",
          author: "Arjun Sharma, UI/UX Consultant"
        }
      ],
      futureImprovements: [
        "Integration with Stripe, QuickBooks, and Tally ERP.",
        "Enhanced mobile experience using React Native.",
        "Visualized forecasting with chart-based spending simulations.",
        "Voice-enabled commands for quick budget checks (via GPT/Whisper)."
      ]
    },
    nexalyst: {
      title: "Nexalyst - Solana Forensic Analysis Tool",
      subtitle: "A Web-Based Blockchain Investigation Platform",
      date: "November 20, 2024",
      introduction: "With the rise of decentralized finance (DeFi) and increasing on-chain activity, transparency, accountability, and investigation tools are critical in the blockchain space. The Solana Forensic Analysis Tool addresses this need by providing a powerful web-based solution to track, analyze, and visualize fund movements on the Solana blockchain. Designed for security researchers, investigators, compliance teams, and blockchain auditors, the platform offers intuitive, visual insights into transaction patterns, wallet histories, and suspicious activity clusters.",
      objective: "To build a comprehensive forensic analysis platform for the Solana blockchain that simplifies on-chain investigation, visualizes fund flows across wallets, detects suspicious patterns and wallet clusters, and enables real-time analysis for compliance and threat response teams.",
      architecture: [
        { component: "Frontend", stack: "React.js, Tailwind CSS, Chart.js / D3.js" },
        { component: "Backend", stack: "Node.js, Express.js" },
        { component: "Blockchain", stack: "Solana RPC, Web3.js, Solana APIs" },
        { component: "Database", stack: "MongoDB / PostgreSQL (used for clustering & tagging)" },
        { component: "Deployment", stack: "Vercel / Netlify / Render" }
      ],
      features: [
        {
          feature: "🔁 Transaction Flow Mapping",
          description: "Visualize money movement through interactive charts. Filter by date, wallet, or amount."
        },
        {
          feature: "👛 Wallet Analysis",
          description: "View complete transaction history, trace funding origins, and detect inter-wallet links."
        },
        {
          feature: "🔗 Transaction Clustering",
          description: "Identify and visualize clusters of related transactions and wallets."
        },
        {
          feature: "🏷️ Entity & Exchange Labelling",
          description: "Built-in datasets tag known addresses, exchanges, and services. Detect deposit/withdrawal patterns."
        }
      ],
      techHighlights: [
        "Custom Transaction Clustering Algorithm - Groups transactions based on frequency, wallet linkage, and temporal proximity.",
        "Graph-Based Visualizations (D3.js) - Enables clear, explorable fund flows with filters and highlights.",
        "Entity Labeling Dataset - Maintains a curated database of known exchanges, services, and DAO wallets.",
        "Read-Only Access - Fully secure and privacy-preserving, requiring no private key exposure."
      ],
      useCases: [
        {
          title: "Blockchain Security Teams",
          description: "For incident response & forensic reporting."
        },
        {
          title: "Regulatory Compliance Officers",
          description: "AML, sanctions screening, transaction tracing."
        },
        {
          title: "Crypto Forensics Researchers",
          description: "Academic & institutional investigations."
        },
        {
          title: "DeFi Protocols",
          description: "Fraud detection & ecosystem monitoring."
        }
      ],
      marketContext: [
        "The global blockchain forensic market is projected to exceed $8.5B by 2030, growing at a CAGR of 15.2%.",
        "Post-FTX and similar collapses, forensic analysis tools are in high demand by VCs, exchanges, and governments."
      ],
      securityFeatures: [
        {
          feature: "Read-Only RPC Access",
          description: "No transactions are signed or executed."
        },
        {
          feature: "No Key Storage",
          description: "The tool operates without accessing private keys."
        },
        {
          feature: "GDPR-Compliant Logs",
          description: "Minimal user data, optional session anonymization."
        }
      ],
      installation: [
        "Prerequisites: Node.js & npm, Git, Solana CLI, MongoDB / PostgreSQL",
        "Clone repository and setup backend with npm install and npm run dev",
        "Setup frontend with npm install and npm start",
        "Open web interface and input wallet address or transaction hash",
        "Explore Transaction Flows, Wallet Interactions, Clustering Patterns, and Exchange Tagging"
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

  // For Budgetlyzer, render the comprehensive case study
  if (projectId === 'budgetlyzer') {
    const budgetlyzerProject = project as typeof projectData.budgetlyzer;
    
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
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{budgetlyzerProject.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white/60">{budgetlyzerProject.date}</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧠 Introduction</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {budgetlyzerProject.introduction}
              </p>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🎯 Objective</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {budgetlyzerProject.objective}
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🏗️ Architecture Overview</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Component</th>
                      <th className="text-left p-4 font-bold">Stack / Tooling</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetlyzerProject.architecture.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90">{item.component}</td>
                        <td className="p-4 text-white/80">{item.stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* How Budgetlyzer Works */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔍 How Budgetlyzer Works</h3>
              <div className="space-y-6">
                {budgetlyzerProject.workflow.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">{step.step}</h4>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features & Innovations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🚀 Key Features & Innovations</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {budgetlyzerProject.features.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.feature}</td>
                        <td className="p-4 text-white/80">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tech Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧪 Tech Highlights</h3>
              <div className="space-y-3">
                {budgetlyzerProject.techHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧾 Use Cases</h3>
              <div className="space-y-6">
                {budgetlyzerProject.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{index + 1}. {useCase.title}</h4>
                    <p className="text-white/80 ml-6">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Context */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📈 Market Context</h3>
              <div className="space-y-3">
                {budgetlyzerProject.marketContext.map((context, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{context}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* User Testimonials */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">👥 User Testimonials</h3>
              <div className="space-y-6">
                {budgetlyzerProject.testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                    <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
                    <p className="text-white/60">— {testimonial.author}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Improvements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🛠 Future Improvements</h3>
              <div className="space-y-3">
                {budgetlyzerProject.futureImprovements.map((improvement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{improvement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📌 Conclusion</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                Budgetlyzer addresses a pressing gap in real-time, intelligent budget management. Through Payman AI integration and a robust AI backbone, it offers an efficient, secure, and scalable solution for modern, multi-project businesses.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mt-4">
                Whether you are a developer, researcher, or financial manager—Budgetlyzer is a prime example of how AI is redefining financial operations.
              </p>
            </div>

            {/* Live Demo */}
            <div className="text-center">
              <a 
                href="https://budgetlyzer.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                🔗 Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For Nexalyst, render the comprehensive forensic analysis case study
  if (projectId === 'nexalyst') {
    const nexalystProject = project as typeof projectData.nexalyst;
    
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
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{nexalystProject.title}</h1>
              <h2 className="text-xl sm:text-2xl text-white/80 mb-6">{nexalystProject.subtitle}</h2>
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white/60">{nexalystProject.date}</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔍 Introduction</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {nexalystProject.introduction}
              </p>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🎯 Objective</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {nexalystProject.objective}
              </p>
            </div>

            {/* Architecture Overview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🛠 Architecture Overview</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Component</th>
                      <th className="text-left p-4 font-bold">Technologies Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nexalystProject.architecture.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90">{item.component}</td>
                        <td className="p-4 text-white/80">{item.stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Core Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧠 Core Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nexalystProject.features.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.feature}</td>
                        <td className="p-4 text-white/80">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Technical Innovations */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧪 Technical Innovations</h3>
              <div className="space-y-3">
                {nexalystProject.techHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Users */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">👥 Target Users</h3>
              <div className="space-y-6">
                {nexalystProject.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                    <p className="text-white/80 ml-6">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Market Context */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📊 Market Context</h3>
              <div className="space-y-3">
                {nexalystProject.marketContext.map((context, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{context}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔒 Security & Privacy</h3>
              <div className="space-y-6">
                {nexalystProject.securityFeatures.map((feature, index) => (
                  <div key={index}>
                    <h4 className="text-lg font-bold mb-2">{feature.feature}</h4>
                    <p className="text-white/80 ml-6">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation & Usage */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">⚙️ Installation & Usage</h3>
              <div className="space-y-3">
                {nexalystProject.installation.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mb-12">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <p className="text-white/90 italic text-lg mb-4">"Security is not a product, but a process."</p>
                <p className="text-white/60">— Bruce Schneier</p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📌 Conclusion</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                The Solana Forensic Analysis Tool is a vital innovation for blockchain intelligence. By combining on-chain data with intelligent visualization and clustering, it equips professionals to analyze, detect, and prevent financial crime in the Solana ecosystem.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mt-4">
                With robust architecture, secure practices, and open-source collaboration, it lays the foundation for the future of crypto compliance and security research.
              </p>
            </div>

            {/* Live Demo */}
            <div className="text-center">
              <a 
                href="https://solana-trace-nexus.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                🔗 Live Tool
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For other projects, use the original format
  const standardProject = project as typeof projectData.solarshare;
  
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{standardProject.title}</h1>
            <h2 className="text-xl sm:text-2xl text-white/80 mb-6">{standardProject.subtitle}</h2>
            
            <div className="flex items-center gap-4 mb-8">
              <img 
                src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                alt="Profile" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-white/60">{standardProject.date}</span>
            </div>
          </div>

          {/* Overview Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6">Overview</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              {standardProject.overview}
            </p>
          </div>

          {/* Key Strategies Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-8">Key Strategies</h3>
            
            <div className="space-y-8">
              {standardProject.strategies.map((strategy, index) => (
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
