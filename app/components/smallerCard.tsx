import Image from "next/image";

export interface CardProps {
  title: string;
  image: string;
  text: string;
  link: string;
}

export const SmallerCard: React.FC<CardProps> = ({
  title,
  image,
  text,
  link,
}: CardProps) => {
  return (
    <a
      href={`/stacks/${link}`}
      className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
    >
      <Image
        src={image}
        className="w-16 h-16 rounded-full"
        alt={title}
        width={64}
        height={64}
      />
      <div>
        <h5 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
          {text}
        </p>
      </div>
    </a>
  );
};
