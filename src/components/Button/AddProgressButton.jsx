import React from "react";
import { publicRequest } from "@/hooks/requestMethods";
import { useRouter } from "next/router";

const AddProgressButton = ({ question, userId }) => {
  const router = useRouter();
  const questionWithUserId = { ...question, userId };
  console.log(questionWithUserId)

  const addHandle = async (item) => {
    try {
      const res = await publicRequest.post("/questions/add", item);
      // Navigate to timer page
      router.push(`/question/${question.id}/timer`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => {
        addHandle(questionWithUserId);
      }}
    >
      add
    </button>
  );
};

export default AddProgressButton;
