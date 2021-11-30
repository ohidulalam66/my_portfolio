import React from 'react';
import './Form.css';


const Form = () => {

    return (
        <>
            <form action="https://formspree.io/f/mpzbaylq" method="POST">
                <div className="form-floating mb-3 form-group">
                    <input type="text" name="name" id="name" className="form-control" placeholder="Your Name " required />
                    <label>Your name</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <input type="email" name="_replyto" name="email" className="form-control" placeholder="Your email address " required />
                    <label>Your email</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <input type="text" name="subject" id="subject" className="form-control" placeholder="Your Subject" required />
                    <label className="text-secondary">Subject</label>
                </div>

                <div className="form-floating mb-3 form-group">
                    <textarea type="text" name="message" className="form-control" cols="30" rows="10" placeholder="Your message" required></textarea>
                    <label className="text-secondary">Your message</label>
                </div>
                <button className="btnContactMe text-decoration-none mx-2 px-3 py-2" type="submit">
                    <i className="fas fa-paper-plane"></i> Send
                </button>
            </form>
        </>
    );
};

export default Form;