import React from "react";
import { motion } from "framer-motion";
import { MovingImg } from "@/components/articles/MovingImg";
import { StaticImageData } from "next/image";

export type ArticleProps = {
  img: StaticImageData;
  title: string;
  date: string;
  link: string;
};

export const Article = ({ img, title, date, link }: ArticleProps) => {
  return (
    <motion.li
      initial={{ y: 100 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:border-light dark:text-light"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark">
        {date}
      </span>
    </motion.li>
  );
};
