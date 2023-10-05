import { useState } from 'react';

//Radix Import
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Portal from '@radix-ui/react-portal';

//Framer Motion Imports
import { motion, AnimatePresence } from 'framer-motion';

//Component Imports
import Container from '@/components/common/Container.jsx';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle('overflow-hidden');
    document.body.classList.toggle('overscroll-behavior-contain');
  };

  //Framer Motion Variants
  const trigger = {
    initial: {
      rotate: 0,
      translateY: 0,

      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
      },
    },

    menuIcon: {
      rotate: 90,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
      },
    },

    hidden: {
      scale: 0,
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
    activated: {
      rotate: 'var(--rotate)',
      translateY: 'var(--translate)',
      transition: {
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.3,
      },
    },
  };

  const socialLinks = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: customDelay,
      },
    }),
  };

  return (
    <section className="absolute pb-8 pt-14 inset-x-0 top-0">
      <Container>
        <nav className=" w-full  bg-transparent">
          <div className="flex gap-8 justify-start lg:justify-center items-center">
            {navigation.map((item, index) => {
              return (
                <a
                  key={index}
                  className="text-neutral-300 lowercase  text-lg  cursor-pointer hover:text-neutral-50 transition-colors duration-200 ease-in-out"
                  href={item.href}
                >
                  {item.name}
                </a>
              );
            })}
          </div>
        </nav>
      </Container>
    </section>
  );
};

export default Nav;
