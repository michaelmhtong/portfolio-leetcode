import Head from "next/head";
import { getSession } from "next-auth/react";
import Hero from "@/components/Hero/Hero";

export default function Home({ session }) {
  console.log(session);
  return (
    <>
      <Head>
        <title>Let&apos;s code</title>
        <meta
          name="description"
          content="Ace your next coding challenge. Get top-notch Leetcode training on our platform and stay ahead of the competition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="m-auto flex justify-center items-center h-screen bg-slate-50">
        <Hero />
      </main>
    </>
  );
}

export async function getServerSideProps(content) {
  const session = await getSession(content);
  if (session) {
    return {
      props: {},
      redirect: {
        destination: "/progress",
      },
    };
  }
  return {
    props: { session },
  };
}
