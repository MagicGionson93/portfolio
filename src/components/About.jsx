import "../styles/globals.css";
import "../styles/App.css";
import "../output.css";
import profilePic from "/images/profile/profile.webp";

import AnimatedText from "./AnimatedText";
import Layout from "./Layout";
import Image from "../components/Image";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

import React, { useEffect, useRef } from "react";
import HeadHelmet from "./HeadHelmet";
import { useLocation } from "react-router-dom";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import TransitionEffect from "./TransitionEffect";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const { line1, line2, line3, line4, aboutTitle, bioTitle, num1, num2, num3 } =
    t("about");
  const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        motionValue.set(value);
      }
    }, [isInView, value, motionValue]);

    useEffect(() => {
      springValue.on("change", (latest) => {
        // console.log(latest);
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      });
    }, [springValue, value]);

    return <span ref={ref}> </span>;
  };

  return (
    <>
      <TransitionEffect />

      <HeadHelmet title={useLocation().pathname} />

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 sm:!p-6 xs:p-5 pb-0">
          <AnimatedText
            text={aboutTitle}
            className="mb-16 lg:!text-[3.9rem] sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className=" grid w-full grid-cols-8 gap-16 mb-16 dark:text-light sm:gap-8 xs:justify-center">
            <div
              className="col-span-3 flex flex-col items-start justify-start  md:order-2 lg:col-span-8 
            lg:place-content-center"
            >
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                {bioTitle}
              </h2>
              <p className="font-medium">- {line1}</p>
              <p className="font-medium">- {line2}</p>
              <p className="font-medium">- {line3}</p>
              <p className="font-medium">- {line4}</p>
            </div>

            <div
              className=" col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-4 dark:bg-dark dark:border-light md:!col-span-8 xl:col-span-4 2xl:col-span-3 lg:!col-span-8 md:order-1
            "
            >
              <div
                className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark
              dark:bg-light "
              />
              <Image
                urlImage={profilePic}
                alt="About Picture"
                classProp="w-full h-auto rounded-2xl"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between lg:flex-row xs:flex-col xl:items-center lg:col-span-8  md:order-3 ">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={3} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {num1}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {num2}
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold  md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={1} />+
                </span>
                <h2 className="text-xl font-medium capitalize xl:text-center md:text-lg sm:text-base xs:text-sm">
                  {num3}
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
