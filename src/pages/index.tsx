import type { GetServerSideProps } from "next";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    redirect: {
      destination: "http://localhost:3001/setcookie",
      permanent: true,
    },
  };
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=""></main>
    </>
  );
}