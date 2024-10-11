import React from "react";
import { SmallerCard } from "@/app/components/smallerCard";

const page = () => {
  return (
    <>
      <div className="h-6"></div>
      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        SQL
      </h1>

      <p className="text-lg">
        I have an intermediate level proficiency in SQL. I have made projects
        involving SQL and other Database Management Systems (like JSON and
        MongoDB). I am familiar with the datatypes, and basic syntax of the SQL
        language.
      </p>

      <div className="h-6"></div>

      <h1 className="text-3xl font-bold font-[family-name:var(--font-geist-mono)] text-center my-6">
        Concepts Familiar with:
      </h1>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        <SmallerCard
          title="MySQL"
          image="/mysql.svg"
          text="Intermediate level proficiency."
          link="sql"
        />
        <SmallerCard
          title="SQLite"
          image="/sqlite.png"
          text="Intermediate level proficiency."
          link="sql"
        />
        <SmallerCard
          title="JSON"
          image="/json.png"
          text="Intermediate level proficiency."
          link="sql"
        />
        <SmallerCard
          title="MongoDB"
          image="/mongodb.svg"
          text="Intermediate level proficiency."
          link="sql"
        />
      </ul>
    </>
  );
};

export default page;
