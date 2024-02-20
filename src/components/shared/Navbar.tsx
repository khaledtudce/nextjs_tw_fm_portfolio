import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  PinterestIcon,
  SunIcon,
  TwitterIcon,
} from "./Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

type CustomerLinkProps = {
  href: string;
  title: string;
  className: string;
};

const CustomLink = ({ href, title, className = "" }: CustomerLinkProps) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

type CustomMobileLinkProps = {
  href: string;
  title: string;
  className: string;
  toggle: () => void;
};

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: CustomMobileLinkProps) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href);
  };
  return (
    <button
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full translate-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenClose = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className="flex-col justify-center items-center hidden lg:flex"
        onClick={handleOpenClose}
      >
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm m-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav className="flex items-center gap-3">
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink
            href="/about"
            title="About"
            className="mx-4
        "
          />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4
        "
          />
          <CustomLink
            href="/articles"
            title="Articles"
            className="ml-4
        "
          />
        </nav>
        <nav className="flex items-center justify-center flex-wrap gap-3">
          <motion.a
            href="https://twitter.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <TwitterIcon className="w-[28px] mx-1" rest="" />
          </motion.a>
          <motion.a
            href="https://github.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <GithubIcon className="w-[28px] mx-1" rest="" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <LinkedInIcon className="w-[28px] mx-1" rest="" />
          </motion.a>
          <motion.a
            href="https://www.pinterest.de"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <PinterestIcon className="w-[28px] mx-1" rest="" />
          </motion.a>
          <motion.a
            href="https://dribble.com"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.8 }}
          >
            <DribbbleIcon className="w-[28px] mx-1" rest="" />
          </motion.a>
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            }`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <SunIcon className="fill-dark" rest="" />
            ) : (
              <MoonIcon className="fill-dark" rest="" />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center gap-6">
            <CustomMobileLink
              href="/"
              title="Home"
              className=""
              toggle={handleOpenClose}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=""
              toggle={handleOpenClose}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=""
              toggle={handleOpenClose}
            />
            <CustomMobileLink
              href="/articles"
              title="Articles"
              className=""
              toggle={handleOpenClose}
            />
          </nav>
          <nav className="flex items-center justify-center flex-wrap gap-2 mt-4">
            <motion.a
              href="https://twitter.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <TwitterIcon className="w-[28px] mx-1" rest="" />
            </motion.a>
            <motion.a
              href="https://github.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <GithubIcon
                className="w-[28px] mx-1 bg-light rounded-full dark:bg-dark"
                rest=""
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <LinkedInIcon className="w-[28px] mx-1" rest="" />
            </motion.a>
            <motion.a
              href="https://www.pinterest.de"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <PinterestIcon className="w-[28px] mx-1" rest="" />
            </motion.a>
            <motion.a
              href="https://dribble.com"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.8 }}
              className="w-6 mr-3 sm:mx-1"
            >
              <DribbbleIcon className="w-[28px] mx-1" rest="" />
            </motion.a>
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
              }`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <SunIcon className="fill-dark" rest="" />
              ) : (
                <MoonIcon className="fill-dark" rest="" />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
