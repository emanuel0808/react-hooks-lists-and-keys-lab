import React from 'react';

const ProjectItem = ({ name, about, technologies }) => (
  <div className="project-item">
    <h2>{name}</h2>
    <p>{about}</p>
    <div className="technology-list">
      {technologies.map((technology, index) => (
        <span key={index}>{technology}</span>
      ))}
    </div>
  </div>
);

export default ProjectItem;
