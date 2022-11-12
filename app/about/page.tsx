import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Embedded from '../Embedded';
import EmojiLink from '../EmojiLink';

const About = () => {
  return (
    <div>
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
        <li>Mathematics</li>
      </ul>
      <h2 className="font-semibold text-xl">Socials</h2>
      <EmojiLink page={{ text: 'GitHub', link: 'https://github.com/Eclipseop', emoji: <FaGithub /> }} />
    </div>
  )
}

export default About;