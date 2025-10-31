import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="p-5 bg-white">
     
      <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-5 mt-5">
        <h4>Contact Me:</h4>
        <p>Email: <a href="mailto:kassushale@gmail.com">kassushale@gmail.com</a></p>
        <p>Phone: <a href="tel:+12403867913">+1 (240) 386-7913</a></p>
        <div className="d-flex justify-content-center gap-5">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"><i className="bi bi-linkedin fs-3"></i></a>
          <a href="https://github.com" target="_blank" rel="noreferrer"><i className="bi bi-github fs-3"></i></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;





