
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Grid Pattern Background with navy blue theme */}
      <div 
        className="absolute inset-0 opacity-25 transition-transform duration-300"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16 px-2 sm:px-0">
          <div className="text-white/70 mb-4 sm:mb-0">
            <span className="inline-flex items-center text-sm sm:text-base">
              📍 Asia/Kolkata
            </span>
          </div>
          <div className="text-white/70 text-sm sm:text-base">
            {currentTime.toLocaleTimeString('en-US', { 
              hour12: false,
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })}
          </div>
        </div>

        <div className="mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
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
              Hi, I'm <span className="text-white font-bold">Roshni Kumari</span> — a <span className="text-blue-400 font-semibold">Microsoft Certified Professional</span>, 
              <span className="text-green-400 font-semibold"> AWS Cloud Captain '25</span> and <span className="text-purple-400 font-semibold">AI/ML Scholar</span> with expertise in Data Science, DevOps and Cloud Computing.
            </p>
            <p>
              I build scalable, data-driven solutions and deploy intelligent models to solve real-world problems using Python, Azure, AWS and CI/CD. As a <span className="text-yellow-400 font-semibold">3X OCFA Certified Developer</span> and 
              <span className="text-purple-400 font-semibold"> β MLSA</span>, I mentor 5K+ monthly learners through webinars and content on AI, Web3 and cloud-native tech.
            </p>
            <p>
              Passionate about <span className="text-orange-400 font-semibold">communities</span>, <span className="text-blue-400 font-semibold">hackathons</span> and 
              <span className="text-green-400 font-semibold"> storytelling through tech</span> — I'm always looking to collaborate on impactful, innovation-driven projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-3 hover:bg-white/15 transition-all duration-300">
            <img 
              src="/lovable-uploads/3c1284a7-715c-4c59-9fb6-bfdb843a36fc.png" 
              alt="Roshni Kumari Profile" 
              className="w-6 h-6 rounded-full mr-3 object-cover"
            />
            <Link 
              to="/about"
              className="text-white font-medium hover:text-blue-400 transition-colors flex items-center text-sm"
            >
              About Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
