import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { Flip, Fade } from "react-reveal";
import "./AllProjects.css";
import Loading from "../Loading/Loading";

const AllProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://serene-brushlands-78099.herokuapp.com/getProjects";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <i class="far fa-folder-open"></i> All Projects
            </span>
          </Flip>
        </h3>
        {isLoading ? (
          <Loading />
        ) : (
          <Fade bottom cascade>
            <div>
              {projects
                .map((project) => (
                  <Row
                    key={project.id}
                    className="mb-5 py-5 px-3 shadow rounded projectCard"
                  >
                    <Col sm={12} md={6}>
                      <Image src={project?.image} className="img-fluid" />
                    </Col>
                    <Col sm={12} md={6} className="mt-5 mt-md-0">
                      <h4 className="fw-bold text-danger">
                        {project?.projectName}
                      </h4>
                      <p>
                        <span className="fw-bold">Start: </span>
                        {project?.startDate}
                      </p>
                      <p>
                        <span className="fw-bold">End: </span>
                        {project?.endDate}
                      </p>
                      <p>
                        <span className="fw-bold">Technology: </span>
                        {project?.technology}
                      </p>
                      <p>
                        <span className="fw-bold">Details: </span>
                        {project?.details}
                      </p>
                      <div className="mt-4">
                        <button>
                          <a
                            href={project?.live}
                            rel="noreferrer"
                            target="_blank"
                            className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                          >
                            Live
                          </a>
                        </button>
                        <button>
                          <a
                            href={project?.githubClient}
                            rel="noreferrer"
                            target="_blank"
                            className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                          >
                            GitHub
                          </a>
                        </button>
                        {project?.githubServer === "" ? (
                          ""
                        ) : (
                          <button>
                            <a
                              href={project?.githubServer}
                              rel="noreferrer"
                              target="_blank"
                              className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                            >
                              Server
                            </a>
                          </button>
                        )}
                      </div>
                    </Col>
                  </Row>
                ))
                .reverse()}
            </div>
          </Fade>
        )}
        ;
      </Container>
    </>
  );
};

export default AllProjects;
