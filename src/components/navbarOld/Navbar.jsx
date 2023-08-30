import React, { useRef } from 'react';

//Component Imports
import Links from './Links';
import SocialList from '../common/SocialList';

//Style Import
import styles from './navbar.module.scss';

//Icon Import
import menuIcon from '../../assets/icons/menuIcon.svg';

const Navbar = () => {
  const refMenuContainer = useRef(null);
  const refMenuIcon = useRef(null);
  const refLogo = useRef(null);

  const handleMenuClick = () => {
    refMenuContainer.current.classList.toggle(styles.menuContainer_active);
    refMenuIcon.current.classList.toggle(styles.menuIcon_active);
    refLogo.current.classList.toggle(styles.logo_menuActive);
  };

  const handleLinkClick = () => {
    refMenuContainer.current.classList.toggle(styles.menuContainer_active);
    refMenuIcon.current.classList.toggle(styles.menuIcon_active);
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarCentering}>
        <a href="/" className={styles.logo}>
          <h2 ref={refLogo} className={styles.logo}>{`{fg}`}</h2>
        </a>
        <img
          ref={refMenuIcon}
          onClick={handleMenuClick}
          src={menuIcon}
          alt="Menu Icon"
          className={styles.menuIcon}
        />
      </div>
      <div ref={refMenuContainer} className={styles.menuContainer}>
        <Links handleLinkClick={handleLinkClick} />
        <span className={styles.menuContainerDivider}>|</span>
        <SocialList style={'_header'} />
      </div>
    </nav>
  );
};

export default Navbar;
