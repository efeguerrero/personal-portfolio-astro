//Social Icons

import { ReactComponent as Pointer } from './system/pointer.svg';
import { ReactComponent as Github } from './social/github.svg';
import { ReactComponent as OpenInNew } from './system/openInNew.svg';

const ReactIcon = ({ className, icon }) => {
  return (
    <div className={className}>
      {icon == 'pointer' && <Pointer />}
      {icon == 'github' && <Github />}
      {icon == 'openInNew' && <OpenInNew />}
    </div>
  );
};

export default ReactIcon;
