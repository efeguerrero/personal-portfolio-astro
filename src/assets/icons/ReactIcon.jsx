//Social Icons

import { ReactComponent as Pointer } from './system/pointer.svg';
import { ReactComponent as Github } from './social/github.svg';
import { ReactComponent as OpenInNew } from './system/openInNew.svg';
import { ReactComponent as Twitter } from './social/twitter.svg';
import { ReactComponent as Linkedin } from './social/linkedin.svg';
import { ReactComponent as Email } from './social/email.svg';

const ReactIcon = ({ className, icon }) => {
  return (
    <div className={className}>
      {icon == 'pointer' && <Pointer />}
      {icon == 'github' && <Github />}
      {icon == 'openInNew' && <OpenInNew />}
      {icon == 'twitter' && <Twitter />}
      {icon == 'linkedin' && <Linkedin />}
      {icon == 'email' && <Email />}
    </div>
  );
};

export default ReactIcon;
