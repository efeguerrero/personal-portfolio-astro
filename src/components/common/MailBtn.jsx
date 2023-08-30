import React from 'react';

const MailBtn = () => {
  return (
    <a
      href="mailto:fr?ncisco.guerrero.d??vATgmailDOTcom"
      className="bg-transparent text-alpha border border-alpha w-max px-14 py-3 text-lg font-bold tracking-widest relative transition-all duration-300 ease-in-out capitalize md:text-xl after:origin-left after:absolute after:inset-0 after:bg-alpha after:z-[-1] after:transition-all after:duration-300 after:ease-in-out after:scale-x-0 lg:hover:after:scale-x-100 lg:hover:text-white"
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
