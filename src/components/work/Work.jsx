import React from 'react';

//Style Import
import styles from './work.module.scss';

const Work = ({ project }) => {
  const { name, img, demoURL, githubURL, technologies, description } = project;

  return (
    <section className={styles.project}>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} className={styles.projectImg} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.projectMainInfo}>
          <h2 className={styles.projectTitle}>{name}</h2>
          <h3 className={styles.projectDescription}>{description}</h3>
          <div className={styles.projectLinks}>
            <a href={demoURL} target="_blank" className={styles.demoLink}>
              demo
            </a>
            {githubURL === 'none' ? (
              <></>
            ) : (
              <a href={githubURL} target="_blank" className={styles.githubLink}>
                code
              </a>
            )}
          </div>
        </div>
        <div className={styles.projectTechnologies}>
          <h2 className={styles.technologiesTitle}>tools used</h2>
          {technologies.map((tech) => (
            <h2 className={styles.tech}>{tech}</h2>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
