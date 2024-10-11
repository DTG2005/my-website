import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const InfScroller = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-mono text-center my-10">
        Inf Scroller
      </h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4">
        A Game Development project that was made for the inductions of GDSC
        club. It was made in Unity Game Engine using C# scripting. It consists
        of a single player game where the player has to dodge obstacles while
        running along an infinite scrolling background.
      </p>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-mono text-center my-10">
        Concepts Required
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Unity"
          image="/unity.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="C#"
          image="/cs.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="C#"
          image="/cs.png"
          text="Intermediate level proficiency."
          link="unity"
        />
      </ul>
    </>
  );
};

export default InfScroller;
