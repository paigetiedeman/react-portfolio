import React from 'react';
import './Card.css';

const Card = ({ heading, paragraph, imgUrl, projectLink, projectCode }) => {
  return (
    <div
      className="project-card"
      >
        <img src={`${imgUrl}`} alt="Error"/>
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink ? projectLink : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
        <a
          href={projectCode ? projectCode : '#'}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          See Code
        </a>
      </div>
    </div>
  );
};

export default Card;
