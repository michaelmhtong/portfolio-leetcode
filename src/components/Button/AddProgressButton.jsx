import React from "react";
import { publicRequest } from "@/hooks/requestMethods";
import { useRouter } from "next/router";
import { HiOutlineDocumentAdd } from "react-icons/hi";

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
      const progressId = res.data.progress._id;
      // Navigate to timer page
      router.push(`/question/${question.id}/${progressId}`);
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
      <HiOutlineDocumentAdd className="text-gray-900 w-5 h-5" />
    </button>
  );
};

export default AddProgressButton;
