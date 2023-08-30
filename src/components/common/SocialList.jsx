import React from 'react';

//Icon Import
import ReactIcon from '../../assets/icons/ReactIcon.jsx';

//Data Import
import socials from '../../utils/socials';

const SocialList = () => {
  return (
    <div className="flex justify-center items-center w-max gap-5">
      {socials.map((item) => (
        <a
          className="flex items-center cursor-pointer justify-center"
          href={item.url}
          target="_blank"
          key={item.id}
        >
          <ReactIcon
            icon={item.name}
            className="w-8 h-11 text-alpha hover:text-white transition-all duration-200 ease-in-out lg:w-12"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialList;
