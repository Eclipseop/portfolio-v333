import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const route = router.route.replace('/', ' / ');

  return (
    <header className="flex items-center h-11 pl-6 sticky top-0 bg-white border-b">
      <div className="font-semibold flex gap-1">
        <div className="hover:bg-gray-200 transition duration-150 ">
          <Link href="/">🦦 otterdev</Link>
        </div>
        {route}
      </div>
    </header>
  )
}

export default Header;