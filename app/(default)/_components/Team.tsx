'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Twitter } from 'lucide-react';
import React, { useRef } from 'react';

import { Image } from '@/components/Image';
import { Link } from '@/components/Link';

const TeamMembers = [
  {
    name: 'Breeze',
    role: 'Founder',
    img: '/images/team/breeze.gif',
    twitter: 'https://twitter.com/0xbreeze_eth',
  },
  {
    name: 'Chaitanya',
    role: 'Administrator',
    img: '/images/team/chaitanya.png',
    twitter: 'https://twitter.com/Chaitanyajeet06',
  },
  {
    name: 'Dracula',
    role: 'Manager',
    img: '/images/team/dracula.png',
    twitter: 'https://twitter.com/NFTDracu',
  },
  {
    name: 'Wolmer',
    role: 'Tech Lead',
    img: '/images/team/wolmer.png',
    twitter: 'https://twitter.com/thewolmer',
  },
  {
    name: 'Tussu',
    role: 'Chief Analyst',
    img: '/images/team/tussu.png',
    twitter: 'https://twitter.com/GakhilTushar',
  },
  {
    name: 'Jade',
    role: 'Chief Analyst',
    img: '/images/team/jade.png',
    twitter: 'https://twitter.com/0xjaderx',
  },
  {
    name: 'Jasn',
    role: 'Editor',
    img: '/images/team/ping.png',
    twitter: 'https://twitter.com/jatinbtw',
  },
  {
    name: 'Oneu',
    role: 'Moderator',
    img: '/images/team/oneu.jpg',
    twitter: '',
  },
  {
    name: 'Trash NFT',
    role: 'Collab Lead',
    img: '/images/team/trash.jpg',
    twitter: 'https://twitter.com/TrashNFT1',
  },
  {
    name: 'Aditya',
    role: 'Collab Lead',
    img: '/images/team/aditya.png',
    twitter: 'https://twitter.com/adityaeth',
  },
  {
    name: 'Young',
    role: 'Collab Manager',
    img: '/images/team/young.jpg',
    twitter: 'https://twitter.com/Danijel_Br',
  },
];

export const Team = () => {
  const container = useRef<HTMLTableSectionElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-300%']);
  const TeamDescripText =
    'Our team comprises Web 3 veterans having over three years of extensive experience in both trading and technology.The core team of IaconLabs has collectively worked on more than 200 projects';

  return (
    <>
      <section ref={container} className="relative hidden h-[500vh] w-full overflow-clip md:block ">
        <motion.div style={{ x }} className="sticky top-0 flex h-screen w-full items-center gap-10 ">
          <div className="flex h-full min-w-[40vw] flex-1 flex-col items-center justify-center p-2 text-center">
            <h3 className="font-playfair text-6xl font-extrabold">Team</h3>
            <p>{TeamDescripText}</p>
          </div>

          {TeamMembers.map((member, i) => (
            <div key={i} className="group relative mr-4 flex h-[60vh] min-w-[50vh] rounded bg-card p-5  shadow-xl">
              <div className="z-10 flex h-full w-full flex-col items-center overflow-hidden">
                <div className="relative mb-4 aspect-square w-40 bg-card">
                  <Image
                    src={member.img}
                    fill
                    alt={member.name}
                    className="rounded-full grayscale group-hover:grayscale-0 "
                  ></Image>
                </div>
                <p className="text-3xl font-extrabold uppercase text-muted-foreground">{member.name}</p>
                <p className="text-xl font-semibold  text-secondary-foreground">{member.role}</p>
                <Link href={member.twitter}>
                  <div className="rounded-full p-3 transition-all duration-100 hover:bg-primary/30">
                    <Twitter />
                  </div>
                </Link>
                {/* <div className=" h-20 max-w-[90%] text-ellipsis text-center font-inter text-xs opacity-60">
                <p className="h-full">{member.desc}</p>
              </div> */}
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      <section className="flex  flex-col items-center justify-center md:hidden ">
        <div className="flex h-full flex-1 flex-col items-center justify-center p-2 text-center">
          <h3 className="font-playfair text-6xl font-extrabold">Team</h3>
          <p>{TeamDescripText}</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center gap-2 p-2">
          {TeamMembers.map((member, i) => (
            <div key={i} className="group relative  flex  rounded bg-card p-5  shadow-xl">
              <div className="z-10 flex h-full w-full flex-col items-center overflow-hidden">
                <div className="relative mb-4 aspect-square w-32 bg-card">
                  <Image
                    src={member.img}
                    fill
                    alt={member.name}
                    className="rounded-full grayscale group-hover:grayscale-0 "
                  ></Image>
                </div>
                <p className="text-xl font-extrabold uppercase text-muted-foreground">{member.name}</p>
                <p className="text-sm font-semibold  text-secondary-foreground">{member.role}</p>
                <Link href={member.twitter}>
                  <div className="rounded-full p-3 transition-all duration-100 hover:bg-primary/30">
                    <Twitter />
                  </div>
                </Link>
                {/* <div className=" h-20 max-w-[90%] text-ellipsis text-center font-inter text-xs opacity-60">
                  <p className="h-full">{member.desc}</p>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};
