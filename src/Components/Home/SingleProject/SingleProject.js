import React from 'react';
import { Card } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
const SingleProject = ({ project }) => {
    const tech = project.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <Fade bottom>
                <Card className="card mb-5 shadow-sm">
                    <img src={project.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title fw-bold">{project.name}</h5>
                        <p className="text-secondary">
                        </p>
                        <p className="card-text">
                            {project.details}
                        </p>
                        <p className="card-text lh-lg">
                            {
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
                        </p>
                    </div>
                    <div className="card-footer pb-4 bg-white border-top-0 ">

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
                    </div>
                </Card>
            </Fade>
        </div>
    );
};

export default SingleProject;