import React from 'react';
import EmojiLink from '../EmojiLink';
import { FaCode } from "react-icons/fa";

const Projects = () => {
  const projects = ['CrackUpdater', 'KeebFinder', 'osrs-gamepack-downloader', 'portfolio-v333'];

  return (
    <div className="flex flex-col">
      {projects.map((project) => <EmojiLink key={project} page={{ text: project, link: `/project/${project}`, emoji: <FaCode /> }} />)}
    </div>
  );
};

export default Projects;