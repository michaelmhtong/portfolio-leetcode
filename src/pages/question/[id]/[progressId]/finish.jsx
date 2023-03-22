import React from "react";
import { useRouter } from "next/router";
import CompeleteModal from "@/components/Form/CompeleteForm";
import { Container } from "@/components/Container/Container";
import Heading from "@/components/Heading/Heading";

const FinishPage = () => {
  const router = useRouter();
  const questionId = router.query.id;
  const progressId = router.query.progressId;

  return (
    <Container>
      <Heading heading="Finish" subheading="Fill in the form to store you progress" />
      <div className="flex justify-center">
        <CompeleteModal questionId={questionId} progressId={progressId} />
      </div>
    </Container>
  );
};

export default FinishPage;
