import React from "react";
import { CircularText } from "../shared/Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <CircularText className="fill-dark animate-spin-slow" rest="" />
        <Link
          href="mailto:khaledreza@gmail.com"
          className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md w-24 h-24 border border-solid font-semibold rounded-full hover:bg-slate-400 hover:text-blue-500"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
