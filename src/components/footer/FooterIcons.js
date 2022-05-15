import gmail from '../../images/social/gmail.svg'
import linkedin from '../../images/social/linkedin.svg'
import medium from '../../images/social/medium.svg'
import instagram from '../../images/social/instagram.svg'
import twitter from '../../images/social/twitter.svg'
import * as util from '../../common/Utils'
const FooterIcon = () => {
  return (
    <div className="footer-icon">
      <img className='img-xs' src={linkedin} alt="" onClick={() => util.openInNewTab('https://www.linkedin.com/in/manvendrapsingh/')} />
      <img className='img-xs' src={twitter} alt="" onClick={() => util.openInNewTab()} />
      <img className='img-xs' src={medium} alt="" onClick={() => util.openInNewTab('https://medium.com/@manvendrapsingh')} />
      <img className='img-xs' src={instagram} alt="" onClick={() => util.openInNewTab('https://www.instagram.com/mpskaleidoscope/')} />
    </div>
  );
};
export default FooterIcon;