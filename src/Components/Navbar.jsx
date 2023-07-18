import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="header">
            <div className="logo">
                Dev.
            </div>
            <div className="menu">
                <a href="#Home">Home</a>
                <a href="#Work">Work</a>
                <a href="#Skills">Skills</a>
                <a href="#Contact">Contact</a>
            </div>
            <div className="button">
                <button>Hire me</button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar
