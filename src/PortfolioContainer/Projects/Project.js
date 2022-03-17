import React, {useEffect} from 'react';
import shape from '../../assets/Project/shape-bg.png';
import Animations from '../../utilities/Animations';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Card from './Card/Card.js';
import { projects } from './Data.js';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './Project.css';

export default function Project(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: 'bounceInRight',
    animateOut: 'bounceOutRight',
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  useEffect(() => {
    return () => {
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div>
      <ScreenHeading
        title={'Projects'}
        subHeading={"What I've been working on"}
      />
      <section className="project-section fade-in" id={props.id || ''}>
        <div className="container">
          <OwlCarousel
            className="owl-carousel"
            id="project-carousel"
            {...options}
          >
            <div className="col-lg-12">
              <div className="project-item">
                <div className="project-comment">
                  <div className="work-wrapper" id="Project-carousel">
                    <div className="cards">
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
              </div>
            </div>
          </OwlCarousel>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
