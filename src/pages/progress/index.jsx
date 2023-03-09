import { publicRequest } from "@/hooks/requestMethods";
import React, { useEffect, useState } from "react";

const index = () => {
  const [data, setData] = useState(null);
  const [deleteRequested, setDeleteRequested] = useState(false);

  useEffect(() => {
    const getprogress = async () => {
      try {
        const res = await publicRequest.get("/questions/find");
        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getprogress();
  }, [deleteRequested]); // run getprogress again if deleteRequested state changes

  if (!data) {
    return <div>Loading...</div>;
  }

  const deleteHandle = async (id) => {
    try {
      const res = await publicRequest.delete(`/questions/delete/${id}`);
      setData(res.data);
      setDeleteRequested(!deleteRequested); // toggle deleteRequested state to trigger getprogress
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Progress</h1>
      {console.log(data)}
      {data.progresses &&
        data.progresses.map((progress, index) => (
          <div key={index}>
            <div>{progress.problemID}</div>
            <div>{progress.title}</div>
            <button onClick={() => deleteHandle(progress._id)}>delete</button>
          </div>
        ))}
    </div>
  );
};

export default index;
