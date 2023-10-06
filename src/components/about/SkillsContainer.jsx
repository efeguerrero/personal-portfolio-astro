//Component Imports
import ReactIcon from '@/assets/icons/ReactIcon.jsx';

const skills = {
  stack: ['javascript', 'typescript', 'react', 'nextJS', 'astro', 'tailwind'],
  other: ['framer motion', 'firebase', 'sass'],
  languages: ['spanish', 'english'],
};

const SkillsContainer = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-10">
      {/* Main Stack */}
      <div>
        <h3 className="text-neutral-300 font-semibold">Main Stack</h3>
        <div className="grid mt-4 grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
          {skills.stack.map((skill, index) => {
            return (
              <div key={index} className="flex gap-[0.35rem] items-center">
                <ReactIcon
                  icon="pointer"
                  className="w-4 h-4 text-neutral-400"
                />
                <p className="text-neutral-400 text-base capitalize">{skill}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Other Tools Stack */}
      <div>
        <h3 className="text-neutral-300 font-semibold">Other Tools</h3>
        <div className="grid mt-4 grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
          {skills.other.map((skill, index) => {
            return (
              <div className="flex gap-[0.35rem] items-center">
                <ReactIcon
                  icon="pointer"
                  className="w-4 h-4 text-neutral-400"
                />
                <p
                  key={index}
                  className="text-neutral-400 text-base capitalize"
                >
                  {skill}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* Languages */}
      <div>
        <h3 className="text-neutral-300 font-semibold">Languages</h3>
        <div className="grid mt-4 grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-2">
          {skills.languages.map((skill, index) => {
            return (
              <div className="flex gap-[0.35rem] items-center">
                <ReactIcon
                  icon="pointer"
                  className="w-4 h-4 text-neutral-400"
                />
                <p
                  key={index}
                  className="text-neutral-400 text-base capitalize"
                >
                  {skill}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsContainer;
