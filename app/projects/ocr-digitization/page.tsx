import { SmallerCard } from "@/app/components/smallerCard";
import React from "react";

const ocrdig = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-mono text-center my-10">
        OCR Digitization
      </h1>

      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4">
        A Web Application that features a full blown authentication based
        interface that enables digitization of healthcare records. It was
        developed under SIDDHI internship program by Charak Foundation by a
        group of developers including myself.
      </p>

      <div className="h-6"></div>

      <h1 className="text-3xl font-bold font-mono text-center my-10">
        Concepts Required
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Javascript"
          image="/js.png"
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
          title="Node.js"
          image="/nodejs.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="Express.js"
          image="/expressjs.png"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="MongoDB"
          image="/mongodb.svg"
          text="Intermediate level proficiency."
          link="js"
        />
        <SmallerCard
          title="next.js"
          image="/nextjs.png"
          text="Intermediate level proficiency."
          link="js"
        />
      </ul>
    </>
  );
};

export default ocrdig;
