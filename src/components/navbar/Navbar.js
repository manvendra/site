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

const Navbar = () => {
  const [showNavRight, setShowNavRight] = useState(false);
  return (
    <MDBNavbar className="hover-shadow" expand="lg" light style={{ background: 'radial-gradient(transparent, #8d9cb8)'}}>
      <MDBContainer fluid>
        <MDBNavbarBrand className="ms-5 bs-5" href="#">
          <img src="logo/vector-640.png" height="40" alt="" loading="lazy" />
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
            <MDBNavbarItem className="me-3 ">
              <MDBNavbarLink active aria-current="page"  href="#">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3">
              <MDBNavbarLink href="#">Photo Gallary</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem className="me-3">
              <MDBNavbarLink href="#" tabIndex={-1} aria-disabled="true">
                About Me
              </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};
export default Navbar;
