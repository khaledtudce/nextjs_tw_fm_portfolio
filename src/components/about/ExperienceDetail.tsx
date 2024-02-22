import React, { useRef } from "react";
import ExpLiIcons from "./ExpLiIcons";
import { motion } from "framer-motion";

type DetailsProps = {
  position: string;
  company: string;
  companyLink: string;
  time: string;
  address: string;
  work: string;
};

export const ExperienceDetail = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-center lg:w-[70%] md:w-[80%]"
    >
      <ExpLiIcons reference={ref} />
      <motion.div
        initial={{ y: 100 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            className="text-primary capitalize dark:text-primaryDark"
            target="_blank"
            href={companyLink}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};
