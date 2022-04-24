import logo from '../../images/logo.png';
import { useState } from "react";
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar className="hover-shadow sticky" expand="lg" light >
      <MDBContainer fluid>
        <MDBNavbarBrand className="ms-5 bs-5" href="#">
          <img src={logo} height="40" alt="" loading="lazy" />
        </MDBNavbarBrand>


        <MDBNavbarToggler
          type="button"
          data-target="#navbarRightAlignExample"
          aria-controls="navbarRightAlignExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowNavRight(!showNavRight)}>
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showNavRight}>
          <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0 ">

            <MDBNavbarItem role="button" className="me-3 ">
              <MDBNavbarLink tag={Link}  to="/mysite/home">Home</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem role="button" className="me-3">
              <MDBNavbarLink tag={Link} to="/mysite/posts">BlogPosts</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem role="button" className="me-3">
              <MDBNavbarLink tag={Link} to="/mysite/photos">Photography</MDBNavbarLink>
            </MDBNavbarItem>
            
            <MDBNavbarItem role="button" className="me-3">
              <MDBNavbarLink tag={Link} to="/mysite/about" >Contact Me</MDBNavbarLink>
            </MDBNavbarItem>
          
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
