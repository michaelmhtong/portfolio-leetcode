import React from "react";
import { publicRequest } from "@/hooks/requestMethods";
import { useRouter } from "next/router";

const StatusButton = ({ questionId }) => {
  const router = useRouter();
  const redirect = () => {
    router.push("/progress");
  };

  const completeHandle = async () => {
    try {
      console.log(questionId);
      const res = await publicRequest.patch(`/questions/update`, { id: questionId, status: true });
      console.log(res.data); // Log the response data to the console
      redirect();
    } catch (error) {
      console.log(error);
    }
  };

  const inCompleteHandle = () => {
    redirect();
  };

  return (
    <>
      <button onClick={completeHandle}>Complete</button>
      <button onClick={inCompleteHandle}>Incomplete</button>
    </>
  );
};

export default StatusButton;
