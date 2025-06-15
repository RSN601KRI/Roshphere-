
import { useEffect, useState } from 'react';

interface Glow {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const SparkleEffect = () => {
  const [glows, setGlows] = useState<Glow[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newGlow: Glow = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 100 + 50,
        opacity: 0.8
      };

      setGlows(prev => [...prev, newGlow]);

      // Remove glow after animation
      setTimeout(() => {
        setGlows(prev => prev.filter(g => g.id !== newGlow.id));
      }, 2000);
    };

    const handleScroll = () => {
      // Add glow on scroll
      if (Math.random() > 0.97) {
        const newGlow: Glow = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 80 + 40,
          opacity: 0.6
        };

        setGlows(prev => [...prev, newGlow]);

        setTimeout(() => {
          setGlows(prev => prev.filter(g => g.id !== newGlow.id));
        }, 3000);
      }
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {glows.map(glow => (
        <div
          key={glow.id}
          className="absolute rounded-full animate-ping"
          style={{
            left: glow.x - glow.size / 2,
            top: glow.y - glow.size / 2,
            width: glow.size,
            height: glow.size,
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 50%, transparent 100%)',
            opacity: glow.opacity,
            animationDuration: '2s',
            filter: 'blur(1px)'
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
