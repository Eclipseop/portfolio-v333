import React from 'react';
import ReactMarkdown from 'react-markdown';
import { GHInformation } from "../../../types/GHInformation";
import Embedded from '../../Embedded';
import GitHubCard from '../GitHubCard';

const getData = async (project: string) => {
  const repoInfo: GHInformation = await (await fetch(`https://api.github.com/repos/Eclipseop/${project}`)).json();
  const repoReadMe = await (await fetch(`https://raw.githubusercontent.com/Eclipseop/${project}/main/README.md`)).text();

  return { repoInfo, repoReadMe }
}

const Project = async ({ params: { project } }: {params: {project: string}}) => {
  const { repoInfo, repoReadMe } = await getData(project);

  return (
    <div>
      <GitHubCard repo={repoInfo} />

      <ReactMarkdown
        components={{
          h1: ({ node, children, ...props }) => <h1 className="font-semibold text-3xl py-2">{children}</h1>,
          h2: ({ node, children, ...props }) => <h2 className="font-semibold text-2xl py-2">{children}</h2>,
          li: ({ node, children, ...props }) => <li className="ml-5 list-disc">{children}</li>,
          a: ({ node, children, ...props }) => <a href={props.href} className="text-blue-400 hover:text-blue-500">{children as string}</a>,
          pre: ({ node, children, ...props }) => <Embedded>{children}</Embedded>,
        }}
      >
        {repoReadMe ?? ""}
      </ReactMarkdown>
    </div>
  )
}

export default Project;