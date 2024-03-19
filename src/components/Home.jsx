import "../styles/globals.css";
import "../styles/App.css";
import "../output.css";
import profilePic from "/images/profile/profile.webp";
// import { LinkArrow } from "../components/icons";
import TransitionEffect from "../components/TransitionEffect";
import AnimatedText from "../components/AnimatedText";
import Image from "../components/Image";
import Layout from "../components/Layout";
import HireMe from "../components/HireMe";
import HeadHelmet from "./HeadHelmet";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const { homeTitle, bio } = t("home");
  return (
    <>
      <TransitionEffect />

      <HeadHelmet title={useLocation().pathname} />

      {/* <NavBar /> */}
      <main className="flex items-center text-dark w-full min-h-screen xl:px-8 lg:p-8 xs:pb-4 xs:pt-6 md:p-4 sm:p-2 xs:p-2">
        <Layout className="pt-0 pb-24  sm:!p-6 xs:p-6  lg:!p-2 xl:!p-0">
          <div className="flex items-center justify-between w-full lg:flex-col xl:mt-8 ">
            <div className=" w-1/2 lg:w-3/4 ">
              <Image
                urlImage={profilePic}
                alt="Giovanni Pasini"
                classProp="w-3/4 h-auto xl:w-full rounded-md md:inline-block md:w-full lg:mx-auto lg:!-mt-8 "
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-start mt-10 lg:w-full lg:text-center lg:!pl-0 sm:p-0 md:p-0 xl:pl-4">
              <AnimatedText
                text={homeTitle}
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!size-6xl md:!text-5xl sm:!text-4xl xs:!text-3xl"
              />
              <p className="mt-8 text-base font-medium dark:text-light ">
                {bio}
              </p>
              {/* <div className="flex items-center self-start mt-20 lg:mt-8 lg:self-center">
                <a
                  href={CV}
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 
                   rounded-lg text-lg font-semibold  hover:bg-light hover:text-dark
                   border-2 border-solid border-transparent hover:border-dark

                   dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                   hover:dark:border-light md:pd-2 md:px-4 md:text-base"
                  download={true}
                >
                  CV <LinkArrow className={"w-6 ml-1"} />
                </a>
                <a
                  href="mailto: gpasini93@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline
                  dark:text-light md:text-base
                            "
                >
                  Contatto
                </a>
              </div> */}
            </div>
          </div>
        </Layout>
        <HireMe />
        {/* <div className="absolute right-8 bottom-8 inline-block w-4 h-4">
          <Image
            urlImage={lightBulb}
            alt="Giovanni Pasini"
            className="w-full h-auto"
          />
        </div> */}
      </main>
    </>
  );
}
