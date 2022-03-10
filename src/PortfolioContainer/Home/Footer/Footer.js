import React from 'react';
import './Footer.css';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  /* SOCIALS STATIC DATA */
  let socialDetails = [
    {
      icon: faLinkedin,
      link: 'https://www.linkedin.com/in/okwuose-ehiedu-7b8923198/',
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
      </div>
    </div>
  );
}
