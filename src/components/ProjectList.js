import React from 'react';
import ProjectItem from './ProjectItem'; // Import the ProjectItem component

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map(project => (
      <ProjectItem
        key={project.id} // Use the project id as the key
        name={project.name}
        about={project.about}
        technologies={project.technologies}
      />
    ))}
  </div>
);

export default ProjectList;
