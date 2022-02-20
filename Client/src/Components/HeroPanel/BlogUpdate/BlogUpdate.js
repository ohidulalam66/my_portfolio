import React from "react";
import { Container } from "react-bootstrap";
import { Flip } from "react-reveal";
import "./BlogUpdate.css";

const BlogUpdate = () => {
  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <img
                src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/32/000000/external-blog-contact-us-xnimrodx-lineal-gradient-xnimrodx.png"
                alt=""
              />
              Blog Update
            </span>
          </Flip>
        </h3>
      </Container>
    </>
  );
};

export default BlogUpdate;
