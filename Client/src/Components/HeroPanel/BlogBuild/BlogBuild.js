import React from "react";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Flip } from "react-reveal";
import "./BlogBuild.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BlogBuild = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {};

  return (
    <>
      <Container>
        <h3 className="my-5 text-center text-danger mb-4 underLine">
          <Flip top cascade>
            <span>
              <img
                src="https://img.icons8.com/fluency/32/000000/blog.png"
                alt=""
              />
              Blog Build
            </span>
          </Flip>
        </h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="py-1 px-4 my-2"
            {...register("blogName")}
            placeholder="Blog Name"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("image")}
            placeholder="Image Url"
            required
          />
          <input
            type="date"
            className="py-1 px-4  my-2"
            {...register("date")}
            placeholder="Date"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("shortDetails")}
            placeholder="Short Details"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("blogUrl")}
            placeholder="Blog Url"
            required
          />
          <br />
          <button
            className="px-2 py-1 mt-3 text-center text-uppercase ms-auto button"
            type="submit"
          >
            Build
          </button>
        </Form>
        <ToastContainer />
      </Container>
    </>
  );
};

export default BlogBuild;
