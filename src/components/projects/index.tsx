import React from 'react';
import Card from './card';
import style from 'src/assets/styles/projects.module.scss';
import { projects } from 'src/services/projects';

const Projects = () => {
  return (
    <section className={ style.projects }>
      <div className={ style.titlesection }>
        <h1>Projetos.</h1>
      </div>
      <div className={ style.mural }>
        {projects.map(({ id, name, href, text, url }) => (
          <Card key={ id } link={ href } url={ url } number={ id } name={ name } desc={ text } />
        ))}
      </div>
    </section>
  );
};

export default Projects;
