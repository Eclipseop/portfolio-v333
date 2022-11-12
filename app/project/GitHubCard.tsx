import { FaGithub, FaStar } from "react-icons/fa";
import { GHInformation } from "../types/GHInformation";

const GitHubCard = ({ repo }: { repo: GHInformation }) => {
  return (
    <a target="_blank" className="py-1.5 rounde px-2 border flex items-center hover:bg-gray-100 transition duration-150" href={repo.html_url} rel="noreferrer">
      <img src={repo.owner.avatar_url} alt="owner avatar" className="rounded-full h-8 w-8" />
      <div className="relative -left-3 -bottom-2 bg-white rounded-full p-[1px]">
        <FaGithub />

      </div>
      <div className="leading-none">
        <h2 className="text-sm font-semibold">{repo.name}</h2>
        <span className="text-xs text-gray-400 flex items-center gap-1">
          {repo.owner.login} • <FaStar /> {repo.stargazers_count} • Updated {repo.pushed_at.split('T')[0]}
        </span>
      </div>
    </a>
  );
};

export default GitHubCard;