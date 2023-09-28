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
  return (
    <section className="py-6 inset-x-0 top-0">
      <Container>
        <nav className=" w-full flex items-center justify-between bg-transparent">
          <a href="/" className="cursor-pointer z-20 ">
            <h2 className="text-3xl leading-none tracking-widest font-bold text-alpha">{`{fg}`}</h2>
          </a>

          <Collapsible.Root open={isMenuOpen} onOpenChange={handleMenuClick}>
            <Collapsible.Trigger asChild>
              <motion.div
                variants={trigger}
                initial="initial"
                animate={isMenuOpen ? 'menuIcon' : 'initial'}
                id="menuIcon"
                className="relative translate-y-[2px] z-20 flex flex-col gap-[7px] items-center group h-full w-[1.8rem] cursor-pointer "
              >
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'activated' : 'initial'}
                  className="h-[2px] w-[1.8rem] rounded-sm bg-alpha [--rotate:-45deg] origin-right  [--translate:-50%] "
                />
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'hidden' : 'initial'}
                  className="h-[2px] w-[1.8rem] rounded-sm bg-alpha "
                />
                <motion.div
                  variants={trigger}
                  initial="initial"
                  animate={isMenuOpen ? 'activated' : 'initial'}
                  className="h-[2px] w-[1.8rem] rounded-sm bg-alpha [--rotate:45deg] origin-right  [--translate:50%] "
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
                                <motion.a
                                  variants={{
                                    hover: {
                                      letterSpacing: '5px',
                                    },
                                  }}
                                  href={item.href}
                                  onClick={() => setIsMenuOpen(false)}
                                  className="transition-al tracking-widest z-10 text-4xl font-extrabold uppercase text-white/80  "
                                >
                                  {item.name}
                                </motion.a>
                              </motion.div>
                            );
                          })}
                        </div>
                      </section>
                    </motion.div>
                  </Collapsible.Content>
                </Portal.Root>
              )}
            </AnimatePresence>
          </Collapsible.Root>
        </nav>
      </Container>
    </section>
  );
};

export default Nav;
