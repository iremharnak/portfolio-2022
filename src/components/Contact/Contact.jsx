import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h2 className="section-title contact">Contact</h2>
      <div className="section">
        <form
          method="POST"
          action="https://getform.io/f/d0a75a21-6962-4077-a20a-a9379b3508a9"
        >
          <p className="section-blurb">
            I am excited to meet you & learn about any potential roles you are
            looking to fill in your development team.
          </p>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              placeholder="Full Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="message" name="message" id="message" required />
          </div>
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
