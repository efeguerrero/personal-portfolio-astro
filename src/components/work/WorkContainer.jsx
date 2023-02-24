import React from 'react';

//Style Import
import styles from './work.module.scss';

//Child Import
import Work from './Work';

//Data Import
import projects from '../../utils/projects';

const WorkContainer = () => {
  return (
    <section id="projects" className={styles.work}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          recent <span className={styles.titleHighlight}>work</span>
        </h2>
      </div>
      <div className={styles.projectsContainer}>
        {projects.map((project) => (
          <Work key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default WorkContainer;
