import React from 'react';

//Style Import
import styles from './about.module.scss';

//Data Import
import skills from '../../utils/skills';

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <div className={styles.skillSet}>
        <h2 className={styles.skillSetTitle}>Front-end</h2>
        <div className={styles.skillSetContent}>
          {skills.map((skill) => {
            if (skill.category === 'frontEnd') {
              return (
                <div className={styles.skill}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.skillSet}>
        <h2 className={styles.skillSetTitle}>Back-end</h2>
        <div className={styles.skillSetContent}>
          {skills.map((skill) => {
            if (skill.category === 'backEnd') {
              return (
                <div className={styles.skill}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.skillSet}>
        <h2 className={styles.skillSetTitle}>Other</h2>
        <div className={styles.skillSetContent}>
          {skills.map((skill) => {
            if (skill.category === 'other') {
              return (
                <div className={styles.skill}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
      <div className={styles.skillSet}>
        <h2 className={styles.skillSetTitle}>Languages</h2>
        <div className={styles.skillSetContent}>
          {skills.map((skill) => {
            if (skill.category === 'language') {
              return (
                <div className={styles.skill}>
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className={styles.skillIcon}
                  />
                  <h3 className={styles.skillName}>{skill.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
