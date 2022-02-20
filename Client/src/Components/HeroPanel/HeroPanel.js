import React from "react";
import "./HeroPanel.css";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Flip } from "react-reveal";
import { Link } from "react-router-dom";

const HeroPanel = () => {
  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <img
                src="https://img.icons8.com/color/32/000000/add-link.png"
                alt=""
              />
              Hero Panel
            </span>
          </Flip>
        </h3>
        <Row xs={1} md={2} className="g-4 w-75 mx-auto">
          <Col>
            <Card className="p-2 card">
              <Row>
                <Col xs={6} md={6}>
                  <Flip top cascade>
                    <Card.Img
                      variant="top"
                      className="img-fluid w-50"
                      src="https://img.icons8.com/external-phatplus-lineal-color-phatplus/512/000000/external-project-design-thinking-phatplus-lineal-color-phatplus.png"
                    />
                  </Flip>
                </Col>
                <Col xs={6} md={6}>
                  <Card.Title className="fw-bold text-uppercase">
                    Project Build
                  </Card.Title>
                  <Link to="/projectBuild" className="text-decoration-none">
                    Click Here
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 card">
              <Row>
                <Col xs={6} md={6}>
                  <Flip top cascade>
                    <Card.Img
                      variant="top"
                      className="img-fluid w-50"
                      src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/512/000000/external-blog-blogger-and-influencer-xnimrodx-lineal-gradient-xnimrodx.png"
                    />
                  </Flip>
                </Col>
                <Col xs={6} md={6}>
                  <Card.Title className="fw-bold text-uppercase">
                    Blog Build
                  </Card.Title>
                  <Link to="/blogBuild" className="text-decoration-none">
                    Click Here
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 card">
              <Row>
                <Col xs={6} md={6}>
                  <Flip top cascade>
                    <Card.Img
                      variant="top"
                      className="img-fluid w-50"
                      src="https://img.icons8.com/fluency/512/000000/approve-and-update.png"
                    />
                  </Flip>
                </Col>
                <Col xs={6} md={6}>
                  <Card.Title className="fw-bold text-uppercase">
                    Project Update
                  </Card.Title>
                  <Link to="/projectUpdate" className="text-decoration-none">
                    Click Here
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
          <Col>
            <Card className="p-2 card">
              <Row>
                <Col xs={6} md={6}>
                  <Flip top cascade>
                    <Card.Img
                      variant="top"
                      className="img-fluid w-50"
                      src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/512/000000/external-blog-smartphone-technology-itim2101-lineal-color-itim2101.png"
                    />
                  </Flip>
                </Col>
                <Col xs={6} md={6}>
                  <Card.Title className="fw-bold text-uppercase">
                    Blog Update
                  </Card.Title>
                  <Link to="/blogUpdate" className="text-decoration-none">
                    Click Here
                  </Link>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HeroPanel;
