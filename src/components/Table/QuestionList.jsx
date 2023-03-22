import useSessionHook from "@/hooks/sessionHook";
import React, { Fragment } from "react";
import AddProgressButton from "../Button/AddProgressButton";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DifficultyLabel({ difficulty }) {
  return (
    <span
      style={{
        fontWeight: 600,
        color: {
          Easy: "rgb(0, 184, 163)",
          Medium: "rgb(255, 192, 30)",
          Hard: "rgb(255, 55, 95)",
        }[difficulty],
      }}
    >
      {difficulty}
    </span>
  );
}

const tableTitle = ["ID", "Problem", "Topic", "Difficulty", "Duration", "Action"];

const QuestionList = ({ data }) => {
  const session = useSessionHook();
  const userId = session?.user.id;

  return (
    <>
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
                  {Object.entries(data).map(([sectionTitle, questions], sectionIdx) => (
                    <Fragment key={sectionIdx}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={6}
                          scope="colgroup"
                          className="bg-gray-50 px-4 py-2 text-left text-sm font-semibold text-gray-900 sm:px-6"
                        >
                          {group.value === "week" && "Week"} {sectionTitle}
                        </th>
                      </tr>
                      {questions.map((question, questionIdx) => (
                        <tr
                          key={question.slug}
                          className={classNames(
                            questionIdx === 0 ? "border-gray-300" : "border-gray-200",
                            "border-t"
                          )}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                            {question.id}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <a
                              href={question.url}
                              target="_blank"
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              {question.title}
                            </a>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {question.topic}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {question.difficulty}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {question.duration} mins
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            {session && <AddProgressButton question={question} userId={userId} />}
                          </td>
                        </tr>
                      ))}
                    </Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionList;
