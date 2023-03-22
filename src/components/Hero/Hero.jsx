import React from "react";
import GoogleAuth from "../Auth/GoogleAuth";

const Hero = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-wide text-gray-900 sm:text-6xl ">
            LET'S CODE
          </h1>
          <div className="mt-6 text-lg leading-8 text-gray-600">
            <p>Ace your next coding challenge.</p>
            <p>
              Get top-notch Leetcode training on our platform and stay ahead of the competition.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <GoogleAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
