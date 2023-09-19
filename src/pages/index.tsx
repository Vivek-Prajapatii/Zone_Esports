import Head from "next/head";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import _home from "./_home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Zone Esports</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <_home />
      </main>
    </>
  );
}
