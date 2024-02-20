import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg sm:text-base">
      <Layout className="py-5">
        <div className="flex items-center justify-between dark:text-light md:flex-col md:py-6">
          <span className="md:py-3">
            {new Date().getFullYear()} &copy; All Rights Reserved.
          </span>
          <Link href="mailto:khaledreza@gmail.com">Say Hello</Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
