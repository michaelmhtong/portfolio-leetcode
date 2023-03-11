import React from "react";

const DeleteProgressButton = ({ id, deleteHandle }) => {
  return <button onClick={() => deleteHandle(id)}>delete</button>;
};

export default DeleteProgressButton;
