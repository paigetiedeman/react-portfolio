import React from 'react';
import './Footer.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ScrollService from '../../../utilities/ScrollService';

export default function Footer() {
  /* SOCIALS STATIC DATA */
  let socialDetails = [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/paige-tiedeman/',
    },
    { icon: faGithub, link: 'https://github.com/paigetiedeman' },
  ];

  /* GET CURRENT YEAR */
  let currentYear = new Date().getFullYear();

  /* RENDER SOCIAL ICONS */
  const getSocials = () => {
    return socialDetails.map((social, index) => (
      <a
        rel="noopener noreferrer"
        key={index}
        href={social.link}
        target="_blank"
      >
        <FontAwesomeIcon className="social-icon" icon={social.icon} />
      </a>
    ));
  };

  return (
    <div className="main-footer-container">
      <div className="main-footer-content">
        <div className="main-footer-message">
          <span> All rights reserved © Paige Tiedeman {currentYear} </span>
        </div>
        <div className="main-footer-socials">{getSocials()}</div>
        <button className="home-button" onClick={() => ScrollService.scrollHandler.scrollToHome()}>
          Back to Top
        </button>
      </div>
    </div>
  );
}
