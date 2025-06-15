
import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  delay: number;
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    // Create initial sparkles on page load/refresh
    const createInitialSparkles = () => {
      const initialSparkles: Sparkle[] = [];
      for (let i = 0; i < 8; i++) {
        initialSparkles.push({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 60 + 30,
          opacity: Math.random() * 0.6 + 0.4,
          delay: i * 200
        });
      }
      setSparkles(initialSparkles);

      // Remove initial sparkles after animation
      setTimeout(() => {
        setSparkles([]);
      }, 3000);
    };

    // Create sparkles on page load
    createInitialSparkles();

    const handleScroll = () => {
      // Add sparkle on scroll with reduced frequency
      if (Math.random() > 0.95) {
        const newSparkle: Sparkle = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 50 + 25,
          opacity: Math.random() * 0.5 + 0.3,
          delay: 0
        };

        setSparkles(prev => [...prev, newSparkle]);

        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 2000);
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, transparent 100%)',
            opacity: sparkle.opacity,
            animationDuration: '2s',
            animationDelay: `${sparkle.delay}ms`,
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
