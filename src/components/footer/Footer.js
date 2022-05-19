import './Footer.css';
import CompanyInfo from "./CompanyInfo";
import ContactMe from "./ContactMe";
import FooterIcon from "./FooterIcons"
import Donate from './Donate';
const Footer = () => {
  return (
    <div className='appFooter'>
      <CompanyInfo />
      <ContactMe />
      <FooterIcon/> 
      <Donate/>
      <div className="bottom">
        <span>© 2022 Copyright: Manvendra P Singh</span>
      </div>
    </div>
  );
};

export default Footer;
