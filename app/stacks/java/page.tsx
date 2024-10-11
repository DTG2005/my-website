import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const java = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">Java</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        I have an intermediate level proficiency in Java. I have experience with
        using Java for command line tools. I am familiar with the standard
        library, templates, and object-oriented programming in Java. Along with
        the same I have learnt Minecraft Modding in Java.
      </p>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">
        Concepts Familiar with
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Data Structures"
          image="/java.png"
          text="Intermediate level proficiency."
          link="java"
        />
        <SmallerCard
          title="Object Oriented Programming"
          image="/java.png"
          text="Intermediate level proficiency."
          link="java"
        />
        <SmallerCard
          title="Minecraft Modding"
          image="/minecraft.png"
          text="Beginner level proficiency."
          link="java"
        />
      </ul>
    </>
  );
};

export default java;
