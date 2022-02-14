import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import LearningContainer from "../components/learningContainer/LearningContainer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Gravo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Indie+Flower&family=Mochiy+Pop+P+One&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <main>
        <LearningContainer />
      </main>
    </div>
  );
}
