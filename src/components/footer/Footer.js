import { MDBFooter } from "mdb-react-ui-kit";
import CompanyInfo from "./CompanyInfo";
import ContactInfo from "./ContactInfo";
import FooterIcon from "./FooterIcons";

const Footer = () => {
  return (
    <MDBFooter bgColor="dark p-4 text-white-50 text-center">
      <section className="mt-3 p-4 text-md-start row ">  
        <CompanyInfo />
        <ContactInfo />
        <FooterIcon />
      </section>
      <div className="small" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        © 2022 Copyright: Manvendra P Singh
      </div>
    </MDBFooter>
  );
};

export default Footer;
