import { NextPage } from "next";
import Layout from "../components/Layout"
import EmojiLink from "../components/EmojiLink";
import { FaCode } from "react-icons/fa";

const Projects: NextPage = () => {
  const projects = ['CrackUpdater', 'KeebFinder', 'osrs-gamepack-downloader', 'portfolio-v333'];

  return (
    <Layout title="Projects" emoji="🔧">
      <div className="flex flex-col">
        {projects.map((project) => <EmojiLink key={project} page={{ text: project, link: '/project/' + project, emoji: <FaCode /> }} />)}
      </div>
    </Layout>
  )
}

export default Projects;