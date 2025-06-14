
import Navigation from '../components/Navigation';

const Blog = () => {
  const blogPosts = [
    {
      title: "How Machine Learning and DevOps Are Revolutionizing Data-Driven Decision Making",
      date: "March 15, 2025",
      category: "Data Science",
      excerpt: "Exploring the intersection of ML and DevOps practices to create more efficient data pipelines and automated decision-making systems.",
      readTime: "5 min read"
    },
    {
      title: "The Role of AI in Modern DevOps: Automating the Future of Software Development",
      date: "February 20, 2025",
      category: "DevOps",
      excerpt: "How artificial intelligence is transforming DevOps practices, from intelligent monitoring to automated deployment strategies.",
      readTime: "7 min read"
    },
    {
      title: "The Future of Digital Marketing: How AI and Data Analytics Are Transforming the Industry",
      date: "February 15, 2025",
      category: "Digital Marketing",
      excerpt: "Analyzing the impact of AI-driven analytics on modern marketing strategies and customer engagement techniques.",
      readTime: "6 min read"
    },
    {
      title: "Building Scalable Data Pipelines with Azure and Python",
      date: "January 28, 2025",
      category: "Data Science",
      excerpt: "A comprehensive guide to creating robust, scalable data processing pipelines using Microsoft Azure services and Python.",
      readTime: "8 min read"
    },
    {
      title: "Container Orchestration Best Practices for Machine Learning Workloads",
      date: "January 15, 2025",
      category: "DevOps",
      excerpt: "Best practices for deploying and managing ML models in containerized environments using Kubernetes and Docker.",
      readTime: "9 min read"
    },
    {
      title: "Predictive Analytics in Business Intelligence: A Practical Approach",
      date: "December 30, 2024",
      category: "Data Science",
      excerpt: "Real-world applications of predictive analytics in business decision-making and performance optimization.",
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Data Science", "DevOps", "Digital Marketing"];

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
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">
              Writing about Data Science,
              <br />
              Machine Learning, and DevOps
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Sharing insights, tutorials, and experiences from the world of technology and innovation
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    category === "All" 
                      ? 'bg-white text-black' 
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                    post.category === 'Data Science' ? 'bg-blue-500/20 text-blue-400' :
                    post.category === 'DevOps' ? 'bg-green-500/20 text-green-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold mb-3 leading-tight hover:text-blue-400 transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-white/70 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex justify-between items-center text-sm text-white/50">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
