import { useRef, forwardRef } from "react";
import HeadHelmet from "./HeadHelmet";
import { useLocation } from "react-router-dom";
import Layout from "./Layout";
import AnimatedText from "./AnimatedText";
// import Image from "./Image";
import { motion, useMotionValue } from "framer-motion";
// import article1 from "../../public/images/articles/pagination component in reactjs.jpg";
// import article2 from "../../public/images/articles/create loading screen in react js.jpg";
// import article3 from "../../public/images/articles/create modal component in react using react portals.png";
import TransitionEffect from "./TransitionEffect";

const Image = forwardRef(({ urlImage, alt, classProp }, ref) => {
  return (
    <img
      src={urlImage}
      alt={alt}
      className={classProp}
      ref={ref} // Assicurati che la ref venga passata all'elemento img
    />
  );
});

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(0);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <a
      href={link}
      target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        urlImage={img}
        alt={title}
        classProp="hidden w-96 h-auto absolute -left-24 rounded-lg z-10 md:!hidden"
        ref={imgRef}
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.3 } }}
      />
    </a>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="group relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl  dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] group-hover:bg-dark rounded-br-3xl transition duration-200" />

      <a
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg inline-block"
      >
        <FramerImage
          urlImage={img}
          alt={title}
          classProp="w-full h-auto "
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      </a>
      <a href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </a>
      <p className="text-sm mb-2 ">{summary}</p>
      <span className=" text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl 
    flex items-center justify-between bg-light text-dark
    first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light
    sm:flex-col
    "
    >
      <MovingImg title={title} img={img} link={link} />
      <span
        className="text-primary font-semibold pl-4 dark:text-primaryDark
      sm:self-start sm:pl-0 sm:pt-2 xs:text-sm"
      >
        {date}
      </span>
    </motion.li>
  );
};

export default function Articles() {
  return (
    <>
      <TransitionEffect />
      <HeadHelmet title={useLocation().pathname} />

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16 sm:!p-6 xs:p-5">
          <AnimatedText
            text="Words Can Change The World!"
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-5xl xs:!text-2xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="Build A Custom Pagination Component In Reactjs From Scratch
"
              summary="Learn how to build a custom pagination component in ReactJS from scratch.
Follow this step-by-step guide to integrate Pagination component in your ReactJS project."
              time="9 min read"
              link="/"
              // img={article1}
            />

            <FeaturedArticle
              title="Creating Stunning Loading Screens In React: Build 3 Types Of Loading Screens"
              summary="Learn how to create stunning loading screens in React with 3 different methods.
              Discover how to use React-Loading, React-Lottie & build a custom loading screen.
              Improve the user experience.
              "
              time="10 min read"
              link="/"
              // img={article2}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className="last:mb-10">
            <Article
              title="Form Validation In Reactjs: Build A Reusable Custom Hook For Inputs And Error Handling"
              // img={article1}
              date="March 14, 2024"
              link="/"
            />
            <Article
              title="Silky Smooth Scrolling In Reactjs: A Step-By-Step Guide For React Developers"
              // img={article3}
              date="March 14, 2024"
              link="/"
            />
          </ul>
        </Layout>
      </main>
    </>
  );
}

//

//

// Creating An Efficient Modal Component In React Using Hooks And Portals

// Build A Fabulous Todo List App With React, Redux And Framer-Motion

// Redux Simplified: A Beginner's Guide For Web Developers

// What Is Higher Order Component (Hoc) In React?
