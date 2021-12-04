import React from 'react';
import './AboutMe.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Roll from 'react-reveal/Roll';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <>
            <Container className="extraMargin">
                <h3 className="my-5 text-center text-danger mb-4  underLine">
                    <Flip top cascade>
                        <span>
                            <i className="far fa-address-card"></i> About Me
                        </span>
                    </Flip>
                </h3>
                <Fade bottom cascade>
                    <Row>
                        <Col xs={12} md={4}>
                            <Roll>
                                <h4><i className="far fa-address-card"></i> About Me</h4>
                            </Roll>
                        </Col>
                        <Col xs={12} md={8}>
                            <p style={{ textAlign: 'justify' }}>
                                I'm Mohammad Ohidul Alam from Bangladesh, and I work in Junior Web Development. I am currently studying BSc at Premier University through CSE. I really enjoy working as well as learning languages and frameworks like JS, React JS. Also, I have ideas about Bootstrap, React Bootstrap, Tailwind CSS, and Material UI about my Design. Node JS, Express, and MongoDB also have ideas about the backend. I have experience of 10+ web <Link to='/projects' className="text-decoration-none cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                                Lastly, I like to code.🌭 This is my hobby.😍
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={4}>
                            <Roll>
                                <h4><i className="fas fa-user-graduate"></i> Education</h4>
                            </Roll>
                        </Col>
                        <Col xs={12} md={8}>
                            <h5>Premier University</h5>
                            <p>
                                B.Sc in Computer Science & Engineering(CSE)
                                <ul>
                                    &diams; Admission Year: 2021
                                </ul>
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={4}>
                            <Roll>
                                <h4><i className="fas fa-anchor"></i> Skills</h4>
                            </Roll>
                        </Col>
                        <Col xs={12} md={8}>
                            <Row>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-javascript-plain colored display-4"></i>
                                    <p className="fw-bold">JavaScript</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-react-original colored display-4"></i>
                                    <p className="fw-bold">React</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-nodejs-plain colored display-4"></i>
                                    <p className="fw-bold">Node.js</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-express-original colored display-4"></i>
                                    <p className="fw-bold">Express.js</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-mongodb-plain colored display-4"></i>
                                    <p className="fw-bold">MongoDB</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i class="devicon-firebase-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Firebase</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-bootstrap-plain colored display-4"></i>
                                    <p className="fw-bold">Bootstrap 5</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-html5-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">HTML5</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-css3-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">CSS3</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i className="devicon-tailwindcss-plain colored display-4"></i>
                                    <p className="fw-bold">Tailwind CSS</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i class="devicon-materialui-plain colored display-4"></i>
                                    <p className="fw-bold">Material UI</p>
                                </Col>
                                <Col className="flex-column trans-card pb-3">
                                    <i class="devicon-git-plain-wordmark colored display-4"></i>
                                    <p className="fw-bold">Git</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col xs={12} md={4}>
                            <Roll>
                                <h4><i className="fas fa-tram"></i> Training</h4>
                            </Roll>
                        </Col>
                        <Col xs={12} md={8}>
                            <div className="d-flex justify-content-between">
                                <ol>
                                    <p><b>1. Complete Web Development Course</b>/ Programming Hero</p>
                                </ol>
                                <p>Jun 2021 - Dec 2021</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ol>
                                    <p><b>2. Computer Office Application</b>/ Basic Computer Training Academy</p>
                                </ol>
                                <p>Mar 2017 - Jun 2017</p>
                            </div>
                        </Col>
                    </Row>
                </Fade>
            </Container>
        </>
    );
};

export default AboutMe;