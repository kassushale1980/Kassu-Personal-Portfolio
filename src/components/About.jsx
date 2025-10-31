

import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-row">
          {/* Left side: About Me */}
          <div className="about-text">
            <h3>About Me</h3>
            <p>
              I’m a passionate web developer and network enthusiast with
              experience building responsive, interactive web applications using{" "}
              <strong>React, Node.js, and MySQL</strong>. I also hold a{" "}
              <strong>CCNA (Cisco Certified Network Associate)</strong>{" "}
              certification, which strengthens my understanding of networking
              principles and enhances my ability to develop scalable, reliable
              applications.
            </p>
            <p>
              I enjoy turning complex ideas into intuitive digital experiences,
              constantly learning new technologies, and contributing to projects
              that solve real-world problems. My focus is on writing clean,
              efficient code while ensuring seamless user experiences across
              devices.
            </p>
          </div>

          {/* Right side: Skills */}
          <div className="skills-section">
            <h3>Skills</h3>

            <h5>Full-Stack Developer</h5>
            <p className="skills-simple">
              React.js, Node.js, MySQL, Bootstrap, Responsive Design, JavaScript (ES6+), Git & GitHub
            </p>

            <h5>Cisco Certified Network Associate (CCNA)</h5>
            <p className="skills-simple">
              Networking Fundamentals (IPv4/IPv6, LAN/WAN, VLANs), Routing & Switching (OSPF, static routing, inter-VLAN routing), Network Security (ACLs, VPNs, device hardening), IP Services (DHCP, NAT, DNS), Automation & Programmability (API basics)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;



