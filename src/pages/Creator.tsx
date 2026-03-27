
import Navigation from '../components/Navigation';
import { ExternalLink, Play, Heart, MessageCircle, Share2, BookOpen } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const twitterPosts = [
  {
    id: 1,
    content: "Wrapped 2025:\n> upgrade my content creation\n> attend 6+ events & talk with real OG's @Google @gdgcloudnd @Atlassian\n> featured on @MLHacks as Top fellow hacker\n> got first collab @GitHubEducation (5.5k+ views)\n> earned & gave gift to my family",
    date: "Dec 31, 2024",
    likes: 89,
    retweets: 15,
    replies: 12,
    url: "https://x.com/rsnkyx/status/1874009498498584886",
  },
  {
    id: 2,
    content: "Most people think Nvidia is winning because of power. They're wrong. They're winning because of Velocity. By acquiring Groq, Nvidia is solving the biggest problem in AI: Latency. 🚀 #Nvidia #GroqAI #TechSimplified",
    date: "Recent",
    likes: 124,
    retweets: 32,
    replies: 8,
    url: "https://x.com/rsnkyx",
  },
  {
    id: 3,
    content: "The future isn't just 'Smart' — it's Fast. Save this case study if you're building for the real-time era. #casestudy #series",
    date: "Recent",
    likes: 89,
    retweets: 15,
    replies: 12,
    url: "https://x.com/rsnkyx",
  },
  {
    id: 4,
    content: "Complexity is a tax on your growth. Whether it's a global chip architecture or your personal No-Code workflow, the goal is the same: Zero-latency execution. 💡",
    date: "Recent",
    likes: 256,
    retweets: 78,
    replies: 22,
    url: "https://x.com/rsnkyx",
  },
];

const instagramPosts = [
  {
    id: 1,
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*Q3cNsGHbrspwHRYIFC383Q.jpeg",
    caption: "The Agentic AI Inflection Point 🤖 #AI #AgenticAI",
    likes: 342,
    comments: 28,
  },
  {
    id: 2,
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*_SPGQkwyCX2salLO9ytZeQ.png",
    caption: "Vibe Coding Revolution 📊 #VibeCoding #Startups",
    likes: 278,
    comments: 19,
  },
  {
    id: 3,
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*sA4ldrp-xA7gFeU97thsxQ.jpeg",
    caption: "Built in the Cloud, Landed in Las Vegas ☁️ #AWS #CloudComputing",
    likes: 456,
    comments: 35,
  },
  {
    id: 4,
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*JIA4gTGSbawfJCRNXOYnNQ.png",
    caption: "How This Startup Is Building a 10,000-Year AI 🧠 #AI #Startups",
    likes: 189,
    comments: 12,
  },
];

const youtubeVideos = [
  {
    id: 1,
    title: "Navida | Government Scheme Navigator",
    thumbnail: "https://i.ytimg.com/vi/lJmOGQUTWe4/hqdefault.jpg",
    views: "11",
    duration: "2:34",
    date: "1 month ago",
    url: "https://www.youtube.com/watch?v=lJmOGQUTWe4",
  },
  {
    id: 2,
    title: "DeMemo: Decentralized Memory Layer v1",
    thumbnail: "https://i.ytimg.com/vi/eMosyVeZFuo/hqdefault.jpg",
    views: "7",
    duration: "6:24",
    date: "1 month ago",
    url: "https://www.youtube.com/watch?v=eMosyVeZFuo",
  },
  {
    id: 3,
    title: "A slice of life | Homemade Pizza 🍕",
    thumbnail: "https://i.ytimg.com/vi/BHriP1bwd8g/hqdefault.jpg",
    views: "4",
    duration: "0:48",
    date: "1 month ago",
    url: "https://www.youtube.com/watch?v=BHriP1bwd8g",
  },
  {
    id: 4,
    title: "Lendora: Selling Loans Smarter with Agentic AI",
    thumbnail: "https://i.ytimg.com/vi/Ha8x5yFnFNo/hqdefault.jpg",
    views: "32",
    duration: "2:09",
    date: "2 months ago",
    url: "https://www.youtube.com/watch?v=Ha8x5yFnFNo",
  },
  {
    id: 5,
    title: "FinSight – Financial Deep Research Agent",
    thumbnail: "https://i.ytimg.com/vi/kxQXfIy5C9s/hqdefault.jpg",
    views: "12",
    duration: "6:31",
    date: "2 months ago",
    url: "https://www.youtube.com/watch?v=kxQXfIy5C9s",
  },
  {
    id: 6,
    title: "Energysense | Smart Energy Monitoring | Real-Time Insights",
    thumbnail: "https://i.ytimg.com/vi/HVEPQnUYS9M/hqdefault.jpg",
    views: "11",
    duration: "4:54",
    date: "3 months ago",
    url: "https://www.youtube.com/watch?v=HVEPQnUYS9M",
  },
];

