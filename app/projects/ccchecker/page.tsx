import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const ContractContradictionChecker = () => {
  return (
    <>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-10">
        {" "}
        Contract Contradiction Checker{" "}
      </h1>

      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4">
        This was a Machine Learning Project that was made as a participation in
        the IITISoC competition by a team of two participants. The project made
        use of NLI technique to point out the contradiction between any two
        sentences. We added a lot of GUI interfaces and made use of NLP
        techniques to add the ability to extract sentences from a long text and
        checking their contradiction to a given claim. Along with the same, a
        number of additional features were added in the form of translation and
        other NLP techniques like Text-To-Speech, Speech Recognition, Speech
        Synthesis and Translation to allow even Layman speakers to understand
        the output. It was targetted towards underprivileged people that are
        unable to understand legal concepts and can thus use this tool to find
        out contradictions and save them from exploitation.
      </p>

      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-10">
        Concepts Required
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Python"
          image="/python.png"
          text="Intermediate Level Proficiency"
          link="python"
        />
        <SmallerCard
          title="Pytorch"
          image="/pytorch.png"
          text="Intermediate Level Proficiency"
          link="python"
        />
        <SmallerCard
          title="Numpy"
          image="/logo.svg"
          text="Intermediate Level Proficiency"
          link="python"
        />
        <SmallerCard
          title="Pandas"
          image="/pandas.png"
          text="Intermediate Level Proficiency"
          link="python"
        />
        <SmallerCard
          title="Gradio"
          image="/gradio.png"
          text="Intermediate Level Proficiency"
          link="python"
        />
      </ul>
    </>
  );
};

export default ContractContradictionChecker;
