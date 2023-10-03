import { useState } from 'react';

//Radix Import
import * as Collapsible from '@radix-ui/react-collapsible';
import * as Portal from '@radix-ui/react-portal';

//Framer Motion Imports
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

//Component Imports
import Container from '@/components/common/Container.jsx';
import ReactIcon from '../../assets/icons/ReactIcon.jsx';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
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
    <section className="absolute pb-8 pt-10 lg:pt-14 inset-x-0 top-0 lg:z-20">
      <Container>
        <nav className=" w-full flex items-center justify-between bg-transparent">
          <a href="/" className="cursor-pointer z-20 mt-[2px]">
            <h2 className="text-2xl leading-none tracking-widest font-bold uppercase text-neutral-400 hover:text-neutral-200 transition-colors duration-200 ease-in-out">
              fran g.
            </h2>
          </a>

          <Collapsible.Root open={isMenuOpen} onOpenChange={handleMenuClick}>
            <Collapsible.Trigger asChild>
              <motion.div
                variants={trigger}
                initial="initial"
                animate={isMenuOpen ? 'menuIcon' : 'initial'}
                id="menuIcon"
                className="lg:hidden tapColor-none relative [--translateInitial:1px] z-20 flex flex-col gap-[6px] items-center group h-full w-[1.8rem] cursor-pointer "
              >
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'activated' : 'initial'}
                  className="h-[2px] w-[1.5rem] rounded-sm bg-neutral-400 [--rotate:-45deg] origin-right  [--translate:-50%] "
                />
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'hidden' : 'initial'}
                  className="h-[2px] w-[1.5rem] rounded-sm bg-neutral-400 "
                />
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'activated' : 'initial'}
                  className="h-[2px] w-[1.5rem] rounded-sm bg-neutral-400 [--rotate:45deg] origin-right  [--translate:50%] "
                />
              </motion.div>
            </Collapsible.Trigger>
            {/* Dialog */}
            <AnimatePresence>
              {isMenuOpen && (
                <Portal.Root asChild>
                  <Collapsible.Content forceMount asChild>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="fixed bottom-0 z-10 w-full bg-neutral-900"
                    >
                      <Container>
                        <section className="relative w-full grid grid-rows-[1fr_3fr_1fr] h-[100dvh] items-center justify-center ">
                          <div className="row-start-2 w-full flex flex-col gap-6 items-center justify-start">
                            {navigation.map((item, index) => {
                              return (
                                <motion.div
                                  key={index}
                                  whileHover="hover"
                                  initial={{
                                    y: 'var(--translate-wide,0)',
                                    opacity: 'var(--opacity-small,1)',
                                  }}
                                  animate={{ y: 0, opacity: 1 }}
                                  transition={{
                                    opacity: {
                                      type: 'tween',
                                      duration: 1,
                                      delay: 0.3 + index / 5,
                                    },
                                    y: {
                                      type: 'tween',
                                      duration: 0.8,
                                      delay: 0.2 - index / 10,
                                    },
                                  }}
                                  className="relative my-4 flex items-center gap-6 lg:[--translate-wide:-100vw] [--opacity-small:0] lg:[--opacity-small:1]"
                                >
                                  <motion.a
                                    variants={{
                                      hover: {
                                        letterSpacing: '5px',
                                      },
                                    }}
                                    href={item.href}
                                    onClick={() => handleMenuClick()}
                                    className=" text-neutral-300 font-extralight leading-none tracking-tighter z-10 text-4xl "
                                  >
                                    {item.name}
                                  </motion.a>
                                </motion.div>
                              );
                            })}
                          </div>
                          <div class="row-start-3 w-full flex lg:flex-row gap-10 justify-between items-start">
                            <motion.a
                              variants={socialLinks}
                              initial="initial"
                              animate="animate"
                              custom={0.3}
                              class="text-neutral-400 uppercase font-light text-sm tracking-tight underline underline-offset-4"
                              target="_blank"
                              href="https://twitter.com/frnguerrero"
                            >
                              Twitter
                            </motion.a>
                            <motion.a
                              variants={socialLinks}
                              initial="initial"
                              animate="animate"
                              custom={0.5}
                              class="text-neutral-400 uppercase font-light text-sm tracking-tight underline underline-offset-4"
                              target="_blank"
                              href="https://www.linkedin.com/in/juan-francisco-guerrero-16143849/?locale=en_US"
                            >
                              Linkedin
                            </motion.a>
                            <motion.a
                              variants={socialLinks}
                              initial="initial"
                              animate="animate"
                              custom={0.7}
                              class="text-neutral-400 uppercase font-light text-sm tracking-tight underline underline-offset-4"
                              target="_blank"
                              href="https://github.com/efeguerrero"
                            >
                              Github
                            </motion.a>
                          </div>
                        </section>
                      </Container>
                    </motion.div>
                  </Collapsible.Content>
                </Portal.Root>
              )}
            </AnimatePresence>
          </Collapsible.Root>
          {/* lg screen nav */}
          <div className="hidden lg:flex gap-10 justify-center items-center">
            {navigation.map((item, index) => {
              return (
                <a
                  key={index}
                  className="text-neutral-300 uppercase font-light text-sm tracking-[4px] cursor-pointer hover:text-neutral-50 transition-colors duration-200 ease-in-out"
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
