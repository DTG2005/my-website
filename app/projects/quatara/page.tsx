import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";
import { Button } from "@nextui-org/react";

const Quatara = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">Quatara</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        Quatara is a python based Discord Chatbot coded using Discord.py library
        that provides features for managing servers and admministration
        purposes, on top of having a number of fun commands. The bot has a
        number of stable versions and its development, through continuous, is
        currently on hiatus.
      </p>
      <div className="h-6"></div>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        The bot was originally developed for a specific server of an
        acquaintance of mine for certain customized functionalities and the
        development continued from that point on. It was moved to Github and
        made open source to invite contributions of any and all kinds.
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
      </ul>
      <div className="flex items-center justify-center m-10">
        <a href="https://github.com/DTG2005/Quatara">
          <Button className="text-blue-500 dark:text-green-500 hover:text-blue-700 transition duration-300 ease-in-out">
            View on Github
          </Button>
        </a>
      </div>
    </>
  );
};

export default Quatara;
