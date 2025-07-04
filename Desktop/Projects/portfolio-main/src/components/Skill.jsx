import { motion } from "framer-motion";

export default function Skill({ name, x, y }) {
  return (
    <motion.div
      className="
        flex
        items-center
        justify-center
        rounded-full
        font-semibold
        bg-dark
        text-light
        py-3 px-6 shadow-dark 
        cursor-pointer
        absolute
        opacity-50
        dark:bg-light
        dark:text-dark
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3
        sm:bg-transparent sm:dark:bg-transparent
        sm:text-dark sm:dark:text-light xs:font-bold
        sm:border sm:border-solid sm:dark:border-light sm:border-dark
        "
      whileHover={{
        scale: 1.2,
      }}
      initial={{ x: 0, y: 0, opacity: 0.2, scale: 0 }}
      whileInView={{
        x: x,
        y: y,
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
      whileTap={{ scale: 1.2, duration: 5 }}
    >
      {name}
    </motion.div>
  );
}
