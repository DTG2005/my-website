import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const js = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">JavaScript</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        I have experience with JavaScript and its various frameworks and
        libraries. I am familiar with the standard library, templates, and
        object-oriented programming in JavaScript. Projects displayed on the
        homepage show my experience.
      </p>
      <div className="h-6"></div>

      <h1 className="text-3xl font-bold my-6 text-center">
        Concepts Familiar with:
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Data Structures"
          image="/js.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="Object Oriented Programming"
          image="/js.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="Node.js"
          image="/nodejs.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="React.js"
          image="/react.svg"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="Next.js"
          image="/nextjs.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="Express.js"
          image="/expressjs.png"
          text="Intermediate level proficiency."
          link="js"
        />
      </ul>
    </>
  );
};

export default js;
