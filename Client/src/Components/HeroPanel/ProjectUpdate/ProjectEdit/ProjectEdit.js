/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./ProjectEdit.ccs";
import { useParams } from "react-router-dom";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Flip } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";

const ProjectEdit = () => {
  const { id } = useParams();
  const [editProject, setEditProject] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/getProjects/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setEditProject(data));
  }, []);

  // edit image change
  const projectNameChange = (e) => {
    const editProjectChange = e.target.value;
    const updateProject = { ...editProject };
    updateProject.projectName = editProjectChange;
    setEditProject(updateProject);
  };

  // edit image change
  const imageChange = (e) => {
    const editImage = e.target.value;
    const updateProject = { ...editProject };
    updateProject.image = editImage;
    setEditProject(updateProject);
  };

  // edit start date Change
  const startDateChange = (e) => {
    const editStartDate = e.target.value;
    const updateProject = { ...editProject };
    updateProject.startDate = editStartDate;
    setEditProject(updateProject);
  };

  // edit end date Change
  const endDateChange = (e) => {
    const editEndDate = e.target.value;
    const updateProject = { ...editProject };
    updateProject.endDate = editEndDate;
    setEditProject(updateProject);
  };

  // edit details change
  const detailsChange = (e) => {
    const editDetails = e.target.value;
    const updateProject = { ...editProject };
    updateProject.details = editDetails;
    setEditProject(updateProject);
  };

  // edit technology Change
  const technologyChange = (e) => {
    const editTechnology = e.target.value;
    const updateProject = { ...editProject };
    updateProject.technology = editTechnology;
    setEditProject(updateProject);
  };

  // edit live Change
  const liveChange = (e) => {
    const editLive = e.target.value;
    const updateProject = { ...editProject };
    updateProject.live = editLive;
    setEditProject(updateProject);
  };

  // edit githubClient Change
  const githubClientChange = (e) => {
    const editGithubClient = e.target.value;
    const updateProject = { ...editProject };
    updateProject.githubClient = editGithubClient;
    setEditProject(updateProject);
  };

  // edit githubClient Change
  const githubServerChange = (e) => {
    const editGithubClient = e.target.value;
    const updateProject = { ...editProject };
    updateProject.githubServer = editGithubClient;
    setEditProject(updateProject);
  };

  const editProjectHandle = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/updateProject/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(editProject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Your Pizza Post Updated");
        } else {
          toast.error("Your Pizza Post has not been Updated");
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
                src="https://img.icons8.com/dusk/32/000000/edit--v1.png"
                alt=""
              />
              Project Edit
            </span>
          </Flip>
        </h3>
        <Row xs={1} md={2}>
          <Col className="text-start">
            <h4 className="fw-bold">{editProject?.projectName}</h4>
            <img src={editProject?.image} className="w-75" alt="" />
            <p>Start Date: {editProject?.startDate}</p>
            <p>End Date: {editProject?.endDate}</p>
            <p>Details: {editProject?.details}</p>
            <p>Live: {editProject?.live}</p>
            <p>Github Client: {editProject?.githubClient}</p>
            {editProject.githubServer && (
              <p>Github Server: {editProject?.githubServer}</p>
            )}
          </Col>
          <Col>
            <Form onSubmit={editProjectHandle}>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={projectNameChange}
                  value={editProject?.projectName || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={imageChange}
                  value={editProject?.image || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="date"
                  className="py-1 px-4 fw-bolder"
                  onChange={startDateChange}
                  value={editProject?.startDate || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="date"
                  className="py-1 px-4 fw-bolder"
                  onChange={endDateChange}
                  value={editProject?.endDate || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <textarea
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={detailsChange}
                  value={editProject?.details || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={technologyChange}
                  value={editProject?.technology || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={liveChange}
                  value={editProject?.live || ""}
                />
              </Form.Group>
              <Form.Group className="my-4">
                <input
                  type="text"
                  className="py-1 px-4 fw-bolder"
                  onChange={githubClientChange}
                  value={editProject?.githubClient || ""}
                />
              </Form.Group>
              {editProject.githubServer && (
                <Form.Group className="my-4">
                  <input
                    type="text"
                    className="py-1 px-4 fw-bolder"
                    onChange={githubServerChange}
                    value={editProject?.githubServer || ""}
                  />
                </Form.Group>
              )}
              <button
                type="submit"
                className="px-2 py-1 text-center text-uppercase ms-auto button"
              >
                Edit
              </button>
            </Form>
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default ProjectEdit;
