import AnimatedText from "@/components/shared/AnimatedText";
import Layout from "@/components/shared/Layout";
import Head from "next/head";
import React from "react";
import img from "../../public/images/articles/pagination component in reactjs.jpg";
import img1 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import { FeaturedArticle } from "../components/articles/FeaturedArticle";

const articles = () => {
  return (
    <>
      <Head>
        <title>Khaled | Projects</title>
        <meta name="projects" content="This page describes my projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <>
            <AnimatedText
              text="Words Can Change The World!"
              className="mb-16"
            />
            <ul className="grid grid-cols-2 gap-16">
              <FeaturedArticle
                img={img}
                link="/"
                title="Build A Custom Pagination Component In Reactjs From Scratch Learn"
                summery="how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project."
                time="9 min read"
              />

              <FeaturedArticle
                img={img1}
                link="/"
                title="Build A Custom Pagination Component In Reactjs From Scratch Learn"
                summery="how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project."
                time="9 min read"
              />
            </ul>
            <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
              All Articles
            </h2>
          </>
        </Layout>
      </main>
    </>
  );
};

export default articles;
