import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.linkedin.com/in/paige-tiedeman">
              <i className="fa fa-linkedin fa-lg"></i>
            </a>
            <a href="https://github.com/paigetiedeman">
              <i className="fa fa-github-square fa-lg"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Paige</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical 
                  loop={Infinity}
                  steps={[
                    "Highly Adaptable Dev ",
                    1000,
                    "Full Stack Developer ",
                    1000,
                    "React Dev ",
                    1000,
                    "C#/.NET Dev ",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Passion for building creative UI/UX front and back end applications.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href="PortfolioResume.pdf" download="Paige's PortfolioResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
