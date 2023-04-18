import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close } from "../assets";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import rmlogo from '../assets/rmlogo.png'

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };



    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex flex-row gap-0">
            <img
              src={rmlogo}
              height="50px"
              width="50px"
              className="m-0 p-0"
            ></img>
            <div className="flex flex-col items-center justify-center leading-6">
              <motion.p
                initial={{ opacity: 0, scale: 0 }} // Set initial position and opacity
                animate={{ opacity: 1, scale: 1 }} // Set animation target position and opacity
                transition={{
                  duration: 1, // Set animation duration to 1 second
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{ color: "rgb(209 80 1)" }}
                className="text-shadow-md text-white text-[25px] font-bold cursor-pointer"
              >
                ROMULUS
              </motion.p>
              <motion.span
                initial={{ opacity: 0, scale: 0 }} // Set initial position and opacity
                animate={{ opacity: 1, scale: 1 }} // Set animation target position and opacity
                transition={{
                  duration: 1, // Set animation duration to 1 second
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                style={{ color: "rgb(209 80 1)" }}
                className="text-[25px]  font-bold cursor-pointer"
              >
                OIL & GAS
              </motion.span>
            </div>
          </div>
        </Link>

        {/* <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${active === nav.title ? "text-[chocolate]" : scrolled? "text-white":"text-black"
                } hover:text-[chocolate] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul> */}

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-sm`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
