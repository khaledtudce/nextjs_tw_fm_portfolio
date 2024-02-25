import AnimatedText from "@/components/shared/AnimatedText";
import Layout from "@/components/shared/Layout";
import Head from "next/head";
import React from "react";
import { FeaturedArticle } from "../components/articles/FeaturedArticle";
import articleImg1 from "../../public/images/articles/todo list app built using react redux and framer motion.png";
import articleImg2 from "../../public/images/articles/pagination component in reactjs.jpg";
import articleImg3 from "../../public/images/articles/create modal component in react using react portals.png";
import articleImg4 from "../../public/images/articles/What is higher order component in React.jpg";
import articleImg5 from "../../public/images/articles/create loading screen in react js.jpg";
import articleImg6 from "../../public/images/articles/form validation in reactjs using custom react hook.png";
import articleImg7 from "../../public/images/articles/smooth scrolling in reactjs.png";
import articleImg8 from "../../public/images/articles/create loading screen in react js.jpg";
import { Article } from "../components/articles/Article";

const articles = () => {
  return (
    <>
      <Head>
        <title>Khaled | Projects</title>
        <meta name="projects" content="This page describes my projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16">
          <>
            <AnimatedText
              text="Words Can Change The World!"
              className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
            />
            <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
              <FeaturedArticle
                img={articleImg2}
                link="/"
                title="Build A Custom Pagination Component In Reactjs From Scratch Learn"
                summery="how to build a custom pagination component in ReactJS from
                scratch. Follow this step-by-step guide to integrate Pagination
                component in your ReactJS project."
                time="9 min read"
              />

              <FeaturedArticle
                img={articleImg1}
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
            <ul>
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg3}
                link="/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg4}
                link="/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg5}
                link="/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg6}
                link="/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg7}
                link="/"
              />
              <Article
                title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
                date="March 22, 2023"
                img={articleImg8}
                link="/"
              />
            </ul>
          </>
        </Layout>
      </main>
    </>
  );
};

export default articles;
