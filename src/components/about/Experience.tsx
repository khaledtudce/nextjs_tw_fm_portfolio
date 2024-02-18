import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { ExperienceDetail } from "./ExperienceDetail";

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl my-16 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-full my-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <ExperienceDetail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="https://www.google.com"
            work="Worked on a 
          team responsible for developing new features for Google's search
          engine, including improving the accuracy and relevance of search
          results and developing new tools for data analysis and visualization."
          />
          <ExperienceDetail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="https://www.google.com"
            work="Worked on a 
          team responsible for developing new features for Google's search
          engine, including improving the accuracy and relevance of search
          results and developing new tools for data analysis and visualization."
          />
          <ExperienceDetail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="https://www.google.com"
            work="Worked on a 
          team responsible for developing new features for Google's search
          engine, including improving the accuracy and relevance of search
          results and developing new tools for data analysis and visualization."
          />
          <ExperienceDetail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="https://www.google.com"
            work="Worked on a 
          team responsible for developing new features for Google's search
          engine, including improving the accuracy and relevance of search
          results and developing new tools for data analysis and visualization."
          />
          <ExperienceDetail
            position="Software Engineer"
            company="Google"
            time="2022-Present"
            address="Mountain View, CA"
            companyLink="https://www.google.com"
            work="Worked on a 
          team responsible for developing new features for Google's search
          engine, including improving the accuracy and relevance of search
          results and developing new tools for data analysis and visualization."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
