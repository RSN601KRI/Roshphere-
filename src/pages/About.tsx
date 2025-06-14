
import Navigation from '../components/Navigation';
import { Calendar, Github, Linkedin, Mail } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navigation />
      
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar */}
            <div className="lg:w-1/3">
              <div className="sticky top-32 space-y-6">
                <div className="flex items-center justify-between">
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face" 
                    alt="Roshni Kumari" 
                    className="w-32 h-32 rounded-full border-4 border-white/20"
                  />
                  <button className="flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-full transition-all duration-300">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule a call
                  </button>
                </div>

                <div className="space-y-4">
                  <nav className="space-y-2">
                    <a href="#introduction" className="block text-white/70 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-orange-500 pl-4">
                      Introduction
                    </a>
                    <a href="#experience" className="block text-white/70 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-orange-500 pl-4">
                      Professional Experience
                    </a>
                    <a href="#education" className="block text-white/70 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-orange-500 pl-4">
                      Education
                    </a>
                    <a href="#projects" className="block text-white/70 hover:text-white transition-colors py-2 border-l-2 border-transparent hover:border-orange-500 pl-4">
                      Projects
                    </a>
                  </nav>

                  <div className="flex items-center space-x-2 text-white/70">
                    <span className="inline-flex items-center">
                      🌍 Asia/Kolkata
                    </span>
                  </div>

                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">Hindi</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-2/3 space-y-12">
              {/* Header */}
              <div>
                <h1 className="text-5xl font-bold mb-4">Roshni Kumari</h1>
                <p className="text-xl text-white/70 mb-6">
                  Microsoft Certified | β MLSA | Data Science & DevOps Engineer
                </p>
                
                <div className="flex space-x-4 mb-8">
                  <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </button>
                  <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn
                  </button>
                  <button className="flex items-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors">
                    <Mail className="w-4 h-4 mr-2" />
                    Email
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                    LeetCode
                  </button>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  Roshni Kumari is a tech enthusiast and engineer with a passion for solving 
                  complex problems using Data Science, Machine Learning, and DevOps. 
                  With expertise in Microsoft Azure, Python, and cloud-native technologies, I 
                  bring creativity and precision to every project I undertake. Let's build 
                  something amazing together!
                </p>
              </div>

              {/* Professional Experience */}
              <section id="experience">
                <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
                
                <div className="space-y-8">
                  <div className="border-l-2 border-blue-500 pl-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">AlgoArtisans</h3>
                        <p className="text-green-400 font-medium">Data Science Intern</p>
                      </div>
                      <span className="text-white/60">June 2024 – Dec 2024 | Remote – Bhutan</span>
                    </div>
                    <ul className="text-white/80 space-y-2">
                      <li>• Developed machine learning models for predictive analytics, improving accuracy by 25%</li>
                      <li>• Implemented data preprocessing pipelines using Python and Pandas</li>
                      <li>• Collaborated with cross-functional teams to deliver data-driven insights</li>
                      <li>• Created interactive dashboards using Power BI and Tableau</li>
                    </ul>
                  </div>

                  <div className="border-l-2 border-purple-500 pl-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold">TechCorp Solutions</h3>
                        <p className="text-purple-400 font-medium">DevOps Engineer Intern</p>
                      </div>
                      <span className="text-white/60">Jan 2024 – May 2024 | Remote</span>
                    </div>
                    <ul className="text-white/80 space-y-2">
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
                <h2 className="text-3xl font-bold mb-8">Education</h2>
                <div className="border-l-2 border-yellow-500 pl-6">
                  <h3 className="text-2xl font-semibold">Bachelor of Technology in Computer Science</h3>
                  <p className="text-yellow-400 font-medium">XYZ University</p>
                  <span className="text-white/60">2021 – 2025 | CGPA: 8.5/10</span>
                  <p className="text-white/80 mt-2">
                    Specialized in Data Science and Machine Learning. Relevant coursework: 
                    Algorithms, Database Systems, Machine Learning, Cloud Computing, Software Engineering.
                  </p>
                </div>
              </section>

              {/* Skills */}
              <section>
                <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    'Python', 'Azure', 'Machine Learning', 'Docker', 'Kubernetes', 'Git',
                    'SQL', 'Power BI', 'Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow'
                  ].map((skill) => (
                    <div key={skill} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3 text-center">
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
