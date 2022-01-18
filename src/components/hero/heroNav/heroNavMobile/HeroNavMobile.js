import React, { useState } from "react";
import { motion } from "framer-motion";
import "./HeroNavMobile.css";
import { Link } from "react-router-dom";

export default function HeroMobileNav() {
  const [showItem, setShowItem] = useState("hide");
  const [showList, setShowList] = useState("hide");
  const [burgerStatus, setBurgerStatus] = useState("");
  const listVariants = {
    show: {
      overflow: "visible",
      transition: {
        staggerChildren: 0.2,
      },
    },
    hide: {
      overflow: "hidden",
      transition: {
        delay: 0.3,
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
  };

  const ItemVariants = {
    show: {
      x: 30,
      rotateY: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
    hide: {
      x: 290,
      rotateY: 150,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  function toggleListHandler() {
    setBurgerStatus(burgerStatus === "open" ? "" : "open");
    setShowList(showList === "hide" ? "show" : "hide");
    setShowItem(showItem === "hide" ? "show" : "hide");
  }
  return (
    <>
      <motion.ul
        className={`main-nav__links ${burgerStatus === "open" ? "open" : ""}`}
        initial="hide"
        variants={listVariants}
        animate={showList}
      >
        <div className="burger-icon" onClick={toggleListHandler}>
          <span className="burger-icon__first"></span>
          <span className="burger-icon__second"></span>
          <span className="burger-icon__third"></span>
        </div>
        <motion.li className="main-nav__link" variants={ItemVariants}>
          <Link to="/learn">Start</Link>
        </motion.li>
        <motion.li className="main-nav__link" variants={ItemVariants}>
          <Link>Contact Us</Link>
        </motion.li>
      </motion.ul>
    </>
  );
}
