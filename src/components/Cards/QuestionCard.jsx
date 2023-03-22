import React from "react";

const QuestionCard = ({ data }) => {
  return (
    data && (
      <div className="bg-gray-50 p-10 rounded-3xl">
        <article className="flex max-w-xl flex-col items-start justify-between">
          <div className="group relative">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              <a href={data.url}>{data.title}</a>
              <span className="relative ml-4 text-sm rounded-full bg-gray-200 py-1.5 px-3 font-medium text-gray-600">
                {data.topic}
              </span>
            </h3>
            <div className="mt-5 border-t border-gray-200 text-gray-600">
              <dl className="sm:divide-y sm:divide-gray-200">
                <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium ">Suggested duration</dt>
                  <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{data.duration} minutes</dd>
                </div>
                <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium ">Difficulty</dt>
                  <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">
                    {data.difficulty.toLowerCase()}
                  </dd>
                </div>
                <div className="py-2 sm:grid sm:grid-cols-3 sm:gap-4">
                  <dt className="text-sm font-medium ">Routines</dt>
                  <dd className="mt-1 text-sm sm:mt-0 sm:col-span-2">{data.routines.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </div>
        </article>
      </div>
    )
  );
};

export default QuestionCard;
