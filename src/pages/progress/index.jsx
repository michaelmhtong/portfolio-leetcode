import React from "react";
import ProgressList from "@/components/Table/ProgressList";
import { Container } from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";

const index = () => {
  return (
    <>
      <Container>
        <Heading heading="Progress" subheading="View and edit your progress here" />
        <ProgressList />
      </Container>
    </>
  );
};

export default index;
