import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import About from "./About";

const Home = () => {
  const [visible, setVisible] = useState(true);
  const [btnName, setBtnName] = useState('About me')

  const handler = () => {
    if(visible===false){
      setVisible(true)
      setBtnName('About me')
    } else {
      setVisible(false);
      setBtnName('')
    }
  };

  const animations = {
    h2: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
  };

  return (
    <>
      <section id="Home">
        <div className="profileInfo">
          {visible === true ? (
            <>
              <motion.div {...animations.h2} className="description">
                <h2>
                  Hi, I Am <br /> Dev Palwar
                </h2>
              </motion.div>

              <div className="typer">
                <Typewriter
                  options={{
                    strings: ["A Developer", "A Designer", "A Creator"],
                    autoStart: true,
                    loop: true,
                    cursor: "",
                    wrapperClassName: "typewriterpara",
                  }}
                />
              </div>
            </>
          ) : (
            <About />
          )}

          <div className="buttons">
            <button onClick={handler}>{btnName}</button>
            <button>Projects</button>
          </div>
        </div>
        <div className="profileImage">
          <img
            src={
              "https://i.pinimg.com/originals/57/3f/22/573f22a1aa17b366f5489745dc4704e1.jpg"
            }
            alt="profile image"
          />
        </div>
      </section>
    </>
  );
};

export default Home;
