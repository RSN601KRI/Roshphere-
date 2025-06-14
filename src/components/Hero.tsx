
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
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
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-between mb-16">
          <div className="text-white/70">
            <span className="inline-flex items-center">
              📍 Asia/Kolkata
            </span>
          </div>
          <div className="text-white/70">
            {new Date().toLocaleTimeString('en-US', { 
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
        </div>

        <div className="mb-12 animate-fade-in">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Building Innovative
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Solutions with
            </span>
            <br />
            Data & Technology
          </h1>
          
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-white/80 leading-relaxed">
            <p>
              I'm <span className="text-white font-semibold">Roshni Kumari</span>, a <span className="text-blue-400">Microsoft Certified</span> professional and 
              <span className="text-purple-400"> β MLSA</span> with expertise in <span className="text-green-400">Data Science</span>, <span className="text-blue-400">Machine Learning</span>,
              and <span className="text-yellow-400">DevOps</span>. I specialize in building scalable data-driven
              solutions, automating workflows, and deploying machine
              learning models to solve real-world problems.
            </p>
            <p>
              With a strong foundation in <span className="text-orange-400">Python</span>, <span className="text-blue-400">Azure</span>, and <span className="text-green-400">CI/CD
              pipelines</span>, I'm passionate about leveraging technology to
              drive innovation and deliver measurable results. Let's
              collaborate to transform your ideas into impactful solutions!
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3">
            <img 
              src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" 
              alt="Profile" 
              className="w-8 h-8 rounded-full mr-3"
            />
            <Link 
              to="/about"
              className="text-white font-medium hover:text-blue-400 transition-colors flex items-center"
            >
              About Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full transition-all duration-300 hover:scale-105">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
