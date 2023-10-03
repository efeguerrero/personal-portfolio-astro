//Data Import
import skills from '@/utils/skills';

//Framer Motion Imports
import { motion } from 'framer-motion';

//Radix Imports
import * as Tooltip from '@radix-ui/react-tooltip';

//Component Imports
import ReactIcon from '@/assets/icons/ReactIcon.jsx';

const Skills = ({ skillCategory, title }) => {
  return (
    <div className="">
      <h2 className="font-normal mb-6 text-2xl text-neutral-200 leading-none tracking-tighter">
        {title}
      </h2>
      <div className="flex items-center justify-start flex-wrap gap-6">
        {skills.map((skill, index) => {
          if (skill.category === skillCategory) {
            return (
              <div
                id={index}
                key={index}
                className="flex flex-col justify-between items-center relative "
              >
                <Tooltip.Provider delayDuration={0}>
                  <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                      <button>
                        <ReactIcon
                          icon={skill.icon}
                          className="w-10 aspect-square text-neutral-300"
                        />
                      </button>
                    </Tooltip.Trigger>

                    <Tooltip.Portal>
                      <Tooltip.Content sideOffset={5}>
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="rounded-md bg-neutral-300 px-2 py-1"
                        >
                          <h3 className="text-neutral-900 capitalize text-sm font-semibold ">
                            {skill.name}
                          </h3>
                          <Tooltip.Arrow className="fill-neutral-300" />
                        </motion.div>
                      </Tooltip.Content>
                    </Tooltip.Portal>
                  </Tooltip.Root>
                </Tooltip.Provider>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Skills;
