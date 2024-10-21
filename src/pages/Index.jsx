/* eslint-disable no-unused-vars */
import React from "react";
import Typewriter from "../components/Typewriter";

const Index = () => {
  return (
    <div className="relative w-full h-[80vh] top-0 flex items-center justify-center bg-white dark:bg-dark">
      <div className="w-[800px] px-8 ">
        <div className="title text-[65px] font-medium text-gray-500 dark:text-white ">
          <Typewriter />
        </div>
        <p className="text-name text-md font-light  text-gray-500 dark:text-white">
          I am <mark>Adjay</mark>, a relentless seeker of knowledge, transitioning into software engineering to explore myriad perspectives through the language of code.
        </p>
      </div>
    </div>
  );
};

export default Index;
