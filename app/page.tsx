"use client";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[40px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="row-start-1 sm:row-start-1 w-full h-full">
          <nav className="flex items-center justify-between w-full row-start-1 sm:justify-items-start bg-slate-700 h-16 px-12">
            <p className="text-3xl font-bold">DTG2005</p>
            <div className="flex gap-4 items-center">
              <button
                className="text-2xl font-bold transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white h-full"
                onClick={() =>
                  window.open("https://github.com/DTG2005", "_blank")
                }
              >
                GitHub
              </button>
              <button
                className="text-2xl font-bold transition duration-300 ease-in-out hover:bg-slate-500 hover:text-white"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/david-taylor-7b5b021b0/",
                    "_blank"
                  )
                }
              >
                LinkedIn
              </button>
            </div>
          </nav>
        </div>
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-center">
          <div className="flex items-center justify-center">
            <Image
              src="/profile-pic.png"
              alt="profile picture of developer DTG2005"
              className="fade-in-fwd"
              height={500}
              width={500}
            />
          </div>
          <h1 className="text-4xl font-bold">Welcome to my personal website</h1>
          <p className="text-lg">
            I am a passionate and experienced developer with a strong background
            in web development. I have a proven track record of successfully
            delivering projects on time and exceeding client expectations.
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
                src="/LI-In-Bug.png"
                alt="LinkedIn logo"
                width={20}
                height={20}
              />
              LinkedIn
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
