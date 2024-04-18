'use client';
import { motion, useAnimate, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Button } from '@/components/ui/button';

const NavLinks = [
  {
    label: '[1] Home',
    link: '/',
  },
  {
    label: '[2] About',
    link: '/about',
  },
  {
    label: '[3] Contact',
    link: '/contact',
  },
];

export const Header = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const startAnimation = async () => {
      await animate('#navlogo', { scale: 1, top: 0, y: 0 }, { duration: 0.8, ease: 'circInOut', delay: 0.7 });
      await animate('#Navbar', { opacity: 1 }, { duration: 0.2 });
    };
    startAnimation();
  }, []);
  return (
    <>
      <header ref={scope} className="">
        <motion.nav
          id="Navbar"
          initial={{ opacity: 0 }}
          className="absolute left-0 top-0 z-50 flex h-11 w-full flex-1 items-center justify-between px-10"
        >
          <div></div>
          <div className="space-x-2 ">
            {NavLinks.map((item, index) => (
              <Link key={index} href={item.link}>
                <Button size={'sm'} variant={'ghost'} className="font-extralight">
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        </motion.nav>
        <motion.div
          id="navlogo"
          className="absolute left-1/2 top-1/2 z-50 h-11 w-36 -translate-x-1/2 -translate-y-1/2 p-5"
          initial={{ scale: 2, top: '50vh', y: '-50%', x: '-50%' }}
        >
          <Image src="/images/full-logo.png" alt="logo" width={500} height={220} className="" />
        </motion.div>
      </header>
    </>
  );
};
