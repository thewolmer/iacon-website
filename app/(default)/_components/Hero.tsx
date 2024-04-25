'use client';
import { motion, useAnimate } from 'framer-motion';
import React, { useEffect } from 'react';

import { Marquee } from '@/components/Animation';
import { Link } from '@/components/Link';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = async () => {
      await animate(scope.current, { opacity: 1 }, { duration: 0.3, delay: 1.5 });
      await animate('#head-text', { opacity: 1 }, { duration: 0.3 });
      await animate('#hero-description', { opacity: 1 }, { duration: 0.3 });
      await animate('#marquee', { opacity: 1 }, { duration: 0.3 });
    };
    startAnimation();
  }, []);
  return (
    <motion.section
      ref={scope}
      initial={{ opacity: 0 }}
      id="hero"
      className="pattern-dark relative flex min-h-screen  w-full flex-col items-center justify-center gap-40 pt-32"
    >
      <div className="flex max-w-screen-md flex-col items-center justify-center space-y-4 px-10 md:px-0">
        <motion.h1 id="head-text" initial={{ opacity: 0 }} className="text-center text-4xl font-extrabold md:text-7xl">
          Learning, Investing <span className="font-playfair"> & </span> <br />
          Growing Together
        </motion.h1>
        <motion.div
          id="hero-description"
          initial={{ opacity: 0 }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <p className="text-center text-xl text-foreground/40 ">
            Join us to learn, improve, and succeed. Embrace failure as a stepping stone to greater victories. Fill out
            the form to join our community.
          </p>
          <Link href={process.env.NEXT_PUBLIC_JOIN_FORM}>
            <Button className="rounded-lg"> Join Now</Button>
          </Link>
        </motion.div>
      </div>
      <motion.section initial={{ opacity: 0 }} id="marquee" className="h-full w-full overflow-hidden">
        <Marquee
          direction="right"
          text={'Trade ✦ Learn ✦ Earn ✦ Grow ✦'}
          className="text-5xl font-extrabold uppercase text-primary-foreground/50 md:text-8xl"
        />
      </motion.section>
    </motion.section>
  );
};
