import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import Embedded from "../../components/Embedded";
import GitHubCard from "../../components/GitHubCard";
import Layout from "../../components/Layout";
import { GHInformation } from "../../types/GHInformation";

const Project: NextPage = () => {
  const [repo, setRepo] = useState<GHInformation>();
  const [info, setInfo] = useState<string>();
  const { project } = useRouter().query;

  useEffect(() => {
    const load = async () => {
      if (project === undefined) return;
      const data: GHInformation = await (await fetch(`https://api.github.com/repos/Eclipseop/${project}`)).json();
      const repoReadMe = await (await fetch(`https://raw.githubusercontent.com/Eclipseop/${project}/main/README.md`)).text()
      setInfo(repoReadMe)
      setRepo(data)
    }
    load()
  }, [project])

  if (repo === undefined || info === undefined) {
    return <div>Is loading :3</div>
  }

  return (
    <Layout title={project as string ?? ""} emoji="🔧">
      <GitHubCard repo={repo} />
      <ReactMarkdown
        components={{
          h1: ({ node, children, ...props }) => <h1 className="font-semibold text-3xl">{children}</h1>,
          h2: ({ node, children, ...props }) => <h2 className="font-semibold text-2xl">{children}</h2>,
          li: ({ node, children, ...props }) => <li className="ml-5 list-disc">{children}</li>,
          a: ({ node, children, ...props }) => <a href={props.href} className="text-blue-400 hover:text-blue-500">{children as string}</a>,
          pre: ({ node, children, ...props }) => <Embedded>{children}</Embedded>,
        }}
      >
        {info ?? ""}
      </ReactMarkdown>
    </Layout>
  )
}

export default Project;