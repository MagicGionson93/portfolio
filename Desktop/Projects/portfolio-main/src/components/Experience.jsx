import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./LiIcon";
import { useTranslation } from "react-i18next";

const Details = ({ position, company, companyLink, time, adress, work }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] sm:mr-2"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "scale" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position} &nbsp;{" "}
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize dark:text-primaryDark "
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {adress}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experince() {
  const ref = useRef(null);
  const { t } = useTranslation();
  const { experienceTitle, esp1, esp2, esp3, esp3Job } = t("about");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end ", "center start"],
  });
  return (
    <>
      <div className="my-64 sm:my-24  xs:my-24">
        <h2 className="font-bold text-6xl mb-24 w-full text-center lg:!size-5xl md:!text-5xl sm:!text-3xl xs:!text-4xl">
          {experienceTitle}
        </h2>
        <div
          ref={ref}
          className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
        >
          <motion.div
            className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top
            dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
            style={{ scaleY: scrollYProgress }}
            viewport={{ once: true }}
          />
          <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
            <Details
              position="Web Development Intern"
              company="Photonic"
              time="2024"
              adress="Taipei, Taiwan"
              work={esp1}
              companyLink="https://www.photonic.com.tw/"
            />
            <Details
              position="Freelance / Web Developer"
              company="Ruota Libera"
              time="2022-Present"
              adress="Gussago, Brescia"
              work={esp2}
              companyLink="https://www.ruotaliberabrescia.com"
            />
            <Details
              position={esp3Job}
              company="Proxi srl"
              time="2013-2023"
              adress="Longhena, Brescia"
              work={esp3}
              companyLink="https://www.proxisaldatura.com"
            />
          </ul>
        </div>
      </div>
    </>
  );
}

// Intern @Facebook
// Summer 2021 | Menlo Park, CA.
// Worked on a team responsible for developing a new mobile app feature that allowed users to create and
// share short-form video content, including designing and implementing a new user interface and developing
// the backend infrastructure to support the feature.

// Software Developer @Amazon
// 2020-2021 | Seattle, WA.
// Worked on a team responsible for developing Amazon's mobile app, including implementing new features such
// as product recommendations and user reviews, and optimizing the app's performance and reliability.

// Software Developer Intern @Microsoft
// Summer 2019 | Redmond, WA.
// Worked on a team responsible for developing new features for Microsoft's Windows operating system,
// including implementing a new user interface for a system settings panel and optimizing the performance of
// a core system component.

// Teaching Assistant @MIT
// Fall 2018 | Massachusetts Ave, Cambridge, MA.
// Assisted in teaching a course on computer programming, held office hours to help students with assignments,
// and graded exams and assignments.
