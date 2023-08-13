import React from "react";
import { motion } from "framer-motion";


const Skills = () => {

  const animations = {
    icons: {
      initial: {
        y: "100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.1,
      },
    },
  };

  return (
    <div className="skills-section" id="Skills">
      <h1>Tech stack</h1>
      <motion.div {...animations.icons}>
        <div className="icons">
          <img
            src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png"
            alt=""
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png"
            alt=""
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            alt=""
          />
          <img
            src="https://o.remove.bg/downloads/6c8bf254-7947-478d-aa85-0dfac8e4776c/rzylUjaf_400x400-removebg-preview.png"
            alt=""
          />
          <img
            src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
            alt=""
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
