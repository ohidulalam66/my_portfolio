import React from "react";
import { Container } from "react-bootstrap";
import { Flip } from "react-reveal";
import "./ProjectUpdate.css";

const ProjectUpdate = () => {
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
      </Container>
    </>
  );
};

export default ProjectUpdate;
