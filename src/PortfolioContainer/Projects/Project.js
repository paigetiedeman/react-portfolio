import React from 'react';
import Card from './Card/Card.js';
import projects from './Data.js';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Project.css';
import shape from '../../assets/Project/shape-bg.png';

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div>
      <ScreenHeading
        title={'Projects'}
        subHeading={"What I've been working on"}
      />
      <section className="project-section fade-in" id={props.id || ''}>
        <div className="container">
          <div className="work-wrapper" id="Project-carousel">
            {projects.map((project, index) => (
              <Card
                key={index}
                heading={project.title}
                paragraph={project.para}
                imgUrl={project.imageSrc}
                projectLink={project.url1}
                projectCode={project.url2}
              ></Card>
            ))}
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
