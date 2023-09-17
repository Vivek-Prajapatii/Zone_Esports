import Head from "next/head";
import { Inter } from "next/font/google";
import Carousel from "./_carousel";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zone Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Carousel />
      </main>
    </>
  );
}
