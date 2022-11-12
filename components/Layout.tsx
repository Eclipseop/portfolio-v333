import Head from "next/head";
import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode
  emoji: string
  title: string
}

const Layout = ({ children, emoji, title }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{`${title} | otterdev`}</title>
        <link rel="favicon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className="max-h-[16rem] overflow-hidden">
          <img src="/splash.avif" alt="splash image" />
        </div>
        <div className="w-5/6 md:w-1/2 flex flex-col mx-auto text-gray-800">
          <h1 className="text-6xl -mt-10 pb-10">{emoji}</h1>
          <div className="flex flex-col space-y-2">
            <h1 className="text-5xl font-bold font-sans mb-3">{title}</h1>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;