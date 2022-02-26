import React from "react";
import { Container, Image, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import "./MenuBar.css";

const MenuBar = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1rpnl7PtyXSaSxIdGkSZdSYx37INLcQQ6/view?usp=sharing";
  return (
    <>
      <Navbar
        className="mx-auto rounded sticky-top bg-dark"
        variant="dark"
        expand="lg"
      >
        <Container>
          <NavLink to="/">
            <Image
              src="https://i.ibb.co/jWFZ9JG/ohid-s-logo-removebg-preview.png"
              className="heroLogo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink to="/allProjects" className="nav-link me-4">
                  <i className="far fa-folder-open"></i> All Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" className="nav-link me-4">
                  <i className="fas fa-blog"></i> My Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <a
                  data-tip
                  data-for="onlinePdf"
                  className="nav-link me-4"
                  rel="noreferrer"
                  href={resumeUrl}
                  target="_blank"
                >
                  <i className="fas fa-file"></i> Resume
                </a>
                <ReactTooltip id="onlinePdf" aria-haspopup="true">
                  <p>ONLINE PDF FILE</p>
                </ReactTooltip>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about"
                  className="nav-link me-4"
                  aria-current="page"
                >
                  <i className="far fa-address-card"></i> About Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  <i className="fas fa-paper-plane"></i> Contact Me
                </NavLink>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <h1>hello World</h1> */}
    </>
  );
};

export default MenuBar;
