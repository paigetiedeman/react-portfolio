import React, { useState, useEffect } from 'react'
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading2 ? props.subHeading2 : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description2 ? props.description2 : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "C#/.NET", ratingPercentage: 75 },
    { skill: "CSS3", ratingPercentage: 80 },
    { skill: "JQuery", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "MySQL", ratingPercentage: 70 },
    { skill: "HTML5", ratingPercentage: 85 },
    { skill: "Semantic UI", ratingPercentage: 75 },
    { skill: "Git Workflow", ratingPercentage: 90 },
  ];

  const projectsDetails = [
    {
      title: "Capstone - Elevate Everyday",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Full CRUD for Workouts with designed Blog component.",
      subHeading: "Technologies Used: React JS, Bootstrap, Semantic UI, React-Router, Redux",
    },
    {
      title: "Tap Room - Summer's Seltzery",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Summer's Seltzery a React app with full CRUD.",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Podify - Personal Podcast Database ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An application that stores user entered podcasts connecting to a relational database for full CRUD abilities.",
      subHeading:
        "Technologies Used: C#, .NET, MySQL, Entity, CSS, HTML, and Bootstrap.",
    },
    {
      title: "City Tour ",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "Team Project: recommended city tours based on the mood you pick ",
      subHeading:
        "Technologies Used: JavaScript, API's, JQuery, HTMl, CSS, and Bootstrap.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Epicodus"}
        subHeading={"Full Stack software developer bootcamp"}
        fromDate={"2021"}
        toDate={"Present"}
      />
      <ResumeHeading
        heading={"University of Nebraska - Lincoln"}
        subHeading={"BACHELOR OF SCIENCE - Business Administration"}
        description={"Major: Marketing"}
        subHeading2={"BACHELOR OF SCIENCE - Education and Human Services"}
        description2={"Major: Merchandising"}
        fromDate={"2014"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Cornell "}
        subHeading={"Master's Certificate - Data Analytics"}
        fromDate={"2019"}
        toDate={" "}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Zulily"}
          subHeading={"Assistant Buyer"}
          fromDate={"2019"}
          toDate={"2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            - Pioneered a 6+ team strategy that brought in $5 million within the first year. 
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Analyzed internal data to manipulate and build reports to make data-driven decisions based on consumer buying patterns. 
          </span>
          <br />
          <span className="resume-description-text">
            - Collaborated with cross-functional teams to execute 150+ dynamic and engaging events on an e-commerce platform monthly.{" "}
          </span>
          <br />
          <span className="resume-description-text">
            - Managed 20 international vendors to build relationships, secure inventory, and develop cost reductions to exceed margin goals.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travel"
        description="I enjoy exploring places unknown and off the beaten path, when not coding I'm probably planning my next solo backpacking trip."
      />
      <ResumeHeading
        heading="Reading"
        description="My best stress reliever is starting a new book that I can't put down, whether that be a thriller or the latest from my book club group."
      />
      <ResumeHeading
        heading="Special Effects Makeup"
        description="Being both analytical and creative help to shape my code abilities and to let myself express my creative side I dabble in SFX makeup. While I have no training I find it easy enough to find videos and teach myself new techniques."
      />
    </div>,
  ];

  const handleCarousel = (index) => {
    let offsetHeight = 360;

    let newCarouselOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarouselOffSetStyle(newCarouselOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousel(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className="resume-details-carousel"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
