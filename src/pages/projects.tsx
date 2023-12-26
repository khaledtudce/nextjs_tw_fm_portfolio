import React from "react";
import Head from "next/head";
import Layout from "@/components/shared/Layout";
import AnimatedText from "@/components/shared/AnimatedText";
import projectPicture1 from "../../public/images/projects/crypto-screener-cover-image.jpg";
import { FeaturedProject } from "../components/projects/FeaturedProject";
import { Project } from "../components/projects/Project";

const project = () => {
  return (
    <>
      <Head>
        <title>Khaled | Projects</title>
        <meta name="projects" content="This page describes my projects" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <>
            <AnimatedText
              text="Imagination Trumps Knowledge!"
              className="mb-16"
            />
            <div className="grid grid-cols-12 gap-24 gap-y-32">
              <div className="col-span-12">
                <FeaturedProject
                  title="Crypto Screener Application"
                  summery="  Crypto Screener Application A feature-rich Crypto Screener App
                using React, Tailwind CSS, Context API, React Router and
                Recharts. It shows detail regarding almost all the
                cryptocurrency. You can easily convert the price in your local
                currency."
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>

              <div className="col-span-6">
                <Project
                  title="Crypto Screener Application"
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Crypto Screener Application"
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>

              <div className="col-span-12">
                <FeaturedProject
                  title="Crypto Screener Application"
                  summery="  Crypto Screener Application A feature-rich Crypto Screener App
                using React, Tailwind CSS, Context API, React Router and
                Recharts. It shows detail regarding almost all the
                cryptocurrency. You can easily convert the price in your local
                currency."
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>

              <div className="col-span-6">
                <Project
                  title="Crypto Screener Application"
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>
              <div className="col-span-6">
                <Project
                  title="Crypto Screener Application"
                  link="/"
                  type="Featured Projects"
                  img={projectPicture1}
                  github="https://github.com"
                />
              </div>
            </div>
          </>
        </Layout>
      </main>
    </>
  );
};

export default project;
