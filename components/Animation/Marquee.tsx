'use client';
import { HTMLMotionProps, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface MarqueeProps extends HTMLMotionProps<'div'> {
  text: string;
  direction: 'left' | 'right';
}

export const Marquee: React.FC<MarqueeProps> = (props) => {
  const { text, className, direction } = props;
  const [textWidth, setTextWidth] = useState<number>(0);
  const repeatTimes = 50;
  const repeatedText = Array(repeatTimes).fill(text).join(' ');

  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      setTextWidth(textRef.current.offsetWidth);
    }
  }, [textRef]);

  const tickerVariants = {
    animate: {
      x: direction === 'right' ? [0, -textWidth] : [-textWidth, 0],
      transition: {
        x: {
          duration: 550,
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
        },
      },
    },
  };

  return (
    <div className="flex w-full overflow-hidden whitespace-nowrap">
      <motion.div
        className={cn(className, 'inline-block text-3xl')}
        variants={tickerVariants}
        initial="animate"
        animate="animate"
        ref={textRef}
        {...props}
      >
        {repeatedText}
      </motion.div>
      <motion.div
        className={cn(className, 'inline-block text-3xl')}
        variants={tickerVariants}
        initial="animate"
        animate="animate"
        {...props}
      >
        {repeatedText}
      </motion.div>
    </div>
  );
};
