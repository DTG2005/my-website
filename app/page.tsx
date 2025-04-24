"use client";
import Image from "next/image";
import { Card } from "./components/card";
import { SmallerCard } from "./components/smallerCard";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[40px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="row-start-1 sm:row-start-1 w-full h-full"></div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/my-website/profile-pic.png"
              alt="profile picture of developer DTG2005"
              className="fade-in-fwd"
              height={500}
              width={500}
            />
          </div>
          <h1 className="text-4xl font-bold">Welcome to my personal website</h1>
          <p className="text-lg">
            I am a passionate student learning about various tech niches and
            exploring my proficiency in the same by trying out different
            projects and concepts. I am currently in my 2nd year for Bachelor of
            Technology in the Computer Science and Engineering Department at IIT
            Indore.
          </p>
          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://github.com/DTG2005"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                alt="GitHub logo"
                width={20}
                height={20}
              />
              GitHub
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://linkedin.com/in/your-username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/my-website/LI-In-Bug.png"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
          </div>
          <div className="h-6"></div>
          <h1 className="text-3xl font-bold">Tech Stacks</h1>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <SmallerCard
              title="C++"
              image="/cpp.png"
              text="Intermediate level proficiency."
              link="cpp"
            />
            <SmallerCard
              title="Python"
              image="/python.png"
              text="Advanced level proficiency."
              link="python"
            />
            <SmallerCard
              title="JavaScript (And Web Development)"
              image="/js.png"
              text="Intermediate level proficiency"
              link="js"
            />
            <SmallerCard
              title="HTML"
              image="/html.png"
              text="Intermediate level proficiency"
              link="html"
            />
            <SmallerCard
              title="Unity with C#"
              image="/unity.png"
              text="Intermediate level proficiency"
              link="unity"
            />
            <SmallerCard
              title="Java (And Minecraft Modding)"
              image="/java.png"
              text="Intermediate level proficiency"
              link="java"
            />
            <SmallerCard
              title="SQL"
              image="/sql.png"
              text="Intermediate level proficiency"
              link="sql"
            />
            <SmallerCard
              title="Cybersecurity"
              image="/cybersecurity.png"
              text="Intermediate level proficiency"
              link="cybersecurity"
            />
          </ul>
          <div className="h-6"></div>
          <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)]">
            Projects
          </h1>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
            <Card
              title="Quatara"
              image="/bot_pfp_rendering.png"
              text="Quatara is a python based Discord Chatbot coded using Discord.py library that provides features for managing servers and admministration purposes, on top of having a number of fun commands. The bot has a number of stable versions and its development, through continuous, is currently on hiatus."
              link="quatara"
            />
            <Card
              title="Adventure Bot"
              image=""
              text="Adventure Bot is a python based Discord Chatbot coded using Discord.py library that plays an adventure RPG with the users. It was developed for a while till it reached beta stage, and then abandoned due to the lack of interest and redundancy. The bot is currently on hiatus."
              link="adventure-bot"
            />
            <Card
              title="Infinite Scroller Game"
              image="/unity.png"
              text="A Unity based game made in C# for GDSC club inductions using Unity Game Engine. In this game you will be able to play as an infinite scrolling cube where you have to dodge obstacles."
              link="infscroller"
            />
            <Card
              title="Know It All RPG"
              image="/unity.png"
              text="A Unity based RPG game made using Unity Game Engine and C# for as a part of GDSC projects. This was a team project and our team made an RPG game with integration of NLP models to simulate user interaction."
              link="kiarpg"
            />
            <Card
              title="Contract Contradiction Checker"
              image="/pytorch.png"
              text="A Machine Learning based Gradio application that checks whether two sentences contradict or not. It also has additional functionality in the form of a GUI, translation and other NLP features and the ability to extract sentences from a long text and checking their contradiction to a given claim."
              link="ccchecker"
            />
            <Card
              title="IITI-GPT"
              image="/pytorch.png"
              text="A Machine Learning interface that takes input from a microphone and uses a speaker to simulate Text-To-Speech and generate responses related to IIT Indore. It was made by a collaboration of Cynaptics and Robotics Club of IIT Indore. The project is incomplete because of technical issues."
              link="iiti-gpt"
            />
            <Card
              title="OCR Digitization"
              image="/charakLogo.png"
              text="A Web Application that features a full blown authentication based interface that enables digitization of healthcare records. It was developed under SIDDHI internship program by Charak Foundation  by a group of developers including myself."
              link="ocr-digitization"
            />
          </ul>
          <div className="flex flex-col gap-4 mt-12">
            <h2 className="text-2xl font-bold">Contact Me</h2>
            <p className="text-lg">
              If you want to contact me for any reason, whether it be for a
              collaboration, a project, or just to talk, feel free to use any of
              the following methods:
            </p>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#f2f2f2] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 dark:hover:invert"
              href="mailto:divyamthegreat5@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/my-website/mail.jpg"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
              Email
            </a>
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://discord.com/users/305403872438910977"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className=""
                src="/my-website/discord.png"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
              Discord
            </a>
          </div>
        </main>
        <footer className="flex items-center justify-center w-full h-12 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Copyright 2024 Divyam Maru
          </p>
        </footer>
      </div>
    </>
  );
}
