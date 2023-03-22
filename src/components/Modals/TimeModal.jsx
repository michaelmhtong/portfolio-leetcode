import { useRouter } from "next/router";
import { publicRequest } from "@/hooks/requestMethods";
import Button from "../Button/Button";
import Modal from "./Modal";

const TimeModal = ({ open, handleClose, questionId, progressId, spentMinutes }) => {
  const router = useRouter();

  const handleComplete = async () => {
    try {
      const res = await publicRequest.patch(`/questions/update`, {
        id: progressId,
        status: true,
        usedTime: Number(spentMinutes),
      });
      router.push(`/question/${questionId}/${progressId}/finish`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Modal
        open={open}
        handleClose={handleClose}
        title="Compelete"
        description="Do you have enough time to finish it?"
        button={
          <Button className="sm:col-start-2" onClick={() => deleteHandle(id)}>
            Delete
          </Button>
        }
        type="success"
      />
    </div>
  );
};

export default TimeModal;
