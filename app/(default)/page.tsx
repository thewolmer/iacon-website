import Image from 'next/image';

import './_components/homepage.css';
import { Button } from '@/components/ui/button';

import Tagline from './_components/Tagline';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between">
      <section className="pattern-dark flex h-[70vh] w-full flex-col items-center justify-center gap-2 pt-16 text-8xl">
        <Image src={'/images/full-logo.png'} width={480} height={480} alt="logo" className="z-20"></Image>
        <div className="absolute top-52 z-0 bg-foreground px-14 py-10 opacity-40 blur-3xl"></div>
        <div className="flex flex-col space-y-4">
          <Tagline />
          <p className="max-w-screen-md px-10 text-center text-xl text-foreground/40 md:px-0">
            Our community is dedicated to exploring the endless possibilities of NFT technology and empowering artists
            and creators to showcase their unique talents to the world. Join us in shaping the future of the digital art
            world and become a part of the Alpha community today.
          </p>
          <div className="flex items-center justify-center">
            <Button variant={'secondary'}> Know More</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
