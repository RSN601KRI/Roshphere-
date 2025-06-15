
import Navigation from '../components/Navigation';

const Blog = () => {
  const blogPosts = [
    {
      title: "How Machine Learning and DevOps Are Revolutionizing Data-Driven Decision Making",
      date: "March 15, 2025",
      category: "Data Science"
    },
    {
      title: "The Role of AI in Modern DevOps: Automating the Future of Software Development",
      date: "February 20, 2025",
      category: "DevOps"
    },
    {
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
              <article key={index} className="space-y-3">
                <h2 className="text-xl sm:text-2xl font-bold leading-tight">
                  {post.title}
                </h2>
                <p className="text-white/60 text-sm">{post.date}</p>
                <div className="inline-block">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    post.category === 'Data Science' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    post.category === 'DevOps' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    'bg-purple-500/20 text-purple-400 border border-purple-500/30'
                  }`}>
                    {post.category}
                  </span>
                </div>
              </article>
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
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
