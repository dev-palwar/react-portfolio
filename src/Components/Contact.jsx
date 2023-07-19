import React from "react";
import { motion } from "framer-motion";

import img from "../Assets/pic4.png";
const Contact = () => {
  
    const animations = {
    h2: {
      initial: {
        // x: "-100%",
        scale: 0,
        opacity: 0,
      },
      whileInView: {
        // x: 0,
        scale: 1,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <div className="contact-section" id="Contact">
        <div className="contact-form">
          <div className="input-feilds">
            <h1>Contact me</h1>
            <input type="text" name="" id="" placeholder="Name" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="text" name="" id="" placeholder="Message" />
            <button type="button">SEND</button>
          </div>
        </div>
        <motion.div className="contact-images" {...animations.h2}>
          <img src={img} alt="" />
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
