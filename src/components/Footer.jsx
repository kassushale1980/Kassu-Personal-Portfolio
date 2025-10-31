import React from "react";

const Footer = () => {
  return (
    <footer className="py-3 text-center" style={{ backgroundColor: "#f8f9fa" }}>
      <p>&copy; {new Date().getFullYear()} Shale Kassahun. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
