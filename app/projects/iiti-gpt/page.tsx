import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const iitigpt = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline text-center my-10">
        IITI GPT
      </h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mx-4">
        IITI GPT is a web application that allows users to chat with an NLP
        chatbot that answers questions about the IITI campus. It features a
        microphone and a speaker for input and output purposes along with a
        control button and a chat history. It was made by a collaboration of
        Cynaptics and Robotics Club of IIT Indore. The project is incomplete
        because of technical issues.
      </p>

      <div className="h-6"></div>

      <h1 className="text-3xl font-bold font-mono text-center my-10">
        {" "}
        Concepts Required
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Python"
          image="/python.png"
          text="Intermediate level proficiency."
          link="python"
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

export default iitigpt;
