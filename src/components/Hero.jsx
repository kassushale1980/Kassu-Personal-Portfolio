import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage: 'url("/images/pobanner.JPG")',
      }}
    >
      <div className="hero-overlay"></div>
      <div className="container text-center text-md-start text-white hero-content">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1>
              Hello, I'm{" "}
              <span className="spinning-name">Shale Kassahun</span>
            </h1>

            <p className="mt-3 fw-bold">
              <span className="text-warning">
        Front-End & Full-Stack Developer| React, Node.js, MySQL |
              </span>
              <br />
              <span>
        CCNA Certified(Cisco Certified Network Associate)  
              </span>
            </p>

            <p>
        I build responsive,interactive web applications and <br /> enjoy solving
        complex problems with clean, efficient code.
            </p>

            <a href="#projects" className="btn btn-primary mt-3">
              View My Projects
            </a>

            {/* Profile Image */}
            <div className="mt-3">
              <img
                src="/images/kassunew-icon.jpg"
                alt="Profile Icon"
                style={{ width: "200px", borderRadius: "80%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




