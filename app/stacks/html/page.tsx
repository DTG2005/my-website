import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const page = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        HTML
      </h1>
      <p className="text-lg">
        I have an intermediate level proficiency in HTML. I have experience with
        using HTML for basic web development and have used it majorly as a
        stepping stone to gain proficiency in other technologies.
      </p>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        Concepts Familiar with:
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Web Development"
          image="/html.png"
          text="Intermediate level proficiency."
          link="html"
        />
      </ul>
    </>
  );
};

export default page;
