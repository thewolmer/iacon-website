'use client';
import Lenis from '@studio-freight/lenis';
import React, { useEffect } from 'react';

import { Toaster } from '@/components/ui/sonner';

interface Props {
  children: React.ReactNode;
}
export const Providers = ({ children }: Props) => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <>
      <Toaster position="top-center" />
      {children}
    </>
  );
};
