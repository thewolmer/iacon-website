'use client';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

const words = ['Alpha', 'Community', 'NFT Space'];

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
    <p className="text-center text-3xl text-foreground/40 md:text-5xl">
      The only{' '}
      <span className={cn('transition-all duration-700', fadeIn ? 'text-foreground/40' : 'text-foreground/100')}>
        {words[currentWordIndex]}
      </span>{' '}
      you need.
    </p>
  );
}
