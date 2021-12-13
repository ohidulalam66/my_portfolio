import React from 'react';
import './Footer.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-router-dom';
import { Flip } from 'react-reveal';

const Footer = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1F28YGvvIAcv16ns5qtdGRrMx9kqHUC4e/view?usp=sharing';
    return (
        <>
            <div className="firstFooter">
                <Container>
                    <Row className='d-flex justify-content-center align-items-center'>
                        <Col sm={12} md={4}>
                            <Link to="/home">
                                <Image className="img-fluid footerHeroLogo" src="https://i.ibb.co/djZtpFt/OA-logo.png" />
                            </Link>
                            <h4>Mohammad Ohidul Alam</h4>
                            <h6><i className="fas fa-phone-alt"></i> +8801628435721</h6>
                            <h6><i className="fas fa-envelope-open"></i> mdohidul.alam15@gmail.com</h6>
                        </Col>
                        <Col sm={12} md={2} className='mt-3 mt-md-0'>
                            <Flip top cascade>
                                <h5 className="fw-bold text-dark"><i className="fas fa-map-marker-alt"></i> SITE MAP</h5>
                            </Flip>
                            <hr />
                            <ul className="navbar-nav">
                                <Link to='/allProjects' className="nav-link footer-link"><i class="far fa-folder-open"></i> All Projects</Link>
                                <Link to='/blog' className="nav-link footer-link"><i className="fas fa-blog"></i> My Blog</Link>
                                <a className="nav-link footer-link" rel="noreferrer" href={resumeUrl} target="_blank"><i className="fas fa-file"></i> Resume</a>
                                <Link to="/about" class="nav-link footer-link" aria-current="page">
                                    <i className="far fa-address-card"></i> About Me</Link>
                                <Link to="/contact" class="nav-link footer-link" aria-current="page">
                                    <i className="fas fa-paper-plane"></i> Contact Me</Link>
                            </ul>
                        </Col>
                        <Col sm={12} md={2} className='mt-3 mt-md-0'>
                            <Flip top cascade>
                                <h5 className="fw-bold text-dark"><i className="fas fa-people-arrows"></i> SOCIAL LINK</h5>
                            </Flip>
                            <hr />
                            <div className='d-flex justify-content-center'>
                                <a className='text-decoration-none' href="https://www.linkedin.com/in/mohammad-ohidul-alam/">
                                    <i class="devicon-linkedin-plain colored display-6 m-2"></i>
                                </a>
                                <a className='text-decoration-none' href="https://github.com/ohidulalam66">
                                    <i class="devicon-github-original colored display-6 m-2"></i>
                                </a>
                                <a className='text-decoration-none' href="https://twitter.com/OaNoyon">
                                    <i class="devicon-twitter-original colored display-6 m-2"></i>
                                </a>
                                <a className='text-decoration-none' href="https://www.facebook.com/mohammadohidulalam.moa">
                                    <i className="devicon-facebook-plain colored display-6 m-2"></i>
                                </a>
                            </div>
                        </Col>
                        <Col sm={12} md={4} className='d-flex justify-content-center'>
                            <Image className='w-75 img-fluid rounded-circle' src="https://i.ibb.co/ggLXcJq/Boss-removebg-preview.png" />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="secondFooter">
                <Container>
                    <Slide left>
                        <p className="text-center">Site Code & designed by @2021 Mohammad Ohidul Alam</p>
                    </Slide>
                </Container>
            </div>
        </>
    );
};

export default Footer;