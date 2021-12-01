import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './HeroSection.css';
import { Link } from "react-router-dom";
import Bounce from 'react-reveal/Bounce';
import Flip from 'react-reveal/Flip';
import ParticlesBg from 'particles-bg'


const HeroSection = () => {
    const heroProfilePicUrl = 'https://i.ibb.co/WVTpGfn/hero.gif';

    return (
        <Container className="py-5 extraMargin">
            <ParticlesBg color="#BBB8BA" num={100} type="cobweb" bg={true} />
            <Row>
                <Col sm={12} md={4}>
                    <Image className="hero-image" src={heroProfilePicUrl} roundedCircle />
                </Col>
                <Col sm={12} md={8} className="d-flex  align-items-center">
                    <div>
                        <Flip duration={2000} bottom cascade>
                            <h4 className="fw-bold text-uppercase fw-5">Mohammad Ohidul Alam</h4>
                        </Flip>
                        <h6 className="hero-profile"><i className="fas fa-briefcase"></i> Junior Web Developer</h6>
                        <p className="fs-5">6+ web projects, 3+ MERN Stack Projects</p>
                        <p className="my-4 mx-auto">
                            <span className="language me-2">JavaScript</span>
                            <span className="language me-2">React</span>
                            <span className="language me-2">NodeJS</span>
                            <span className="language">MongoDB</span>
                        </p>
                        <div>
                            <a href="https://drive.google.com/uc?export=download&id=1H8RepJLMA2AH-iLulD2GDQhWEgM0iAEE" className="text-decoration-none btnDownloadResume px-3 py-2 text-uppercase" type="button"><i className="fas fa-file-download"></i> Download Resume</a>
                            <Link to='/contact'>
                                <button className="btnContactMe mx-0 mx-md-2 px-3 py-2 text-uppercase mt-3 mt-md-0"><i className="fas fa-paper-plane"></i> Contact Me
                                </button>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>
            <Bounce bottom>
                <p className="text-secondary mt-5">
                    <span className="fs-2 fw-bold">Hi there!</span> I'm Mohammad Ohidul Alam from Bangladesh, and I work in Junior Web Development. I am currently studying BSc at Premier University through CSE. I really enjoy working as well as learning languages and frameworks like JS, React JS. Also, I have ideas about Bootstrap, React Bootstrap, Tailwind CSS, and Material UI about my Design. Node JS, Express, and MongoDB also have ideas about the backend. I have experience of 10+ web <Link to='/projects' className="text-decoration-none cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                    Lastly, I like to code.🌭 This is my hobby.😍
                </p>
            </Bounce>
        </Container>
    );
};

export default HeroSection;

/* "color"
"ball"
"lines"
"thick"
"circle"
"cobweb"
"polygon"
"square"
"tadpole"
"fountain"
"random"
"custom" */