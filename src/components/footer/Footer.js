import './Footer.css';
import CompanyInfo from "./CompanyInfo";
import ContactMe from "./ContactMe";
import FooterIcon from "./FooterIcons"
const Footer = () => {
  return (
    <div className='appFooter'>
      <CompanyInfo />
      <ContactMe />
      <FooterIcon/> 
      <div className="bottom">
        <span>© 2022 Copyright: Manvendra P Singh</span>
      </div>
    </div>
  );
};

export default Footer;
