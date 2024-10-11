import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const InfScroller = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-mono text-center my-10">
        Inf Scroller
      </h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4">
        A Game Development project that was made as a part of GDSC club project
        series. It was made by a team of 5 members. The game was a 3D
        action-adventure RPG where you controlled a player to interact with the
        environment, talk to NPCs and fight enemies. The NPCs dialogue was NLP
        based and ran on a separate notebook, and used Gemini API. The game was
        made in Unity Game Engine using C# scripting.
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
        <SmallerCard
          title="Pytorch"
          image="/pytorch.png"
          text="Intermediate level proficiency."
          link="python"
        />
      </ul>
    </>
  );
};

export default InfScroller;
