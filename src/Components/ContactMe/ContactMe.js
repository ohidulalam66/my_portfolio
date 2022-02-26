import React from "react";
import "./ContactMe.css";
import { Col, Container, Image, Row } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import LightSpeed from "react-reveal/LightSpeed";
import Bounce from "react-reveal/Bounce";
import Form from "./Form/Form";

const ContactMe = () => {
  const ContactPicUrl = "https://www.emailjs.com/assets/support.svg";
  // social link
  const heroEmail = "mdohidul.alam15@gmail.com";
  const linkedInUrl = "https://www.linkedin.com/in/mohammad-ohidul-alam/";
  const gitHubUrl = "https://github.com/ohidulalam66";
  const twitterUrl = "https://twitter.com/OaNoyon";

  return (
    <Container>
      <h3 className="my-5 text-center text-danger mb-4 underLine">
        <Flip top cascade>
          <span>
            <i className="fas fa-paper-plane"></i> Contact Me
          </span>
        </Flip>
      </h3>
      <Row sm={1} md={2}>
        <Col sm={12} md={6}>
          <div>
            <Flip top cascade>
              <h5 className="mb-3 fs-5 fw-bold xs-mb-4">
                <i className="fas fa-search"></i> Find me
              </h5>
            </Flip>
            <hr />
            <LightSpeed left>
              <Image src={ContactPicUrl} className="ContactProfilePicUrl" />
            </LightSpeed>
            <div className="mt-2">
              <LightSpeed left>
                <h6>
                  <i className="fas fa-phone-alt"></i> +8801628435721
                </h6>
                <h6>
                  <i className="fas fa-envelope-open"></i> {heroEmail}
                </h6>
              </LightSpeed>
              <p className="mt-5">
                <Bounce duration={1000}>
                  <button className="mt-3 mt-md-0">
                    <a
                      href={linkedInUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="linkedin btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                    >
                      <i className="fab fa-linkedin-in"></i> LinkedIn
                    </a>
                  </button>
                </Bounce>
                <Bounce duration={1500}>
                  <button className="mt-3 mt-md-0">
                    <a
                      href={gitHubUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="github btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                    >
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </button>
                </Bounce>
                <Bounce duration={2000}>
                  <button className="mt-3 mt-md-0">
                    <a
                      href={twitterUrl}
                      rel="noreferrer"
                      target="_blank"
                      className="twitter btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                    >
                      <i className="fab fa-twitter"></i> Twitter
                    </a>
                  </button>
                </Bounce>
              </p>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} className="mt-5 mt-md-0">
          <Flip top cascade>
            <h5 className="mb-3 fs-5 fw-bold xs-mb-4">
              <i className="fab fa-wpforms"></i> Please send your text here
            </h5>
          </Flip>
          <hr />
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactMe;
