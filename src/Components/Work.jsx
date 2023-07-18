import React from "react";
import data from "../Assets/data.json";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Work = () => {
  return (
    <>
      <div id="Work" className="work">
        <div className="heading">
          <h2>WORK</h2>
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
        <img
          src={items.imgSrc}
          alt=""
        />
      </div>
      <div className="info">
        <h2>{items.title}</h2>
        <p>
          {items.description}
        </p>
        <a href={items.url}>Live demo</a>
      </div>
    </div>
  );
};
