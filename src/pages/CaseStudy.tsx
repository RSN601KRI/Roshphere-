
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
        <p>🧠 <strong>Introduction</strong><br>
        Managing budgets across multiple projects is a critical challenge for freelancers, startups, enterprises, and NGOs. Traditional budgeting tools often lack real-time analytics, contextual project-based segregation, and intelligent forecasting. Enter Budgetlyzer—an AI-powered budgeting platform built to solve these inefficiencies by leveraging Payman AI's multi-account system and integrating real-time financial monitoring and predictive analytics.</p>

        <p>🎯 <strong>Objective</strong><br>
        To create an intelligent budgeting tool that helps project-based businesses track, analyze, and optimize their expenses in real time, with advanced reporting, AI insights, and multi-account capabilities.</p>

        <p>🏗️ <strong>Architecture Overview</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Component</th>
              <th class="border border-gray-300 px-4 py-2">Stack / Tooling</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Frontend</td><td class="border border-gray-300 px-4 py-2">React.js / Next.js</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Backend</td><td class="border border-gray-300 px-4 py-2">Node.js / Python</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Database</td><td class="border border-gray-300 px-4 py-2">PostgreSQL / Firebase</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">AI & ML</td><td class="border border-gray-300 px-4 py-2">OpenAI API / Custom Models</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">SDK Integration</td><td class="border border-gray-300 px-4 py-2">Payman AI SDK</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Deployment</td><td class="border border-gray-300 px-4 py-2">Vercel (Frontend)</td></tr>
          </tbody>
        </table>

        <p>🔍 <strong>How Budgetlyzer Works</strong></p>
        <p><strong>Integration with Payman AI</strong><br>
        Users connect their Payman account to the platform, enabling real-time multi-account transaction tracking.</p>

        <p><strong>Project Configuration</strong><br>
        Users define budgets for each project (e.g., client campaigns, departments, or grants).</p>

        <p><strong>AI-Powered Transaction Monitoring</strong><br>
        The AI engine classifies transactions, tracks budget usage, and identifies anomalies or overspending.</p>

        <p><strong>Budget Alerts & Insights</strong><br>
        Smart alerts notify users when they're nearing or exceeding budgets. The system also provides insights on trends.</p>

        <p><strong>Analytics Dashboard</strong><br>
        A visual dashboard offers breakdowns by project, category, or time period—ideal for both quick glances and in-depth reviews.</p>

        <p>🚀 <strong>Key Features & Innovations</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Feature</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Multi-Account Budget Tracking</td><td class="border border-gray-300 px-4 py-2">Separates and monitors budgets across multiple projects/accounts.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Real-Time Expense Monitoring</td><td class="border border-gray-300 px-4 py-2">Uses AI to provide up-to-the-minute insights into financial health.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Custom Reporting</td><td class="border border-gray-300 px-4 py-2">Users can export detailed summaries for stakeholders or internal use.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Automated Alerts</td><td class="border border-gray-300 px-4 py-2">Sends email/SMS/notification alerts when budgets are about to be breached.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Secure Transactions</td><td class="border border-gray-300 px-4 py-2">Built with Payman AI's SDK and safeguards for transactional integrity.</td></tr>
          </tbody>
        </table>

        <p>🧪 <strong>Tech Highlights</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Payman AI SDK enables seamless multi-account financial data management.</li>
          <li>OpenAI & Custom ML Models offer forecasting for future budget utilization.</li>
          <li>PostgreSQL + Firebase ensures scalable and real-time data management.</li>
          <li>Next.js + Tailwind (assumed) for efficient and responsive UI/UX.</li>
        </ul>

        <p>🧾 <strong>Use Cases</strong></p>
        <p><strong>1. Freelancers</strong><br>
        Manage client-specific budgets and track payments from different platforms.</p>

        <p><strong>2. Startups & Enterprises</strong><br>
        Track department-wise spending and generate monthly/quarterly reports for leadership.</p>

        <p><strong>3. NGOs & Grant Managers</strong><br>
        Ensure transparency by tracking disbursed funds and generating reports for donors.</p>

        <p>📈 <strong>Market Context</strong><br>
        According to Statista, the global budgeting software market is expected to grow by 7.5% CAGR, reaching $9.87 billion by 2028.<br><br>
        AI-powered fintech tools have shown a 22% increase in productivity and 37% reduction in financial errors across SMBs and nonprofits.</p>

        <p>🧪 <strong>Research Significance</strong><br>
        Budgetlyzer represents a paradigm shift in financial tooling:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Human + AI collaboration ensures decisions are data-backed, yet flexible.</li>
          <li>Enhances financial transparency, compliance, and scalability in budgeting processes.</li>
          <li>Its modular and pluggable architecture supports expansion into ERP, supply chain, or HR financial management.</li>
        </ul>

        <p>👥 <strong>User Testimonials</strong> (Fictional for study purpose)</p>
        <blockquote class="border-l-4 border-blue-500 pl-4 italic mb-4">
          "With Budgetlyzer, we've reduced budget overruns by 45% in just 3 months."<br>
          — Maya Singh, CFO at GreenRoots NGO
        </blockquote>
        <blockquote class="border-l-4 border-blue-500 pl-4 italic mb-4">
          "Finally a tool that understands how I manage my freelance gigs."<br>
          — Arjun Sharma, UI/UX Consultant
        </blockquote>

        <p>🛠 <strong>Future Improvements</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Integration with Stripe, QuickBooks, and Tally ERP.</li>
          <li>Enhanced mobile experience using React Native.</li>
          <li>Visualized forecasting with chart-based spending simulations.</li>
          <li>Voice-enabled commands for quick budget checks (via GPT/Whisper).</li>
        </ul>

        <p>📜 <strong>Licensing & Contributions</strong><br>
        License: MIT<br>
        Open Source Contributions: Welcomed via GitHub<br>
        <a href="#" class="text-blue-500 underline">GitHub Repo</a></p>

        <p>🔗 <strong>Live Demo</strong><br>
        Access Budgetlyzer at: <a href="http://budgetlyzer.vercel.app" class="text-blue-500 underline">budgetlyzer.vercel.app</a></p>

        <p>📌 <strong>Conclusion</strong><br>
        Budgetlyzer addresses a pressing gap in real-time, intelligent budget management. Through Payman AI integration and a robust AI backbone, it offers an efficient, secure, and scalable solution for modern, multi-project businesses.<br><br>
        Whether you are a developer, researcher, or financial manager—Budgetlyzer is a prime example of how AI is redefining financial operations.</p>
      `
    },
    nexalyst: {
      title: "Nexalyst - Solana Blockchain Forensic Platform",
      content: `
        <p>🔍 <strong>Introduction</strong><br>
        With the rise of decentralized finance (DeFi) and increasing on-chain activity, transparency, accountability, and investigation tools are critical in the blockchain space. The Solana Forensic Analysis Tool addresses this need by providing a powerful web-based solution to track, analyze, and visualize fund movements on the Solana blockchain.</p>

        <p>Designed for security researchers, investigators, compliance teams, and blockchain auditors, the platform offers intuitive, visual insights into transaction patterns, wallet histories, and suspicious activity clusters.</p>

        <p>🎯 <strong>Objective</strong><br>
        To build a comprehensive forensic analysis platform for the Solana blockchain that:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Simplifies on-chain investigation.</li>
          <li>Visualizes fund flows across wallets.</li>
          <li>Detects suspicious patterns and wallet clusters.</li>
          <li>Enables real-time analysis for compliance and threat response teams.</li>
        </ul>

        <p>🧠 <strong>Core Features</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Feature</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">🔁 Transaction Flow Mapping</td><td class="border border-gray-300 px-4 py-2">Visualize money movement through interactive charts. Filter by date, wallet, or amount.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">👛 Wallet Analysis</td><td class="border border-gray-300 px-4 py-2">View complete transaction history, trace funding origins, and detect inter-wallet links.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🔗 Transaction Clustering</td><td class="border border-gray-300 px-4 py-2">Identify and visualize clusters of related transactions and wallets.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🏷️ Entity & Exchange Labelling</td><td class="border border-gray-300 px-4 py-2">Built-in datasets tag known addresses, exchanges, and services. Detect deposit/withdrawal patterns.</td></tr>
          </tbody>
        </table>

        <p>🛠 <strong>Architecture Overview</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Component</th>
              <th class="border border-gray-300 px-4 py-2">Technologies Used</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Frontend</td><td class="border border-gray-300 px-4 py-2">React.js, Tailwind CSS, Chart.js / D3.js</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Backend</td><td class="border border-gray-300 px-4 py-2">Node.js, Express.js</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Blockchain</td><td class="border border-gray-300 px-4 py-2">Solana RPC, Web3.js, Solana APIs</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Database</td><td class="border border-gray-300 px-4 py-2">MongoDB / PostgreSQL (used for clustering & tagging)</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Deployment</td><td class="border border-gray-300 px-4 py-2">Vercel / Netlify / Render</td></tr>
          </tbody>
        </table>

        <p>⚙️ <strong>Installation & Usage</strong></p>
        <p><strong>Prerequisites:</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Node.js & npm</li>
          <li>Git</li>
          <li>Solana CLI</li>
          <li>MongoDB / PostgreSQL</li>
        </ul>

        <p><strong>Getting Started:</strong></p>
        <pre class="bg-gray-100 p-4 rounded mb-4"><code>git clone https://github.com/your-username/solana-forensic-tool.git
