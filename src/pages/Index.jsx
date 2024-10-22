/* eslint-disable no-unused-vars */
import React from "react";
import Typewriter from "../components/Typewriter";

const Index = () => {
  return (
    <div className=" flex items-center justify-center  bg-light dark:bg-dark">
      <div className="p-8 mb-10 w-4/5 max-w-6xl">
        <div className="title md:text-7xl text-5xl font-mono font-bold text-gray-500 dark:text-white ">
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
