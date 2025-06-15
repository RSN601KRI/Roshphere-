const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/1515876d-049d-4ff7-bbbf-7296661a9c1d.png",
      alt: "Web Development Project"
    },
    {
      src: "/lovable-uploads/cbc33d3c-5a4d-4292-9f93-d4173c06f41e.png",
      alt: "Circuit Board Design"
    },
    {
      src: "/lovable-uploads/f2a2c04d-24c0-442f-a85a-47f640d709b4.png",
      alt: "Google Cloud Certificate - Image Captioning Models"
    },
    {
      src: "/lovable-uploads/5b1b3909-9b75-44db-b8b5-0549d6f87766.png",
      alt: "Microsoft Learn Student Ambassador Certificate"
    },
    {
      src: "/lovable-uploads/97fa3b22-669b-40ad-9fe3-008640fd000d.png",
      alt: "DevFest Delhi 2023 Speaking"
    },
    {
      src: "/lovable-uploads/d6cf12bf-b70e-4360-acef-875ef9a3f8fa.png",
      alt: "LinkedIn Marketing Labs Certificate"
    }
  ];

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-black via-gray-900 to-black relative">
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
