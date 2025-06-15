
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';

const Blog = () => {
  const blogPosts = [
    {
      id: "solana-mixer-platforms",
      title: "The Rise and Impact of Mixer Platforms in the Solana Ecosystem: A Comprehensive Analysis",
      date: "April 27, 2025",
      category: "Blockchain Research"
    },
    {
      id: "ml-devops-data-driven",
      title: "It's Not Your Imagination: AI is Speeding Up the Pace of Change",
      date: "May 31, 2025",
      category: "AI & Technology"
    },
    {
      id: "ai-modern-devops",
      title: "The Role of AI in Modern DevOps: Automating the Future of Software Development",
      date: "February 20, 2025",
      category: "DevOps"
    },
    {
      id: "digital-marketing-ai",
      title: "The Future of Digital Marketing: How AI and Data Analytics Are Transforming the Industry",
      date: "February 15, 2025",
      category: "Digital Marketing"
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
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              Writing about Data Science,
              <br />
              Machine Learning, and DevOps
            </h1>
          </div>

          {/* Blog Posts */}
          <div className="space-y-12">
            {blogPosts.map((post, index) => (
              <Link key={index} to={`/blog/${post.id}`} className="block">
                <article className="space-y-3 hover:bg-white/5 p-4 rounded-lg transition-all duration-300 cursor-pointer">
                  <h2 className="text-xl sm:text-2xl font-bold leading-tight hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-white/60 text-sm">{post.date}</p>
                  <div className="inline-block">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      post.category === 'Data Science' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      post.category === 'DevOps' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      post.category === 'AI & Technology' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
                      post.category === 'Blockchain Research' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                      'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                    }`}>
                      {post.category}
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Newsletter Section */}
          <div className="mt-24">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 backdrop-blur-sm border border-red-500/20 rounded-2xl p-8 text-center">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">
                Subscribe to Roshni's Newsletter
              </h2>
              <p className="text-sm text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed">
                A passionate computer science student specializing in Data Science, Machine Learning, and DevOps. Stay updated with my latest projects, insights, and tutorials on cutting-edge technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 px-4 py-3 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
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

export default Blog;
