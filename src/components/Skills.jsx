import { motion } from "framer-motion";

import Skill from "./Skill";

export default function Skills() {
  return (
    <>
      <h2 className="font-bold text-6xl mb-24 w-full text-center lg:!size-5xl md:!text-5xl sm:!text-3xl xs:!text-4xl xl:mb-6">
        Skills
      </h2>
      <div
        className="mt-4 w-full h-screen relative flex items-center justify-center rounded-full
        dark:bg-circularDark
        bg-circularLight 
        lg:h-[80vh] sm:h-[60vh] xs:h-[50vh]
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
      "
      >
        <motion.div
          className="
          flex
          items-center
          justify-center
          rounded-full
          font-semibold
          bg-dark
          text-light
          p-6 shadow-dark cursor-pointer
          md:p-4 xs:text-xs xs:p-2         
          dark:bg-light
          dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-19vw" y="2vw" />
        <Skill name="CSS" x="0vw" y="-11.5vw" />
        <Skill name="React" x="-19vw" y="-10.5vw" />
        <Skill name="Node" x="-5vw" y="-22.5vw" />
        <Skill name="MongoDB" x="19vw" y="-10.5vw" />
        <Skill name="Tailwind" x="0vw" y="10.5vw" />
        <Skill name="Javascript" x="0vw" y="22.5vw" />
        <Skill name="Wordpress" x="20vw" y="20.5vw" />
        <Skill name="Wix" x="-20vw" y="20.5vw" />
        <Skill name="SQL" x="10vw" y="-20.5vw" />
        <Skill name="Python" x="18vw" y="12vw" />
        <Skill name="PHP" x="24vw" y="0.5vw" />
      </div>
    </>
  );
}
