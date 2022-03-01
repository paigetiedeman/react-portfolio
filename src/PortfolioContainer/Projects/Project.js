import React from 'react';
import shape from '../../assets/Project/shape-bg.png';
import Animations from '../../utilities/Animations';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Card from './Card/Card.js';
import { projects } from './Data.js';
import './Project.css';

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
            <div className="cards card-deck">
              {projects.map((project) => (
                <Card
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  para={project.para}
                  imageSrc={project.imageSrc}
                  url1={project.url1}
                  url2={project.url2}
                ></Card>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
