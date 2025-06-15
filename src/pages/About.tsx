

import Navigation from '../components/Navigation';
import { Calendar, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [clickEffect, setClickEffect] = useState(false);

  const handleScheduleClick = () => {
    setClickEffect(true);
    setTimeout(() => setClickEffect(false), 600);
    // Open Calendly link in a new tab
    window.open('https://calendly.com/roshnikumari', '_blank', 'noopener,noreferrer');
  };

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
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
            {/* Left Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 space-y-8">
                {/* Profile Section */}
                <div className="flex flex-col items-center lg:items-start">
                  <img 
                    src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                    alt="Roshni Kumari" 
                    className="w-32 h-32 rounded-full border-4 border-white/20 object-cover mb-4"
                  />
                  
                  {/* Location below photo */}
                  <div className="flex items-center text-white/60 mb-2">
                    <span className="text-orange-400 mr-2">📍</span>
                    <span>Asia/Kolkata</span>
                  </div>
                </div>

                {/* Languages - moved above navigation */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">Hindi</span>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                  <a href="#introduction" className="flex items-center text-white/70 hover:text-white transition-colors py-2 text-sm">
                    — Introduction
                  </a>
                  <a href="#internship" className="flex items-center text-white hover:text-white transition-colors py-2 text-sm font-medium">
                    — Internship Experience
                  </a>
                  <a href="#education" className="flex items-center text-white/70 hover:text-white transition-colors py-2 text-sm">
                    — Education
                  </a>
                  <a href="#projects" className="flex items-center text-white/70 hover:text-white transition-colors py-2 text-sm">
                    — Projects
                  </a>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 space-y-12">
              {/* Schedule a call button - positioned above name and aligned left */}
              <div className="flex justify-start">
                <button 
                  onClick={handleScheduleClick}
                  className={`relative flex items-center px-8 py-4 bg-white/5 border border-white/20 text-white rounded-xl transition-all duration-300 hover:bg-white/10 hover:border-blue-400/50 hover:scale-105 hover:shadow-lg backdrop-blur-sm ${
                    clickEffect ? 'animate-pulse' : ''
                  }`}
                >
                  {/* Blue light effect overlay */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400/20 to-cyan-400/20 transition-opacity duration-300 ${
                    clickEffect ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Animated blue glow on click */}
                  {clickEffect && (
                    <div className="absolute inset-0 rounded-xl bg-blue-400/30 animate-ping" />
                  )}
                  
                  <Calendar className="w-5 h-5 mr-3 relative z-10" />
                  <span className="relative z-10">Schedule a call</span>
                  <span className="ml-3 relative z-10 transition-transform duration-200 group-hover:translate-x-1">→</span>
                </button>
              </div>

              {/* Header Section */}
              <div className="flex flex-col justify-start items-start gap-6">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4">Roshni Kumari</h1>
                  <p className="text-xl text-white/70 mb-6">
                    AWS Cloud Captain'25 • 3X @OCFA Certified • Business Fellow @perplexity • IEEE GU • Fellow @World Bank @McKinsey Forward • Flipkart Runner'24 • Fellow @AspireInstitute • β MLSA • AWS AL/ML Scholar'24
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm hover:bg-white/20 transition-colors">
                      LeetCode
                    </a>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <section id="introduction">
                <p className="text-lg text-white/80 leading-relaxed">
                  Roshni Kumari is a tech enthusiast and engineer with a passion for solving complex problems using Data Science, Machine Learning, and DevOps. With expertise in Microsoft Azure, Python, and cloud-native technologies, I bring creativity and precision to every project I undertake. Let's build something amazing together!
                </p>
              </section>

              {/* Internship Experience */}
              <section id="internship">
                <h2 className="text-4xl font-bold mb-8">Internship Experience</h2>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Amazon Web Services (Accenture)</h3>
                        <p className="text-green-400 font-medium">AI/ML Scholar Research Intern: Neural Network with Transformer Models</p>
                      </div>
                      <span className="text-white/50 text-sm mt-2 sm:mt-0">June 2024 – Oct 2024 | Seattle, USA (Remote)</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Built own Deep Learning AI Image Classifier using Python, CNN, PyTorch and CLI on cloud GPU (CUDA) infrastructure.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Identified issues, analysed information and provided solutions to problems related to data from different parameters.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Collaborated with a team to analyze, design and integrate components for business solutions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Perplexity</h3>
                        <p className="text-green-400 font-medium">Business Fellow</p>
                      </div>
                      <span className="text-white/50 text-sm mt-2 sm:mt-0">Feb 2025 – Present | SF, USA (Remote)</span>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Develop AI‑driven research and analysis to enhance business decision‑making using real‑time data and proprietary insights.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Deep Research capabilities to generate expert‑level reports, optimize AI workflows and contribute to innovative problem‑solving strategies.
                        </p>
                      </div>
                      
                      <div className="flex items-start">
                        <span className="text-green-400 mr-3 mt-1">•</span>
                        <p className="text-white/80">
                          Worked on Intelligent reflecting Models beyond exiting LLMs.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section id="education">
                <h2 className="text-4xl font-bold mb-8">Education</h2>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Galgotias University</h3>
                        <p className="text-green-400 font-medium">B.Tech in Computer Science and Engineering (CGPA: 8.33)</p>
                        <p className="text-white/50 text-sm">Greater Noida, India</p>
                      </div>
                      <span className="text-white/50 text-sm mt-2 sm:mt-0">Oct 2022 – Aug 2026</span>
                    </div>
                  </div>
                </div>
              </section>

              {/* Projects */}
              <section id="projects">
                <h2 className="text-4xl font-bold mb-8">Projects</h2>
                
                <div className="space-y-8">
                  <div className="relative">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Budgetlyzer</h3>
                      <p className="text-white/80 mb-4">
                        Budgetlyzer is an AI-powered budgeting tool designed for project-based businesses. It leverages Payman AI's multi-account feature to help businesses efficiently track, analyze, and manage their project budgets in real-time.
                      </p>
                      <div className="mb-4">
                        <span className="text-green-400 font-medium">Tech Stack: </span>
                        <span className="text-white/70">React, AI-powered analytics, Payman AI integration, Real-time data processing.</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-green-400 font-medium">Results: </span>
                        <span className="text-white/70">Enhanced budget management efficiency for project-based businesses, accessible at: </span>
                        <a href="https://budgetlyzer.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          budgetlyzer.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-4">Nexalyst</h3>
                      <p className="text-white/80 mb-4">
                        Nexalyst is a powerful web-based forensic analysis platform for the Solana blockchain that enables security researchers, investigators and compliance teams to visualise, track and analyse on-chain fund movements precisely and clearly.
                      </p>
                      <div className="mb-4">
                        <span className="text-green-400 font-medium">Tech Stack: </span>
                        <span className="text-white/70">Solana blockchain integration, Web3 technologies, Data visualization, Forensic analysis tools.</span>
                      </div>
                      <div className="mb-4">
                        <span className="text-green-400 font-medium">Outcome: </span>
                        <span className="text-white/70">Providing comprehensive blockchain forensic capabilities for security professionals, accessible at: </span>
                        <a href="https://solana-trace-nexus.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">
                          solana-trace-nexus.vercel.app
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Copyright and Social Icons at the bottom */}
              <section className="pt-12 border-t border-white/10">
                <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                  <div className="flex items-center text-white/50 text-sm">
                    <span className="mr-2">©</span>
                    <span>2025 / Roshni Kumari</span>
                  </div>
                  
                  <div className="flex justify-center space-x-6">
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="#" className="text-white/70 hover:text-white transition-colors">
                      <Mail className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
