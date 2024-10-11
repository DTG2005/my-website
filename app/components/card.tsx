import Image from "next/image";

export interface CardProps {
  title: string;
  image: string;
  text: string;
  link: string;
}

export const Card = ({ title, image, text, link }: CardProps) => {
  return (
    <a
      href={`/projects/${link}`}
      className="block m-4 md:m-6 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Image
        src={image}
        className="rounded-t-lg"
        alt={title}
        width={500}
        height={500}
      />
      <h5 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white my-1.5">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">{text}</p>
    </a>
  );
};
