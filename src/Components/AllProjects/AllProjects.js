import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './AllProjects.css';
import Flip from 'react-reveal/Flip';
import Project from '../Project/Project';
import Loading from '../Loading/Loading';

const AllProjects = () => {
    const [allProject, setAllProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const url = '/projects.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setAllProject(data.slice(3)));
        setIsLoading(false);
    }, [])
    return (
        <>
            <Container className="extraMargin">
                <h3 className="py-4 text-center text-danger mb-4  underLine">
                    <Flip top cascade>
                        <span>
                            <i className="fab fa-staylinked"></i> All Project
                        </span>
                    </Flip>
                </h3>
                {
                    isLoading ?
                        <Loading />
                        :
                        <Row xs={1} md={3} className="g-4">
                            {
                                allProject.map(p =>
                                    <Project
                                        key={p.name}
                                        p={p}
                                    ></Project>)
                            }
                        </Row>
                }
            </Container>
        </>
    );
};

export default AllProjects;