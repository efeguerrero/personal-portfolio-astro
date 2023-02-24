import React from 'react';

//Style Import
import styles from './mailBtn.module.scss';

const MailBtn = () => {
  return (
    <a
      href="mailto:fr?ncisco.guerrero.d??vATgmailDOTcom"
      className={styles.mailBtn}
      onClick={(e) =>
        (e.target.href = e.target.href
          .replace('AT', '@')
          .replace('?', 'a')
          .replace('DOT', '.')
          .replace('??', 'e'))
      }
    >
      mail me
    </a>
  );
};

export default MailBtn;
