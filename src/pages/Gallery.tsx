
import Navigation from '../components/Navigation';

const Gallery = () => {
  const galleryItems = [
    {
      type: 'certificate',
      title: '2024 Challenge Completed',
      subtitle: 'NEXT GENERATION TECH BOOSTER SCHOLARSHIP',
      image: 'https://images.unsplash.com/photo-1606281231600-b4c0c1f9b3e7?w=400&h=500&fit=crop',
      brand: 'Udacity',
      color: 'bg-gradient-to-br from-blue-600 to-purple-700'
    },
    {
      type: 'photo',
      title: 'Team Collaboration',
      subtitle: 'Working with amazing colleagues',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
      color: 'bg-gradient-to-br from-gray-800 to-gray-900'
    },
    {
      type: 'certificate',
      title: 'AI Associate Certified',
      subtitle: 'Salesforce Certification',
      image: 'https://images.unsplash.com/photo-1606281230584-7bb0a4c0a0d4?w=400&h=500&fit=crop',
      brand: 'Salesforce',
      date: 'February 09, 2025',
      color: 'bg-gradient-to-br from-blue-400 to-cyan-500'
    },
    {
      type: 'award',
      title: 'Microsoft Student Ambassador',
      subtitle: 'Recognition for community contributions',
      image: 'https://images.unsplash.com/photo-1635478071622-ea4fb4b9e4b0?w=400&h=400&fit=crop',
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    },
    {
      type: 'event',
      title: 'Kerala Community Day Jalandhar 2023',
      subtitle: '3 Crore+ Developers | 1,60,000+ Community',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop',
      color: 'bg-gradient-to-br from-green-600 to-teal-700'
    },
    {
      type: 'product',
      title: 'Innovation Awards',
      subtitle: 'Recognition for outstanding projects',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      color: 'bg-gradient-to-br from-purple-600 to-pink-700'
    },
    {
      type: 'hackathon',
      title: 'Hackathon Winner',
      subtitle: 'First place in AI/ML category',
      image: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=400&h=300&fit=crop',
      color: 'bg-gradient-to-br from-red-600 to-pink-600'
    },
    {
      type: 'conference',
      title: 'Tech Conference Speaker',
      subtitle: 'Presenting on Data Science trends',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=300&fit=crop',
      color: 'bg-gradient-to-br from-indigo-600 to-purple-700'
    },
    {
      type: 'workshop',
      title: 'ML Workshop Facilitator',
      subtitle: 'Teaching machine learning concepts',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop',
      color: 'bg-gradient-to-br from-teal-600 to-blue-700'
    }
  ];

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
                className="break-inside-avoid bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div className={`${item.color} p-6 relative overflow-hidden`}>
                  {item.type === 'certificate' && (
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🏆</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                      {item.brand && (
                        <div className="mt-4 text-xs opacity-75">{item.brand}</div>
                      )}
                      {item.date && (
                        <div className="mt-2 text-xs opacity-75">{item.date}</div>
                      )}
                    </div>
                  )}
                  
                  {item.type !== 'certificate' && (
                    <>
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                      <p className="text-sm opacity-90">{item.subtitle}</p>
                    </>
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

          {/* Footer */}
          <footer className="mt-16 text-center text-white/60">
            <p>© 2025 / Roshni Kumari</p>
            <div className="flex justify-center space-x-6 mt-4">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Email</a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
