import { motion } from "framer-motion";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default function Logo() {
  return (
    <div className="flex items-center justify-center lg:mt-0 mt-1 xs:ml-1">
      <motion.a
        href="/portfolio/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-2x1 font-bold 
        border border-solid border-transparent dark:border-light"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        GP
      </motion.a>
    </div>
  );
}
