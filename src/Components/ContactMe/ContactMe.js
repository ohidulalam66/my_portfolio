import React from 'react';
import './ContactMe.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';
import Form from './Form/Form';

const ContactMe = () => {
    const ContactPicUrl = "https://www.emailjs.com/assets/support.svg";
    return (
        <Container className="extraMargin">
            <h3 className="py-4 text-center text-danger mb-4  underLine">
                <Flip top cascade>
                    <span>
                        <i className="fas fa-paper-plane"></i> Contact Me
                    </span>
                </Flip>
            </h3>
            <Row>
                <Col sm={12} md={6}>
                    <Flip top cascade>
                        <h5 className="mb-3 fw-bold"><i className="fas fa-search"></i> Find me</h5>
                    </Flip>
                    <hr />
                    <LightSpeed left>
                        <Image src={ContactPicUrl} className="ContactProfilePicUrl" />
                    </LightSpeed>
                    <div className="mt-4">
                        <LightSpeed left>
                            <h6><i className="fas fa-phone-alt"></i> +8801628435721</h6>
                            <h6><i className="fas fa-envelope-open"></i> mdohidul.alam15@gmail.com</h6>
                        </LightSpeed>
                        <p className="mt-5">
                            <Bounce duration={1000}>
                                <button>
                                    <a href="https://www.linkedin.com/in/mohammad-ohidul-alam-06a506216/" rel="noreferrer" target="_blank" className="me-2 linkedin btnLink text-decoration-none mx-2 px-3 py-2">
                                        <i className="fab fa-linkedin-in"></i> LinkedIn
                                    </a>
                                </button>
                            </Bounce>
                            <Bounce duration={2000}>
                                <button>
                                    <a href="https://github.com/ohidulalam66" rel="noreferrer" target="_blank" className="me-2 github btnLink text-decoration-none mx-2 px-3 py-2">
                                        <i className="fab fa-github"></i> GitHub
                                    </a>
                                </button>
                            </Bounce>
                            <Bounce duration={3000}>
                                <button>
                                    <a href="https://twitter.com/OaNoyon" rel="noreferrer" target="_blank" className="me-2 twitter btnLink text-decoration-none mx-2 px-3 py-2">
                                        <i className="fab fa-twitter"></i> Twitter
                                    </a>
                                </button>
                            </Bounce>
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <Flip top cascade>
                        <h5 className="mb-3 fs-5 fw-bold"><i className="fab fa-wpforms"></i> Please send your text here</h5>
                    </Flip>
                    <hr />
                    <Form />
                </Col>
            </Row>

        </Container>
    );
};

export default ContactMe;