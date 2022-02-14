import Head from "next/head";
import TopicContainer from "../../../components/learnPage/TopicContainer/TopContainer";

export default function LearningPage() {
  return (
    <div>
      <Head>
        <title>Gravo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <main>
        <TopicContainer />
      </main>
    </div>
  );
}
