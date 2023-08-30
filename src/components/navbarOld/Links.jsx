import React from 'react';

//Data Import
import links from '../../utils/links';

//Style Import
import styles from './navbar.module.scss';

const Links = ({ handleLinkClick }) => {
  return (
    <section className={styles.linkList}>
      {links.map((link) => (
        <a
          key={link.id}
          onClick={handleLinkClick}
          className={styles.link}
          href={link.url}
        >
          {link.name}
        </a>
      ))}
    </section>
  );
};

export default Links;
