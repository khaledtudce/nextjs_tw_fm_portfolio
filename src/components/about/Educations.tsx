import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { EducationDetail } from "./EducationDetail";

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl my-16 w-full text-center lg:text-6xl md:text-4xl xs:text-3xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <EducationDetail
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="
          Relevant courses included Data Structures and Algorithms, Computer
          Systems Engineering, and Artificial Intelligence."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 my-16">
          <EducationDetail
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="
          Relevant courses included Data Structures and Algorithms, Computer
          Systems Engineering, and Artificial Intelligence."
          />
        </ul>
        <ul className="w-full flex flex-col items-start justify-between ml-4 my-16">
          <EducationDetail
            type="Bachelor Of Science In Computer Science"
            time="2016-2020"
            place="Massachusetts Institute Of Technology (MIT)"
            info="
          Relevant courses included Data Structures and Algorithms, Computer
          Systems Engineering, and Artificial Intelligence."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
