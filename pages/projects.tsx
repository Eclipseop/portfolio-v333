import { NextPage } from "next";
import { useEffect, useState } from "react";
import Layout from "../components/Layout"
import { GHInformation } from "../types/GHInformation";

const Card = ({ repo }: { repo: GHInformation }) => {
  return (
    <div>
      <a className="font-semibold text-xl" href={repo.html_url}>{repo.name}</a>
      <GHCard repo={repo} />
      <p>{repo.description}</p>
    </div>
  )
}

const GHCard = ({ repo }: { repo: GHInformation }) => {
  return (
    <a target="_blank" className="py-1.5 rounde px-2 border flex gap-3 items-center hover:bg-gray-100 transition duration-150" href={repo.html_url} rel="noreferrer">
      <img src={repo.owner.avatar_url} alt="owner avatar" className="rounded-full h-8 w-8" />
      <div className="leading-none">
        <h2 className="text-sm font-semibold">{repo.name}</h2>
        <span className="text-xs text-gray-400">{repo.owner.login} • Updated {repo.pushed_at.split('T')[0]}</span>
      </div>
    </a>
  )
}

const Projects: NextPage = () => {
  const [repos, setRepos] = useState<GHInformation[]>();

  useEffect(() => {
    const projects = ['CrackUpdater', 'KeebFinder', 'osrs-gamepack-downloader', 'portfolio-v333'];

    const execute = async () => {
      const ghRepos: GHInformation[] = []
      for (let project of projects) {
        const data: GHInformation = await (await fetch(`https://api.github.com/repos/Eclipseop/${project}`)).json();
        ghRepos.push(data);
      }
      setRepos(ghRepos)
    }
    execute();
  }, [])

  return (
    <Layout title="Projects" emoji="🔧">
      <div className="flex flex-col space-y-3">
        {repos?.map((repo) => <Card key={repo.id} repo={repo} />)}
      </div>
    </Layout>
  )
}

export default Projects;