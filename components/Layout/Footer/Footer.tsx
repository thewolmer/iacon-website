import { Twitter } from 'lucide-react';
import React from 'react';

import { Link } from '@/components/Link';
import { siteConfig } from '@/config/site';

export const Footer = () => (
  <footer>
    <div className="flex h-[10vh] items-center justify-center">
      <Link href={siteConfig.links.twitter}>
        <div className="rounded-full p-3 transition-all duration-100 hover:bg-primary/30">
          <Twitter />
        </div>
      </Link>
    </div>
    <div className="mb-2 flex flex-col items-center justify-center p-2 ">
      <p className="font-mono text-lg"> &copy; {new Date().getFullYear()} Iacon Labs</p>
      <p className="  text-sm font-extralight opacity-70">
        Website by -{' '}
        <Link className="underline underline-offset-4" href="https://wolmer.me">
          wolmer.me
        </Link>
      </p>
    </div>
  </footer>
);
