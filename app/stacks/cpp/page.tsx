import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const cpp = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold text-center">C++</h1>
      <p className="text-lg">
        I have an intermediate level proficiency in C++. I have experience with
        using C++ for command line tools and have used it to create a few
        projects. I am familiar with the standard library, templates, and
        object-oriented programming in C++. Along with the same I have worked in
        blender in first year for my GSoC submission and therefore I am also
        familiar with large codebases and object-oriented paradigms.
      </p>

      <div className="h-6"></div>
      <h1 className="text-3xl font-bold text-center">
        Concepts Familiar with:
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Data Structures"
          image="/cpp.png"
          text="Intermediate level proficiency."
          link="cpp"
        />
        <SmallerCard
          title="Object Oriented Programming"
          image="/cpp.png"
          text="Intermediate level proficiency."
          link="cpp"
        />
        <SmallerCard
          title="SDL"
          image="/cpp.png"
          text="Beginner level proficiency"
          link="cpp"
        />
      </ul>
    </div>
  );
};

export default cpp;
