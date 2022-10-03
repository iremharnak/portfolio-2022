import React from "react";
import "./Work.css";
import major from "../images/major.png";
import simon from "../images/simon.png";
import casecount from "../images/casecount.png";
import tinterest from "../images/tinterest.png";

const Work = () => {
  return (
    <div className="work" id="work">
      <div className="container">
        <h2 className="section-title work">Work</h2>
        <p className="section-blurb">Check out some of my work</p>
        <div className="gallery">
          <div className="gallery-item">
            <div>
              <img src={major} alt="" />
            </div>
            <div className="overlay overlay-blur">
              <h3>E-commerce App</h3>
              <p>HTML, CSS, Express, MongoDB, Mongoose, OAuth, NodeJS, Figma</p>
              <div className="overlay-buttons">
                <a
                  href="https://major-ecom.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/iremharnak/crudApp"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div>
              <img src={casecount} alt="" />
            </div>
            <div className="overlay overlay-blur">
              <h3>Customize your product</h3>
              <p>
                React, Express, MongoDB, JWT, NodeJS, CSS, React-Bootstrap,
                Stripe, Figma
              </p>
              <div className="overlay-buttons">
              <a
                  href="https://casecount.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/matheus-hro/GA-Final-Project-CaseCount"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div>
              <img src={simon} alt="" />
            </div>
            <div className="overlay overlay-blur">
              <h3>Browser based game</h3>
              <p>HTML, CSS, JavaScript, Figma</p>
              <div className="overlay-buttons">
              <a
                  href="https://iremharnak.github.io/simonGame/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/iremharnak/simonGame"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
          <div className="gallery-item">
            <div>
              <img src={tinterest} alt="" />
            </div>
            <div className="overlay overlay-blur">
              <h3>Social App</h3>
              <p>
                Python,Django, PostgreSQL, RESTful APIs, Amazon S3, JavaScript,
                CSS, Materialize, HTML, Figma
              </p>
              <div className="overlay-buttons">
              <a
                  href="https://tinterest.herokuapp.com/welcome/"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Demo
                </a>
                <a
                  href="https://github.com/RyanneZ/Tinterest"
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
