import React from "react";
import { animate, motion } from "framer-motion";

const About = () => {
  const animations = {
    h2: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <motion.div className="about-section" {...animations.h2}>
        <h1>About me</h1>
        <div className="text">
          Hi there! I'm Dev, a passionate and creative front-end developer with
          a strong focus on building engaging and user-friendly websites.
          <br />
          If you'd like to collaborate or have any questions, feel free to reach
          out to me. I'm excited to connect with you!
        </div>
      </motion.div>
    </>
  );
};

export default About;
