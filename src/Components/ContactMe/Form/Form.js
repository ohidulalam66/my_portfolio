import React from "react";
import "./Form.css";
import Fade from "react-reveal/Fade";

const Form = () => {
  return (
    <>
      <form action="https://formspree.io/f/mpzbaylq" method="POST">
        <Fade bottom>
          <div className="form-floating mb-3 form-group">
            <input
              type="text"
              name="name"
              id="name"
              className="form-control"
              placeholder="Your Name "
              required
            />
            <label>Your name</label>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-floating mb-3 form-group">
            <input
              type="email"
              name="_replyto"
              //   name="email"
              className="form-control"
              placeholder="Your email address "
              required
            />
            <label>Your email</label>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-floating mb-3 form-group">
            <input
              type="text"
              name="subject"
              id="subject"
              className="form-control"
              placeholder="Your Subject"
              required
            />
            <label className="text-secondary">Subject</label>
          </div>
        </Fade>
        <Fade bottom>
          <div className="form-floating mb-3 form-group">
            <textarea
              type="text"
              name="message"
              className="form-control"
              cols="30"
              rows="10"
              placeholder="Your message"
              required
            ></textarea>
            <label className="text-secondary">Your message</label>
          </div>
        </Fade>
        <Fade bottom>
          <button
            className="btnContactMe text-decoration-none mt-4 px-3 py-2"
            type="submit"
          >
            <i className="fas fa-paper-plane"></i> Send
          </button>
        </Fade>
      </form>
    </>
  );
};

export default Form;
