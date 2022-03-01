import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

export default function Card(props) {
  
  return (
    <div className="project-card card col">
      <div className="content">
        <img src={`${props.imageSrc}`} alt="Error" className="card-img-top"/>
        <h1 className="header">{props.title}</h1>
        <p className="text">{props.para}</p>
        <a href={props.url1} className="btn" target="_blank" rel="noreferrer">
          Explore
        </a>
        <a href={props.url2} className="btn" target="_blank" rel="noreferrer">
          See Code
        </a>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  para: PropTypes.string,
  imageSrc: PropTypes.any,
  url1: PropTypes.string,
  url2: PropTypes.string,
  id: PropTypes.string,
};