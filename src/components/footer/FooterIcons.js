import { MDBIcon } from "mdb-react-ui-kit";
const FooterIcon = () => {
  const anchorClasses = "btn btn-sm btn-floating m-1";
  
  return (
    <div className="footer-icon">
      <a className={anchorClasses} style={{ backgroundColor: "#3b5998" }} href="#!">
        <MDBIcon fab icon="facebook-f" />
      </a>

      <a className={anchorClasses} style={{ backgroundColor: "#55acee" }} href="#!">
        <MDBIcon fab icon="twitter" />
      </a>

      <a className={anchorClasses} style={{ backgroundColor: "#dd4b39" }} href="#!">
        <MDBIcon fab icon="google" />
      </a>
      <a className={anchorClasses} style={{ backgroundColor: "#ac2bac" }} href="#!">
        <MDBIcon fab icon="instagram" />
      </a>

      <a className={anchorClasses} style={{ backgroundColor: "#0082ca" }} href="#!">
        <MDBIcon fab icon="linkedin-in" />
      </a>

      <a className={anchorClasses} style={{ backgroundColor: "#333333" }} href="#!">
        <MDBIcon fab icon="github" />
      </a>
    </div>
  );
};

export default FooterIcon;
