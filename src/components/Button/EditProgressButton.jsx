import { useRouter } from "next/router";
import { HiOutlinePencil } from "react-icons/hi2";

const EditProgressButton = ({ questionId, progressId }) => {
  const router = useRouter();
  const editHandle = () => {
    router.push(`/question/${questionId}/${progressId}/finish`);
  };

  return (
    <button>
      <HiOutlinePencil onClick={editHandle} />
    </button>
  );
};

export default EditProgressButton;
