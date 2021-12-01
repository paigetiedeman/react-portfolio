import React from 'react';
import Typical from 'react-typical';

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://www.linkedin.com/in/paige-tiedeman">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://github.com/paigetiedeman">
              <i className="fa fa-github-square"></i>
            </a>
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
                Passion for building user-friendly designed front and back end applications.
              </span>
            </span>
          </div>
          <div className="profile-optins">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href="PortfolioResume.pdf" download="Paige's PortfolioResume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
