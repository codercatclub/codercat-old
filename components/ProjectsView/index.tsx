import React, { FC } from 'react';
import s from './index.module.css';

const serverURL = process.env.CODERCAT_SERVER_URL || '';

if (!serverURL) {
  console.log('[-] CODERCAT_SERVER_URL is not set. Projects links might not work.');
}

const makeProjectLink = (route: string) => route.startsWith('http') ? route : `${serverURL}/${route}`;

interface Project {
  name: string;
  description: string;
  img: string;
  entry: string;
  public: string;
  route: string;
}

interface ProjectsViewProps {
  projects: Project[];
}

const ProjectsView: FC<ProjectsViewProps> = ({ projects }) => {
  const overlayColors = [
    '#fffc0d',
    '#ff00ff',
    '#fe086d',
    '#11ff05',
    '#634dfb',
  ];
  let colorIndex = 0;

  const projectElements = projects.map((project) => {
    const overlayColor = overlayColors[colorIndex % overlayColors.length];
    colorIndex++;
  
    return (
      <a
        id="project-box"
        href={makeProjectLink(project.route)}
        key={project.name}
        className={s.projectLink}
      >
        <div className={s.overlay} style={{ backgroundColor: overlayColor }}>
          <h1 className={s.projectTitle}>{project.name}</h1>
          <p className={s.description}>{project.description}</p>
        </div>
        <img className={s.img} src={project.img} alt={project.name} />
      </a>
    );
  });

  return (
    <div className="view" id="projects-view">
      <div className={s.projectBox} id="project-container">
        {projectElements}
      </div>
    </div>
  );
};

export default ProjectsView;
