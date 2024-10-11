import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const unity = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold text-center my-6">Unity</h1>
      <p className="text-lg">
        I have an intermediate level proficiency in Unity and have a lot of
        interest in game development. I have experience with using Unity for
        game development and have used it to create a number of projects, some
        of which are displayed on the homepage.
      </p>

      <div className="h-6"></div>

      <h1 className="text-3xl font-bold text-center my-6">
        Concepts Familiar with and Achievements:
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Data Structures"
          image="/cs.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="Object Oriented Programming"
          image="/cs.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="Unity Engine"
          image="/unity.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="Unity Scripting"
          image="/unity.png"
          text="Intermediate level proficiency."
          link="unity"
        />
        <SmallerCard
          title="Game Design"
          image="/unity.png"
          text="Advanced level proficiency."
          link="unity"
        />
        <SmallerCard
          title="Glitchpop 2024"
          image="/glitchpop.png"
          text="2nd Runner up National"
          link="unity"
        />
      </ul>
    </>
  );
};

export default unity;
