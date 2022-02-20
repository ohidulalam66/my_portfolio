import React from "react";
import "./ProjectBuild.css";
import { Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Flip } from "react-reveal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectBuild = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/projectBuild", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          toast.success("Your Project Build", {
            position: "bottom-center",
          });
          reset();
        } else {
          toast.error("Your Project Build has not been submitted", {
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
                src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/32/000000/external-build-agile-flaticons-lineal-color-flat-icons.png"
                alt=""
              />
              Project Build
            </span>
          </Flip>
        </h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="py-1 px-4 my-2"
            {...register("projectName")}
            placeholder="Project Name"
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
            {...register("startDate")}
            placeholder="start Date"
            required
          />
          <input
            type="date"
            className="py-1 px-4  my-2"
            {...register("endDate")}
            placeholder="End Date"
            required
          />
          <textarea
            type="text"
            className="py-1 px-4  my-2"
            {...register("details")}
            placeholder="Details"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("technology")}
            placeholder="Technology"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("live")}
            placeholder="Live Site Link"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("githubClient")}
            placeholder="Github Client Link"
            required
          />
          <input
            type="text"
            className="py-1 px-4  my-2"
            {...register("githubServer")}
            placeholder="Github Server Link"
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

export default ProjectBuild;
