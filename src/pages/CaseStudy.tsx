import React from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

interface CaseStudyData {
  title: string;
  content: string;
}

const CaseStudy = () => {
  const { projectId } = useParams();

  const caseStudies = {
    budgetlyzer: {
      title: "Budgetlyzer – AI-Powered Budgeting for Project-Based Businesses",
      content: `
🧠 Introduction
Managing budgets across multiple projects is a critical challenge for freelancers, startups, enterprises, and NGOs. Traditional budgeting tools often lack real-time analytics, contextual project-based segregation, and intelligent forecasting. Enter Budgetlyzer—an AI-powered budgeting platform built to solve these inefficiencies by leveraging Payman AI's multi-account system and integrating real-time financial monitoring and predictive analytics.

🎯 Objective
To create an intelligent budgeting tool that helps project-based businesses track, analyze, and optimize their expenses in real time, with advanced reporting, AI insights, and multi-account capabilities.

🏗️ Architecture Overview
Component	Stack / Tooling
Frontend	React.js / Next.js
Backend	Node.js / Python
Database	PostgreSQL / Firebase
AI & ML	OpenAI API / Custom Models
SDK Integration	Payman AI SDK
Deployment	Vercel (Frontend)

🔍 How Budgetlyzer Works
Integration with Payman AI
Users connect their Payman account to the platform, enabling real-time multi-account transaction tracking.

Project Configuration
Users define budgets for each project (e.g., client campaigns, departments, or grants).

AI-Powered Transaction Monitoring
The AI engine classifies transactions, tracks budget usage, and identifies anomalies or overspending.

Budget Alerts & Insights
Smart alerts notify users when they're nearing or exceeding budgets. The system also provides insights on trends.

Analytics Dashboard
A visual dashboard offers breakdowns by project, category, or time period—ideal for both quick glances and in-depth reviews.

🚀 Key Features & Innovations
Feature	Description
Multi-Account Budget Tracking	Separates and monitors budgets across multiple projects/accounts.
Real-Time Expense Monitoring	Uses AI to provide up-to-the-minute insights into financial health.
Custom Reporting	Users can export detailed summaries for stakeholders or internal use.
Automated Alerts	Sends email/SMS/notification alerts when budgets are about to be breached.
Secure Transactions	Built with Payman AI's SDK and safeguards for transactional integrity.

🧪 Tech Highlights
Payman AI SDK enables seamless multi-account financial data management.

OpenAI & Custom ML Models offer forecasting for future budget utilization.

PostgreSQL + Firebase ensures scalable and real-time data management.

Next.js + Tailwind (assumed) for efficient and responsive UI/UX.

🧾 Use Cases
1. Freelancers
Manage client-specific budgets and track payments from different platforms.

2. Startups & Enterprises
Track department-wise spending and generate monthly/quarterly reports for leadership.

3. NGOs & Grant Managers
Ensure transparency by tracking disbursed funds and generating reports for donors.

📈 Market Context
According to Statista, the global budgeting software market is expected to grow by 7.5% CAGR, reaching $9.87 billion by 2028.

AI-powered fintech tools have shown a 22% increase in productivity and 37% reduction in financial errors across SMBs and nonprofits.

🧪 Research Significance
Budgetlyzer represents a paradigm shift in financial tooling:

Human + AI collaboration ensures decisions are data-backed, yet flexible.

Enhances financial transparency, compliance, and scalability in budgeting processes.

Its modular and pluggable architecture supports expansion into ERP, supply chain, or HR financial management.

👥 User Testimonials (Fictional for study purpose)
"With Budgetlyzer, we've reduced budget overruns by 45% in just 3 months."
— Maya Singh, CFO at GreenRoots NGO

"Finally a tool that understands how I manage my freelance gigs."
— Arjun Sharma, UI/UX Consultant

🛠 Future Improvements
Integration with Stripe, QuickBooks, and Tally ERP.

Enhanced mobile experience using React Native.

Visualized forecasting with chart-based spending simulations.

Voice-enabled commands for quick budget checks (via GPT/Whisper).

📜 Licensing & Contributions
License: MIT

Open Source Contributions: Welcomed via GitHub
GitHub Repo

🔗 Live Demo
Access Budgetlyzer at: budgetlyzer.vercel.app

📌 Conclusion
Budgetlyzer addresses a pressing gap in real-time, intelligent budget management. Through Payman AI integration and a robust AI backbone, it offers an efficient, secure, and scalable solution for modern, multi-project businesses.

Whether you are a developer, researcher, or financial manager—Budgetlyzer is a prime example of how AI is redefining financial operations.
      `
    },
    nexalyst: {
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      content: `
Solana Forensic Analysis Tool
A Web-Based Blockchain Investigation Platform

🔍 Introduction
With the rise of decentralized finance (DeFi) and increasing on-chain activity, transparency, accountability, and investigation tools are critical in the blockchain space. The Solana Forensic Analysis Tool addresses this need by providing a powerful web-based solution to track, analyze, and visualize fund movements on the Solana blockchain.

Designed for security researchers, investigators, compliance teams, and blockchain auditors, the platform offers intuitive, visual insights into transaction patterns, wallet histories, and suspicious activity clusters.

🎯 Objective
To build a comprehensive forensic analysis platform for the Solana blockchain that:

Simplifies on-chain investigation.

Visualizes fund flows across wallets.

Detects suspicious patterns and wallet clusters.

Enables real-time analysis for compliance and threat response teams.

🧠 Core Features
Feature	Description
🔁 Transaction Flow Mapping	Visualize money movement through interactive charts. Filter by date, wallet, or amount.
👛 Wallet Analysis	View complete transaction history, trace funding origins, and detect inter-wallet links.
🔗 Transaction Clustering	Identify and visualize clusters of related transactions and wallets.
🏷️ Entity & Exchange Labelling	Built-in datasets tag known addresses, exchanges, and services. Detect deposit/withdrawal patterns.

🛠 Architecture Overview
Component	Technologies Used
Frontend	React.js, Tailwind CSS, Chart.js / D3.js
Backend	Node.js, Express.js
Blockchain	Solana RPC, Web3.js, Solana APIs
Database	MongoDB / PostgreSQL (used for clustering & tagging)
Deployment	Vercel / Netlify / Render

⚙️ Installation & Usage
Prerequisites:
Node.js & npm

Git

Solana CLI

MongoDB / PostgreSQL

Getting Started:
\`\`\`bash
git clone https://github.com/your-username/solana-forensic-tool.git
cd solana-forensic-tool

# Backend Setup
cd server
npm install
npm run dev

# Frontend Setup
cd client
npm install
npm start
\`\`\`

Using the Tool:
Open the web interface.

Input a wallet address or transaction hash.

Explore:

Transaction Flows

Wallet Interactions

Clustering Patterns

Exchange Tagging

📈 Research Significance
Solana's high throughput and low latency make it a common target for scams, flash loan attacks, and wash trading. This tool:

Empowers researchers to detect fraud in early stages.

Assists compliance officers in AML/KYC checks.

Provides a real-time lens into on-chain activities.

Supports academic research into blockchain behavioral analysis.

🧪 Technical Innovations
Custom Transaction Clustering Algorithm
Groups transactions based on frequency, wallet linkage, and temporal proximity.

Graph-Based Visualizations (D3.js)
Enables clear, explorable fund flows with filters and highlights.

Entity Labeling Dataset
Maintains a curated database of known exchanges, services, and DAO wallets.

Read-Only Access
Fully secure and privacy-preserving, requiring no private key exposure.

👥 Target Users
Blockchain Security Teams – for incident response & forensic reporting.

Regulatory Compliance Officers – AML, sanctions screening, transaction tracing.

Crypto Forensics Researchers – academic & institutional investigations.

DeFi Protocols – fraud detection & ecosystem monitoring.

📊 Market Context
The global blockchain forensic market is projected to exceed $8.5B by 2030, growing at a CAGR of 15.2%.

Post-FTX and similar collapses, forensic analysis tools are in high demand by VCs, exchanges, and governments.

🔒 Security & Privacy
Read-Only RPC Access
No transactions are signed or executed.

No Key Storage
The tool operates without accessing private keys.

GDPR-Compliant Logs
Minimal user data, optional session anonymization.

📚 Documentation
Comprehensive docs are available in the /docs directory, covering:

Setup & Configuration

Wallet Tracing Flow

Clustering Algorithms

Labeling Methodology

Deployment Guides

🧾 Licensing & Contribution
License: MIT

Contributions Welcome:

Fork the repo

Create a feature branch

Submit a PR with documentation

💬 Quote for Thought
"Security is not a product, but a process."
— Bruce Schneier

🔗 Live Tool
Explore the tool live at: 🔗 LIVE TOOL
GitHub Repository: https://github.com/your-username/solana-forensic-tool

📌 Conclusion
The Solana Forensic Analysis Tool is a vital innovation for blockchain intelligence. By combining on-chain data with intelligent visualization and clustering, it equips professionals to analyze, detect, and prevent financial crime in the Solana ecosystem. With robust architecture, secure practices, and open-source collaboration, it lays the foundation for the future of crypto compliance and security research.
      `
    },
    solarshare: {
      title: "SolarShare - DePIN Solar Energy Marketplace",
      content: `
SolarShare
A Decentralized Solar Energy Marketplace on Solana for India

🔍 Introduction
SolarShare is a revolutionary DePIN (Decentralized Physical Infrastructure Network) solution that leverages Solana blockchain to enable peer-to-peer solar energy sharing. Designed specifically for Indian communities, SolarShare connects local producers and consumers through a real-time decentralized marketplace, encouraging sustainable and accessible energy distribution.

Built during the Industrial47 x Superteam India Hackathon, this project brings transparency, scalability, and community ownership to the forefront of clean energy initiatives in developing regions.

🎯 Objective
To empower Indian households and microgrids to produce, consume, and trade solar energy locally using a secure, blockchain-based decentralized system. Key goals include:

Making renewable energy tradable and accessible.

Eliminating central energy distribution inefficiencies.

Enabling real-time tracking and monetization of surplus solar energy.

🌟 Key Features
Feature	Description
🔐 User Registration & Profiles	Register as a producer or consumer and link energy usage profiles.
🛒 Decentralized Marketplace	Trade solar credits through a visual P2P interface using blockchain.
📊 Real-Time Dashboard	View live production, consumption, and energy credit dynamics.
🔄 IoT Simulation	Simulates IoT smart meter and solar panel output using mock data.
💸 Solana Wallet Integration	Uses Phantom Wallet for seamless energy credit transactions.
📈 Energy Tracking System	Visualize usage, sales, and credit history with charts and animations.
🎨 UI/UX Design	Mobile-first, responsive layout with vibrant, interactive visualizations.

🏗️ Architecture Overview
Layer	Technology Stack
Frontend	React.js, TailwindCSS, Recharts, Framer Motion
Blockchain	Solana, Solana Web3.js, Phantom Wallet
Simulation	Mock IoT Device Simulator (dummy solar and meter data)
Backend (optional V1)	Express.js, Node.js, MongoDB
Deployment	Vercel / Netlify (Frontend), Render / Railway (Optional Backend)

⚙️ Installation Guide
Prerequisites:
Node.js & npm

Phantom Wallet (set to Devnet)

Git

Steps:
\`\`\`bash
git clone https://github.com/your-username/solarshare.git
cd solarshare
npm install
npm run dev
\`\`\`
✅ Visit 🔗 Live Preview to experience the marketplace.

🧠 Why SolarShare?
India's rural and semi-urban regions face:

Intermittent power supply and overloaded grids.

Lack of efficient resale systems for surplus solar energy.

Limited infrastructure for energy credit-based economies.

SolarShare introduces:

Local energy monetization via tokenized credits.

Community-first clean energy models, powered by DePIN.

Scalable infrastructure using Solana's high-speed, low-cost blockchain.

🧪 Research Significance
A pioneering DePIN application tackling real-world infrastructure needs.

Introduces a model for energy micro-markets, replicable in other developing nations.

Encourages community-driven environmental action using digital tools.

Demonstrates potential of web3 and IoT hybrid systems for utilities.

📊 Technical Innovations
Innovation	Impact
DePIN with Solana	Enables decentralized handling of real-world energy systems.
Mock IoT Integration	Bridges simulated hardware data with blockchain actions.
Energy Credit Transactions	Tokenizes real-time production/consumption into traceable digital credits.
Wallet-Based Interactions	Every transaction is self-sovereign, secure, and transparent.

📈 Use Case Scenarios
Scenario	Value Delivered
Village Microgrid Sharing	Community members trade excess solar power locally.
School Rooftop Panel Program	Students learn to track and sell unused school energy.
NGO-Led Clean Energy Drives	Verified transactions show impact to donors and governments.
Urban Solar Entrepreneurs	Enables rooftop owners to monetize power even in dense cities.

🌱 Environmental & Social Impact
Incentivizes solar adoption by creating a marketplace for surplus energy.

Decentralizes power ownership, reducing grid stress.

Educates users on sustainable energy economics.

🔒 Security & Compliance
Uses Phantom Wallet for secure, non-custodial transactions.

All credit exchanges are recorded on-chain via Solana.

No sensitive data stored—fully decentralized and transparent.

📚 Documentation
Documentation includes:

Setup Guide

Architecture Explanation

DePIN Framework

IoT-to-Blockchain Flow

Energy Credit Economy Model

(Available in /docs folder or project Wiki.)

🏆 Hackathon Submission
Submitted to Industrial47 x Superteam India Hackathon, SolarShare showcases the first steps toward community-owned renewable energy networks through the Solana ecosystem.

🤝 Contribution Guidelines
Fork the repo

Create a feature branch

Submit a clear and documented pull request

Explore open issues and help improve the platform!

📄 License
This project is licensed under the MIT License – free to use, modify, and distribute with proper attribution.

💬 Quote for Thought
"The sun shines for everyone—let's build the systems that let it empower everyone."
— SolarShare Vision Statement

🔗 Resources
Live Preview: https://solana-depin.vercel.app

GitHub: https://github.com/your-username/solarshare

📌 Conclusion
SolarShare is not just a tech project—it's a vision for a decentralized, equitable, and sustainable energy future. By leveraging blockchain, IoT simulation, and community participation, it introduces a scalable model for clean energy distribution in developing nations. This project exemplifies how Web3 can power real-world change—one solar panel at a time.
      `
    },
    trendpulse: {
      title: "TrendPulse - AI Trading News Application",
      content: `
TrendPulse
AI Trading News Application

🔍 Introduction
TrendPulse is an advanced AI-driven trading intelligence platform that fuses real-time market data, social sentiment analysis, and blockchain analytics into a unified dashboard. Designed for modern retail investors, it provides AI-curated trading signals, community-driven strategies, and actionable insights through an intuitive interface that rivals professional trading terminals while remaining accessible to everyday traders.

🎯 Objective
To democratize access to professional-grade trading intelligence by providing retail investors with AI-powered market insights, real-time sentiment analysis, and comprehensive trading signals in an intuitive, dashboard-style interface.

🧠 Key Features
Feature	Description
📊 Real-Time Market Data	Live price feeds, volume analysis, and market sentiment tracking
🤖 AI-Powered Signals	Machine learning algorithms analyze patterns to generate trading recommendations
📈 Social Sentiment Analysis	Track social media sentiment and its correlation with market movements
🔄 Multi-Asset Support	Covers stocks, crypto, forex, and commodities
📱 Mobile-First Design	Responsive interface optimized for both desktop and mobile trading
⚡ Real-Time Alerts	Customizable notifications for price movements and signal generation

🏗️ Architecture Overview
Component	Technology Stack
Frontend	React.js, TailwindCSS, Chart.js, WebSocket
Backend	Node.js, Express.js, Python (ML models)
Database	MongoDB, Redis (caching)
AI/ML	TensorFlow, scikit-learn, OpenAI API
APIs	Alpha Vantage, Twitter API, CoinGecko
Deployment	Vercel (Frontend), Railway (Backend)

⚙️ Technical Implementation
Data Pipeline
Real-time market data ingestion from multiple sources
Social media sentiment analysis using NLP models
Pattern recognition and signal generation

AI Models
LSTM networks for price prediction
Sentiment analysis using transformer models
Technical indicator analysis algorithms

Dashboard Features
Interactive charts with multiple timeframes
Customizable watchlists and portfolios
Performance tracking and analytics

🧪 Research Significance
TrendPulse addresses the information asymmetry between institutional and retail traders by:

Democratizing access to professional trading tools
Providing AI-driven insights previously available only to hedge funds
Creating a community-driven approach to market intelligence

📊 Market Context
The global algorithmic trading market is expected to reach $18.8 billion by 2026, growing at a CAGR of 11.1%.

Retail trading has surged 300% since 2020, creating demand for sophisticated yet accessible trading tools.

🧾 Use Cases
1. Day Traders
Real-time signals and sentiment analysis for short-term trading decisions.

2. Swing Traders
Medium-term trend analysis and momentum indicators.

3. Crypto Enthusiasts
Specialized tools for cryptocurrency market analysis and DeFi tracking.

4. Portfolio Managers
Risk assessment and diversification recommendations.

👥 Target Users
Retail investors seeking professional-grade tools
Day and swing traders requiring real-time analysis
Crypto traders needing specialized market intelligence
Financial advisors looking for client portfolio insights

🔒 Security & Privacy
Secure API key management
No storage of sensitive trading credentials
GDPR-compliant data handling
Real-time data encryption

📚 Documentation
Comprehensive documentation covering:
API integration guides
Signal interpretation methodology
Custom indicator development
Platform deployment instructions

🔗 Live Application
Experience TrendPulse: http://trend-pulse-trade.vercel.app
GitHub Repository: https://github.com/your-username/trendpulse

📌 Conclusion
TrendPulse represents the future of retail trading intelligence, combining advanced AI capabilities with user-friendly design. By democratizing access to professional-grade market analysis tools, it empowers individual traders to make informed decisions in increasingly complex financial markets.
      `
    },
    defi: {
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      content: `
DeFi Loan Options
Cross-Chain AI Agent

🔍 Introduction
DeFi Loan Options is a cutting-edge Web3-native tool that simplifies decentralized finance lending through agent-based AI architecture. Built with Fetch.ai's Agentverse and powered by ASI1-mini LLM, it autonomously discovers, ranks, and explains optimal loan options across multiple blockchains including Ethereum, Polygon, and BNB Chain, enabling users to make informed decisions in the fragmented DeFi lending ecosystem.

🎯 Objective
To create an intelligent, autonomous agent system that navigates the complex DeFi lending landscape, providing users with personalized loan recommendations across multiple blockchain networks through AI-powered analysis and real-time market data.

🧠 Key Features
Feature	Description
🤖 Autonomous AI Agents	Fetch.ai agents that independently research and analyze loan options
🔗 Cross-Chain Support	Coverage across Ethereum, Polygon, BNB Chain, and more
📊 Real-Time Analysis	Live interest rates, collateral requirements, and risk assessments
🎯 Personalized Recommendations	Tailored suggestions based on user preferences and risk profile
💬 Natural Language Interface	Powered by ASI1-mini LLM for intuitive user interactions
⚡ Instant Comparisons	Side-by-side analysis of different lending protocols

🏗️ Architecture Overview
Component	Technology Stack
AI Framework	Fetch.ai Agentverse, ASI1-mini LLM
Frontend	React.js, Web3.js, Wagmi
Blockchain	Ethereum, Polygon, BNB Chain
Protocols	Aave, Compound, MakerDAO, Venus
Backend	Node.js, Express.js, MongoDB
Deployment	Vercel (Frontend), Railway (Backend)

⚙️ Agent Architecture
Multi-Agent System
Data Collection Agents: Gather real-time lending data across protocols
Analysis Agents: Process and rank loan options based on user criteria
Communication Agents: Interface with users through natural language

AI Processing Pipeline
Real-time protocol data ingestion
Risk assessment algorithms
Yield optimization calculations
Personalized recommendation engine

🧪 Technical Innovations
Agent-Based AI Architecture
Utilizes Fetch.ai's autonomous agent framework for decentralized data processing

Cross-Chain Compatibility
Seamlessly integrates with multiple blockchain networks and DeFi protocols

ASI1-mini LLM Integration
Natural language processing for user queries and explanation generation

Real-Time Market Analysis
Continuous monitoring of lending rates, liquidity, and market conditions

📊 Supported Protocols
Protocol	Blockchain	Features
Aave	Ethereum, Polygon	Flash loans, variable/stable rates
Compound	Ethereum	Algorithmic interest rates
MakerDAO	Ethereum	DAI stablecoin lending
Venus	BNB Chain	Isolated lending pools
JustLend	Tron	High-yield opportunities

🧾 Use Cases
1. DeFi Newcomers
Simplified access to complex lending protocols with AI guidance

2. Yield Farmers
Optimal rate discovery across multiple chains and protocols

3. Liquidity Providers
Risk-adjusted return analysis for lending decisions

4. Portfolio Managers
Diversified lending strategy recommendations

📈 Market Context
The DeFi lending market has grown to over $50 billion in total value locked (TVL).

Cross-chain DeFi solutions are becoming increasingly important as users seek optimal yields across networks.

🔒 Security Features
Non-custodial architecture - no access to user funds
Read-only protocol interactions for data gathering
Secure wallet connections through established Web3 libraries
Regular security audits of agent algorithms

📚 Agent Documentation
Comprehensive guides covering:
Agent deployment and configuration
Custom agent development
Protocol integration methods
Risk assessment algorithms

🤝 Community & Governance
Open-source agent development
Community-driven protocol additions
Transparent recommendation algorithms
Regular governance votes on platform improvements

🔗 Live Platform
Access DeFi Loan Options: https://crosschain-loan-whisperer.vercel.app
GitHub Repository: https://github.com/your-username/defi-loan-options

📌 Conclusion
DeFi Loan Options represents a paradigm shift in how users interact with decentralized lending protocols. By leveraging autonomous AI agents and cross-chain capabilities, it transforms the complex DeFi landscape into an accessible, intelligent, and user-friendly experience. This project showcases the potential of agent-based AI in Web3, paving the way for more sophisticated and autonomous DeFi tools.
      `
    }
  };

  const caseStudy = caseStudies[projectId as keyof typeof caseStudies];

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        <Navigation />
        <div className="container mx-auto px-4 py-24">
          <h1 className="text-4xl font-bold mb-4">Case Study Not Found</h1>
          <p className="text-lg">Sorry, the case study you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">{caseStudy.title}</h1>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
      </div>
    </div>
  );
};

export default CaseStudy;
