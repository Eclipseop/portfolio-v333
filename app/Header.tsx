import Link from "next/link";
import { Page } from "./EmojiLink";

const CustomLink = ({ page }: { page: Page }) => {
  return (
    <Link href={page.link} className="p-1 hover:bg-gray-200 transition duration-150 font-semibold flex items-center gap-1">
      {page.emoji}
      <span>{page.text}</span>
    </Link>
  );
};

const Header = ({currentRoute}: {currentRoute: string}) => {
  const dirs = currentRoute.substring(1).split('/');

  const getBreadcrumbs = () => {
    const links = [];
    for (const idx in dirs) {
      links.push({
        name: dirs[idx],
        url: `/${  dirs.slice(0, +idx + 1).join('/')}`
      });
    }

    return links;
  };

  return (
    <header className="flex items-center h-11 pl-6 sticky top-0 bg-white border-b">
      <div className="font-semibold flex">
        <CustomLink page={{ text: '🦦 otterdev', link: '/' }} />
        {getBreadcrumbs().map((crumb) => <CustomLink key={crumb.url} page={{ text: `/ ${  crumb.name}`, link: crumb.url }} />)}
      </div>
    </header>
  );
};

export default Header;