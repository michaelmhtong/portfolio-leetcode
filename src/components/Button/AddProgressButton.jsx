import React from "react";
import { publicRequest } from "@/hooks/requestMethods";
import { useRouter } from "next/router";
import { HiDocumentAdd } from "react-icons/hi";

const AddProgressButton = ({ question, userId }) => {
  const router = useRouter();
  const questionWithUserId = { ...question, userId };
  // console.log(questionWithUserId)

  const redirectWebsite = () => {
    const a = document.createElement("a");
    a.href = question.url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.click();
  };

  const addHandle = async (item) => {
    try {
      redirectWebsite();
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
      <HiDocumentAdd className="text-gray-900" />
    </button>
  );
};

export default AddProgressButton;
