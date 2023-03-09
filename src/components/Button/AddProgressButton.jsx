import React from "react";
import { publicRequest } from "@/hooks/requestMethods";

const AddProgress = (question) => {
  const addHandle = async (question) => {
    try {
      const res = await publicRequest.post("/questions/add", question);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={() => {
        addHandle(question);
      }}
    >
      add
    </button>
  );
};

export default AddProgress;
