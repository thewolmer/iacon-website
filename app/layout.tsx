import { inter, josefin, playfair } from '@/components/Font';
import { Footer, Header } from '@/components/Layout';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

import { Providers } from './Providers';

import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.name}`,
    default: `Tagline | ${siteConfig.name}`,
    // TODO: "Add a tagline here",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    siteName: siteConfig.name,
    url: '/',
    locale: 'en_GB',
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: siteConfig.twitterHandle,
    title: `Tagline | ${siteConfig.name}`,
    // TODO: Add a tagline
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 675,
      },
    ],
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={cn(josefin.className, inter.variable, playfair.variable, 'relative w-full')}>
          <Header />
          {children}
          <Footer />
        </body>
      </Providers>
    </html>
  );
}
