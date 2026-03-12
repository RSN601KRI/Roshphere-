
import { useState } from 'react';
import Navigation from '../components/Navigation';
import { RefreshCw, ExternalLink, Play, Heart, MessageCircle, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
    content: "Just dropped a new design case study on my portfolio! Check it out 🔥✨ #design #portfolio",
    date: "Mar 10, 2026",
    likes: 124,
    retweets: 32,
    replies: 8,
  },
  {
    id: 2,
    content: "Working on something exciting with motion design and 3D elements. Stay tuned! 🎨",
    date: "Mar 8, 2026",
    likes: 89,
    retweets: 15,
    replies: 12,
  },
  {
    id: 3,
    content: "Design tip: White space is not empty space — it's breathing room for your content 💡",
    date: "Mar 5, 2026",
    likes: 256,
    retweets: 78,
    replies: 22,
  },
  {
    id: 4,
    content: "New blog post about creative workflows and how I stay productive as a designer ✍️",
    date: "Mar 2, 2026",
    likes: 167,
    retweets: 45,
    replies: 14,
  },
];

const instagramPosts = [
  {
    id: 1,
    image: "/lovable-uploads/3572fddc-1ea3-4971-92ba-10d08dff3e90.png",
    caption: "Behind the scenes of my latest design project ✨",
    likes: 342,
    comments: 28,
  },
  {
    id: 2,
    image: "/lovable-uploads/5b1b3909-9b75-44db-b8b5-0549d6f87766.png",
    caption: "Color palette exploration for a new brand identity 🎨",
    likes: 278,
    comments: 19,
  },
  {
    id: 3,
    image: "/lovable-uploads/64ff099d-2e66-4bce-8e61-cc65a89739c3.png",
    caption: "My creative workspace setup 🖥️",
    likes: 456,
    comments: 35,
  },
  {
    id: 4,
    image: "/lovable-uploads/90d655fd-3cad-4af7-a4b1-541f92e941ed.png",
    caption: "Typography experiments for the weekend 🔤",
    likes: 189,
    comments: 12,
  },
];

const youtubeVideos = [
  {
    id: 1,
    title: "My Creative Design Process — Full Walkthrough",
    thumbnail: "/lovable-uploads/d3d08176-56ca-47db-8313-423da8bdb189.png",
    views: "12K",
    duration: "15:32",
    date: "2 weeks ago",
  },
  {
    id: 2,
    title: "Top 5 Design Tools I Use Every Day",
    thumbnail: "/lovable-uploads/f2a2c04d-24c0-442f-a85a-47f640d709b4.png",
    views: "8.5K",
    duration: "10:15",
    date: "1 month ago",
  },
  {
    id: 3,
    title: "Building a Portfolio That Stands Out",
    thumbnail: "/lovable-uploads/be9b0b0d-b0bf-4ee8-957b-3f85034e6c60.png",
    views: "22K",
    duration: "20:45",
    date: "2 months ago",
  },
  {
    id: 4,
    title: "Design Trends 2026 — What's Coming Next",
    thumbnail: "/lovable-uploads/cba0a704-0e14-453b-9715-9a66119f3fd9.png",
    views: "15K",
    duration: "12:08",
    date: "3 months ago",
  },
];

const Creator = () => {
  const [syncing, setSyncing] = useState<string | null>(null);

  const handleSync = (platform: string) => {
    setSyncing(platform);
    setTimeout(() => setSyncing(null), 2000);
  };

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
            Latest content from my social channels — synced in real time.
          </p>
        </div>
      </section>

      {/* Twitter / X Section */}
      <section className="py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                <span className="text-lg font-bold">𝕏</span>
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
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSync('twitter')}
              className="border-white/10 text-white hover:bg-white/10 bg-transparent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${syncing === 'twitter' ? 'animate-spin' : ''}`} />
              {syncing === 'twitter' ? 'Syncing...' : 'Sync'}
            </Button>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {twitterPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://x.com/rsnkyx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-white/20 rounded-full" />
                      <div>
                        <p className="text-sm font-semibold">Roshni Kumari</p>
                        <p className="text-xs text-white/40">@rsnkyx · {post.date}</p>
                      </div>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed mb-4">{post.content}</p>
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
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center">
                <span className="text-lg">📷</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold">Instagram</h2>
                <a
                  href="https://www.instagram.com/in/ros.hnik9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @ros.hnik9 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSync('instagram')}
              className="border-white/10 text-white hover:bg-white/10 bg-transparent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${syncing === 'instagram' ? 'animate-spin' : ''}`} />
              {syncing === 'instagram' ? 'Syncing...' : 'Sync'}
            </Button>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {instagramPosts.map((post) => (
                <CarouselItem key={post.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.instagram.com/in/ros.hnik9"
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

      {/* YouTube Section */}
      <section className="py-12 pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                <Play className="w-5 h-5 fill-white text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">YouTube</h2>
                <a
                  href="https://www.youtube.com/@roshnikum_11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/40 text-sm hover:text-white/60 transition-colors flex items-center gap-1"
                >
                  @roshnikum_11 <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleSync('youtube')}
              className="border-white/10 text-white hover:bg-white/10 bg-transparent"
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${syncing === 'youtube' ? 'animate-spin' : ''}`} />
              {syncing === 'youtube' ? 'Syncing...' : 'Sync'}
            </Button>
          </div>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {youtubeVideos.map((video) => (
                <CarouselItem key={video.id} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <a
                    href="https://www.youtube.com/@roshnikum_11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 h-full"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity">
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
    </div>
  );
};

export default Creator;
