import './Footer.css';
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import FooterIcon from "./FooterIcons"
const Footer = () => {
  return (
    <div className='appFooter'>
      <CompanyInfo />
      <ContactInfo />
      <FooterIcon/> 
      <div className="bottom">
        <span>© 2022 Copyright: Manvendra P Singh</span>
      </div>
    </div>
  );
};

export default Footer;
