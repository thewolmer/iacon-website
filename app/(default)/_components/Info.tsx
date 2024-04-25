'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

import { Image } from '@/components/Image';

import Tagline from './Tagline';

export const Info = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start'],
  });

  const sm = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const md = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const lg = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="flex h-[150vh] w-full flex-col items-center justify-center gap-2 px-2">
      <Tagline />
      <p className="max-w-lg text-center text-secondary-foreground">
        In all we do, it&apos;s for culture, learning, profits, and yearning. Begin with a small step, which will lead
        to a larger outcome. Dare to take a risk !
      </p>
      <div ref={container} className="relative flex h-full w-full items-center justify-center">
        <motion.div style={{ y: sm }} className="absolute">
          <Image
            src="/images/crypto_new.jpeg"
            height={500}
            width={500}
            className="w-[50vw] drop-shadow-2xl md:w-[25vw]"
            alt="info-img"
          />
        </motion.div>
        <motion.div style={{ y: md }} className="absolute left-[13vw] top-[80vh] z-20 md:left-[30vw]">
          <Image
            src="/images/candlestick_new.png"
            height={500}
            width={500}
            className=" w-[30vw] drop-shadow-2xl md:w-[15vw]"
            alt="info-img"
          />
        </motion.div>
        <motion.div style={{ y: lg }} className="absolute right-[13vw] top-[60vh] z-20 md:right-[30vw]">
          <Image
            src="/images/money_eyes.jpeg"
            height={500}
            width={500}
            className=" w-[30vw] drop-shadow-2xl md:w-[14vw]"
            alt="info-img"
          />
        </motion.div>
      </div>
    </section>
  );
};
