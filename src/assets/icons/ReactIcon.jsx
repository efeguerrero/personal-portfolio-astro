//Social Icons
import { ReactComponent as ChevronDown } from './system/chevronDown.svg';

const ReactIcon = ({ className, icon }) => {
  return (
    <div className={className}>{icon == 'chevronDown' && <ChevronDown />}</div>
  );
};

export default ReactIcon;
