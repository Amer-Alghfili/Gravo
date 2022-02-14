import Head from "next/head";
import Image from "next/image";
import Logo from "../components/logo/Logo";
const img = require("../img/undraw_towing_-6-yy4.svg");

export default function PageNotFound() {
  return (
    <div style={{ padding: "0 1rem" }}>
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
      <Logo showFull={true} />
      <main className="page-not-found">
        <Image src={img} alt="not found page image" width={900} height={700} />
        <h1>Unfortunately we couldn't find page you're looking for.</h1>
      </main>
    </div>
  );
}