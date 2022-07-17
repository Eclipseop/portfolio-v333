import { NextPage } from "next";
import Embedded from "../components/Embedded";
import Layout from "../components/Layout";

const About: NextPage = () => {
  return (
    <Layout title="About" emoji="📰">
      <Embedded>
        Hi there!
        <br /><br />
        I&apos;m MacKenzie, a software engineer based in Minneapolis, MN. 
        I am currently working at BestBuy working on data pipelines on the Enterprise Data Platform team.
      </Embedded>
      <h2 className="font-semibold text-xl">Stuff I Like</h2>
      <ul className="list-disc pl-5">
        <li>Home Automation</li>
        <li>Reverse Engineering</li>
        <li>asdf</li>
      </ul>
    </Layout>
  )
}

export default About;