cd solana-forensic-tool

# Backend Setup
cd server
npm install
npm run dev

# Frontend Setup
cd client
npm install
npm start</code></pre>

        <p><strong>Using the Tool:</strong></p>
        <ol class="list-decimal list-inside mb-4">
          <li>Open the web interface.</li>
          <li>Input a wallet address or transaction hash.</li>
          <li>Explore:
            <ul class="list-disc list-inside ml-4">
              <li>Transaction Flows</li>
              <li>Wallet Interactions</li>
              <li>Clustering Patterns</li>
              <li>Exchange Tagging</li>
            </ul>
          </li>
        </ol>

        <p>📈 <strong>Research Significance</strong><br>
        Solana's high throughput and low latency make it a common target for scams, flash loan attacks, and wash trading. This tool:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Empowers researchers to detect fraud in early stages.</li>
          <li>Assists compliance officers in AML/KYC checks.</li>
          <li>Provides a real-time lens into on-chain activities.</li>
          <li>Supports academic research into blockchain behavioral analysis.</li>
        </ul>

        <p>🧪 <strong>Technical Innovations</strong></p>
        <p><strong>Custom Transaction Clustering Algorithm</strong><br>
        Groups transactions based on frequency, wallet linkage, and temporal proximity.</p>

        <p><strong>Graph-Based Visualizations (D3.js)</strong><br>
        Enables clear, explorable fund flows with filters and highlights.</p>

        <p><strong>Entity Labeling Dataset</strong><br>
        Maintains a curated database of known exchanges, services, and DAO wallets.</p>

        <p><strong>Read-Only Access</strong><br>
        Fully secure and privacy-preserving, requiring no private key exposure.</p>

        <p>👥 <strong>Target Users</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Blockchain Security Teams – for incident response & forensic reporting.</li>
          <li>Regulatory Compliance Officers – AML, sanctions screening, transaction tracing.</li>
          <li>Crypto Forensics Researchers – academic & institutional investigations.</li>
          <li>DeFi Protocols – fraud detection & ecosystem monitoring.</li>
        </ul>

        <p>📊 <strong>Market Context</strong><br>
        The global blockchain forensic market is projected to exceed $8.5B by 2030, growing at a CAGR of 15.2%.<br><br>
        Post-FTX and similar collapses, forensic analysis tools are in high demand by VCs, exchanges, and governments.</p>

        <p>🔒 <strong>Security & Privacy</strong></p>
        <p><strong>Read-Only RPC Access</strong><br>
        No transactions are signed or executed.</p>

        <p><strong>No Key Storage</strong><br>
        The tool operates without accessing private keys.</p>

        <p><strong>GDPR-Compliant Logs</strong><br>
        Minimal user data, optional session anonymization.</p>

        <p>📚 <strong>Documentation</strong><br>
        Comprehensive docs are available in the /docs directory, covering:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Setup & Configuration</li>
          <li>Wallet Tracing Flow</li>
          <li>Clustering Algorithms</li>
          <li>Labeling Methodology</li>
          <li>Deployment Guides</li>
        </ul>

        <p>🧾 <strong>Licensing & Contribution</strong><br>
        License: MIT<br><br>
        Contributions Welcome:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Fork the repo</li>
          <li>Create a feature branch</li>
          <li>Submit a PR with documentation</li>
        </ul>

        <p>💬 <strong>Quote for Thought</strong><br>
        <em>"Security is not a product, but a process."</em><br>
        — Bruce Schneier</p>

        <p>🔗 <strong>Live Tool</strong><br>
        Explore the tool live at: <a href="#" class="text-blue-500 underline">🔗 LIVE TOOL</a><br>
        GitHub Repository: <a href="https://github.com/your-username/solana-forensic-tool" class="text-blue-500 underline">https://github.com/your-username/solana-forensic-tool</a></p>

        <p>📌 <strong>Conclusion</strong><br>
        The Solana Forensic Analysis Tool is a vital innovation for blockchain intelligence. By combining on-chain data with intelligent visualization and clustering, it equips professionals to analyze, detect, and prevent financial crime in the Solana ecosystem. With robust architecture, secure practices, and open-source collaboration, it lays the foundation for the future of crypto compliance and security research.</p>
      `
    },
    solarshare: {
      title: "SolarShare - DePIN Solar Energy Marketplace",
      content: `
        <p>🔍 <strong>Introduction</strong><br>
        SolarShare is a revolutionary DePIN (Decentralized Physical Infrastructure Network) solution that leverages Solana blockchain to enable peer-to-peer solar energy sharing. Designed specifically for Indian communities, SolarShare connects local producers and consumers through a real-time decentralized marketplace, encouraging sustainable and accessible energy distribution.</p>

        <p>Built during the Industrial47 x Superteam India Hackathon, this project brings transparency, scalability, and community ownership to the forefront of clean energy initiatives in developing regions.</p>

        <p>🎯 <strong>Objective</strong><br>
        To empower Indian households and microgrids to produce, consume, and trade solar energy locally using a secure, blockchain-based decentralized system. Key goals include:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Making renewable energy tradable and accessible.</li>
          <li>Eliminating central energy distribution inefficiencies.</li>
          <li>Enabling real-time tracking and monetization of surplus solar energy.</li>
        </ul>

        <p>🌟 <strong>Key Features</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Feature</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">🔐 User Registration & Profiles</td><td class="border border-gray-300 px-4 py-2">Register as a producer or consumer and link energy usage profiles.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🛒 Decentralized Marketplace</td><td class="border border-gray-300 px-4 py-2">Trade solar credits through a visual P2P interface using blockchain.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">📊 Real-Time Dashboard</td><td class="border border-gray-300 px-4 py-2">View live production, consumption, and energy credit dynamics.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🔄 IoT Simulation</td><td class="border border-gray-300 px-4 py-2">Simulates IoT smart meter and solar panel output using mock data.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">💸 Solana Wallet Integration</td><td class="border border-gray-300 px-4 py-2">Uses Phantom Wallet for seamless energy credit transactions.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">📈 Energy Tracking System</td><td class="border border-gray-300 px-4 py-2">Visualize usage, sales, and credit history with charts and animations.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🎨 UI/UX Design</td><td class="border border-gray-300 px-4 py-2">Mobile-first, responsive layout with vibrant, interactive visualizations.</td></tr>
          </tbody>
        </table>

        <p>🏗️ <strong>Architecture Overview</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Layer</th>
              <th class="border border-gray-300 px-4 py-2">Technology Stack</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Frontend</td><td class="border border-gray-300 px-4 py-2">React.js, TailwindCSS, Recharts, Framer Motion</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Blockchain</td><td class="border border-gray-300 px-4 py-2">Solana, Solana Web3.js, Phantom Wallet</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Simulation</td><td class="border border-gray-300 px-4 py-2">Mock IoT Device Simulator (dummy solar and meter data)</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Backend (optional V1)</td><td class="border border-gray-300 px-4 py-2">Express.js, Node.js, MongoDB</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Deployment</td><td class="border border-gray-300 px-4 py-2">Vercel / Netlify (Frontend), Render / Railway (Optional Backend)</td></tr>
          </tbody>
        </table>

        <p>⚙️ <strong>Installation Guide</strong></p>
        <p><strong>Prerequisites:</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Node.js & npm</li>
          <li>Phantom Wallet (set to Devnet)</li>
          <li>Git</li>
        </ul>

        <p><strong>Steps:</strong></p>
        <pre class="bg-gray-100 p-4 rounded mb-4"><code>git clone https://github.com/your-username/solarshare.git
