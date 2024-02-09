/* eslint-disable no-unused-vars */
import React from "react";
import Typewriter from "../components/Typewriter";

const Index = () => {
  return (
    <div className="background w-full h-[80vh] flex items-center justify-center bg-white dark:bg-dark">
      <div className="container w-[800px] px-8 ">
        <p className="title text-[65px] font-medium text-gray-500 dark:text-white ">
          <Typewriter />
        </p>
        <p className="text-name text-md font-light  text-gray-500 dark:text-white">
          I am <mark>Adjay</mark>, a relentless seeker of knowledge, transitioning into software engineering to explore myriad perspectives through the language of code.
        </p>
      </div>
    </div>
  );
};

export default Index;
