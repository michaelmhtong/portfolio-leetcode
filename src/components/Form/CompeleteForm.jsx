import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { publicRequest } from "@/hooks/requestMethods";
import Button from "../Button/Button";

const CompeleteForm = ({ questionId, progressId }) => {
  const router = useRouter();
  // const [value, setValue] = useState(3);
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    if (progressId) {
      const fetchProgress = async () => {
        try {
          const res = await publicRequest.get(`/questions/findOne?progressId=${progressId}`);
          setProgressData(res.data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProgress();
    }
  }, [progressId]);

  const redirect = () => {
    router.push("/progress");
  };

  console.log(progressData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      note: e.target.note.value,
      // rating: e.target.rating.value,
      revision: e.target.revision.checked,
    };

    try {
      const res = await publicRequest.patch(`/questions/update`, { id: progressId, ...data });
      console.log(res.data); // Log the response data to the console
      redirect();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    e.preventDefault();
    redirect();
  };

  return (
    <>
      {progressData && (
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="pt-8">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Question {questionId}</h3>
              <p className="mt-1 text-sm text-gray-500">Note for future revision</p>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Note
                </label>
                <div className="mt-1">
                  <textarea
                    name="note"
                    rows={6}
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                    defaultValue={progressData.note}
                  />
                </div>
              </div>

              <div className="sm:col-span-1 flex items-center">
                <div className="mt-1 flex items-center">
                  <input
                    name="revision"
                    type="checkbox"
                    className="mr-6 focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                    defaultChecked={progressData.revision}
                  />
                </div>
                <label className="block text-sm font-medium text-gray-700">Revision</label>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleCancel}
              >
                Cancel
              </button>
              <Button type="submit">Save</Button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default CompeleteForm;
