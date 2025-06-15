
const Gallery = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      alt: "Woman working on laptop"
    },
    {
      src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      alt: "Gray laptop computer"
    },
    {
      src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      alt: "Circuit board"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      alt: "Java programming"
    },
    {
      src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      alt: "Woman using laptop"
    },
    {
      src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      alt: "MacBook with code"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Gallery
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            A visual journey through technology, innovation, and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
