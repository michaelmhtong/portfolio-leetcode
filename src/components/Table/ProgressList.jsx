import { publicRequest } from "@/hooks/requestMethods";
import useSessionHook from "@/hooks/sessionHook";
import React, { useEffect, useState } from "react";
import DeleteProgressButton from "../Button/DeleteProgressButton";

const ProgressList = () => {
  const [data, setData] = useState(null);
  const [deleteRequested, setDeleteRequested] = useState(false);

  // get user details
  const session = useSessionHook();
  const userId = session?.user.id;

  useEffect(() => {
    const getProgress = async () => {
      try {
        // Only make the API request if userId is defined
        if (userId) {
          const res = await publicRequest.get(`/questions/find?userId=${userId}`);
          setData(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProgress();
  }, [userId, deleteRequested]); // run getprogress again if deleteRequested state changes

  if (!data) {
    return <div>Loading...</div>;
  }

  const deleteHandle = async (id) => {
    try {
      const res = await publicRequest.delete(`/questions/delete?id=${id}`);
      setData(res.data);
      setDeleteRequested(!deleteRequested); // toggle deleteRequested state to trigger getprogress
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {data.progresses &&
        data.progresses.map((progress, index) => (
          <div key={index}>
            <div>{progress.problemId}</div>
            <div>{progress.title}</div>
            <div>{progress.status.toString()}</div>
            <DeleteProgressButton id={progress._id} deleteHandle={deleteHandle} />
          </div>
        ))}
    </div>
  );
};

export default ProgressList;
