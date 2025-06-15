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
      title: "SolarShare - A Decentralized Solar Energy Marketplace on Solana for India",
      subtitle: "DePIN Solar Energy Trading Platform",
      date: "October 10, 2024",
      introduction: "SolarShare is a revolutionary DePIN (Decentralized Physical Infrastructure Network) solution that leverages Solana blockchain to enable peer-to-peer solar energy sharing. Designed specifically for Indian communities, SolarShare connects local producers and consumers through a real-time decentralized marketplace, encouraging sustainable and accessible energy distribution. Built during the Industrial47 x Superteam India Hackathon, this project brings transparency, scalability, and community ownership to the forefront of clean energy initiatives in developing regions.",
      objective: "To empower Indian households and microgrids to produce, consume, and trade solar energy locally using a secure, blockchain-based decentralized system. Key goals include making renewable energy tradable and accessible, eliminating central energy distribution inefficiencies, and enabling real-time tracking and monetization of surplus solar energy.",
      architecture: [
        { component: "Frontend", stack: "React.js, TailwindCSS, Recharts, Framer Motion" },
        { component: "Blockchain", stack: "Solana, Solana Web3.js, Phantom Wallet" },
        { component: "Simulation", stack: "Mock IoT Device Simulator (dummy solar and meter data)" },
        { component: "Backend (optional V1)", stack: "Express.js, Node.js, MongoDB" },
        { component: "Deployment", stack: "Vercel / Netlify (Frontend), Render / Railway (Optional Backend)" }
      ],
      features: [
        {
          feature: "🔐 User Registration & Profiles",
          description: "Register as a producer or consumer and link energy usage profiles."
        },
        {
          feature: "🛒 Decentralized Marketplace",
          description: "Trade solar credits through a visual P2P interface using blockchain."
        },
        {
          feature: "📊 Real-Time Dashboard",
          description: "View live production, consumption, and energy credit dynamics."
        },
        {
          feature: "🔄 IoT Simulation",
          description: "Simulates IoT smart meter and solar panel output using mock data."
        },
        {
          feature: "💸 Solana Wallet Integration",
          description: "Uses Phantom Wallet for seamless energy credit transactions."
        },
        {
          feature: "📈 Energy Tracking System",
          description: "Visualize usage, sales, and credit history with charts and animations."
        },
        {
          feature: "🎨 UI/UX Design",
          description: "Mobile-first, responsive layout with vibrant, interactive visualizations."
        }
      ],
      techHighlights: [
        "DePIN with Solana - Enables decentralized handling of real-world energy systems.",
        "Mock IoT Integration - Bridges simulated hardware data with blockchain actions.",
        "Energy Credit Transactions - Tokenizes real-time production/consumption into traceable digital credits.",
        "Wallet-Based Interactions - Every transaction is self-sovereign, secure, and transparent."
      ],
      useCases: [
        {
          title: "Village Microgrid Sharing",
          description: "Community members trade excess solar power locally."
        },
        {
          title: "School Rooftop Panel Program",
          description: "Students learn to track and sell unused school energy."
        },
        {
          title: "NGO-Led Clean Energy Drives",
          description: "Verified transactions show impact to donors and governments."
        },
        {
          title: "Urban Solar Entrepreneurs",
          description: "Enables rooftop owners to monetize power even in dense cities."
        }
      ],
      whySolarShare: [
        "India's rural and semi-urban regions face intermittent power supply and overloaded grids.",
        "Lack of efficient resale systems for surplus solar energy.",
        "Limited infrastructure for energy credit-based economies.",
        "SolarShare introduces local energy monetization via tokenized credits.",
        "Community-first clean energy models, powered by DePIN.",
        "Scalable infrastructure using Solana's high-speed, low-cost blockchain."
      ],
      environmentalImpact: [
        "Incentivizes solar adoption by creating a marketplace for surplus energy.",
        "Decentralizes power ownership, reducing grid stress.",
        "Educates users on sustainable energy economics."
      ],
      hackathonInfo: "Submitted to Industrial47 x Superteam India Hackathon, SolarShare showcases the first steps toward community-owned renewable energy networks through the Solana ecosystem.",
      installation: [
        "Prerequisites: Node.js & npm, Phantom Wallet (set to Devnet), Git",
        "Clone repository: git clone https://github.com/your-username/solarshare.git",
        "Install dependencies: cd solarshare && npm install",
        "Start development: npm run dev",
        "Visit Live Preview to experience the marketplace"
      ]
    },
    trendpulse: {
      title: "TrendPulse - An AI-Powered Trading News Dashboard for Modern Retail Investors",
      subtitle: "AI-Powered Trading Intelligence Platform",
      date: "September 25, 2024",
      introduction: "TrendPulse is an advanced, AI-driven trading news and analytics platform that caters to modern retail investors. Inspired by platforms like Robinhood and professional trading terminals, it fuses real-time market data, social sentiment, and on-chain analytics into one dynamic, responsive, and visually engaging interface. Designed with both novice traders and seasoned strategists in mind, TrendPulse enables informed decision-making at speed, blending the power of AI signals and community wisdom.",
      objective: "To build an all-in-one platform where AI meets market data, providing real-time signals, insights, and community-driven strategies for smart trading in a volatile, multi-source investment landscape. Key goals include providing actionable insights using real-time data streams, offering AI-curated trading signals and social sentiment metrics, presenting blockchain intelligence in a visual, digestible format, and enabling strategy building and collaboration within a trading community.",
      architecture: [
        { component: "Frontend", stack: "React.js, Tailwind CSS, Chart.js / Recharts" },
        { component: "Backend", stack: "Node.js, Express.js, WebSocket (for live feeds)" },
        { component: "Database", stack: "MongoDB (for user data, alerts), PostgreSQL (for structured analytics logs)" },
        { component: "External APIs", stack: "CoinGecko, Alpha Vantage (market), Twitter/X & Reddit (sentiment), Glassnode, Etherscan (blockchain)" },
        { component: "AI/ML Layer", stack: "Custom Python models for signal generation and sentiment scoring" }
      ],
      features: [
        {
          feature: "🤖 AI-Driven Signals",
          description: "AI/ML models track live market patterns to issue actionable buy/sell signals."
        },
        {
          feature: "📊 Social Sentiment",
          description: "Aggregates Twitter/X, Reddit trends to highlight bullish/bearish sentiment."
        },
        {
          feature: "⛓️ On-chain Analytics",
          description: "Visual insights into whale moves, token flows, and smart contract interactions."
        },
        {
          feature: "🔔 Custom Alerts",
          description: "Personalized alerts on price changes, volume surges, sentiment shifts, etc."
        },
        {
          feature: "📈 Strategy Builder",
          description: "Build and backtest strategies with a blend of indicators and AI insights."
        },
        {
          feature: "👥 Community Insights",
          description: "Discover crowd-sourced strategies from high-performing community traders."
        }
      ],
      designPhilosophy: [
        {
          element: "Dashboard-Style Layout",
          implementation: "Aggregates diverse data into one interactive interface."
        },
        {
          element: "Metallic Gradients + Shadows",
          implementation: "Futuristic tone mimicking professional terminals."
        },
        {
          element: "Fluid Animations",
          implementation: "Smooth transitions and state changes enhance UX without distracting."
        },
        {
          element: "Mobile & Desktop Responsiveness",
          implementation: "Fully optimized experience across screen sizes."
        },
        {
          element: "Visual Indicators",
          implementation: "Charts, volume graphs, whale flows, trend arrows—all interactively presented."
        }
      ],
      techHighlights: [
        "Real-Time Multi-Source Feed - Integrates market, social, and blockchain data into a unified dashboard.",
        "AI-Enhanced Signal System - Combines pattern detection with historical trend learning.",
        "On-Chain + Social Fusion - Correlates blockchain activity with public sentiment for higher accuracy.",
        "Crowd-Powered Strategy Layer - Promotes community knowledge sharing through verified strategies."
      ],
      useCases: [
        {
          title: "Casual Retail Investor",
          description: "Uses alerts and AI signals to time small trades with minimal risk."
        },
        {
          title: "Technical Trader",
          description: "Builds and backtests strategies using chart-based insights."
        },
        {
          title: "DeFi Analyst",
          description: "Tracks whale/token movements and contract interactions."
        },
        {
          title: "Crypto Influencer",
          description: "Shares strategies and observes social mood for content direction."
        }
      ],
      marketContext: [
        "AI in Trading: AI-powered platforms have grown by over 37% CAGR (Allied Market Research, 2024).",
        "Social Sentiment Tools: Over 65% of traders now monitor social signals to anticipate volatility.",
        "DeFi Analysis: On-chain data, especially wallet tracking and whale analytics, is increasingly pivotal in crypto strategy design.",
        "Retail Revolution: Tools like TrendPulse aim to democratize access to high-end analytics once reserved for institutions."
      ],
      installation: [
        "Prerequisites: Node.js, npm, MongoDB/PostgreSQL, Twitter & Etherscan API keys",
        "Clone repository: git clone https://github.com/your-username/trendpulse.git",
        "Backend setup: cd server && npm install && npm run dev",
        "Frontend setup: cd ../client && npm install && npm start",
        "Documentation available in /docs folder covering System Architecture, Signal Generation Model, Strategy Builder Components, Integration APIs, and Real-time Data Handling via WebSockets"
      ]
    },
    defi: {
      title: "🌐 Cross-Chain Loan Agent",
      subtitle: "Discover optimal DeFi lending opportunities across blockchains using AI-powered autonomous agents",
      date: "August 30, 2024",
      overview: "The Cross-Chain Loan Agent is a cutting-edge Web3-native tool that simplifies decentralized finance (DeFi) lending through agent-based AI architecture. Built with Fetch.ai's Agentverse and powered by ASI1-mini LLM, it autonomously discovers, ranks, and explains loan options across multiple chains—empowering users to make informed decisions in a fragmented lending ecosystem.",
      quote: "The future of AI isn't centralized—it's agentic, decentralized, and Web3-native.",
      introduction: "DeFi lending spans across dozens of chains and protocols, making optimal loan discovery a time-consuming and error-prone task. This project solves that by automating discovery of lending offers across Ethereum, Polygon, BNB Chain, and others, ranking offers based on customizable preferences (e.g., lowest collateral, best APR), explaining choices using conversational AI with LLM-powered reasoning, and delivering insights in real-time via a user-friendly web interface.",
      objective: "To build an all-in-one platform where AI meets market data, providing real-time signals, insights, and community-driven strategies for smart trading in a volatile, multi-source investment landscape.",
      useCase: {
        query: "What's the best ETH loan with low collateral?",
        response: "A ranked list of live loan offers (e.g., from Aave, Compound, Venus) across chains, along with a breakdown of why each offer is recommended."
      },
      architecture: [
        { component: "Agents", stack: "Fetch.ai Agentverse, uAgents Framework" },
        { component: "AI/LLM", stack: "ASI1-mini for question understanding and reasoning" },
        { component: "Interface", stack: "ASI:One Web App, React.js, Tailwind CSS" },
        { component: "Web3", stack: "Web3.js / Ethers.js for blockchain interaction" },
        { component: "Backend", stack: "Node.js, Express (optional for caching or additional logic)" },
        { component: "APIs", stack: "Aave, Compound, Venus, DeFiLlama, and cross-chain blockchain endpoints" }
      ],
      features: [
        {
          feature: "🤖 Conversational UI",
          description: "Users ask natural language questions through the ASI:One Web App."
        },
        {
          feature: "📊 Loan Comparison Dashboard",
          description: "Visual table of interest rates, collateral ratios, and durations."
        },
        {
          feature: "🔗 Cross-Chain Aggregation",
          description: "Fetches loan offers from top DeFi protocols on Ethereum, Polygon, BNB Chain."
        },
        {
          feature: "⚙️ Agent Architecture",
          description: "Built with uAgents using Fetch.ai's chat protocol for collaborative querying."
        },
        {
          feature: "🧠 LLM-Powered Reasoning",
          description: "Responses are generated and explained using the ASI1-mini model."
        }
      ],
      uiDesign: [
        "Inspired by fintech dashboards such as Aave, BlockFi, and Zapper",
        "Chat-style Interface for AI queries",
        "Dark/Light Mode Toggle for accessibility", 
        "Tabular + Card Views for ranked loan options",
        "Interactive Filters: loan type, interest rate, chain, duration"
      ],
      architectureDiagram: `User
  │
  ▼
[ASI:One Web App] — Conversational Interface
  │
  ▼
[Cross-Chain Loan Agent] ↔ [ASI1-mini LLM]
  │
  ▼
[DeFi Protocol APIs] (Aave, Compound, Venus, etc.)
  │
  ▼
Ranked Loan List with Explanations`,
      projectStructure: `/src
  /components      → UI Components
  /agents          → uAgent logic
  /utils           → API + ranking logic
  App.js
  index.js

/agentverse        → Config and metadata for Agent registration
  config.yaml

README.md`,
      techHighlights: [
        "Fully decentralized architecture using Fetch.ai chat protocol",
        "No user PII or private key storage",
        "All smart contract interactions are transparent and verifiable",
        "Real-time DeFi protocol updates and push notifications"
      ],
      useCases: [
        {
          title: "DeFi Newcomers",
          description: "Simplified loan discovery without technical complexity."
        },
        {
          title: "Yield Farmers",
          description: "Quick comparison of borrowing costs across protocols."
        },
        {
          title: "Portfolio Managers",
          description: "Risk assessment and optimal capital allocation."
        },
        {
          title: "Arbitrage Traders",
          description: "Real-time rate monitoring for profitable opportunities."
        }
      ],
      howToUse: [
        "Open the ASI:One Web App",
        "Search for Cross-Chain Loan Agent",
        "Ask queries like: 'Compare loans for 2 ETH with lowest interest rate.' or 'What's the cheapest DAI loan on Polygon?'",
        "View ranked loan results with reasons and metrics."
      ],
      security: [
        "Fully decentralized architecture using Fetch.ai chat protocol",
        "No user PII or private key storage", 
        "All smart contract interactions are transparent and verifiable"
      ],
      futureEnhancements: [
        "🔐 Wallet integration for customized loan suggestions",
        "📈 Real-time DeFi protocol updates + push notifications",
        "🖼 Support for NFT-backed loans and Real World Assets (RWAs)",
        "📊 AI-powered risk scoring system for loans"
      ],
      installation: [
        "Prerequisites: Node.js v18+, Fetch.ai Agentverse account, Access to the ASI:One Web App",
        "Clone repository: git clone https://github.com/your-username/cross-chain-loan-agent.git",
        "Install dependencies: cd cross-chain-loan-agent && npm install",
        "Start development: npm run dev",
        "Note: Agent registration and simulation must be completed via Agentverse"
      ],
      finalThought: "Smart agents are the future of DeFi navigation. Cross-Chain Loan Agent brings clarity, precision, and intelligence to a chaotic lending ecosystem—one conversation at a time.",
      links: [
        { name: "🌐 Agentverse Portal", url: "#" },
        { name: "🚀 ASI:One Web App", url: "#" },
        { name: "🧠 Learn about ASI1-mini", url: "#" },
        { name: "📖 Fetch.ai Documentation", url: "#" }
      ]
    }
  };

  const project = projectData[projectId as keyof typeof projectData];

  if (!project) {
    return <div>Project not found</div>;
  }

  // For TrendPulse, render the comprehensive case study
  if (projectId === 'trendpulse') {
    const trendpulseProject = project as typeof projectData.trendpulse;
    
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
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{trendpulseProject.title}</h1>
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white/60">{trendpulseProject.date}</span>
              </div>
            </div>

            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📱 Introduction</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {trendpulseProject.introduction}
              </p>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🎯 Objective</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {trendpulseProject.objective}
              </p>
            </div>

            {/* Platform Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔧 Platform Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendpulseProject.features.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.feature}</td>
                        <td className="p-4 text-white/80">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* UI/UX Design Philosophy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🖥️ UI/UX Design Philosophy</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                TrendPulse is crafted with a futuristic design language, aiming to bridge form and function.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Design Element</th>
                      <th className="text-left p-4 font-bold">Implementation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendpulseProject.designPhilosophy.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.element}</td>
                        <td className="p-4 text-white/80">{item.implementation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Innovation Snapshot */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧠 Innovation Snapshot</h3>
              <div className="space-y-3">
                {trendpulseProject.techHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture & Tech Stack */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">⚙️ Architecture & Tech Stack</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Component</th>
                      <th className="text-left p-4 font-bold">Technology Used</th>
                    </tr>
                  </thead>
                  <tbody>
                    {trendpulseProject.architecture.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90">{item.component}</td>
                        <td className="p-4 text-white/80">{item.stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Use Case Scenarios */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔍 Use Case Scenarios</h3>
              <div className="space-y-6">
                {trendpulseProject.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                    <p className="text-white/80 ml-6">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Setup & Installation */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔧 Setup & Installation (Dev Mode)</h3>
              <div className="space-y-3">
                {trendpulseProject.installation.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Research & Industry Context */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🏗️ Research & Industry Context</h3>
              <div className="space-y-3">
                {trendpulseProject.marketContext.map((context, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{context}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="mb-12">
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <p className="text-white/90 italic text-lg mb-4">"In markets, data is the currency of insight—TrendPulse ensures you never trade in the dark."</p>
                <p className="text-white/60">— TrendPulse Manifesto</p>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📌 Conclusion</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                TrendPulse represents the future of retail trading platforms, democratizing access to institutional-grade analytics through AI-powered insights and community-driven strategies. By combining real-time market data, social sentiment, and blockchain intelligence, it empowers traders of all levels to make informed decisions in today's fast-paced markets.
              </p>
              <p className="text-lg text-white/80 leading-relaxed mt-4">
                This platform showcases how modern web technologies can create sophisticated trading tools that rival traditional financial institutions while remaining accessible to everyday investors.
              </p>
            </div>

            {/* Live Demo */}
            <div className="text-center">
              <a 
                href="https://trendpulse.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                🔗 Live Preview (Coming Soon)
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For DeFi project, render the comprehensive case study
  if (projectId === 'defi') {
    const defiProject = project as typeof projectData.defi;
    
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
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{defiProject.title}</h1>
              <h2 className="text-xl sm:text-2xl text-white/80 mb-6">{defiProject.subtitle}</h2>
              
              <div className="flex items-center gap-4 mb-8">
                <img 
                  src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-white/60">{defiProject.date}</span>
              </div>
            </div>

            {/* Overview */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📌 Overview</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-6">
                {defiProject.overview}
              </p>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <p className="text-white/90 italic text-lg">
                  "{defiProject.quote}"
                </p>
              </div>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🎯 Objective</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {defiProject.introduction}
              </p>
            </div>

            {/* Use Case Example */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔍 Use Case Example</h3>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-white/10">
                <p className="text-green-400 font-medium mb-2">User: "{defiProject.useCase.query}"</p>
                <p className="text-white/80"><strong>Agent Response:</strong> {defiProject.useCase.response}</p>
              </div>
            </div>

            {/* Core Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">💡 Core Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {defiProject.features.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.feature}</td>
                        <td className="p-4 text-white/80">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* UI Design */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🖼️ UI Design</h3>
              <div className="space-y-3">
                {defiProject.uiDesign.map((design, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{design}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">⚙️ Tech Stack</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Layer</th>
                      <th className="text-left p-4 font-bold">Tools / Libraries</th>
                    </tr>
                  </thead>
                  <tbody>
                    {defiProject.architecture.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90">{item.component}</td>
                        <td className="p-4 text-white/80">{item.stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Architecture */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧠 Architecture</h3>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-white/10">
                <pre className="text-white/80 text-sm whitespace-pre-wrap">
                  {defiProject.architectureDiagram}
                </pre>
              </div>
            </div>

            {/* Getting Started */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🚀 Getting Started</h3>
              <div className="space-y-3">
                {defiProject.installation.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How to Use */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">📚 How to Use</h3>
              <div className="space-y-3">
                {defiProject.howToUse.map((step, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Structure */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧩 Project Structure</h3>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-white/10">
                <pre className="text-white/80 text-sm whitespace-pre-wrap">
                  {defiProject.projectStructure}
                </pre>
              </div>
            </div>

            {/* Security & Privacy */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔐 Security & Privacy</h3>
              <div className="space-y-3">
                {defiProject.security.map((security, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{security}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔍 Use Cases</h3>
              <div className="space-y-6">
                {defiProject.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                    <p className="text-white/80 ml-6">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Enhancements */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🚀 Future Enhancements</h3>
              <div className="space-y-3">
                {defiProject.futureEnhancements.map((enhancement, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{enhancement}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Links */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🔗 Important Links</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {defiProject.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="flex items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                  >
                    <span className="text-white/80">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Final Thought */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">🧠 Final Thought</h3>
              <div className="bg-white/5 p-6 rounded-lg border border-white/10 text-center">
                <p className="text-white/90 italic text-lg">
                  "{defiProject.finalThought}"
                </p>
              </div>
            </div>

            {/* Demo Video */}
            <div className="text-center">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                🎬 Watch Demo Video
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // For other projects with full structure, use detailed template
  if (projectId === 'nexalyst' || projectId === 'solarshare' || projectId === 'budgetlyzer') {
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

            {/* Introduction */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Introduction</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {project.introduction}
              </p>
            </div>

            {/* Objective */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Objective</h3>
              <p className="text-lg text-white/80 leading-relaxed">
                {project.objective}
              </p>
            </div>

            {/* Features */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Features</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Feature</th>
                      <th className="text-left p-4 font-bold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.features.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90 font-medium">{item.feature}</td>
                        <td className="p-4 text-white/80">{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Architecture */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Architecture</h3>
              <div className="overflow-x-auto">
                <table className="w-full border border-white/20 rounded-lg">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 font-bold">Component</th>
                      <th className="text-left p-4 font-bold">Technology</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.architecture.map((item, index) => (
                      <tr key={index} className="border-b border-white/10">
                        <td className="p-4 text-white/90">{item.component}</td>
                        <td className="p-4 text-white/80">{item.stack}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Tech Highlights */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Technical Highlights</h3>
              <div className="space-y-3">
                {project.techHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6">Use Cases</h3>
              <div className="space-y-6">
                {project.useCases.map((useCase, index) => (
                  <div key={index}>
                    <h4 className="text-xl font-bold mb-2">{useCase.title}</h4>
                    <p className="text-white/80 ml-6">{useCase.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Installation - Only show if exists */}
            {'installation' in project && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Installation</h3>
                <div className="space-y-3">
                  {project.installation.map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-white/80">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Fallback for unknown projects
  return <div>Project not found</div>;
};

export default CaseStudy;
