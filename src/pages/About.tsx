
import Navigation from '../components/Navigation';
import { Calendar, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
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
                  <div className="flex items-center text-white/60 mb-6">
                    <span className="text-orange-400 mr-2">📍</span>
                    <span>Asia/Kolkata</span>
                  </div>
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

                {/* Languages */}
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">English</span>
                  <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">Hindi</span>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4 space-y-16">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div>
                  <h1 className="text-5xl lg:text-6xl font-bold mb-4">Roshni Kumari</h1>
                  <p className="text-xl text-white/70 mb-4">
                    Microsoft Certified | β MLSA | Data Science & DevOps Engineer
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex flex-wrap gap-3 mb-6">
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
                
                {/* Schedule Button - Made smaller */}
                <button className="flex items-center px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a call
                </button>
              </div>

              {/* Introduction */}
              <section id="introduction">
                <p className="text-lg text-white/80 leading-relaxed">
                  Roshni Kumari is a tech enthusiast and engineer with a passion for solving complex problems using Data Science, Machine Learning, and DevOps. With expertise in Microsoft Azure, Python, and cloud-native technologies, I bring creativity and precision to every project I undertake. Let's build something amazing together!
                </p>
              </section>

              {/* Internship Experience */}
              <section id="internship">
                <h2 className="text-4xl font-bold mb-12">Internship Experience</h2>
                
                <div className="space-y-12">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Amazon Web Services (Accenture)</h3>
                        <p className="text-green-400 font-medium">AI/ML Scholar Research Intern: Neural Network with Transformer Models</p>
                      </div>
                      <span className="text-white/50 text-sm mt-2 sm:mt-0">June 2024 – Oct 2024 | Seattle, United Kingdom (Remote)</span>
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

              <section id="education">
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h3>
                  <p className="text-green-400 font-medium mb-2">XYZ University</p>
                  <span className="text-white/50 text-sm">2021 – 2025 | CGPA: 8.5/10</span>
                </div>
              </section>

              <section id="projects">
                <h2 className="text-3xl font-bold mb-8">Projects</h2>
                <div className="space-y-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">DevOps Project: Flask App Deployment on Azure</h3>
                    <p className="text-white/70 text-sm">Automated deployment with Docker, Terraform, and GitHub Actions</p>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-2">YouTube Slide Extractor</h3>
                    <p className="text-white/70 text-sm">AI-powered Python application for presentation generation</p>
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
