import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Flip from 'react-reveal/Flip';
// import Fade from 'react-reveal/Fade';
import Loading from '../../Loading/Loading';
import { Link } from 'react-router-dom';
import SingleProject from '../SingleProject/SingleProject';

const MyProjects = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        const url = '/projects.json';
        fetch(url)
            .then(res => res.json())
            .then(data => setProjects(data.slice(0, 3)));
        setIsLoading(false);
    }, [])
    return (
        <Container>
            <h3 className="py-4 text-center text-danger">
                <Flip top cascade>
                    <span>
                        <i className="fab fa-staylinked"></i> All Projects
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
                                <SingleProject
                                    key={project.name}
                                    project={project}
                                ></SingleProject>)
                        }
                        <div className="text-center pb-5">
                            <Link to="/projects">
                                <button className="btn btn-dark">
                                    See All Projects
                                </button>
                            </Link>
                        </div>
                    </div>
            }
        </Container >
    );
};

export default MyProjects;

/*
{
                isLoading ?
                    <Loading />
                    :
                    <div>
                        <Fade bottom>
                            {
                                projects.map(project =>
                                    <SingleProject
                                        key={project.name}
                                        project={project}
                                    ></SingleProject>)
                            }
                        </Fade>
                        <div className="text-center pb-5">
                            <Link to="/projects">
                                <button className="btn btn-dark">
                                    See All Projects
                                </button>
                            </Link>
                        </div>
                    </div>
            }
*/