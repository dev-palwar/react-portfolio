import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Home = () => {
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
      <section id="Home" className="home">
        <div className="profileInfo">
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

          <div className="buttons">
            <button>About me</button>
            <a href="https://github.com/dev-palwar">
              <button>
                <i class="fa-brands fa-github"></i>Projects
              </button>
            </a>
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
