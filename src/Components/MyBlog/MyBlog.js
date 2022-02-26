import React, { useState, useEffect } from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Loading from "../Loading/Loading";

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://serene-brushlands-78099.herokuapp.com/getBlogs";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlogs(data));
    setIsLoading(false);
  }, []);
  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <i className="fas fa-blog"></i> My Blog
            </span>
          </Flip>
        </h3>
        {isLoading ? (
          <Loading />
        ) : (
          <Fade bottom cascade>
            <div>
              {blogs
                .map((blog) => (
                  <Row
                    key={blog._id}
                    className="my-4 mx-2 mx-md-0 py-0 py-md-4 px-2 shadow rounded g-4"
                  >
                    <Col sm={12} md={6} className="mt-5 mt-md-0">
                      <div className="d-flex align-items-center">
                        <Image src={blog?.icon} />
                        <h4 className="fw-bolder">{blog?.blogName}</h4>
                      </div>
                      <p>{blog?.shortDetails}</p>
                      <p>
                        {blog?.date} / {blog?.readingTime}
                      </p>
                      <button>
                        <a
                          href={blog?.blogUrl}
                          rel="noreferrer"
                          target="_blank"
                          className="btnLink text-decoration-none px-3 py-2 my-5 my-md-0"
                        >
                          Read More
                        </a>
                      </button>
                    </Col>
                    <Col sm={12} md={6}>
                      <Image
                        src={blog?.image}
                        className=" rounded img-thumbnail img-fluid"
                      />
                    </Col>
                  </Row>
                ))
                .reverse()}
            </div>
          </Fade>
        )}
      </Container>
    </>
  );
};

export default MyBlog;
