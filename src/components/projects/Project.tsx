import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/shared/Icons";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  type: string;
  img: StaticImageData;
  link: string;
  github: string;
};

const FrameImage = motion(Image);

export const Project = ({ title, type, img, link, github }: ProjectProps) => {
  return (
    <article className="w-full flex flex-col items-center justify-between rounded-2xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1rem] bg-dark rounded-br-3xl" />
      <Link
        className="w-full cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl dark:text-primaryDark">
          {type}
        </span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            className="text-lg font-semibold underline"
            href={link}
            target="_blank"
          >
            Visit
          </Link>
          <Link className="w-8" href={github} target="_blank">
            <GithubIcon className="" rest="" />
          </Link>
        </div>
      </div>
    </article>
  );
};
