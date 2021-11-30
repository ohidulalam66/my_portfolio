import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
const SingleProject = ({ project }) => {
    const tech = project.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <Fade bottom>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={project.image} />
                        <Card.Body>
                            <Card.Title>{project.name}</Card.Title>
                            <Card.Text>{project.details}</Card.Text>
                            <Card.Text>
                                <b>Technology:</b>{
                                    techSplit.map(singleTech => (
                                        <span
                                            style={{
                                                backgroundColor: '#E5E7EB'
                                            }}
                                            className="px-2 py-1 rounded-pill mx-2 "
                                        >
                                            {singleTech}{" "}
                                        </span>
                                    ))
                                }
                            </Card.Text>
                            <a href={project.live} target="_blank" rel="noreferrer" className="">
                                <button className="btnContactMe mx-2 px-3 py-2 text-uppercase mb-md-0">
                                    <i className="fab fa-pagelines"></i> Live Website
                                </button>
                            </a>
                            <a href={project.github} target="_blank" rel="noreferrer" className="">
                                <button className="btnContactMe mx-2 px-3 py-2 text-uppercase mb-md-0">
                                    <i className="fab fa-github-alt"></i> Client GitHub
                                </button>
                            </a>
                            {
                                project.server &&
                                <a href={project.server} target="_blank" rel="noreferrer" className="">
                                    <button className="btnContactMe mx-2 px-3 py-2 text-uppercase">
                                        <i className="fab fa-github-alt"></i> Server GitHub
                                    </button>
                                </a>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Fade>
        </div>
    );
};

export default SingleProject;