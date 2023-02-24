import React from 'react';

//Style Import
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <section className={styles.footer}>
      <h2 className={styles.text}>
        Developed by Francisco Guerrero &#169;{' '}
        {`${new Date().getFullYear().toString()}`}
      </h2>
    </section>
  );
};

export default Footer;
