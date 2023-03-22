import { publicRequest } from "@/hooks/requestMethods";
import useSessionHook from "@/hooks/sessionHook";
import React, { useEffect, useState, Fragment } from "react";
import EditProgressButton from "../Button/EditProgressButton";
import jsonAllQuestions from "@/data/QuestionGroup.json";
import { BsCheckCircle, BsExclamationCircle, BsBookmarkStar, BsBookmarkX } from "react-icons/bs";
import DeleteProgressModal from "../Modals/DeleteProgressModal";
import { HiOutlineTrash } from "react-icons/hi2";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProgressList = () => {
  const [data, setData] = useState(null);
  const [deleteRequested, setDeleteRequested] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const tableTitle = [
    "Status",
    "Revision",
    "Date",
    "ID",
    "Problem",
    "Topic",
    "Difficulty",
    "Suggested time",
    "Actual spend",
    "Action",
  ];

  // get user details
  const session = useSessionHook();
  const userId = session?.user.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Only make the API request if userId is defined
        if (userId) {
          const res = await publicRequest.get(`/questions/find?userId=${userId}`);
          const progresses = res.data;
          updateData(progresses);
        }
      } catch (error) {
        console.log(error);
      }
    };

    const updateData = (progresses) => {
      // Loop through the progresses array and update each progress with problem data
      const updatedProgresses = progresses.map((progress) => {
        const problemData = jsonAllQuestions.find((problem) => problem.id == progress.problemId);
        return {
          ...progress,
          ...problemData,
        };
      });
      // Update the state with the updated progresses array
      setData(updatedProgresses);
    };

    fetchData();
  }, [userId, deleteRequested]);

  if (!data) {
    return <div>Loading...</div>;
  }

  const handleClose = () => {
    setShowDeleteModal(false); // close the modal
  };

  const handleDelete = () => {
    setShowDeleteModal(true);
    console.log(showDeleteModal);
  };

  return (
    <>
      {data && (
        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      {tableTitle.map((title, titleIdx) => (
                        <th
                          key={titleIdx}
                          scope="col"
                          className="py-3.5 px-3 text-left text-sm font-semibold text-gray-900"
                        >
                          {title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <Fragment>
                      {data?.map((progress, progressIdx) => (
                        <tr
                          key={progressIdx}
                          className={classNames(
                            progressIdx === 0 ? "border-gray-300" : "border-gray-200",
                            "border-t"
                          )}
                        >
                          <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-600">
                            {progress.status ? (
                              <BsCheckCircle className="text-green-600" />
                            ) : (
                              <BsExclamationCircle className="text-red-600" />
                            )}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-600">
                            {progress.revision ? (
                              <BsBookmarkStar className="text-yellow-600" />
                            ) : (
                              <BsBookmarkX />
                            )}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900">
                            {new Date(progress.date).toLocaleDateString()}
                          </td>
                          <td className="whitespace-nowrap py-4 px-3 text-sm font-medium text-gray-900">
                            {progress.problemId}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a
                              href={progress.url}
                              target="_blank"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              {progress.title}
                            </a>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {progress.topic}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {progress.difficulty}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {progress.duration} mins
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {progress.usedTime ? `${progress.usedTime} mins` : "Not finished"}
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 flex space-x-5 ">
                            <EditProgressButton
                              questionId={progress.problemId}
                              progressId={progress._id}
                            />
               

                            <HiOutlineTrash className="cursor-pointer" onClick={handleDelete} />
                                              <DeleteProgressModal
                              open={showDeleteModal}
                              handleClose={handleClose}
                              id={progress._id}
                              deleteRequested={deleteRequested}
                              setDeleteRequested={setDeleteRequested}
                            />
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProgressList;
