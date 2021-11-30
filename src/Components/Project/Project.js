import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';

const Project = ({ p }) => {
    const tech = p.technology;
    const techSplit = tech.split(" ");

    return (
        <>
            <Flip top cascade>
                <Col>
                    <Card>
                        <Card.Img variant="top" src={p.image} />
                        <Card.Body>
                            <Card.Title>{p.name}</Card.Title>
                            <Card.Text>{p.details}</Card.Text>
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
                            <a href={p.live} target="_blank" rel="noreferrer" className="">
                                <button className="btnContactMe mx-2 px-3 py-2 text-uppercase mb-md-0">
                                    <i className="fab fa-pagelines"></i> Live Website
                                </button>
                            </a>
                            <a href={p.github} target="_blank" rel="noreferrer" className="">
                                <button className="btnContactMe mx-2 px-3 py-2 text-uppercase mb-md-0">
                                    <i className="fab fa-github-alt"></i> Client GitHub
                                </button>
                            </a>
                            {
                                p.server &&
                                <a href={p.server} target="_blank" rel="noreferrer" className="">
                                    <button className="btnContactMe mx-2 px-3 py-2 text-uppercase">
                                        <i className="fab fa-github-alt"></i> Server GitHub
                                    </button>
                                </a>
                            }
                        </Card.Body>
                    </Card>
                </Col>
            </Flip>
        </>
    );
};

export default Project;