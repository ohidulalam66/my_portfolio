import React from 'react';

const SingleProject = ({ project }) => {
    const tech = project.technology;
    const techSplit = tech.split(" ");

    return (
        <div>
            <div class="card mb-5 shadow-sm">
                <img src={project.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title fw-bold">{project.name}</h5>
                    <p className="text-secondary">
                    </p>
                    <p class="card-text">
                        {project.details}
                    </p>
                    <p class="card-text lh-lg">
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
                        <button className="btn btn-outline-dark me-2 mb-2 mb-md-0">
                            Live Website
                        </button>
                    </a>

                    <a href={project.github} target="_blank" rel="noreferrer" className="">
                        <button className="btn btn-outline-dark me-2 mb-2 mb-md-0">
                            Client GitHub
                        </button>
                    </a>

                    {
                        project.server &&

                        <a href={project.server} target="_blank" rel="noreferrer" className="">
                            <button className="btn btn-outline-dark me-2">
                                Server GitHub
                            </button>
                        </a>

                    }
                </div>
            </div>
        </div>
    );
};

export default SingleProject;