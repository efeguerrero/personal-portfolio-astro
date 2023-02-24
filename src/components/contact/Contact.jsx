import React from 'react';

//Style Import
import styles from './contact.module.scss';

//Child Import
import MailBtn from '../common/MailBtn';
import SocialList from '../common/SocialList';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          contact <span className={styles.titleHighlight}>me</span>
        </h2>
      </div>
      <h2 className={styles.text}>
        Interested in working together?{' '}
        <span className={styles.textHiglight}>Let's Talk!</span>
      </h2>
      <MailBtn />
      <SocialList />
    </section>
  );
};

export default Contact;
