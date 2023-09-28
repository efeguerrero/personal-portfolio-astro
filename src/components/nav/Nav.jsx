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
        pathLength: { delay: 1, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay: 1, duration: 0.01 },
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

  return (
    <motion.section variants={navContainer} className="py-6 inset-x-0 top-0">
      <Container>
        <nav className="w-full flex items-center justify-between bg-transparent">
          <a href="/" className="cursor-pointer z-20 ">
            <h2 className="text-3xl leading-none tracking-widest font-bold text-alpha">{`{fg}`}</h2>
          </a>

          <Dialog.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <Dialog.Trigger asChild>
              <motion.div
                id="menuIcon"
                className="translate-y-[2px] flex flex-col gap-[7px] items-center group h-full w-[1.8rem] cursor-pointer "
              >
                <motion.div
                  layoutId="line1"
                  className="  block h-[2px] w-[1.8rem] rounded-sm bg-alpha "
                />
                <motion.div className=" block h-[2px] w-[1.8rem] rounded-sm bg-alpha " />
                <motion.div
                  layoutId="line2"
                  className=" block h-[2px] w-[1.8rem] rounded-sm bg-alpha"
                />
              </motion.div>
            </Dialog.Trigger>
            <AnimatePresence>
              {isMenuOpen && (
                // <Dialog.Close asChild>
                <motion.div
                  onClick={() => setIsMenuOpen(false)}
                  id="menuCloseIcon"
                  className="translate-y-[2px] z-20 flex flex-col gap-[7px] items-center group h-full w-[1.8rem] cursor-pointer "
                >
                  <motion.div
                    layoutId="line1"
                    animate={{
                      rotate: 45,
                    }}
                    className="block h-[2px] w-[1.8rem] rounded-sm bg-alpha "
                  ></motion.div>
                  <motion.div
                    layoutId="line2"
                    animate={{
                      rotate: -45,
                    }}
                    className="block h-[2px] w-[1.8rem] rounded-sm bg-alpha "
                  ></motion.div>
                </motion.div>
                // </Dialog.Close>
              )}
            </AnimatePresence>
            {/* Dialog */}
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
                      className="fixed bottom-0 z-10 h-[100dvh] w-full bg-black"
                    >
                      <section className="relative flex h-full flex-col items-center justify-center p-8 lg:flex-row lg:p-16">
                        <div className="flex flex-col gap-6 items-center lg:items-start justify-start">
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
                                  className="hidden lg:block h-4 absolute left-[-3rem] rounded-md w-4 bg-white/80 "
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
        </nav>
      </Container>
    </motion.section>
  );
};

export default Nav;
