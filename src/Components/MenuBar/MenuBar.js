import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './MenuBar.css';

const MenuBar = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1QmnFbCqVAdczIMexuwYg8V4sgSCuax4O/view?usp=sharing';
    return (
        <>
            <Navbar className="navbar fixed-top" variant="light" expand="lg">
                <Container>
                    <Link to="/home" className="navbar-brand fw-bold">
                        <Image src="https://i.ibb.co/djZtpFt/OA-logo.png" className="heroLogo" />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <ul className="navbar-nav  ms-auto">
                            <li class="nav-item">
                                <Link to='/blog' className="nav-link me-4 fs-5"><i className="fas fa-blog"></i> My Blog</Link>
                            </li>
                            <li class="nav-item">
                                <a className="nav-link me-4 fs-5" rel="noreferrer" href={resumeUrl} target="_blank"><i className="fas fa-file"></i> Resume</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" class="nav-link me-4 fs-5" aria-current="page">
                                    <i className="far fa-address-card"></i> About Me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" class="nav-link me-4 fs-5" aria-current="page">
                                    <i className="fas fa-paper-plane"></i> Contact Me</Link>
                            </li>
                        </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default MenuBar;