const mediumArticles = [
  {
    id: 1,
    title: "The Agentic AI Inflection Point: Scaling Beyond Pilots for Tangible Business Value",
    subtitle: "Your Competitors Aren't Waiting: Is Your Enterprise Strategy for Agentic AI Set for 2026?",
    date: "Mar 27, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*Q3cNsGHbrspwHRYIFC383Q.jpeg",
    url: "https://medium.com/@roshni_k06/the-agentic-ai-inflection-point-scaling-beyond-pilots-for-tangible-business-value-329dba134545",
  },
  {
    id: 2,
    title: "The Vibe Coding Revolution: Market Analysis, Viral Startups & What You Must Build in 2026📊",
    subtitle: "A structured intelligence briefing for founders, developers, and growth operators navigating the AI-native development era.",
    date: "Mar 23, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*_SPGQkwyCX2salLO9ytZeQ.png",
    url: "https://medium.com/@roshni_k06/the-vibe-coding-revolution-market-analysis-viral-startups-what-you-must-build-in-2026-e5815ac32ebe",
    claps: 4,
  },
  {
    id: 3,
    title: "Built in the Cloud, Landed in Las Vegas: My AWS Builder Journey to the Global Stage🌍☁️",
    subtitle: "A few years ago, cloud computing was just another buzzword...",
    date: "Mar 20, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*sA4ldrp-xA7gFeU97thsxQ.jpeg",
    url: "https://medium.com/@roshni_k06/built-in-the-cloud-landed-in-las-vegas-my-aws-builder-journey-to-the-global-stage-%EF%B8%8F-9b38c2adbd63",
  },
  {
    id: 4,
    title: "How This Startup Is Building a 10,000‑Year AI",
    subtitle: "An unnamed Silicon Valley team claims to be creating an AI system designed to operate for 10 millennia...",
    date: "Mar 15, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*JIA4gTGSbawfJCRNXOYnNQ.png",
    url: "https://medium.com/@roshni_k06/how-this-startup-is-building-a-10-000-year-ai-d0854d6e398f",
  },
  {
    id: 5,
    title: "Rules of AI Monetization: Stop Selling Access, Start Selling Outcomes",
    subtitle: "In the age of AI, your charge metric isn't just a line on an invoice — it's your company's core strategic statement.",
    date: "Feb 12, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*WcvNHoGhuA_wcc19sJqv3A.png",
    url: "https://medium.com/@roshni_k06/rules-of-ai-monetization-stop-selling-access-start-selling-outcomes-b96eada027c9",
  },
  {
    id: 6,
    title: "Vectorized Thinking 101: A Practical Guide to Getting Started with Vector Search in Elasticsearch",
    subtitle: "Traditional keyword search finds words. Vector search finds meaning.",
    date: "Feb 7, 2026",
    image: "https://miro.medium.com/v2/resize:fill:320:214/1*SgoThk5iOc9CwMF6DFpoYQ.png",
    url: "https://medium.com/@roshni_k06/vectorized-thinking-101-a-practical-guide-to-getting-started-with-vector-search-in-elasticsearch-d4738a6e1512",
  },
];

// SVG logos
const XLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
    <defs>
      <linearGradient id="ig-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FED373" />
        <stop offset="25%" stopColor="#F15245" />
        <stop offset="50%" stopColor="#D92E7F" />
        <stop offset="75%" stopColor="#9B36B7" />
        <stop offset="100%" stopColor="#515ECF" />
      </linearGradient>
    </defs>
    <path fill="url(#ig-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const YouTubeLogo = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" aria-hidden="true">
    <path fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
    <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const MediumLogo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
  </svg>
);

const Creator = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Header */}
      <section className="pt-28 pb-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
            Creator Space
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Latest content from my social channels.
          </p>
        </div>
      </section>

      {/* Twitter / X Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <XLogo />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Twitter / X</h2>
                <a
                  href="https://x.com/rsnkyx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @rsnkyx <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {twitterPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold">Roshni Kumari</p>
                        <p className="text-xs text-white/40">@rsnkyx</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-4 whitespace-pre-line">{post.content}</p>
                    <p className="text-white/30 text-xs mb-3">{post.date}</p>
                    <div className="flex items-center gap-6 text-white/30 text-xs">
                      <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.replies}</span>
                      <span className="flex items-center gap-1"><Share2 className="w-3.5 h-3.5" /> {post.retweets}</span>
                      <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {post.likes}</span>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>

      {/* Instagram Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                <InstagramLogo />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Instagram</h2>
                <a
                  href="https://www.instagram.com/ros.hnik9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @ros.hnik9 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.instagram.com/ros.hnik9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.caption}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-white/70 text-sm mb-3">{post.caption}</p>
                      <div className="flex items-center gap-4 text-white/30 text-xs">
                        <span className="flex items-center gap-1"><Heart className="w-3.5 h-3.5" /> {post.likes}</span>
                        <span className="flex items-center gap-1"><MessageCircle className="w-3.5 h-3.5" /> {post.comments}</span>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <YouTubeLogo />
              </div>
              <div>
                <h2 className="text-2xl font-bold">YouTube Videos</h2>
                <a
                  href="https://www.youtube.com/@roshnikum_11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @roshnikum_11 · Rock & Byte Talks <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="aspect-video overflow-hidden relative group">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                          <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="text-white font-medium text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <p className="text-white/40 text-xs">{video.views} views · {video.date}</p>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>

      {/* Medium Articles Section */}
      <section className="py-12 pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <MediumLogo />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Medium Articles</h2>
                <a
                  href="https://medium.com/@roshni_k06"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @roshni_k06 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {mediumArticles.map((article) => (
                <CarouselItem key={article.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-semibold text-sm mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-white/50 text-xs mb-3 line-clamp-2">{article.subtitle}</p>
                      <div className="flex items-center justify-between text-white/30 text-xs">
                        <span>{article.date}</span>
                        <span className="flex items-center gap-1">
                          <BookOpen className="w-3 h-3" /> Read
                        </span>
                      </div>
                    </div>
                  </a>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
            <CarouselNext className="hidden md:flex -right-4 bg-white/10 border-white/10 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </section>
    </div>
  );
};

export default Creator;
