import React from "react";
import ProgressList from "@/components/Table/ProgressList";
import { Container } from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";
import { getSession } from "next-auth/react";

const ProgressPage = () => {
  return (
    <>
      <Container>
        <Heading heading="Progress" subheading="View and edit your progress here" />
        <ProgressList />
      </Container>
    </>
  );
};

export default ProgressPage;

export async function getServerSideProps(content) {
  const session = await getSession(content);
  if (!session) {
    return {
      props: {},
      redirect: {
        destination: "/",
      },
    };
  }
  return {
    props: { session },
  };
}