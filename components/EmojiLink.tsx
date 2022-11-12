import Link from "next/link";

export type Page = {
  emoji?: React.ReactNode,
  text: string,
  link: string,
}

const EmojiLink = ({ page }: { page: Page }) => {
  return (
    <Link href={page.link} className="p-1 hover:bg-gray-200 transition duration-150 font-semibold flex items-center gap-1">
        {page.emoji}
        <span className="underline underline-offset-2">{page.text}</span>
    </Link>
  )
}

export default EmojiLink;