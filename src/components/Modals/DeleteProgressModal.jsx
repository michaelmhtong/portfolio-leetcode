import React from "react";
import { publicRequest } from "@/hooks/requestMethods";
import Button from "../Button/Button";
import Modal from "./Modal";

const DeleteProgressModal = ({ open, handleClose, id, deleteRequested, setDeleteRequested }) => {
  const deleteHandle = async (id) => {
    try {
      const res = await publicRequest.delete(`/questions/delete?id=${id}`);
      setDeleteRequested(!deleteRequested); // toggle deleteRequested state to trigger getprogress
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        handleClose={handleClose}
        title="Delete"
        description="Are you sure you want to delete this progress?"
        button={
          <Button className="sm:col-start-2" onClick={() => deleteHandle(id)}>
            Delete
          </Button>
        }
        type="delete"
      />
    </div>
  );
};

export default DeleteProgressModal;
