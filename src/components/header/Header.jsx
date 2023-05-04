import React from 'react';

//Style Import
import styles from './header.module.scss';

//Child Import
import MailBtn from '../common/MailBtn';
import SocialList from '../common/SocialList';

import chevronIcon from '../../assets/icons/chevrons-down.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.infoContainer}>
        <h2 className={styles.title}>Hi,</h2>{' '}
        <h2 className={styles.title}>
          I'm <span className={styles.titleHighlight}>F</span>
          rancisco.
        </h2>
        <h2 className={styles.title}>
          Web <span className={styles.titleHighlightViolet}>d</span>eveloper.
        </h2>
        <div className={styles.socials}>
          <MailBtn />
          <SocialList />
        </div>
      </div>
      <h2 className={styles.logo}>{`</>`}</h2>
      <a className={styles.moreLink} href="#about">
        <img className={styles.moreIcon} src={chevronIcon} alt="Flecha abajo" />
      </a>
    </header>
  );
};

export default Header;
