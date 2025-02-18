'use client';

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
      const numStars = 200;

      for (let i = 0; i < numStars; i++) {
        newStars.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          animationDelay: Math.random() * 4,
        });
      }

      setStars(newStars);
    };

    generateStars();
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const { clientX, clientY } = e;
    const moveX = (clientX - window.innerWidth / 2) * 0.02;
    const moveY = (clientY - window.innerHeight / 2) * 0.02;

    const stars = document.querySelectorAll('.star') as NodeListOf<HTMLElement>;
    stars.forEach((star) => {
      const speed = parseFloat(star.style.width) * 0.3;
      star.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
    });
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
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
            '--tw-initial-opacity': star.opacity,
          } as React.CSSProperties & { '--tw-initial-opacity': number }}
        />
      ))}
    </div>
  );
}; 