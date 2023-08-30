import { useState, useEffect, useRef, Fragment } from 'react';

//Radix Import
import * as Dialog from '@radix-ui/react-dialog';

//Framer Motion Imports
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';

//React Icon Imports
import ReactIcon from '../../assets/icons/ReactIcon.jsx';

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    latest > 70 ? setIsSticky(true) : setIsSticky(false);
  });

  //Framer Motion Variants

  const draw = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    initial: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: 0.5, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay: 0.5, duration: 0.01 },
      },
    },
    hoverClose: {
      pathLength: 0,
      opacity: 0,
      transition: {
        pathLength: { delay: 0, type: 'spring', duration: 0.8, bounce: 0 },
        opacity: { delay: 0, duration: 0.8 },
      },
    },
  };

  const navContainer = {
    sticky: {
      backgroundColor: '#fff',
      boxShadow: '0 4px 30px 0px rgba(0,0,0,0.20)',
    },
  };

  const nav = {
    sticky: {
      backgroundColor: '#593fa8',
      boxShadow: '0 4px 30px 0px rgba(0,0,0,0.20)',
    },
  };

  return (
    <motion.section
      variants={navContainer}
      className="fixed  w-[100vw] inset-x-0 top-0 z-[11] bg-transparent"
    >
      <div className="container">
        <motion.nav
          variants={nav}
          animate={isSticky ? 'sticky' : 'initial'}
          className="w-16 h-16 ml-auto rounded-full flex items-center justify-center bg-transparent lg:my-4 xl:my-8"
        >
          <div className="flex gap-24">
            <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <Dialog.Trigger>
                <motion.div
                  whileHover="hover"
                  id="menuIcon"
                  className="group w-[1.8rem] cursor-pointer "
                >
                  <motion.div
                    layoutId="line1"
                    variants={{
                      hover: {
                        x: '10px',
                      },
                    }}
                    className="my-[7px]  block h-[2px] w-[1.8rem] rounded-sm bg-white "
                  ></motion.div>
                  <motion.div className="my-[7px] block h-[2px] w-[1.8rem] rounded-sm bg-white "></motion.div>
                  <motion.div
                    layoutId="line2"
                    variants={{
                      hover: {
                        x: '-10px',
                      },
                    }}
                    className="my-[7px] block h-[2px] w-[1.8rem] rounded-sm bg-white"
                  ></motion.div>
                </motion.div>
              </Dialog.Trigger>
              <AnimatePresence>
                {isMenuOpen && (
                  <Dialog.Portal forceMount>
                    <Dialog.Overlay />
                    <Dialog.Content
                      asChild
                      onCloseAutoFocus={(e) => e.preventDefault()}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 h-[100dvh] w-full bg-bravoDark"
                      >
                        <section className="relative flex h-full flex-col items-center justify-center p-8 lg:flex-row lg:p-16">
                          <div className="absolute top-10 flex flex-col items-center gap-4 lg:right-20 lg:top-20 lg:flex-row lg:justify-center">
                            <Dialog.Close asChild>
                              <motion.div
                                id="menuCloseIcon"
                                className="w-8 h-8 relative border-[1px] border-transparent p-6 rounded-full flex flex-col items-center justify-center cursor-pointer "
                              >
                                <motion.svg
                                  viewBox="0 0 100 100"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="absolute z-40"
                                  initial="hidden"
                                  animate="initial"
                                  whileHover="hoverClose"
                                >
                                  <motion.circle
                                    cx="50"
                                    cy="50"
                                    r="45%"
                                    fill="transparent"
                                    stroke="white"
                                    strokeWidth="2px"
                                    variants={draw}
                                  ></motion.circle>
                                </motion.svg>

                                <motion.div
                                  layoutId="line1"
                                  animate={{
                                    rotate: 45,
                                  }}
                                  className="my-[7px] absolute -translate-y-[50%] h-[2px] w-[1.8rem] rounded-sm bg-white/80 "
                                ></motion.div>
                                <motion.div
                                  layoutId="line2"
                                  animate={{
                                    rotate: -45,
                                  }}
                                  className="my-[7px] absolute translate-y-[50%] h-[2px] w-[1.8rem] rounded-sm bg-white/80 "
                                ></motion.div>
                              </motion.div>
                            </Dialog.Close>
                            <div className="relative order-2 ">
                              <ReactIcon
                                icon="rueda"
                                className=" hidden h-8 w-auto  text-white lg:block  "
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-6 items-start justify-start">
                            {navigation.map((item, index) => {
                              return (
                                <motion.div
                                  key={index}
                                  whileHover="hover"
                                  initial={{ y: '-100vw' }}
                                  animate={{ y: 0 }}
                                  transition={{
                                    y: {
                                      type: 'tween',
                                      duration: 0.8,
                                      delay: 0.2 - index / 10,
                                    },
                                  }}
                                  className="relative my-4 flex items-center gap-6"
                                >
                                  <motion.div
                                    variants={{
                                      hover: {
                                        width: '115%',
                                        height: '115%',
                                        left: '50%',
                                        x: '-50%',
                                        transition: {
                                          backgroundColor: {
                                            duration: 0,
                                          },
                                          duration: 0.3,

                                          type: 'tween',
                                        },
                                      },
                                    }}
                                    className="h-4 absolute left-[-3rem] rounded-md w-4 bg-white/80 "
                                  ></motion.div>
                                  <motion.a
                                    variants={{
                                      hover: {
                                        color: '#593fa8',
                                      },
                                    }}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="transition-al tracking-widest z-10 text-6xl font-extrabold uppercase text-white/80  "
                                  >
                                    {item.name}
                                  </motion.a>
                                </motion.div>
                              );
                            })}
                          </div>
                        </section>
                      </motion.div>
                    </Dialog.Content>
                  </Dialog.Portal>
                )}
              </AnimatePresence>
            </Dialog.Root>
          </div>
        </motion.nav>
      </div>
    </motion.section>
  );
};

export default Nav;
