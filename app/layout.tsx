'use client';

import React from 'react';
import Header from './Header';
import { usePathname } from 'next/navigation';
import '../styles/globals.css';

// there has to be a better way of doing this... right? Next 13 layouts seem limited.
type PageInfo = {
  route: string,
  title?: string,
  emoji: string
}

const pages: PageInfo[] = [
  {
    route: '/about',
    title: 'About me',
    emoji: '👨‍💻'
  },
  {
    route: '/projects',
    title: 'Projects',
    emoji: '🏗️'
  },
  {
    route: '/project',
    title: undefined,
    emoji: '🔧'
  }
]; 

const determinePageInfo = (path: string): PageInfo => {
  if (path === '/') {
    return {
      route: '/',
      title: 'Hello',
      emoji: '🦦'
    };
  }
  return pages.find(p => path.startsWith(p.route)) ?? {
    route: '/null',
    title: 'Woah, this is pretty broken...',
    emoji: '⚠️'
  };
};

const RootLayout = ({ children }: React.PropsWithChildren<any>) => {
  const pathName = usePathname();

  const pageInfo = determinePageInfo(pathName!);

  return (
    <html>
      <body>
        <Header currentRoute={pathName ?? ''} />

        <main>
          <div className="max-h-[16rem] overflow-hidden">
            <img src="/splash.avif" alt="splash image" />
          </div>
          <div className="w-5/6 md:w-1/2 flex flex-col mx-auto text-gray-800">
            <h1 className="text-6xl -mt-10 pb-10">{pageInfo?.emoji}</h1>
            <div className="flex flex-col space-y-2">
              <h1 className="text-5xl font-bold font-sans mb-3">{pageInfo?.title ?? pathName?.split('/').at(-1)}</h1>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;