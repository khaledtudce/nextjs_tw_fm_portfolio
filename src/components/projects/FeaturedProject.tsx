import React from "react";
import Link from "next/link";
import { GithubIcon } from "@/components/shared/Icons";
import Image, { StaticImageData } from "next/image";

export type FeaturedProjectProps = {
  type: string;
  title: string;
  summery: string;
  img: StaticImageData;
  link: string;
  github: string;
};

export const FeaturedProject = ({
  type,
  title,
  summery,
  img,
  link,
  github,
}: FeaturedProjectProps) => {
  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid bg-light shadow-2xl p-12 relative rounded-br-2xl">
      <div className="absolute top-0 -right-4 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          className="hover:underline underline-offset-2"
          href={link}
          target="_blank"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summery}</p>
        <div className="mt-2 flex items-center">
          <Link className="w-10" href={github} target="_blank">
            <GithubIcon className="" rest="" />
          </Link>
          <Link
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold"
            href={link}
            target="_blank"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};
