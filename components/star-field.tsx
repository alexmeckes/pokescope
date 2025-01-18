import React, { useEffect, useState, useCallback } from 'react';

type Star = {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  animationDelay: number;
};

export const StarField: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const numStars = 100;

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2 + 1,
          opacity: Math.random() * 0.5 + 0.3,
          animationDelay: Math.random() * 3,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.01;
    const moveY = (clientY - window.innerHeight / 2) * 0.01;

    const stars = document.querySelectorAll('.star') as NodeListOf<HTMLElement>;
    stars.forEach((star) => {
      const speed = parseFloat(star.style.width) * 0.2;
      star.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div className="star-field">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.animationDelay}s`,
            '--initial-opacity': star.opacity,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}; 