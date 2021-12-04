import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';
import Slide from 'react-reveal/Slide';

const Footer = () => {
    return (
        <>
            <div className="footerColor">
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