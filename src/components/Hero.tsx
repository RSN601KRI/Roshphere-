
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-20 transition-transform duration-300"
        style={{
          backgroundImage: `
            linear-gradient(rgba(135,206,235,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(135,206,235,0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.1}px)`
        }}
      />
      
      {/* Sparkle Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 sm:mb-16">
          <div className="text-white/70 mb-4 sm:mb-0">
            <span className="inline-flex items-center text-sm sm:text-base">
              📍 Asia/Kolkata
            </span>
          </div>
          <div className="text-white/70 text-sm sm:text-base">
            {new Date().toLocaleTimeString('en-US', { 
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
              I'm <span className="text-white font-bold">Roshni Kumari</span>, a passionate <span className="text-blue-400 font-semibold">𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫</span>, 
              <span className="text-green-400 font-semibold"> 𝐂𝐥𝐨𝐮𝐝 𝐂𝐚𝐩𝐭𝐚𝐢𝐧</span> and <span className="text-purple-400 font-semibold">𝐀𝐈/𝐌𝐋 𝐒𝐜𝐡𝐨𝐥𝐚𝐫</span>.
            </p>
            <p>
              As an <span className="text-orange-400 font-semibold">AWS Cloud Captain '25</span>, <span className="text-yellow-400 font-semibold">3X OCFA Certified Developer</span>, 
              <span className="text-purple-400 font-semibold">MLSA</span>, and <span className="text-blue-400 font-semibold">AWS AI/ML Scholar</span>, 
              I regularly create content and host webinars to guide 5K+ monthly learners through the evolving landscape of tech. From cloud-native solutions to deep learning models, I build tools that solve real-world problems.
            </p>
            <p>
              I'm deeply passionate about <span className="text-orange-400 font-semibold">𝐜𝐨𝐦𝐦𝐮𝐧𝐢𝐭𝐢𝐞𝐬</span>, <span className="text-blue-400 font-semibold">𝐡𝐚𝐜𝐤𝐚𝐭𝐡𝐨𝐧𝐬</span> and 
              <span className="text-green-400 font-semibold"> 𝐬𝐭𝐨𝐫𝐲𝐭𝐞𝐥𝐥𝐢𝐧𝐠</span> through tech. If you're building something meaningful in AI, Web3, or Cloud — let's collaborate!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-3 hover:bg-white/15 transition-all duration-300">
            <img 
              src="/lovable-uploads/1af11ca9-78c5-4306-9957-f8b24a19aeb7.png" 
              alt="Profile" 
              className="w-6 h-6 sm:w-8 sm:h-8 rounded-full mr-3 object-cover"
            />
            <Link 
              to="/about"
              className="text-white font-medium hover:text-blue-400 transition-colors flex items-center text-sm sm:text-base"
            >
              About Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
          
          <button className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            <Calendar className="w-4 h-4 mr-2" />
            Schedule a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
