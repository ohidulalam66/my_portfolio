/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import { useParams } from "react-router";
import Loading from "../Loading/Loading";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // const tech = project.technology;
  // const techSplit = tech.split(" ");
  // console.log(techSplit);

  useEffect(() => {
    const url = `/projectsApi/project${projectId}.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProject(data));
    setIsLoading(false);
  }, []);

  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <i className="fas fa-info-circle"></i> Project Detail
            </span>
          </Flip>
        </h3>
        {isLoading ? (
          <Loading />
        ) : (
          <Fade bottom>
            <Row className="my-5">
              <Col className=" d-flex justify-content-center">
                <img src={project.image} className="img-fluid w-50" alt="" />
              </Col>
            </Row>
            <Row className="my-4">
              <Col sm={12} md={6}>
                <h3 className="fw-bolder">{project.name}</h3>
                <p>
                  <span className="fw-bold">Start:</span> {project.start}
                </p>
                <p>
                  <span className="fw-bold">End:</span> {project.end}
                </p>
                <p>
                  <span className="fw-bold">Technology:</span>{" "}
                  {project.technology}
                </p>
                {/* {techSplit.map((singleTech) => (
                  <span
                    style={{
                      backgroundColor: "#E5E7EB",
                    }}
                    className="px-2 py-1 m-1 rounded-pill"
                  >
                    {singleTech}{" "}
                  </span>
                ))} */}
              </Col>
              <Col sm={12} md={6}>
                <p>
                  <span className="fw-bold">Details:</span> {project.details}
                </p>
                <div className="mt-3">
                  <button>
                    <a
                      href={project.live}
                      rel="noreferrer"
                      target="_blank"
                      className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                    >
                      Live
                    </a>
                  </button>
                  <button>
                    <a
                      href={project.github}
                      rel="noreferrer"
                      target="_blank"
                      className="me-2 btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                    >
                      GitHub
                    </a>
                  </button>
                  {project?.server && (
                    <button>
                      <a
                        href={project.server}
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
          </Fade>
        )}
      </Container>
    </>
  );
};

export default ProjectDetail;
