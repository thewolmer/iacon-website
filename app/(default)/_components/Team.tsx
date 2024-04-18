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
    desc: "Meet Breeze, he is deeply involved in web 3.0.He founded laconLabs and manage collaborations of Moonie Moo and HeadrektNFT. Initially seeking financial stability, He now feel at home in the web3 world. He work as a collaboration manager and aspire to become a software engineer. Breeze's positive energy is what others appreciate about him.",
    img: 'https://i.seadn.io/gcs/files/7f0fa40af03eb1a08e373da9ae623d52.png?auto=format&w=256',
    web: '',
    twitter: 'https://x.com/0xBreezey',
  },
  {
    name: 'Chaitanya',
    role: 'Admin',
    desc: 'Meet Chaitanya, a forex trader and programmer with a passion for the intersection of finance and technology. With expertise in both fields, I navigates the world of currency trading while also developing innovative software solutions. Mine skills in programming enhance my trading strategies, making me a versatile professional in the dynamic landscape of finance and technology.',
    img: 'https://imgur.com/Nb8oPYn.png',
    twitter: 'https://x.com/Chaitanyajeet06',
  },
  {
    name: 'Dracula',
    role: 'Collab Manager',
    desc: "NFTs and Web3. Meet Dracula, a 22-year-old explorer in Fueled by a passion for upskilling, he's on a dynamic journey to master modern technology. In the ever-evolving digital landscape, he seeks excitement and purpose to contribute to innovation. With a commitment to growth, he navigates this dynamic terrain, ready to make meaningful contributions. He also takes pride in being a great leader, inspiring and guiding others in this transformative era of technology.",
    img: 'https://imgur.com/6D0EKQk.png',
    twitter: 'https://x.com/0xjaderx',
  },
  {
    name: 'Wolmer',
    role: 'Co-Founder/CTO',
    desc: 'Meet Wolmer, a creative web developer with four years of experience, specializing in Next.is and Vue.is. He is driven by a passion for creating visually captivating and aesthetically pleasing web designs that resonate with audiences and establish unique brand identities. Since 2021 , Wolmer has ventured into web3 and collaborated with the teams behind Moonie Moo and ArmoBot.',
    img: 'https://i.seadn.io/gcs/files/400bcca22aee447d1536966596122439.png?auto=format&w=256',
    web: 'https://wolmer.me?utm_source=iaconlabs.com',
    twitter: 'https://x.com/WolmerTweets',
  },
  {
    name: 'P1ng',
    role: 'Editor, Graphics Artist',
    desc: 'Meet Jatin, a passionate video editor and graphic designer. seamlessly combining creativity with technical expertise to bring ideas to life. dedication and innovation as driving forces, contributing his best to the world of web3',
    img: 'https://imgur.com/T9ZFC4C.png',
    twitter: 'https://x.com/jatinbtw',
  },
  {
    name: 'Jade RX',
    role: 'Analyst',
    desc: 'Meet Jade, a Web3 enthusiast with 3+ years of experience in the space , where he has participated in numerous roles Crypto & NFT excelling in Community Manager and content creator. With more than 3 years of experience in Marketing, he has the ability to always keep the community active, create hype and make partnerships with the most outstanding proiects.',
    img: 'https://imgur.com/6D0EKQk.png',
    twitter: 'https://x.com/0xjaderx',
  },
  {
    name: 'Tussu',
    role: 'Analyst',
    desc: 'I am TUSSU a 19yo WEB3 wierdo, currently an engineering student with specialization in Blockchain technology. With more than 2 years of experience in WEB3 space, I have worked with PRJCT Whitelist, TimithNFT, TheCybernites, GhoulsNFT and many more. I also have a good foundation in the Financial Markets, with basic risk management attributes. People like me because I give somewhat familiar energy.',
    img: 'https://imgur.com/6D0EKQk.png',
    twitter: 'https://x.com/0xjaderx',
  },
  {
    name: 'Trash.NFT',
    role: 'Collab Manager',
    desc: 'Meet Trash.NFT an 18-year-old individual who first delved into the world of cryptocurrency at the age of 14. His interest in NFTs was sparked in the late 2020s, leading him to actively engage in the space since early 2021. Throughout his iourney, he have contributed to approximately 25 proiects, including notable ones like Particle Ink, Metaplaces, HoneyRat, and Dre Empire. Notably, he is a Core team member of LuckyGo.',
    img: 'https://imgur.com/6D0EKQk.png',
    twitter: 'https://x.com/0xjaderx',
  },

  {
    name: 'Onew',
    role: 'Moderator',
    desc: 'Meet Oneu, an 1 8-year-old student with an unwavering passion for the dynamic world of Web3 and cryptocurrency. Enthusiastically navigating the realms of crypto trading, Forex, and precious metals, OneU is a seasoned trader with an intuitive knack for spotting trends and opportunities in the market.',
    img: 'https://imgur.com/6D0EKQk.png',
    twitter: 'https://x.com/0xjaderx',
  },
];

export const Team = () => {
  const container = useRef<HTMLTableSectionElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-250%']);
  return (
    <section ref={container} className="relative h-[400vh] w-full overflow-clip">
      <motion.div style={{ x }} className="sticky top-0 flex h-screen w-full items-center gap-10 ">
        <div className="flex h-full min-w-[50vw] flex-1 flex-col items-center justify-center p-2 text-center">
          <h3 className="font-playfair text-6xl font-extrabold">Team</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia exercitationem culpa tempore inventore,
            blanditiis quod aliquid, laboriosam voluptatum quidem iusto porro necessitatibus iste vel cum quasi amet
            consectetur pariatur optio?
          </p>
        </div>

        {TeamMembers.map((member, i) => (
          <div key={i} className="relative mr-4 flex h-[60vh] min-w-[50vh] rounded bg-card p-5 shadow-xl  ">
            <div className="z-10 flex h-full w-full flex-col items-center overflow-hidden">
              <div className="relative mb-4 aspect-square w-40 bg-card">
                <Image src={member.img} fill alt={member.name} className=""></Image>
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
  );
};
