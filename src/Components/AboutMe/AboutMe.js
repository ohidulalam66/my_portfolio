import React from 'react';
import './AboutMe.css';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const AboutMe = () => {
    return (
        <>
            <Container className="extraMargin">
                <h3 className="py-4 text-center text-danger">
                    <Flip top cascade>
                        <span>
                            <i className="fab fa-500px"></i> About Me
                        </span>
                    </Flip>
                </h3>
                <Fade bottom cascade>
                    <div className="">
                        <p className="text-secondary mt-5">
                            <span className="fs-2 fw-bold">Hi there!</span> I'm Mohammad Ohidul Alam from Bangladesh, and I work in Junior Web Development. I am currently studying BSc at Premier University through CSE. I really enjoy working as well as learning languages and frameworks like JS, React JS. Also, I have ideas about Bootstrap, React Bootstrap, Tailwind CSS, and Material UI about my Design. Node JS, Express, and MongoDB also have ideas about the backend. I have experience of 10+ web <Link to='/projects' className="text-decoration-none cool-link fw-bold">projects</Link> by using JavaScript, React.js, Node.js, MongoDB and other technologies. I have also solid knowledge of CSS framework like bootstrap, tailwind, material-ui. Outside of programming, I enjoy reading books, arts and gardening.
                            Lastly, I like to code.🌭 This is my hobby.😍
                        </p>
                    </div>
                </Fade>
            </Container>
        </>
    );
};

export default AboutMe;