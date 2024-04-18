'use client';
import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return <>{children}</>;
};
