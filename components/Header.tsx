import { useRouter } from "next/router";
import EmojiLink from "./EmojiLink";

const Header = () => {
  const router = useRouter();
  const route = router.route.replace('/', ' / ');

  return (
    <header className="flex items-center h-11 pl-6">
      <div className="font-light"><EmojiLink page={{text: 'otterdev', link: '/', emoji: '🦦'}}/>{route}</div>
      
    </header>
  )
}

export default Header;