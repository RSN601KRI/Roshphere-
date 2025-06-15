
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
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-8">
                {/* Profile Section */}
                <div className="flex flex-col items-center lg:items-start">
                  <img 
                    src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                    alt="Roshni Kumari" 
                    className="w-32 h-32 rounded-full border-4 border-white/20 object-cover mb-6"
                  />
                  
                  {/* Schedule Button */}
                  <button className="flex items-center bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 text-green-400 px-6 py-3 rounded-lg transition-all duration-300 mb-6 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a call
                  </button>
                </div>

                {/* Navigation Menu */}
                <nav className="space-y-1">
                  <a href="#introduction" className="flex items-center text-white/70 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5">
                    <span className="w-1 h-1 bg-current rounded-full mr-3"></span>
                    Introduction
                  </a>
                  <a href="#experience" className="flex items-center text-white/70 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5">
                    <span className="w-1 h-1 bg-current rounded-full mr-3"></span>
                    Professional Experience
                  </a>
                  <a href="#education" className="flex items-center text-white/70 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5">
                    <span className="w-1 h-1 bg-current rounded-full mr-3"></span>
                    Education
                  </a>
                  <a href="#projects" className="flex items-center text-white/70 hover:text-white transition-colors py-3 px-4 rounded-lg hover:bg-white/5">
                    <span className="w-1 h-1 bg-current rounded-full mr-3"></span>
                    Projects
                  </a>
                </nav>

                {/* Location and Languages */}
                <div className="space-y-4">
                  <div className="flex items-center text-white/60 justify-center lg:justify-start">
                    <span className="text-orange-400 mr-2">📍</span>
                    <span>Asia/Kolkata</span>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">Hindi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 space-y-16">
              {/* Header Section */}
              <div id="introduction" className="text-center lg:text-left">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">Roshni Kumari</h1>
                <p className="text-lg sm:text-xl text-white/60 mb-6 font-medium">
                  AWS Cloud Captain'25 • 3X @OCFA Certified • Business Fellow @perplexity • IEEE GU • Fellow @World Bank @McKinsey Forward • Flipkart Runner'24 • Fellow @AspireInstitute • β MLSA • AWS AL/ML Scholar'24
                </p>
                
                {/* Social Links */}
                <div className="flex flex-wrap gap-3 mb-8 justify-center lg:justify-start">
                  <button className="flex items-center bg-white/10 border border-white/20 hover:bg-white/15 text-white px-4 py-2 rounded-lg transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </button>
                  <button className="flex items-center bg-white/10 border border-white/20 hover:bg-white/15 text-white px-4 py-2 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </button>
                  <button className="flex items-center bg-white/10 border border-white/20 hover:bg-white/15 text-white px-4 py-2 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </button>
                  <button className="bg-white/10 border border-white/20 hover:bg-white/15 text-white px-4 py-2 rounded-lg transition-colors">
                    LeetCode
                  </button>
                </div>

                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  Roshni Kumari is a tech enthusiast and engineer with a passion for solving 
                  complex problems using Data Science, Machine Learning, and DevOps. 
                  With expertise in Microsoft Azure, Python, and cloud-native technologies, I 
                  bring creativity and precision to every project I undertake. Let's build 
                  something amazing together!
                </p>
              </div>

              {/* Professional Experience */}
              <section id="experience">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Professional Experience</h2>
                
                <div className="space-y-12">
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">AlgoArtisans</h3>
                        <p className="text-green-400 font-medium text-lg">Data Science Intern</p>
                      </div>
                      <span className="text-white/50 text-sm sm:text-base mt-2 sm:mt-0">June 2024 – Dec 2024 | Remote – Bhutan</span>
                    </div>
                    <ul className="text-white/70 space-y-2 leading-relaxed">
                      <li>• Developed machine learning models for predictive analytics, improving accuracy by 25%</li>
                      <li>• Implemented data preprocessing pipelines using Python and Pandas</li>
                      <li>• Collaborated with cross-functional teams to deliver data-driven insights</li>
                      <li>• Created interactive dashboards using Power BI and Tableau</li>
                    </ul>
                  </div>

                  <div className="relative">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">TechCorp Solutions</h3>
                        <p className="text-purple-400 font-medium text-lg">DevOps Engineer Intern</p>
                      </div>
                      <span className="text-white/50 text-sm sm:text-base mt-2 sm:mt-0">Jan 2024 – May 2024 | Remote</span>
                    </div>
                    <ul className="text-white/70 space-y-2 leading-relaxed">
                      <li>• Automated deployment processes using Azure DevOps and GitHub Actions</li>
                      <li>• Managed containerized applications with Docker and Kubernetes</li>
                      <li>• Reduced deployment time by 40% through CI/CD pipeline optimization</li>
                      <li>• Monitored system performance using Azure Monitor and Application Insights</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Education */}
              <section id="education">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Education</h2>
                <div className="bg-white/5 border border-white/10 rounded-lg p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology in Computer Science</h3>
                  <p className="text-yellow-400 font-medium text-lg mb-2">XYZ University</p>
                  <span className="text-white/50 text-sm">2021 – 2025 | CGPA: 8.5/10</span>
                  <p className="text-white/70 mt-4 leading-relaxed">
                    Specialized in Data Science and Machine Learning. Relevant coursework: 
                    Algorithms, Database Systems, Machine Learning, Cloud Computing, Software Engineering.
                  </p>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Projects</h2>
                <div className="space-y-8">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center mb-4">
                      <img 
                        src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <span className="text-white/60 text-sm">Roshni Kumari</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">DevOps Project: Flask App Deployment on Azure</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Designed and deployed a Flask app on Azure using Docker, Terraform, and GitHub Actions, automating deployments and reducing manual effort by 80%.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Azure", "Docker", "Terraform", "CI/CD"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-green-400 hover:text-green-300 transition-colors text-sm">
                        Read case study →
                      </button>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                        View project ↗
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <div className="flex items-center mb-4">
                      <img 
                        src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
                        alt="Profile" 
                        className="w-8 h-8 rounded-full mr-3 object-cover"
                      />
                      <span className="text-white/60 text-sm">Roshni Kumari</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">YouTube Slide Extractor: AI-Powered Presentation Generator</h3>
                    <p className="text-white/70 mb-4 leading-relaxed">
                      Engineered an AI-powered Python application to automate the creation of editable PowerPoint presentations from YouTube videos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {["Python", "AI", "OpenCV", "Machine Learning"].map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <button className="text-green-400 hover:text-green-300 transition-colors text-sm">
                        Read case study →
                      </button>
                      <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                        View project ↗
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Latest from the blog */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Latest from the blog</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">How Machine Learning and DevOps Are Revolutionizing Data-Driven Decision Making</h3>
                    <p className="text-white/50 text-sm mb-3">March 15, 2025</p>
                    <span className="px-3 py-1 bg-blue-600/20 text-blue-400 border border-blue-500/30 rounded-full text-sm">Data Science</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                    <h3 className="text-xl font-semibold mb-3 leading-tight">The Role of AI in Modern DevOps: Automating the Future of Software Development</h3>
                    <p className="text-white/50 text-sm mb-3">February 20, 2025</p>
                    <span className="px-3 py-1 bg-purple-600/20 text-purple-400 border border-purple-500/30 rounded-full text-sm">DevOps</span>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section>
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Python', 'Azure', 'Machine Learning', 'Docker', 'Kubernetes', 'Git',
                    'SQL', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'
                  ].map((skill) => (
                    <div key={skill} className="bg-white/5 border border-white/10 rounded-lg p-3 text-center hover:bg-white/10 transition-colors">
                      {skill}
                    </div>
                  ))}
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
