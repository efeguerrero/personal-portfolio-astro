//Social Icons
import { ReactComponent as ChevronDown } from './system/chevronDown.svg';
import { ReactComponent as Github } from './social/github.svg';
import { ReactComponent as Linkedin } from './social/linkedin.svg';

const ReactIcon = ({ className, icon }) => {
  return (
    <div className={className}>
      {icon == 'chevronDown' && <ChevronDown />}
      {icon == 'github' && <Github />}
      {icon == 'linkedin' && <Linkedin />}
    </div>
  );
};

export default ReactIcon;
