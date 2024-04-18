import './_components/homepage.css';

import { Hero } from './_components/Hero';
import { Info } from './_components/Info';
import { Maze } from './_components/Maze';
import { Team } from './_components/Team';

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center gap-24">
      <Hero />
      <Info />
      <Team />
      <Maze />
    </main>
  );
}
