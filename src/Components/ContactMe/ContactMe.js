import React from 'react';
import './ContactMe.css';
import { Col, Container, Image, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
import Form from './Form/Form';

const ContactMe = () => {
    const ContactProfilePicUrl = "https://www.emailjs.com/assets/support.svg";
    return (
        <Container className="extraMargin">
            <h3 className="py-4 text-center text-danger">
                <Flip top cascade>
                    <span>
                        <i className="fas fa-paper-plane"></i> Contact Me
                    </span>
                </Flip>
            </h3>
            <Row>
                <Col sm={12} md={6}>
                    <p className="mb-3 fs-5 fw-bold">Find me</p>
                    <hr />
                    <Image src={ContactProfilePicUrl} className="ContactProfilePicUrl" />
                    <div className="mt-4 ">
                        <p><i className="fas fa-phone-alt"></i> +8801628435721</p>
                        <p><i className="fas fa-envelope-open"></i> mdohidul.alam15@gmail.com</p>
                        <p className="mt-4">
                            <a href="https://www.linkedin.com/in/mohammad-ohidul-alam-06a506216/" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                <i className="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                            <a href="https://github.com/ohidulalam66" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                <i className="fab fa-github"></i> GitHub
                            </a>
                            <a href="https://twitter.com/OaNoyon" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                <i className="fab fa-twitter"></i> Twitter
                            </a>
                        </p>
                    </div>
                </Col>
                <Col sm={12} md={6}>
                    <p className="mb-3 fs-5 fw-bold">Please send your text here</p>
                    <hr />
                    <Form />
                </Col>
            </Row>

        </Container>
    );
};

export default ContactMe;