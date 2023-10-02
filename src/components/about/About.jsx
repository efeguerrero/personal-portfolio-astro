import React from 'react';

//Style Import
import styles from './about.module.scss';

//Assets Imports
import profileImg from '../../assets/images/profileImg.jpg';

//Child Imports
import Skills from './SkillsOld';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          about <span className={styles.titleHighlight}>me</span>
        </h2>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <img
            src={profileImg}
            alt="Personal Photo"
            className={styles.profileImg}
          />
        </div>
        <div>
          <h3 className={styles.infoPersonal}>
            <p className={styles.infoPersonalText}>
              Hello! I'm Francisco, a developer based in Buenos Aires,
              Argentina, mainly{' '}
              <span className={styles.infoPersonalTextHiglight}>
                {' '}
                specializing in React stack and Astro Framework.
              </span>{' '}
              Passionate about coding and creating beautiful user experiences.
            </p>
            <p className={styles.infoPersonalText}>
              I’m a well-organized person with great interpersonal skills, high
              attention to detail and a great enthusiasm for problem solving.
            </p>
            <p className={styles.infoPersonalText}>
              I’m always open to discussing new work or partnership
              opportunities.{' '}
              <span className={styles.infoPersonalTextHiglight}>
                Let's Talk!
              </span>
            </p>
          </h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
