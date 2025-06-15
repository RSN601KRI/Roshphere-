import Navigation from '../components/Navigation';

const Gallery = () => {
  const galleryItems = [
    {
      type: 'project',
      title: 'Web Development Project',
      subtitle: 'Modern web development with latest technologies',
      image: '/lovable-uploads/1515876d-049d-4ff7-bbbf-7296661a9c1d.png',
      color: 'bg-gradient-to-br from-blue-600 to-purple-700',
      size: 'large'
    },
    {
      type: 'project',
      title: 'Circuit Board Design',
      subtitle: 'Hardware and electronics engineering',
      image: '/lovable-uploads/cbc33d3c-5a4d-4292-9f93-d4173c06f41e.png',
      color: 'bg-gradient-to-br from-green-600 to-teal-700',
      size: 'medium'
    },
    {
      type: 'project',
      title: 'Programming Environment',
      subtitle: 'Development workspace and coding setup',
      image: '/lovable-uploads/cba0a704-0e14-453b-9715-9a66119f3fd9.png',
      color: 'bg-gradient-to-br from-orange-600 to-red-700',
      size: 'large'
    },
    {
      type: 'project',
      title: 'Laptop Development',
      subtitle: 'Mobile development and programming',
      image: '/lovable-uploads/bd415272-a62a-4d51-a3a8-ab140fc8f985.png',
      color: 'bg-gradient-to-br from-purple-600 to-pink-700',
      size: 'medium'
    },
    {
      type: 'project',
      title: 'AI & Robotics',
      subtitle: 'Artificial intelligence and robotics research',
      image: '/lovable-uploads/d657fe26-a7a6-4f7b-8a82-ac294aae001f.png',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
      size: 'large'
    },
    {
      type: 'project',
      title: 'Matrix Code',
      subtitle: 'Data visualization and matrix operations',
      image: '/lovable-uploads/16dbee45-0330-47c6-a329-227eeca8aadb.png',
      color: 'bg-gradient-to-br from-green-500 to-emerald-700',
      size: 'medium'
    },
    {
      type: 'project',
      title: 'Code Development',
      subtitle: 'Software development and programming',
      image: '/lovable-uploads/3f01d0fc-fcfd-4eb0-8fb5-8928b60afa61.png',
      color: 'bg-gradient-to-br from-blue-500 to-indigo-700',
      size: 'large'
    },
    {
      type: 'project',
      title: 'Colorful Code',
      subtitle: 'Web development with modern frameworks',
      image: '/lovable-uploads/0cc6efe1-72be-4afd-9e5e-2cc43930ce96.png',
      color: 'bg-gradient-to-br from-rainbow-500 to-rainbow-700',
      size: 'medium'
    },
    {
      type: 'project',
      title: 'Female Developer',
      subtitle: 'Women in technology and programming',
      image: '/lovable-uploads/5ee80885-e3e4-415e-9a80-5506c2407d26.png',
      color: 'bg-gradient-to-br from-pink-600 to-rose-700',
      size: 'large'
    },
    {
      type: 'project',
      title: 'MacBook Development',
      subtitle: 'iOS and macOS development environment',
      image: '/lovable-uploads/1f28a446-5698-4948-8d64-3b7988785417.png',
      color: 'bg-gradient-to-br from-gray-500 to-slate-700',
      size: 'medium'
    },
    {
      type: 'certificate',
      title: 'Create Image Captioning Models with Google Cloud',
      subtitle: 'Udacity Course Certificate in collaboration with Google Cloud',
      image: '/lovable-uploads/f2a2c04d-24c0-442f-a85a-47f640d709b4.png',
      brand: 'Udacity & Google Cloud',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      size: 'large'
    },
    {
      type: 'certificate',
      title: 'Introduction to Gen AI Studio with Google Cloud',
      subtitle: 'Udacity Course Certificate in collaboration with Google Cloud',
      image: '/lovable-uploads/1c94486a-afde-490b-bb3b-724e8a55d588.png',
      brand: 'Udacity & Google Cloud',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      size: 'large'
    },
    {
      type: 'certificate',
      title: 'Introduction to Large Language Models with Google Cloud',
      subtitle: 'Udacity Course Certificate in collaboration with Google Cloud',
      image: '/lovable-uploads/d26ef040-5555-4362-8307-ce3bbaf65eee.png',
      brand: 'Udacity & Google Cloud',
      color: 'bg-gradient-to-br from-blue-600 to-indigo-700',
      size: 'large'
    },
    {
      type: 'swag',
      title: 'Google Swag Bag',
      subtitle: 'Google branded gym bag and merchandise',
      image: '/lovable-uploads/f0728883-e715-4fee-9076-dde0054663c9.png',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      size: 'medium'
    },
    {
      type: 'event',
      title: 'PowerApps Mastery Challenge',
      subtitle: 'Microsoft Learn Student Ambassador event hosting',
      image: '/lovable-uploads/be9b0b0d-b0bf-4ee8-957b-3f85034e6c60.png',
      brand: 'Microsoft Learn',
      color: 'bg-gradient-to-br from-purple-600 to-pink-700',
      size: 'large'
    },
    {
      type: 'swag',
      title: 'Google Cloud Cap',
      subtitle: 'Google Cloud branded merchandise and swag',
      image: '/lovable-uploads/b643327a-bfeb-4489-aabe-06767a7e8947.png',
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      size: 'medium'
    },
    {
      type: 'certificate',
      title: 'Microsoft Learn Student Ambassador',
      subtitle: 'Certificate and swag kit from Microsoft Learn Student Ambassador program',
      image: '/lovable-uploads/5b1b3909-9b75-44db-b8b5-0549d6f87766.png',
      brand: 'Microsoft Learn',
      color: 'bg-gradient-to-br from-indigo-600 to-blue-700',
      size: 'large'
    },
    {
      type: 'swag',
      title: 'Microsoft Learn Swag Collection',
      subtitle: 'Complete Microsoft Learn Student Ambassador swag collection',
      image: '/lovable-uploads/3572fddc-1ea3-4971-92ba-10d08dff3e90.png',
      color: 'bg-gradient-to-br from-indigo-500 to-purple-600',
      size: 'large'
    },
    {
      type: 'event',
      title: 'DEXTERIX 4.0 Group Photo',
      subtitle: 'Team photo from DEXTERIX 4.0 hackathon event',
      image: '/lovable-uploads/d3d08176-56ca-47db-8313-423da8bdb189.png',
      brand: 'Galgotias University',
      color: 'bg-gradient-to-br from-gray-600 to-gray-800',
      size: 'large'
    },
    {
      type: 'certificate',
      title: 'DEXTERIX 4.0 Achievement Award',
      subtitle: 'Winner certificate from DEXTERIX 4.0 Hackathon',
      image: '/lovable-uploads/64ff099d-2e66-4bce-8e61-cc65a89739c3.png',
      brand: 'Galgotias University',
      color: 'bg-gradient-to-br from-yellow-600 to-orange-700',
      size: 'large'
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'h-80';
      case 'medium':
        return 'h-64';
      case 'small':
        return 'h-48';
      default:
        return 'h-64';
    }
  };

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
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A collection of achievements, moments, and milestones from my journey in technology
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryItems.map((item, index) => (
              <div 
                key={index}
                className="break-inside-avoid bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover rounded-t-3xl ${getSizeClasses(item.size)}`}
                  />
                  
                  {/* Overlay with gradient */}
                  <div className={`absolute inset-0 ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300 rounded-t-3xl`} />
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 rounded-t-3xl">
                    <h3 className="text-lg font-bold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm text-white/90 mb-2">{item.subtitle}</p>
                    {item.brand && (
                      <div className="text-xs text-white/75">{item.brand}</div>
                    )}
                    
                    {/* Type badge */}
                    <div className="mt-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        item.type === 'certificate' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        item.type === 'event' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                        item.type === 'swag' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-pink-500/20 text-pink-400 border border-pink-500/30'
                      }`}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-24">
            <div className="bg-gradient-to-r from-red-900/50 to-orange-900/50 backdrop-blur-sm border border-red-500/20 rounded-3xl p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Subscribe to Roshni's Newsletter</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                A passionate computer science student specializing in Data Science, 
                Machine Learning, and DevOps. Stay updated with my latest projects, 
                insights, and tutorials on cutting-edge technologies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Email"
                  className="flex-1 px-6 py-3 bg-black/30 border border-white/20 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/40"
                />
                <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright and Social Links */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row justify-between items-center">
              <p className="text-white/60 text-sm mb-4 sm:mb-0">© 2025 / Roshni Kumari</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
