import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Flip } from 'react-reveal';
import './AllProjects.css';
import Loading from '../Loading/Loading';

const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = "./projects.json";
        fetch(url)
            .then(res => res.json())
            .then(data => setProjects(data));
        setIsLoading(false);
    }, []);
    return (
        <>
            <Container className="extraMargin">
                <h3 className="my-5 text-center text-danger mb-4 underLine">
                    <Flip top cascade>
                        <span>
                            <i class="far fa-folder-open"></i> All Projects
                        </span>
                    </Flip>
                </h3>
                {
                    isLoading ?
                        <Loading />
                        :
                        <div>
                            {
                                projects.map(project =>
                                    <Row key={project.id} className='mb-5 py-5 px-3 shadow rounded'>
                                        <Col sm={12} md={6}>
                                            <Image src={project?.image} className='img-fluid' />
                                        </Col>
                                        <Col sm={12} md={6} className='mt-5 mt-md-0'>
                                            <h4 className='fw-bold'>{project?.name}</h4>
                                            <p><span className='fw-bold'>Start: </span>{project?.start}</p>
                                            <p><span className='fw-bold'>End: </span>{project?.end}</p>
                                            <p><span className="fw-bold">Technology: </span>{project?.technology}</p>
                                            <p><span className="fw-bold">Details: </span>{project?.details}</p>
                                            <div className="mt-4">
                                                <button>
                                                    <a href={project.live} rel="noreferrer" target="_blank" className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0">
                                                        Live
                                                    </a>
                                                </button>
                                                <button>
                                                    <a href={project.github} rel="noreferrer" target="_blank" className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0">
                                                        GitHub
                                                    </a>
                                                </button>
                                                {
                                                    project?.server &&
                                                    <button>
                                                        <a href={project.server} rel="noreferrer" target="_blank" className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0">
                                                            Server
                                                        </a>
                                                    </button>
                                                }
                                            </div>
                                        </Col>
                                    </Row>
                                )
                            }
                        </div>
                }
            </Container>
        </>
    );
};

export default AllProjects;