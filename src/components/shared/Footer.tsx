import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-5">
        <div className="flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <Link href="mailto:khaledreza@gmail.com">Say Hello</Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
