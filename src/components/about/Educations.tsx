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
      <h2 className="font-bold text-8xl my-16 w-full text-center">Education</h2>
      <div ref={ref} className="w-full my-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />
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
