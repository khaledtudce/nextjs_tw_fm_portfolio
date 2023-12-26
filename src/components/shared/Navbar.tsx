import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedInIcon,
  PinterestIcon,
  TwitterIcon,
} from "./Icons";

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
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav className="flex items-center gap-3">
        <CustomLink
          href="/"
          title="Home"
          className="mr-4
        "
        />
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
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
