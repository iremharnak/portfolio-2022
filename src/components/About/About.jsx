import React from 'react'
import './About.css'
import profileImg from '../images/IREM-profil-portrait.jpg'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import CV from '../images/IremHarnak-FrontEndResume2022.pdf'
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="section">
          <div className="col-1">
            <div className="profile-img-container">
              <img src={profileImg} alt="Me" />
            </div>
            <div>
              <a
                href={CV}
                target="_blank"
                rel="noreferrer"
                className="button resume-btn"
              >
                Resume/CV
              </a>
            </div>
          </div>
          <div className="col-2">
            <p>
              I am a front-end developer with a background in user experience
              design. My coding journey began with building interactive &
              engaging experiences in VR/AR. From there I began experimenting
              with the web, and fell in love with development. I am a graduate
              of General Assembly’s Software Engineering Immersive Bootcamp and
              have an advanced diploma in Interactive Design and Development
              from George Brown College.
            </p>
            <h4>Skills</h4>
            <p>
              HTML, CSS, JavaScript, React, Git, Bitbucket, NodeJS, Express,
              Mongo, Mongoose, Django, Python, PostgreSQL, Bootstrap,
              Materialize
            </p>
            <div className="socials">
              <a href="https://www.linkedin.com/in/iremharnak/">
                <FaLinkedin size={30} style={{ color: "#f8f8f8" }} />
              </a>
              <a href="https://github.com/iremharnak">
                <FaGithub
                  size={30}
                  style={{ color: "#f8f8f8", marginLeft: "16px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;