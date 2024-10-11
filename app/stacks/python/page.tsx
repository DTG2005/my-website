import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const page = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        Python
      </h1>

      <p className="text-lg">
        I have an advanced level proficiency in Python. I have experience with a
        number of libraries and have used it to create a few projects. I am
        familiar with the standard library, templates, and object-oriented
        programming in Python. A number of projects are also displayed on the
        homepage which show my experience.
      </p>

      <div className="h-6"></div>

      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        Concepts Familiar with:
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Data Structures"
          image="/python.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Object Oriented Programming"
          image="/python.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Discord.py"
          image="/discordpy.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="PyTorch"
          image="/pytorch.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Numpy"
          image="/logo.svg"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Pandas"
          image="/Pandas.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Matplotlib"
          image="/matplotlib.svg"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Pennylane"
          image="/pennylane.png"
          text="Beginner level proficiency."
          link="python"
        />
        <SmallerCard
          title="Gradio"
          image="/gradio.png"
          text="Intermediate level proficiency."
          link="python"
        />
      </ul>
    </>
  );
};

export default page;
