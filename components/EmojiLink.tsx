export type Page = {
  emoji?: string,
  text: string,
  link: string,
}

const EmojiLink = ({ page }: { page: Page }) => {
  return (
    <a href={page.link} className="p-1 hover:bg-gray-200 transition duration-150">
      {page.emoji} <span className="underline underline-offset-2 font-semibold">{page.text}</span>
    </a>
  )
}

export default EmojiLink;