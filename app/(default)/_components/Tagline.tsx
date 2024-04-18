'use client';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const words = ['Transparency', 'Authenticity', 'Innovation'];

export default function Tagline() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setFadeIn(true);
      }, 500);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-center font-playfair text-5xl font-extrabold text-foreground/40  md:text-6xl ">
      <span className={cn('transition-all duration-700', fadeIn ? 'text-foreground/40' : 'text-foreground/100')}>
        {words[currentWordIndex]}
      </span>{' '}
    </h2>
  );
}
