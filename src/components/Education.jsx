import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { Transition } from "@headlessui/react";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "scale" }}
      >
        {/* &nbsp; */}
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}{" "}
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full sm:text-xl md:text-lg">{info}</p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end ", "center start"],
  });
  return (
    <>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
          Educazione
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
            md:w-[2px] md:left-[30px] xs:left-[20px]"
            style={{ scaleY: scrollYProgress }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              type="Udemy / The Web Developer Bootcamp 2024"
              company="Udemy"
              time="2024"
              place="Online"
              info="Aggiornamento programmazione Javascript.
              Utilizzo di React, Node, Express e MongoDatabase.
              Approfondito la mia conoscenza sulla creazione di siti web."
            />
            <Details
              type="Udemy / The Complete Web Developer in 2023: Zero To Mastery"
              company="Udemy"
              time="2023"
              place="Online"
              info="Imparato a programmare in Javascript.
              Primo approccio con Javascript, React, Node, Machine Learning.
              Approfondito la mia conoscenza sulla creazione di siti web."
            />
            <Details
              type="Udemy / The Complete Python Bootcamp"
              company="Udemy"
              time="2022 - 2023"
              place="Online"
              info="Imparato a programmare in Python.
              Primo approccio con data science, creazione di giochi e applicazioni.
              Approfondito la mia conoscenza sulla creazione di siti web."
            />
            <Details
              type="Istituto tecnico superiore Piamarta / Perito Informatico"
              company="Istituto Piamarta"
              time="2007 - 2013"
              place="Brescia"
              info="Studiato linguaggi di programmazione: C++, Java, HTML, CSS, PHP, DOS.
              Imparato elettrotecnica e come diagnosticare e riparare computer."
            />
          </ul>
        </div>
      </div>
    </>
  );
}

// Master Of Computer Science
// 2020-2022 | Stanford University
// Completed a master's project on deep learning, developing a new neural network architecture for natural
// language understanding.

// Online Coursework
// 2016-2020 | Coursera And EdX
// Completed coursework in advanced topics such as Reinforcement Learning, Computer Vision, and Machine
// Learning Engineering.
