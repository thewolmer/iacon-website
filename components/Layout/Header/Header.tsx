'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="absolute left-0 top-0 z-50 h-11 w-full py-2">
      <nav className="flex w-full items-center justify-center space-x-8">
        <div>
          <Link href="/team">
            <Button variant={'ghost'} size={'lg'} className="text-lg">
              Team
            </Button>
          </Link>
          <Link href="/">
            <Button variant={'ghost'} size={'lg'} className="text-lg">
              Mission
            </Button>
          </Link>
        </div>
        <div>
          <div className="h-1 w-36 rounded-3xl bg-foreground/50"></div>
        </div>
        {pathname != '/' && (
          <>
            <div>
              <Image src={'/logo.png'} width={40} height={40} alt="logo"></Image>
            </div>
            <div>
              <div className="h-1 w-36 rounded-3xl bg-foreground/50"></div>
            </div>
          </>
        )}
        <div>
          <Link href="/">
            <Button variant={'ghost'} size={'lg'} className="text-lg">
              Roadmap
            </Button>
          </Link>
          <Link href="/">
            <Button variant={'ghost'} size={'lg'} className="text-lg">
              Projects
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};
