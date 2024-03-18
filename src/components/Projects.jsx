import HeadHelmet from "./HeadHelmet";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
import Image from "./Image";
import { GithubIcon } from "./icons";
import TransitionEffect from "./TransitionEffect";
import RuotaLibera from "/images/projects/RuotaLibera.webp";
import ProxiSaldatura from "/images/projects/ProxiSaldatura.webp";
import YelpCamp from "/images/projects/YelpCamp.webp";
import Omnifood from "/images/projects/Omnifood.webp";
import { useTranslation } from "react-i18next";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article
      className=" w-full flex items-center justify-between rounded-3xl 
    border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl
    dark:bg-dark dark:border-light
    lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light
      xs:-right-2 xs:h-[102%] xs:w-full xs:rounded-[1.5rem]"
      />

      <motion.div
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image urlImage={img} alt={title} classProp="w-full h-auto" />
      </motion.div>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <a href={github} target="_blank" className="w-10 ">
            <GithubIcon />
          </a>
          <a
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold 
            dark:bg-light dark:text-dark
            sm:px-4 sm:text-base"
          >
            Visit Project
          </a>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github, summary, visit }) => {
  return (
    <article
      className="group w-full flex flex-col items-center justify-center rounded-2xl
    border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
    xs:p-4"
    >
      <div
        className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] group-hover:bg-dark group-hover:dark:bg-light rounded-br-3xl transition duration-200
      md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]"
      />

      <motion.div
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg h-64 "
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image urlImage={img} alt={title} classProp="w-full h-64" />
      </motion.div>
      <div className="w-full flex flex-col items-start justify-between mt-4 ">
        <span className="text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <a
          href={link}
          target="_blank"
          className="hover:underline underline-offset-4"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl h-16 xl:h-24 sm:h-auto md:h-auto xs:h-auto">
            {title}
          </h2>
        </a>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>

        <div className="w-full mt-2 flex items-center justify-between">
          <a
            href={link}
            target="_blank"
            className=" text-lg font-semibold underline md:text-base"
          >
            {visit}
          </a>
          {/* <a href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </a> */}
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  const { t } = useTranslation();
  const {
    projectTitle,
    pro1,
    pro2,
    pro3,
    pro4,
    pro1Title,
    pro2Title,
    pro3Title,
    pro4Title,
    visit,
  } = t("projects");

  return (
    <>
      <TransitionEffect />
      <HeadHelmet title={useLocation().pathname} />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16 sm:!p-6 xs:p-5">
          <AnimatedText
            text={projectTitle}
            className="mb-16 lg:text-7xl sm:mb-8 sm:!text-5xl xs:!text-2xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-8 xl:gap-y-24  lg:gap-x-8 lg:gap-y-16 md:gap-x-6 md:gap-y-24 sm:gap-x-4 xs:gap-x-0">
            {/* <div className="col-span-12"> */}
            {/* <FeaturedProject
                title="Crypto Screener Application"
                summary="A feature-rich Crypto Screener App using React, Tailwind CSS, Context API, React Router and Recharts. 
              It shows detail regarding almost all the cryptocurrency. You can easily convert the price in your 
                            local currency."
                link="/"
                type="Featured Project"
                img={imgProject1}
              />
            </div> */}
            <div className="col-span-6 md:col-span-12 lg:col-span-12 sm:col-span-12">
              <Project
                title={pro1Title}
                summary={pro1}
                link="https://ruotaliberabrescia.com/"
                type="Wordpress, HTML, CSS"
                img={RuotaLibera}
                visit={visit}
              />
            </div>
            <div className="col-span-6 md:col-span-12 lg:col-span-12 sm:col-span-12">
              <Project
                title={pro2Title}
                summary={pro2}
                link="https://proxisaldatura.com/"
                type="Wix"
                img={ProxiSaldatura}
                visit={visit}
              />
            </div>
            <div className="col-span-6 md:col-span-12 lg:col-span-12 sm:col-span-12">
              <Project
                title={pro3Title}
                summary={pro3}
                link="#"
                type="HTML, CSS, Javascript, Node e MongoDB"
                img={YelpCamp}
                visit={visit}
              />
            </div>
            <div className="col-span-6 md:col-span-12 lg:col-span-12 sm:col-span-12">
              <Project
                title={pro4Title}
                summary={pro4}
                link="https://magicgionson93.github.io/omnifood/"
                type="HTML, CSS e Javascript"
                img={Omnifood}
                visit={visit}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
