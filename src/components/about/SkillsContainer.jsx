//Component Imports

import Skills from '@/components/about/Skills';

const SkillsContainer = () => {
  return (
    <div className="flex flex-col gap-12 lg:gap-10">
      <Skills skillCategory="stack" title="Main Stack" />
      <Skills skillCategory="other" title="Other Tools" />
      <Skills skillCategory="language" title="Languages" />
    </div>
  );
};

export default SkillsContainer;
