import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type FeaturedArticleProps = {
  img: StaticImageData;
  title: string;
  time: string;
  summery: string;
  link: string;
};

export const FrameImage = motion(Image);

export const FeaturedArticle = ({
  img,
  title,
  time,
  summery,
  link,
}: FeaturedArticleProps) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[102%] rounded-[1rem] bg-dark rounded-br-3xl" />
      <Link
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
        href={link}
        target="_blank"
      >
        <FrameImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summery}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  );
};
