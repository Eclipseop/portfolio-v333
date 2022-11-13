import React from 'react';
import Embedded from './Embedded';
import EmojiLink, { Page } from './EmojiLink';

const pages: Page[] = [{
  emoji: '📰',
  text: 'About',
  link: 'about'
}, {
  emoji: '🔧',
  text: 'Projects',
  link: 'projects'
}];

const Home = () => {
  return (
    <section>
      <Embedded>
        Hi there!
        <br /><br />
        I&apos;m MacKenzie, a software engineer based in Minneapolis, MN. I am currently working at BestBuy working on data pipelines.
      </Embedded>
      <div className="flex flex-col">
        {pages.map((page) => <EmojiLink key={page.link} page={page} />)}
      </div>
    </section>
  );
};

export default Home;