cd solarshare
npm install
npm run dev</code></pre>

        <p>✅ Visit <a href="#" class="text-blue-500 underline">🔗 Live Preview</a> to experience the marketplace.</p>

        <p>🧠 <strong>Why SolarShare?</strong><br>
        India's rural and semi-urban regions face:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Intermittent power supply and overloaded grids.</li>
          <li>Lack of efficient resale systems for surplus solar energy.</li>
          <li>Limited infrastructure for energy credit-based economies.</li>
        </ul>

        <p>SolarShare introduces:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Local energy monetization via tokenized credits.</li>
          <li>Community-first clean energy models, powered by DePIN.</li>
          <li>Scalable infrastructure using Solana's high-speed, low-cost blockchain.</li>
        </ul>

        <p>🧪 <strong>Research Significance</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>A pioneering DePIN application tackling real-world infrastructure needs.</li>
          <li>Introduces a model for energy micro-markets, replicable in other developing nations.</li>
          <li>Encourages community-driven environmental action using digital tools.</li>
          <li>Demonstrates potential of web3 and IoT hybrid systems for utilities.</li>
        </ul>

        <p>📊 <strong>Technical Innovations</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Innovation</th>
              <th class="border border-gray-300 px-4 py-2">Impact</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">DePIN with Solana</td><td class="border border-gray-300 px-4 py-2">Enables decentralized handling of real-world energy systems.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Mock IoT Integration</td><td class="border border-gray-300 px-4 py-2">Bridges simulated hardware data with blockchain actions.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Energy Credit Transactions</td><td class="border border-gray-300 px-4 py-2">Tokenizes real-time production/consumption into traceable digital credits.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Wallet-Based Interactions</td><td class="border border-gray-300 px-4 py-2">Every transaction is self-sovereign, secure, and transparent.</td></tr>
          </tbody>
        </table>

        <p>📈 <strong>Use Case Scenarios</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Scenario</th>
              <th class="border border-gray-300 px-4 py-2">Value Delivered</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Village Microgrid Sharing</td><td class="border border-gray-300 px-4 py-2">Community members trade excess solar power locally.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">School Rooftop Panel Program</td><td class="border border-gray-300 px-4 py-2">Students learn to track and sell unused school energy.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">NGO-Led Clean Energy Drives</td><td class="border border-gray-300 px-4 py-2">Verified transactions show impact to donors and governments.</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Urban Solar Entrepreneurs</td><td class="border border-gray-300 px-4 py-2">Enables rooftop owners to monetize power even in dense cities.</td></tr>
          </tbody>
        </table>

        <p>🌱 <strong>Environmental & Social Impact</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Incentivizes solar adoption by creating a marketplace for surplus energy.</li>
          <li>Decentralizes power ownership, reducing grid stress.</li>
          <li>Educates users on sustainable energy economics.</li>
        </ul>

        <p>🔒 <strong>Security & Compliance</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Uses Phantom Wallet for secure, non-custodial transactions.</li>
          <li>All credit exchanges are recorded on-chain via Solana.</li>
          <li>No sensitive data stored—fully decentralized and transparent.</li>
        </ul>

        <p>📚 <strong>Documentation</strong><br>
        Documentation includes:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Setup Guide</li>
          <li>Architecture Explanation</li>
          <li>DePIN Framework</li>
          <li>IoT-to-Blockchain Flow</li>
          <li>Energy Credit Economy Model</li>
        </ul>
        <p>(Available in /docs folder or project Wiki.)</p>

        <p>🏆 <strong>Hackathon Submission</strong><br>
        Submitted to Industrial47 x Superteam India Hackathon, SolarShare showcases the first steps toward community-owned renewable energy networks through the Solana ecosystem.</p>

        <p>🤝 <strong>Contribution Guidelines</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Fork the repo</li>
          <li>Create a feature branch</li>
          <li>Submit a clear and documented pull request</li>
          <li>Explore open issues and help improve the platform!</li>
        </ul>

        <p>📄 <strong>License</strong><br>
        This project is licensed under the MIT License – free to use, modify, and distribute with proper attribution.</p>

        <p>💬 <strong>Quote for Thought</strong><br>
        <em>"The sun shines for everyone—let's build the systems that let it empower everyone."</em><br>
        — SolarShare Vision Statement</p>

        <p>🔗 <strong>Resources</strong><br>
        Live Preview: <a href="https://solana-depin.vercel.app" class="text-blue-500 underline">https://solana-depin.vercel.app</a><br>
        GitHub: <a href="https://github.com/your-username/solarshare" class="text-blue-500 underline">https://github.com/your-username/solarshare</a></p>

        <p>📌 <strong>Conclusion</strong><br>
        SolarShare is not just a tech project—it's a vision for a decentralized, equitable, and sustainable energy future. By leveraging blockchain, IoT simulation, and community participation, it introduces a scalable model for clean energy distribution in developing nations. This project exemplifies how Web3 can power real-world change—one solar panel at a time.</p>
      `
    },
    trendpulse: {
      title: "TrendPulse - AI Trading News Application",
      content: `
        <p>🔍 <strong>Introduction</strong><br>
        TrendPulse is an advanced AI-driven trading intelligence platform that fuses real-time market data, social sentiment analysis, and blockchain analytics into a unified dashboard. Designed for modern retail investors, it provides AI-curated trading signals, community-driven strategies, and actionable insights through an intuitive interface that rivals professional trading terminals while remaining accessible to everyday traders.</p>

        <p>🎯 <strong>Objective</strong><br>
        To democratize access to professional-grade trading intelligence by providing retail investors with AI-powered market insights, real-time sentiment analysis, and comprehensive trading signals in an intuitive, dashboard-style interface.</p>

        <p>🧠 <strong>Key Features</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Feature</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">📊 Real-Time Market Data</td><td class="border border-gray-300 px-4 py-2">Live price feeds, volume analysis, and market sentiment tracking</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🤖 AI-Powered Signals</td><td class="border border-gray-300 px-4 py-2">Machine learning algorithms analyze patterns to generate trading recommendations</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">📈 Social Sentiment Analysis</td><td class="border border-gray-300 px-4 py-2">Track social media sentiment and its correlation with market movements</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🔄 Multi-Asset Support</td><td class="border border-gray-300 px-4 py-2">Covers stocks, crypto, forex, and commodities</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">📱 Mobile-First Design</td><td class="border border-gray-300 px-4 py-2">Responsive interface optimized for both desktop and mobile trading</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">⚡ Real-Time Alerts</td><td class="border border-gray-300 px-4 py-2">Customizable notifications for price movements and signal generation</td></tr>
          </tbody>
        </table>

        <p>🏗️ <strong>Architecture Overview</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Component</th>
              <th class="border border-gray-300 px-4 py-2">Technology Stack</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Frontend</td><td class="border border-gray-300 px-4 py-2">React.js, TailwindCSS, Chart.js, WebSocket</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Backend</td><td class="border border-gray-300 px-4 py-2">Node.js, Express.js, Python (ML models)</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Database</td><td class="border border-gray-300 px-4 py-2">MongoDB, Redis (caching)</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">AI/ML</td><td class="border border-gray-300 px-4 py-2">TensorFlow, scikit-learn, OpenAI API</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">APIs</td><td class="border border-gray-300 px-4 py-2">Alpha Vantage, Twitter API, CoinGecko</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Deployment</td><td class="border border-gray-300 px-4 py-2">Vercel (Frontend), Railway (Backend)</td></tr>
          </tbody>
        </table>

        <p>⚙️ <strong>Technical Implementation</strong></p>
        <p><strong>Data Pipeline</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Real-time market data ingestion from multiple sources</li>
          <li>Social media sentiment analysis using NLP models</li>
          <li>Pattern recognition and signal generation</li>
        </ul>

        <p><strong>AI Models</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>LSTM networks for price prediction</li>
          <li>Sentiment analysis using transformer models</li>
          <li>Technical indicator analysis algorithms</li>
        </ul>

        <p><strong>Dashboard Features</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Interactive charts with multiple timeframes</li>
          <li>Customizable watchlists and portfolios</li>
          <li>Performance tracking and analytics</li>
        </ul>

        <p>🧪 <strong>Research Significance</strong><br>
        TrendPulse addresses the information asymmetry between institutional and retail traders by:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Democratizing access to professional trading tools</li>
          <li>Providing AI-driven insights previously available only to hedge funds</li>
          <li>Creating a community-driven approach to market intelligence</li>
        </ul>

        <p>📊 <strong>Market Context</strong><br>
        The global algorithmic trading market is expected to reach $18.8 billion by 2026, growing at a CAGR of 11.1%.<br><br>
        Retail trading has surged 300% since 2020, creating demand for sophisticated yet accessible trading tools.</p>

        <p>🧾 <strong>Use Cases</strong></p>
        <p><strong>1. Day Traders</strong><br>
        Real-time signals and sentiment analysis for short-term trading decisions.</p>

        <p><strong>2. Swing Traders</strong><br>
        Medium-term trend analysis and momentum indicators.</p>

        <p><strong>3. Crypto Enthusiasts</strong><br>
        Specialized tools for cryptocurrency market analysis and DeFi tracking.</p>

        <p><strong>4. Portfolio Managers</strong><br>
        Risk assessment and diversification recommendations.</p>

        <p>👥 <strong>Target Users</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Retail investors seeking professional-grade tools</li>
          <li>Day and swing traders requiring real-time analysis</li>
          <li>Crypto traders needing specialized market intelligence</li>
          <li>Financial advisors looking for client portfolio insights</li>
        </ul>

        <p>🔒 <strong>Security & Privacy</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Secure API key management</li>
          <li>No storage of sensitive trading credentials</li>
          <li>GDPR-compliant data handling</li>
          <li>Real-time data encryption</li>
        </ul>

        <p>📚 <strong>Documentation</strong><br>
        Comprehensive documentation covering:</p>
        <ul class="list-disc list-inside mb-4">
          <li>API integration guides</li>
          <li>Signal interpretation methodology</li>
          <li>Custom indicator development</li>
          <li>Platform deployment instructions</li>
        </ul>

        <p>🔗 <strong>Live Application</strong><br>
        Experience TrendPulse: <a href="http://trend-pulse-trade.vercel.app" class="text-blue-500 underline">http://trend-pulse-trade.vercel.app</a><br>
        GitHub Repository: <a href="https://github.com/your-username/trendpulse" class="text-blue-500 underline">https://github.com/your-username/trendpulse</a></p>

        <p>📌 <strong>Conclusion</strong><br>
        TrendPulse represents the future of retail trading intelligence, combining advanced AI capabilities with user-friendly design. By democratizing access to professional-grade market analysis tools, it empowers individual traders to make informed decisions in increasingly complex financial markets.</p>
      `
    },
    defi: {
      title: "DeFi Loan Options - Cross-Chain AI Agent",
      content: `
        <p>🔍 <strong>Introduction</strong><br>
        DeFi Loan Options is a cutting-edge Web3-native tool that simplifies decentralized finance lending through agent-based AI architecture. Built with Fetch.ai's Agentverse and powered by ASI1-mini LLM, it autonomously discovers, ranks, and explains optimal loan options across multiple blockchains including Ethereum, Polygon, and BNB Chain, enabling users to make informed decisions in the fragmented DeFi lending ecosystem.</p>

        <p>🎯 <strong>Objective</strong><br>
        To create an intelligent, autonomous agent system that navigates the complex DeFi lending landscape, providing users with personalized loan recommendations across multiple blockchain networks through AI-powered analysis and real-time market data.</p>

        <p>🧠 <strong>Key Features</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Feature</th>
              <th class="border border-gray-300 px-4 py-2">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">🤖 Autonomous AI Agents</td><td class="border border-gray-300 px-4 py-2">Fetch.ai agents that independently research and analyze loan options</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🔗 Cross-Chain Support</td><td class="border border-gray-300 px-4 py-2">Coverage across Ethereum, Polygon, BNB Chain, and more</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">📊 Real-Time Analysis</td><td class="border border-gray-300 px-4 py-2">Live interest rates, collateral requirements, and risk assessments</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">🎯 Personalized Recommendations</td><td class="border border-gray-300 px-4 py-2">Tailored suggestions based on user preferences and risk profile</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">💬 Natural Language Interface</td><td class="border border-gray-300 px-4 py-2">Powered by ASI1-mini LLM for intuitive user interactions</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">⚡ Instant Comparisons</td><td class="border border-gray-300 px-4 py-2">Side-by-side analysis of different lending protocols</td></tr>
          </tbody>
        </table>

        <p>🏗️ <strong>Architecture Overview</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Component</th>
              <th class="border border-gray-300 px-4 py-2">Technology Stack</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">AI Framework</td><td class="border border-gray-300 px-4 py-2">Fetch.ai Agentverse, ASI1-mini LLM</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Frontend</td><td class="border border-gray-300 px-4 py-2">React.js, Web3.js, Wagmi</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Blockchain</td><td class="border border-gray-300 px-4 py-2">Ethereum, Polygon, BNB Chain</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Protocols</td><td class="border border-gray-300 px-4 py-2">Aave, Compound, MakerDAO, Venus</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Backend</td><td class="border border-gray-300 px-4 py-2">Node.js, Express.js, MongoDB</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Deployment</td><td class="border border-gray-300 px-4 py-2">Vercel (Frontend), Railway (Backend)</td></tr>
          </tbody>
        </table>

        <p>⚙️ <strong>Agent Architecture</strong></p>
        <p><strong>Multi-Agent System</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Data Collection Agents: Gather real-time lending data across protocols</li>
          <li>Analysis Agents: Process and rank loan options based on user criteria</li>
          <li>Communication Agents: Interface with users through natural language</li>
        </ul>

        <p><strong>AI Processing Pipeline</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Real-time protocol data ingestion</li>
          <li>Risk assessment algorithms</li>
          <li>Yield optimization calculations</li>
          <li>Personalized recommendation engine</li>
        </ul>

        <p>🧪 <strong>Technical Innovations</strong></p>
        <p><strong>Agent-Based AI Architecture</strong><br>
        Utilizes Fetch.ai's autonomous agent framework for decentralized data processing</p>

        <p><strong>Cross-Chain Compatibility</strong><br>
        Seamlessly integrates with multiple blockchain networks and DeFi protocols</p>

        <p><strong>ASI1-mini LLM Integration</strong><br>
        Natural language processing for user queries and explanation generation</p>

        <p><strong>Real-Time Market Analysis</strong><br>
        Continuous monitoring of lending rates, liquidity, and market conditions</p>

        <p>📊 <strong>Supported Protocols</strong></p>
        <table class="table-auto w-full mb-6 border-collapse border border-gray-300">
          <thead>
            <tr class="bg-gray-100">
              <th class="border border-gray-300 px-4 py-2">Protocol</th>
              <th class="border border-gray-300 px-4 py-2">Blockchain</th>
              <th class="border border-gray-300 px-4 py-2">Features</th>
            </tr>
          </thead>
          <tbody>
            <tr><td class="border border-gray-300 px-4 py-2">Aave</td><td class="border border-gray-300 px-4 py-2">Ethereum, Polygon</td><td class="border border-gray-300 px-4 py-2">Flash loans, variable/stable rates</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Compound</td><td class="border border-gray-300 px-4 py-2">Ethereum</td><td class="border border-gray-300 px-4 py-2">Algorithmic interest rates</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">MakerDAO</td><td class="border border-gray-300 px-4 py-2">Ethereum</td><td class="border border-gray-300 px-4 py-2">DAI stablecoin lending</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">Venus</td><td class="border border-gray-300 px-4 py-2">BNB Chain</td><td class="border border-gray-300 px-4 py-2">Isolated lending pools</td></tr>
            <tr><td class="border border-gray-300 px-4 py-2">JustLend</td><td class="border border-gray-300 px-4 py-2">Tron</td><td class="border border-gray-300 px-4 py-2">High-yield opportunities</td></tr>
          </tbody>
        </table>

        <p>🧾 <strong>Use Cases</strong></p>
        <p><strong>1. DeFi Newcomers</strong><br>
        Simplified access to complex lending protocols with AI guidance</p>

        <p><strong>2. Yield Farmers</strong><br>
        Optimal rate discovery across multiple chains and protocols</p>

        <p><strong>3. Liquidity Providers</strong><br>
        Risk-adjusted return analysis for lending decisions</p>

        <p><strong>4. Portfolio Managers</strong><br>
        Diversified lending strategy recommendations</p>

        <p>📈 <strong>Market Context</strong><br>
        The DeFi lending market has grown to over $50 billion in total value locked (TVL).<br><br>
        Cross-chain DeFi solutions are becoming increasingly important as users seek optimal yields across networks.</p>

        <p>🔒 <strong>Security Features</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Non-custodial architecture - no access to user funds</li>
          <li>Read-only protocol interactions for data gathering</li>
          <li>Secure wallet connections through established Web3 libraries</li>
          <li>Regular security audits of agent algorithms</li>
        </ul>

        <p>📚 <strong>Agent Documentation</strong><br>
        Comprehensive guides covering:</p>
        <ul class="list-disc list-inside mb-4">
          <li>Agent deployment and configuration</li>
          <li>Custom agent development</li>
          <li>Protocol integration methods</li>
          <li>Risk assessment algorithms</li>
        </ul>

        <p>🤝 <strong>Community & Governance</strong></p>
        <ul class="list-disc list-inside mb-4">
          <li>Open-source agent development</li>
          <li>Community-driven protocol additions</li>
          <li>Transparent recommendation algorithms</li>
          <li>Regular governance votes on platform improvements</li>
        </ul>

        <p>🔗 <strong>Live Platform</strong><br>
        Access DeFi Loan Options: <a href="https://crosschain-loan-whisperer.vercel.app" class="text-blue-500 underline">https://crosschain-loan-whisperer.vercel.app</a><br>
        GitHub Repository: <a href="https://github.com/your-username/defi-loan-options" class="text-blue-500 underline">https://github.com/your-username/defi-loan-options</a></p>

        <p>📌 <strong>Conclusion</strong><br>
        DeFi Loan Options represents a paradigm shift in how users interact with decentralized lending protocols. By leveraging autonomous AI agents and cross-chain capabilities, it transforms the complex DeFi landscape into an accessible, intelligent, and user-friendly experience. This project showcases the potential of agent-based AI in Web3, paving the way for more sophisticated and autonomous DeFi tools.</p>
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
        <div className="prose prose-lg prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: caseStudy.content }} />
      </div>
    </div>
  );
};

export default CaseStudy;
