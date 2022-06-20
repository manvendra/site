import linkedin from '../../images/social/linkedin.svg'
import medium from '../../images/social/medium.svg'
import instagram from '../../images/social/instagram.svg'
import twitter from '../../images/social/twitter.svg'
import * as util from '../../common/Utils'
import { SOCIAL_LINKS as link } from '../../common/Constants'
const FooterIcon = () => {
  return (
    <div className="footer-icon">
      <img className='img-xs' src={linkedin} alt="" onClick={() => util.openInNewTab(link.LINKEDIN)} />
      <img className='img-xs' src={twitter} alt="" onClick={() => util.openInNewTab('')} />
      <img className='img-xs' src={medium} alt="" onClick={() => util.openInNewTab(link.MEDIUM)} />
      <img className='img-xs' src={instagram} alt="" onClick={() => util.openInNewTab(link.INSTAGRAM)} />
    </div>
  );
};
export default FooterIcon;