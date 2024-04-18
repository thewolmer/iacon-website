'use client';
import { MotionValue, motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { Image } from '@/components/Image';
import { cn } from '@/lib/utils';

interface Props {
  background?: string;
  rotate?: MotionValue<string>;
  scale?: MotionValue<number>;
  opacity?: MotionValue<number>;
  children?: React.ReactNode;
}

export const Maze = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const scale = useTransform(scrollYProgress, [0, 0.65, 0.8, 1], [1, 1, 0.9, 1.25]);
  const rotate = useTransform(scrollYProgress, [0, 1], ['0deg', '40deg']);
  const opacity = useTransform(scrollYProgress, [0, 0.65, 0.85, 1], [0, 0, 0, 1]);
  console.log(opacity);
  return (
    <div ref={targetRef} className="relative h-[250vh] w-full overflow-clip">
      <div className="sticky top-0 h-screen bg-background">
        <Trippy rotate={rotate} scale={scale} />
        <OverlayLogo scale={scale} opacity={opacity} />
      </div>
    </div>
  );
};

const NUM_SECTIONS = 25;
const PADDING = `${100 / NUM_SECTIONS / 2}vmin`;

const generateSections = (count, color, rotate, scale) => {
  if (count === NUM_SECTIONS) {
    return <></>;
  }

  const nextColor = color === 'background' ? 'primary' : 'background';

  return (
    <Section rotate={rotate} background={color} scale={scale}>
      {generateSections(count + 1, nextColor, rotate, scale)}
    </Section>
  );
};

const Trippy = ({ rotate, scale }: Props) => (
  <motion.div className="absolute inset-0  overflow-hidden bg-background">
    {generateSections(0, 'background', rotate, scale)}
  </motion.div>
);

const Section = ({ background, children, rotate, scale }: Props) => (
  <motion.div
    className={cn('relative  h-full w-full origin-center', `bg-${background}`)}
    style={{
      scale,
      rotate,
      padding: PADDING,
    }}
  >
    {children}
  </motion.div>
);
const OverlayLogo = ({ scale, opacity }: Props) => (
  <motion.div style={{ scale, opacity }} className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="text-center">
      <Image src="/images/logo_icon.png" width={400} height={400} alt="logo" className="w-36" />
    </div>
  </motion.div>
);
