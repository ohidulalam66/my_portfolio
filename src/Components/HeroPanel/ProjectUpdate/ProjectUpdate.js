import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Flip } from "react-reveal";
import "./ProjectUpdate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectUpdate = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const url = "https://serene-brushlands-78099.herokuapp.com/getProjects";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const deleteProject = (id) => {
    const url = `https://serene-brushlands-78099.herokuapp.com/deleteProject/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Your Project has been Deleted!", {
            position: "bottom-center",
          });
          const remainingProjects = projects.filter(
            (project) => project._id !== id
          );
          setProjects(remainingProjects);
        } else {
          toast.error("Your project has been not Deleted!", {
            position: "bottom-center",
          });
        }
      });
  };

  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <img
                src="https://img.icons8.com/fluency/32/000000/open-file-under-cursor.png"
                alt=""
              />
              Project Update
            </span>
          </Flip>
        </h3>
        <Row xs={1} md={3} className="g-4">
          {projects
            .map((project) => (
              <Col>
                <Card className="p-2 h-100 card">
                  <Row>
                    <Col xs={6} md={6}>
                      <Flip top cascade>
                        <Card.Img
                          variant="top"
                          className="img-fluid w-100"
                          src={project.image}
                        />
                      </Flip>
                    </Col>
                    <Col xs={6} md={6}>
                      <Card.Title className="fw-bold text-uppercase">
                        {project.projectName}
                      </Card.Title>
                      <Link to={`/updateProject/${project._id}`}>
                        <button className="btn mx-2">
                          <img
                            className="w-100"
                            src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/64/000000/external-edit-miscellaneous-kiranshastry-gradient-kiranshastry.png"
                            alt=""
                          />
                        </button>
                      </Link>
                      <button
                        className="btn mx-2"
                        onClick={() => deleteProject(project._id)}
                      >
                        <img
                          className="w-100"
                          src="https://img.icons8.com/external-others-pike-picture/64/000000/external-delete-electrical-waste-tools-others-pike-picture.png"
                          alt=""
                        />
                      </button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))
            .reverse()}
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ProjectUpdate;
