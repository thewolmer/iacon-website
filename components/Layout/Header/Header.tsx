'use client';

import { motion, useAnimate } from 'framer-motion';
import React, { useEffect } from 'react';

import { ContactForm } from '@/components/Forms/ContactForm';
import { Image } from '@/components/Image';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const Header = () => {
  const [scope, animate] = useAnimate();
  const [open, setOpen] = React.useState(false);
  const { isDesktop } = useMediaQuery();

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
          className="absolute left-0 top-0 z-50 flex h-20 w-full flex-1 items-center justify-between px-5 md:h-11"
        >
          <div></div>
          <div className="space-x-2">
            {isDesktop ? (
              <div>
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" size={'sm'}>
                      Contact
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Contact Us</DialogTitle>
                    </DialogHeader>
                    <ContactForm setOpen={setOpen} />
                  </DialogContent>
                </Dialog>
              </div>
            ) : (
              <div>
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger asChild>
                    <Button variant="secondary" size={'sm'}>
                      Contact
                    </Button>
                  </DrawerTrigger>
                  <DrawerContent className="px-4">
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Contact Us</DrawerTitle>
                    </DrawerHeader>
                    <ContactForm setOpen={setOpen} />
                    <DrawerFooter className="pt-2">
                      <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </div>
            )}
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
