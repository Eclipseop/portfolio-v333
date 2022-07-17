import { NextPage } from "next";
import Embedded from "../components/Embedded";
import EmojiLink, { Page } from "../components/EmojiLink";
import Header from "../components/Header";
import Layout from "../components/Layout";

const Home: NextPage = () => {

  const pages: Page[] = [{
    emoji: '📰',
    text: 'About',
    link: 'about'
  }, {
    emoji: '🔧',
    text: 'Projects',
    link: 'projects'
  }]

  return (
    <Layout title="Hi!" emoji="🦦">
      <Embedded>
        Hi there!
        <br /><br />
        I&apos;m MacKenzie, a software engineer based in Minneapolis, MN. I am currently working at BestBuy working on data pipelines.
      </Embedded>
      <div className="flex flex-col">
        {pages.map((page) => <EmojiLink key={page.emoji} page={page} />)}
        </div>
    </Layout>
  )
}

export default Home;