//Social Icons
import { ReactComponent as ChevronDown } from './system/chevronDown.svg';
import { ReactComponent as Linkedin } from './social/linkedin.svg';
import { ReactComponent as Twitter } from './social/twitter.svg';
import { ReactComponent as Astro } from './skills/astro.svg';
import { ReactComponent as Firebase } from './skills/firebase.svg';
import { ReactComponent as Git } from './skills/git.svg';
import { ReactComponent as Github } from './skills/github.svg';
import { ReactComponent as Javascript } from './skills/javascript.svg';
import { ReactComponent as Tailwind } from './skills/tailwindcss.svg';
import { ReactComponent as React } from './skills/react.svg';
import { ReactComponent as Typescript } from './skills/typescript.svg';
import { ReactComponent as Next } from './skills/next.svg';
import { ReactComponent as Sass } from './skills/sass.svg';
import { ReactComponent as Spanish } from './skills/spanish.svg';
import { ReactComponent as English } from './skills/english.svg';
import { ReactComponent as HTML } from './skills/html5.svg';
import { ReactComponent as CSS } from './skills/css3.svg';

const ReactIcon = ({ className, icon }) => {
  return (
    <div className={className}>
      {icon == 'astro' && <Astro />}
      {icon == 'chevronDown' && <ChevronDown />}
      {icon == 'github' && <Github />}
      {icon == 'linkedin' && <Linkedin />}
      {icon == 'twitter' && <Twitter />}
      {icon == 'firebase' && <Firebase />}
      {icon == 'git' && <Git />}
      {icon == 'javascript' && <Javascript />}
      {icon == 'tailwind' && <Tailwind />}
      {icon == 'react' && <React />}
      {icon == 'typescript' && <Typescript />}
      {icon == 'next' && <Next />}
      {icon == 'sass' && <Sass />}
      {icon == 'spanish' && <Spanish />}
      {icon == 'english' && <English />}
      {icon == 'html' && <HTML />}
      {icon == 'css' && <CSS />}
    </div>
  );
};

export default ReactIcon;
