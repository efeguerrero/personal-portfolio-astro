import React from 'react';
import { useEffect, useState } from 'react';

//Styles Import
import styles from './btn.module.scss';

//Icon Import
import arrowIcon from './arrow.svg';

const ScrollBtn = () => {
  const [showButton, setShowButton] = useState(false);

  const scrollBtnVisibility = () => {
    window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollBtnVisibility);

    return () => {
      window.removeEventListener('scroll', scrollBtnVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className={styles.btn} onClick={() => scrollToTop()}>
          <img src={arrowIcon} alt="" className={styles.arrowIcon} />
        </button>
      )}
    </>
  );
};

export default ScrollBtn;
