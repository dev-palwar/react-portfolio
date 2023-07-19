import React from "react";
import data from "../Assets/data.json";
import { animate, animations, motion } from "framer-motion";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Work = () => {
  const animations = {
    div: {
      initial: {
        width: 0,
        opacity: 0
      },
      whileInView: {
        width: "10%",
        opacity: 1,
        transition: { duration: 0.5 }
      },
    },
  };

  return (
    <>
      <div id="Work" className="work">
        <div className="heading">
          <h2>WORK</h2>
          <motion.div {...animations.div}></motion.div>
        </div>
        <div className="projects">
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((value) => {
              return <Caracard items={value} key={value.title} />;
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Work;

const Caracard = ({ items }) => {
  return (
    <div className="caraosel" key={items.title}>
      <div className="image">
        <img src={items.imgSrc} alt="" />
      </div>
      <div className="info">
        <h2>{items.title}</h2>
        <p>{items.description}</p>
        <a href={items.url}>Live demo</a>
      </div>
    </div>
  );
};
