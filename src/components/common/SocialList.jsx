import React from 'react';

//Style Import
import styles from './socialList.module.scss';

//Data Import
import socials from '../../utils/socials';

const SocialList = ({ style }) => {
  const cssStyle = style || '';

  return (
    <div className={styles[`socialList${cssStyle}`]}>
      {socials.map((item) => (
        <a
          className={styles[`socialListLink${cssStyle}`]}
          href={item.url}
          target="_blank"
        >
          <img
            className={styles[`socialListIcons${cssStyle}`]}
            src={item.icon}
            alt={item.name}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialList;
