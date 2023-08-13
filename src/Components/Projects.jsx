import React, { useState } from "react";
import reelink from "../Assets/Reelink.png"
import dictionary from "../Assets/Dictionary.png"
import sidclub from "../Assets/Sidclub.png"
import crypto from "../Assets/Crypto.png"
import typer from "../Assets/TYper.png"


const Projects = () => {
  const [display, setDisplay] = useState('none');

  const showMore = () => {
    if(display === 'none'){
    setDisplay('flex');
    } else {
      setDisplay('none')
    }
  };

  return (
    <>
      <div className="projects" id="Work">
        <h1>Projects</h1>
        <div className="idk">
          <div className="project-image">
            <img
              src={reelink}
              alt=""
            />
          </div>
          <div className="project-details">
            <h1>Reelink | A movies app</h1>
            <p>
              A movies app made in react where you can search any movie, tv shows and anime
            </p>
            <a href="https://reelink.vercel.app/">
            <button>View project</button>
            </a>
          </div>
        </div>
        <div className="idk">
          <div className="project-image">
            <img
              src={dictionary}
            />
          </div>
          <div className="project-details">
            <h1>Dictionary app</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente natus repudiandae impedit explicabo earum iste
              non beatae soluta doloremque id quisquam voluptate facere,
              delectus maxime veniam, libero quas dolorum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Eaque libero animi error in
              facere cum sapiente illo nulla dolorum nisi.
            </p>
            <button>View project</button>
          </div>
        </div>
        <div className="idk">
          <div className="project-image">
            <img
              src={typer}
            />
          </div>
          <div className="project-details">
            <h1>Typing tester game</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente natus repudiandae impedit explicabo earum iste
              non beatae soluta doloremque id quisquam voluptate facere,
              delectus maxime veniam, libero quas dolorum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Eaque libero animi error in
              facere cum sapiente illo nulla dolorum nisi.
            </p>
            <button>View project</button>
          </div>
        </div>
        <div className="idk">
          <div className="project-image">
            <img
              src={crypto}
            />
          </div>
          <div className="project-details">
            <h1>Crypto app</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente natus repudiandae impedit explicabo earum iste
              non beatae soluta doloremque id quisquam voluptate facere,
              delectus maxime veniam, libero quas dolorum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Eaque libero animi error in
              facere cum sapiente illo nulla dolorum nisi.
            </p>
            <button>View project</button>
          </div>
        </div>
        <div className="idk">
          <div className="project-image">
            <img
              src={sidclub}
            />
          </div>
          <div className="project-details">
            <h1>Sidclub website clone</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente natus repudiandae impedit explicabo earum iste
              non beatae soluta doloremque id quisquam voluptate facere,
              delectus maxime veniam, libero quas dolorum. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Eaque libero animi error in
              facere cum sapiente illo nulla dolorum nisi.
            </p>
            <button>View project</button>
          </div>
        </div>
        <a href="#more">
        {/* <button onClick={showMore}>Load more</button> */}
        </a>

        <div style={{display: display, flexWrap: 'wrap', justifyContent: 'space-evenly'}} id="more">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

const Card = () => {
  return (
    <div className="card">
      <img src="https://images.unsplash.com/photo-1483389127117-b6a2102724ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" />
      <h2>Project 1</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quae
        nisi corporis voluptatibus suscipit vel nihil inventore esse excepturi
        laudantium?
      </p>
      <button>View live</button>
    </div>
  );
};

export default Projects;
