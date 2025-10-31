import React from "react";
import { Navbar as BSNavbar, Nav, Container } from "react-bootstrap";

const Navbar = () => {
  return (
    <BSNavbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <BSNavbar.Brand href="#home">Shale Kassahun</BSNavbar.Brand>
        <BSNavbar.Toggle />
        <BSNavbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
