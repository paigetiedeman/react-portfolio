import React, { useEffect } from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/Animations'
import './AboutMe.css'

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) =>{
    if(screen.fadeInScreen !== props.id)
    return Animations.animations.fadeInScreen(props.id)
  }
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description: "Adaptable developer with a knowledge in Javascript, React and C#, along with a drive for building innovative web applications. Transitioning professional with two BS degrees graduating an intensive Code School ready to be an asset for a company.",
    highlights: {
      bullets: [
        "Full Stack Web Development",
        "React and Redux",
        "C# and .NET",
        "MySQL and relational databases",
        "Test Driven Development",
        "RESTful API's",
        "Striving to find the best UX design",
      ],
      heading: "Here are a few highlights:",
    },
  };

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div className="about-me-container screen-container fade-in" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>  
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="PortfolioResume.pdf" download="PortfolioResume.pdf">
                <button className="btn highlighted-btn">Download Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
