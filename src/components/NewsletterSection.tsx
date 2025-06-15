
import { useState } from 'react';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      {/* Grid Pattern Background with navy blue theme */}
      <div 
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30,58,138,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30,58,138,0.6) 1px, transparent 1px)
          `,
          backgroundSize: '10px 10px'
        }}
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="bg-gradient-to-br from-gray-800/50 via-gray-900/50 to-black/50 backdrop-blur-lg border border-white/10 rounded-3xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Smarter Tech, Bolder Futures
          </h2>
          <p className="text-base sm:text-lg text-white/70 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Dive into the world of AI and tech with insights that simplify the complex. Explore how smarter technologies are shaping bold futures—and what it means for you.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
              className="flex-1 px-4 sm:px-6 py-3 sm:py-4 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      {/* Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 border-t border-white/10">
          <p className="text-white/50 text-sm mb-3 sm:mb-0">© 2025 Roshni Kumari</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              GitHub
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              LinkedIn
            </a>
            <a href="#" className="text-white/50 hover:text-white/80 transition-colors text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
