import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Netflix Clone 2025",
      image: "/images/My-Netflix.jpg",
      description:
        "Full-featured Netflix-style web app with authentication and movie data.",
      demo: "https://kassushale1980.github.io/Netflix-clone-2025/",
      code: "https://github.com/kassushale1980/Netflix-clone-2025.git",
    },
    {
      title: "Evangadi Forum",
      image: "/images/Evangadi-logo.jpg",
      description: "Q&A platform built with React, Node.js, and MySQL.",
      demo: "https://incredible-profiterole-df81ce.netlify.app/",
      code: "https://github.com/kassushale1980/EvangadiForum-ProjectFront.git",
    },
    {
      title: "Amazon Clone",
      image: "/images/amazon-logo.jpg",
      description: "E-commerce frontend replica built using React & Bootstrap.",
      demo: "https://kassushaleamazon-cloneproject.netlify.app/",
      code: "https://github.com/kassushale1980/newkassuamazon-clone.git",
    },
    {
      title: "Portfolio Website",
      image: "/images/kassunewportfolio.jpg",
      description: "My personal portfolio built with React and Bootstrap.",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section id="projects" className="py-5 bg-light text-center">
      <div className="container">
        <h2>Projects</h2>
        <div className="row mt-4">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>

                  {project.demo && project.demo !== "#" ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary me-2"
                    >
                      Demo
                    </a>
                  ) : (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="btn btn-secondary me-2"
                    >
                      Demo
                    </a>
                  )}

                  <a
                    href={project.code}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-dark"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;





