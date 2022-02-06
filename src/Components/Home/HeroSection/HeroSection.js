import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import './HeroSection.css'
import { Link } from 'react-router-dom'
import Bounce from 'react-reveal/Bounce'
import RubberBand from 'react-reveal/RubberBand'
import Zoom from 'react-reveal/Zoom'
import ParticlesBg from 'particles-bg'
import { Typewriter } from 'react-simple-typewriter'

const HeroSection = () => {
  const heroProfilePicUrl = 'https://i.ibb.co/WVTpGfn/hero.gif'
  const resumeDownload =
    'https://drive.google.com/uc?export=download&id=1F28YGvvIAcv16ns5qtdGRrMx9kqHUC4e'

  return (
    <Container className="pb-5 extraMargin">
      <ParticlesBg color="#afd4cd" num={100} type="cobweb" bg={true} />
      <Row className="d-flex justify-content-center align-items-center">
        <Col sm={12} md={4} style={{ textAlign: 'center' }}>
          <Image
            className="hero-image img-fluid"
            src={heroProfilePicUrl}
            roundedCircle
          />
        </Col>
        <Col sm={12} md={8} className="mt-5 mt-md-0">
          <Zoom top duration={1000} cascade>
            <RubberBand>
              <h4 className="fw-bold text-uppercase fw-5">
                Mohammad Ohidul Alam
              </h4>
            </RubberBand>
            <h5 className="hero-profile">
              <i className="fas fa-briefcase"></i> A{' '}
              <span
                style={{ color: 'red', fontWeight: 'bold', fontSize: '20px' }}
              >
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={['Front-End', 'React', 'MERN-Stack']}
                  loop={50}
                  typeSpeed={100}
                  deleteSpeed={80}
                  delaySpeed={2000}
                />
              </span>{' '}
              Developer
            </h5>
            <p className="fs-5">3+ MERN Stack Projects, 10+ web projects</p>
            <p className="my-4 mx-auto">
              <span className="language me-2">JavaScript</span>
              <span className="language me-2">React</span>
              <span className="language me-2">NodeJS</span>
              <span className="language">MongoDB</span>
            </p>
            <div>
              <a
                href={resumeDownload}
                className="text-decoration-none btnDownloadResume px-3 py-2 text-uppercase"
                type="button"
              >
                <i className="fas fa-file-download"></i> Download Resume
              </a>
              <Link to="/contact">
                <button className="btnContactMe mx-0 mx-md-2 px-3 py-2 text-uppercase mt-3 mt-md-0">
                  <i className="fas fa-paper-plane"></i> Contact Me
                </button>
              </Link>
            </div>
          </Zoom>
        </Col>
      </Row>
      <Bounce bottom>
        <p className="mt-5">
          <span className="fs-2 fw-bold">Hi there!</span> I'm Mohammad Ohidul
          Alam from Bangladesh, and I work in Junior Web Development. I am
          currently studying BSc at Premier University through CSE. I really
          enjoy working as well as learning languages and frameworks like JS,
          React JS. Also, I have ideas about Bootstrap, React Bootstrap,
          Tailwind CSS, and Material UI about my Design. Node JS, Express, and
          MongoDB also have ideas about the backend. I have experience of 10+
          web{' '}
          <Link
            to="/projects"
            className="text-decoration-none cool-link fw-bold"
          >
            projects
          </Link>{' '}
          by using JavaScript, React.js, Node.js, MongoDB and other
          technologies. I have also solid knowledge of CSS framework like
          bootstrap, tailwind, material-ui. Outside of programming, I enjoy
          reading books, arts and gardening. Lastly, I like to code.🌭 This is
          my hobby.😍
        </p>
      </Bounce>
    </Container>
  )
}

export default HeroSection

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
