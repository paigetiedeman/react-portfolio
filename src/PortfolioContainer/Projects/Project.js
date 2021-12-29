import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Project.css';
import elevate from '../../assets/Project/elevate.png';
import seltzer from '../../assets/Project/seltzer.png';
import garden from '../../assets/Project/garden.png';
import podcast from '../../assets/Project/podcast.png';
import shape from '../../assets/Project/shape-bg.png';
import { NavLink } from 'react-router-dom';

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
    autoplayHoverPause: true,
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

  return (
    <div>
      <ScreenHeading
        title={'Projects'}
        subHeading={"What I've been working on"}
      />
      <section className="project-section fade-in" id={props.id || ''}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="Project-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="client-info">
                    <img src={elevate} alt="no internet connection"></img>
                    <h5>Elevate Everyday</h5>
                    <p>Capstone Project</p>
                  </div>
                  <div className="project-comment">
                    <p>
                      Capstone Project for Epicodus: Full CRUD for Workouts with
                      Blog component. An ongoing project that showcases UI/UX
                      design elements.
                    </p>
                  </div>
                  <div className="project-link">
                    <a href="https://paigetiedeman.github.io/Elevate-Everyday/">
                      <i className="fa fa-link">Project</i>
                    </a>
                    <br />
                    <a href="https://github.com/paigetiedeman/Elevate-Everyday">
                      <i className="fa fa-code">Code</i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <div className="client-info">
                      <img src={garden} alt="no internet connection"></img>
                      <h5>Little Green Thumb</h5>
                      <p>Team Project</p>
                    </div>
                    <p>
                      This app allows the user full CRUD functionality for their
                      own seeds and plots. The application also includes a
                      learning zone where gardening novices can find helpful
                      information to get started.
                    </p>
                  </div>
                  <div className="project-link">
                    <a href="https://github.com/paigetiedeman/GardenTeamWeek">
                      <i className="fa fa-code">MVC Code</i>
                    </a>
                    <br />
                    <a href="https://github.com/paigetiedeman/GardenAPI.Solution">
                      <i className="fa fa-code">API Code</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <div className="client-info">
                      <img src={seltzer} alt="no internet connection"></img>
                      <h5>Summer's Seltzery</h5>
                      <p>React App</p>
                    </div>
                    <p>
                      Solo Project: Summer's Seltzery a React app with full
                      CRUD.
                    </p>
                  </div>
                  <div className="project-link">
                    <a href="https://paigetiedeman.github.io/tap-room/">
                      <i className="fa fa-link">Project</i>
                    </a>
                    <br />
                    <a href="https://github.com/paigetiedeman/tap-room">
                      <i className="fa fa-code">Code</i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="client-info">
                    <img src={podcast} alt="no internet connection"></img>
                    <h5>Podify</h5>
                    <p>C# and MySQL Project</p>
                  </div>
                  <div className="project-comment">
                    <p>
                      Podify A C# Personal Project: Using styling and routing to
                      store a personal database of podcasts.
                    </p>
                  </div>
                  <div className="project-link">
                    <a href="https://github.com/paigetiedeman/Podcast.Solution">
                      <i className="fa fa-code">Code</i>
                    </a>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Phot0 not responding" />
      </div>
    </div>
  );
}
