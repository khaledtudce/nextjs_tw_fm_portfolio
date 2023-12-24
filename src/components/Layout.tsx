import React from "react";

type LayoutProps = {
  children: string;
  className: String;
};

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-light p-32`}
    >
      {children}
    </div>
  );
};

export default Layout;
