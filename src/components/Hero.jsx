import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="py-5"
      style={{ backgroundColor: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row align-items-center">
          
          {/* Text Section */}
          <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1>
              Hello, I'm <span style={{ color: "#e50914" }}>Shale Kassahun</span>
            </h1>
    <p className="mt-3" style={{ fontWeight: "bold" }}>
  <span style={{ color: "#e50914" }}>
    Front-End & Full-Stack Developer | React, Node.js, MySQL |
  </span>
  <br />
  <span style={{ color: "black" }}>
    CCNA (Cisco Certified Network Associate) Certified
  </span>
</p>



            <p>
              I build responsive, interactive web applications and enjoy solving complex problems with clean, efficient code.
            </p>
            <a href="#projects" className="btn btn-primary mt-3">View My Projects</a>

            {/* Highlighted image next to text */}
            <div className="mt-3">
              <img 
                src="/images/kassunew-icon.jpg" 
                alt="Profile Icon" 
                style={{ width: "200px", borderRadius: "80%" }}
              />
            </div>
          </div>

          {/* Main Banner Image */}
          <div className="col-md-6 text-center">
            <img 
              src="/images/banner.jpg" 
              alt="Hero Banner" 
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


