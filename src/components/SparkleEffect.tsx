
import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
}

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newSparkle: Sparkle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 8 + 4,
        opacity: 1
      };

      setSparkles(prev => [...prev, newSparkle]);

      // Remove sparkle after animation
      setTimeout(() => {
        setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
      }, 1000);
    };

    const handleScroll = () => {
      // Add sparkles on scroll
      if (Math.random() > 0.95) {
        const newSparkle: Sparkle = {
          id: Date.now(),
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 6 + 2,
          opacity: 0.7
        };

        setSparkles(prev => [...prev, newSparkle]);

        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
        }, 2000);
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
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="absolute bg-green-400 rounded-full animate-ping"
          style={{
            left: sparkle.x - sparkle.size / 2,
            top: sparkle.y - sparkle.size / 2,
            width: sparkle.size,
            height: sparkle.size,
            opacity: sparkle.opacity,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
