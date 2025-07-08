import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import CV from "/CV/CV-Giovanni-Pasini.pdf";
import CVeng from "/CV/Resume Giovanni Pasini.pdf";
import { useTranslation } from "react-i18next";

import useThemeSwitcher from "./hooks/useThemeSwitcher";
import {
  GithubIcon,
  TwitterIcon,
  LinkedInIcon,
  PinterestIcon,
  DribbbleIcon,
  SunIcon,
  MoonIcon,
  CurriculumIcon,
  ItaFlagIcon,
  EngFlagIcon,
} from "./icons";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Translation from "./Translation";

const CustomLink = ({ href, title, className = "" }) => {
  // console.log(router);
  const router = useLocation();
  // console.log(router.pathname);

  return (
    <Link to={href} className={`${className} relative group`}>
      {title}

      <span
        className={` h-[1px] inline-block  bg-dark
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       dark:bg-light
       ${router.pathname === href ? "w-full" : "w-0"}
       `}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  // console.log(router);
  const router = useLocation();
  let history = useNavigate();
  // console.log(router.pathname);

  const handleClick = () => {
    toggle();
    history(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}

      <span
        className={` h-[1px] inline-block  bg-light
       absolute left-0 -bottom-0.5
       group-hover:w-full transition-[width] ease duration-300
       dark:bg-light
       ${router.pathname === href ? "w-full" : "w-0"}
       dark:bg-dark
       `}
      >
        &nbsp;
      </span>
    </button>
  );
};

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState();
  const [lang, setLang] = Translation();
  let navbarRef = useRef(null);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1022 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    let handler = (e) => {
      if (!navbarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    // Pulisci l'evento quando il componente viene smontato
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [isOpen]);

  // const changeLanguage = (lang) => {
  //   if (lang === "en") {
  //     i18n.changeLanguage("it");
  //     setLang("it");
  //   } else {
  //     i18n.changeLanguage("en");
  //     setLang("en");
  //   }
  // };

  return (
    <>
      <header
        className=" w-full px-32 py-8 font-medium flex items-center justify-between                  
      dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8 xs:px-8
      mmd:sticky mmd:z-30 mmd:top-0 mmd:backdrop-blur-xl mmd:border-b-2 mmd:border-dark mmd:dark:border-light "
        ref={navbarRef}
      >
        <button
          className="hidden flex flex-col justify-center items-center  lg:flex"
          onClick={handleClick}
        >
          <span
            className={`bg-dark dark:bg-light transtition-all duration-300 ease-out block h-0.5 w-6 rounded-sm 
          ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"}`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transtition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-dark dark:bg-light transtition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
          ></span>
        </button>

        {/* navbar for lg */}
        <div className="w-full flex justify-between items-center lg:hidden">
          <nav>
            <CustomLink href="/portfolio/" title="Home" className="mr-4 " />
            <CustomLink
              href="/portfolio/about"
              title="About"
              className="mx-4"
            />
            <CustomLink
              href="/portfolio/projects"
              title={t("navbarLink")}
              className="mx-4"
            />
            {/* <CustomLink href="/articles" title="Articles" className="ml-4" /> */}
          </nav>

          <nav className="flex items-center justify-center flex-wrap ">
            <motion.a
              href={lang === "it" ? CV : CVeng}
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3 dark:fill-light"
            >
              <CurriculumIcon />
            </motion.a>
            <motion.a
              href="https://github.com/MagicGionson93"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/giovanni-pasini/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-6 mx-3"
            >
              <LinkedInIcon />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`mx-3 flex items-center justify-center rounded-full p-1 w-6 
              ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
            >
              {mode === "light" ? <SunIcon /> : <MoonIcon />}
            </button>
            <motion.button
              onClick={() => setLang(lang === "it" ? "en" : "it")}
              className={`ml-2 flex items-center justify-center rounded-full p-1 w-8  `}
              whileHover={{ scale: 1.2, y: -2 }}
            >
              {lang === "it" ? <EngFlagIcon /> : <ItaFlagIcon />}
            </motion.button>
          </nav>
        </div>

        {/* navbar for mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: "-90%", y: "-110%" }}
              animate={{ scale: 1, opacity: 1, x: "-50%", y: "-50%" }}
              exit={{ scale: 0, opacity: 0, x: "-90%", y: "-110%" }} // Define exit animation here
              className="z-30 min-w-[70vw] flex flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-xl py-24"
            >
              <nav className="flex items-center flex-col justify-center">
                <CustomMobileLink
                  href="/portfolio/"
                  title="Home"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/portfolio/about"
                  title="About"
                  className=""
                  toggle={handleClick}
                />
                <CustomMobileLink
                  href="/portfolio/projects"
                  title={t("navbarLink")}
                  className="mb-8"
                  toggle={handleClick}
                />
                {/* <CustomMobileLink
                  href="/articles"
                  title="Articles"
                  className="mb-6"
                  toggle={handleClick}
                /> */}
              </nav>

              <nav className="flex items-center justify-center flex-wrap  ">
                <motion.a
                  href={lang === "it" ? CV : CVeng}
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="xs:m-1 w-6 mx-3"
                >
                  <CurriculumIcon />
                </motion.a>
                <motion.a
                  href="https://github.com/MagicGionson93"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="xs:m-1 w-6 mx-3 bg-light dark:bg-dark rounded-full"
                >
                  <GithubIcon />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/giovanni-pasini/"
                  target={"_blank"}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="xs:m-1 w-6 mx-3"
                >
                  <LinkedInIcon />
                </motion.a>

                <button
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={`xs:m-1 mx-3 flex items-center justify-center rounded-full p-1 w-6 
            ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
                >
                  {mode === "light" ? <SunIcon /> : <MoonIcon />}
                </button>

                <motion.button
                  onClick={() => setLang(lang === "it" ? "en" : "it")}
                  className={`xs:ml-1 ml-3 flex items-center justify-center rounded-full p-1 w-8 `}
                  whileHover={{ scale: 1.2, y: -2 }}
                >
                  {lang === "it" ? <EngFlagIcon /> : <ItaFlagIcon />}
                </motion.button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="absolute left-[50%] top-2 translate-x-[-50%] xs:left-[50%]">
          <Logo />
        </div>
      </header>
    </>
  );
}

// import { Fragment } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Home", href: "/", current: true },
//   { name: "About", href: "/About", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Calendar", href: "#", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Example() {
//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <img
//                     className="h-8 w-auto"
//                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//                     alt="Your Company"
//                   />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item) => (
//                       <a
//                         key={item.name}
//                         href={item.href}
//                         className={classNames(
//                           item.current
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "rounded-md px-3 py-2 text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//               <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
//                 <button
//                   type="button"
//                   className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
//                 >
//                   <span className="absolute -inset-1.5" />
//                   <span className="sr-only">View notifications</span>
//                   <BellIcon className="h-6 w-6" aria-hidden="true" />
//                 </button>

//                 {/* Profile dropdown */}
//                 <Menu as="div" className="relative ml-3">
//                   <div>
//                     <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
//                       <span className="absolute -inset-1.5" />
//                       <span className="sr-only">Open user menu</span>
//                       <img
//                         className="h-8 w-8 rounded-full"
//                         src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
//                         alt=""
//                       />
//                     </Menu.Button>
//                   </div>
//                   <Transition
//                     as={Fragment}
//                     enter="transition ease-out duration-100"
//                     enterFrom="transform opacity-0 scale-95"
//                     enterTo="transform opacity-100 scale-100"
//                     leave="transition ease-in duration-75"
//                     leaveFrom="transform opacity-100 scale-100"
//                     leaveTo="transform opacity-0 scale-95"
//                   >
//                     <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Your Profile
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Settings
//                           </a>
//                         )}
//                       </Menu.Item>
//                       <Menu.Item>
//                         {({ active }) => (
//                           <a
//                             href="#"
//                             className={classNames(
//                               active ? "bg-gray-100" : "",
//                               "block px-4 py-2 text-sm text-gray-700"
//                             )}
//                           >
//                             Sign out
//                           </a>
//                         )}
//                       </Menu.Item>
//                     </Menu.Items>
//                   </Transition>
//                 </Menu>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item) => (
//                 <Disclosure.Button
//                   key={item.name}
//                   as="a"
//                   href={item.href}
//                   className={classNames(
//                     item.current
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={item.current ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Disclosure.Button>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
