import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const ContactMe = () => {
    return (
        <Container>
            <Flip top cascade>
                <span className="pb-2 text-danger fs-3">
                    <i className="fas fa-paper-plane"></i> Contact Me
                </span>
            </Flip>
            <Row>
                <Col sm="12" md="6">
                    <p className="mb-3 fw-bold">Please send your text here</p>

                </Col>
                <Col sm="12" md="6">
                    <p className="fw-bold">Find me</p>
                    <hr />

                    <div className="mt-4 ">
                        <p>+8801628435721</p>
                        <p>mdohidul.alam15@gmail.com</p>

                        <p>
                            <a href="https://www.linkedin.com/in/mohammad-ohidul-alam-06a506216/" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                LinkedIn
                            </a>
                            <a href="https://github.com/ohidulalam66" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                GitHub
                            </a>
                            <a href="https://twitter.com/OaNoyon" rel="noreferrer" target="_blank" className="me-2 btnContactMe text-decoration-none mx-2 px-3 py-2">
                                Twitter
                            </a>
                        </p>
                    </div>
                </Col>
            </Row>

        </Container>
    );
};

export default ContactMe;