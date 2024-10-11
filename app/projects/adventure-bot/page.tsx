import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";
import { Button } from "@nextui-org/react";

const Quatara = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">Adventure Bot</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        Adventure Bot is a python based Discord Chatbot coded using Discord.py
        library that provides features for managing servers and admministration
        purposes, on top of having a number of fun commands. The bot was
        developed upto beta stage, and then abandoned due to the lack of
        interest and redundancy.
      </p>
      <div className="h-6"></div>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        This was my first real project in Python as well as my first experience
        with Game Design and Development.
      </p>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">
        Concepts Required:
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Python"
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
          title="Discord API"
          image="/discordpy.png"
          text="Intermediate level proficiency."
          link="python"
        />
        <SmallerCard
          title="Game Design"
          image="/unity.png"
          text="Intermediate level proficiency."
          link="unity"
        />
      </ul>
      <div className="flex items-center justify-center m-10">
        <a href="https://github.com/DTG2005/Adventure-Bot">
          <Button className="text-blue-500 dark:text-green-500 hover:text-blue-700 transition duration-300 ease-in-out">
            View on Github
          </Button>
        </a>
      </div>
    </>
  );
};

export default Quatara;
