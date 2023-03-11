import CompleteButton from "@/components/Button/StatusButton";
import QuestionCard from "@/components/Cards/QuestionCard";
import React from "react";
import { useRouter } from "next/router";

const timer = () => {
  const router = useRouter();
  const questionId = router.query.id;

  return (
    <div>
      <h1>Timer</h1>
      <QuestionCard questionId={questionId} />
      <CompleteButton questionId={questionId} />
    </div>
  );
};

export default timer;
