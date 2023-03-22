import React from "react";

const Heading = ({ heading, subheading }) => {
  return (
    <div className="sm:flex sm:items-center pb-10">
      <div className="sm:flex-auto">
        <h1 className="text-2xl font-semibold text-gray-900">{heading}</h1>
        <p className="mt-2 text-md text-gray-700">{subheading}</p>
      </div>
    </div>
  );
};

export default Heading;
