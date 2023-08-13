import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animations.form}>
          <h2>Contact Me</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            type="text"
            placeholder="Your Message"
            required
          />

          <motion.button
            {...animations.button}
            type="submit"
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src="https://raw.githubusercontent.com/meabhisingh/react-portfolio/master/src/assets/vg.png" alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;