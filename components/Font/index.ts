import { Inter, Josefin_Sans, Playfair } from 'next/font/google';

export const playfair = Playfair({
  subsets: ['latin'],
  weight: ['300', '500', '800'],
  display: 'swap',
  variable: '--font-playfair',
});
export const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
  variable: '--font-josefin',
});
export const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '500', '700'],
  display: 'swap',
  variable: '--font-inter',
});
