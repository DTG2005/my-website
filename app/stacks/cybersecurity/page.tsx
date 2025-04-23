import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const cybersecurity = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">Cybersecurity</h1>
      <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
        I have been actively participating in various CTF competitions as a part
        of Programming Club. I am familiar with a number of cybersecurity
        concepts and tools, including forensics, web security, binary
        exploitation, OSINT and cryptography. I am looking forward to working on
        projects as well
      </p>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold my-6 text-center">
        Concepts Familiar with
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="Forensics"
          image="/cybersecurity.png"
          text="Intermediate level proficiency."
          link="cybersecurity"
        />
        <SmallerCard
          title="Web Security"
          image="/cybersecurity.png"
          text="Beginner level proficiency."
          link="cybersecurity"
        />
        <SmallerCard
          title="Binary Exploitation"
          image="/cybersecurity.png"
          text="Beginner level proficiency."
          link="cybersecurity"
        />
        <SmallerCard
          title="OSINT"
          image="/cybersecurity.png"
          text="Beginner level proficiency."
          link="cybersecurity"
        />
        <SmallerCard
          title="Cryptography"
          image="/cybersecurity.png"
          text="Intermediate level proficiency."
          link="cybersecurity"
        />
      </ul>
    </>
  );
};

export default cybersecurity;
