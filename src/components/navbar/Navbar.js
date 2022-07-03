import logo from '../../images/logo/logo.png';
import hamburger from '../../images/hamburger.png';
import './Navbar.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'
import { SITE_MODULES as modules } from '../../common/Constants'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => { window.removeEventListener('resize', changeWidth) }
  }, [])

  return (
    <nav className="navbar">

      <div className="brand-title">
        <Link to="/">
          <img src={logo} height="40" alt="" loading="lazy" />
        </Link>
      </div>

      <img src={hamburger} alt="" loading="lazy"
        className='toggle-button'
        onClick={() => setToggleMenu(!toggleMenu)} />

      {(toggleMenu || screenWidth > 768) && (
        <ul className="navbar-links">
          {
            modules.map((module, index) => (
              (module.navEnabled) && (
                <li className="navbar-link" key={'nav_'+index}>
                  <Link to={module.link}
                    onClick={() => setToggleMenu(!toggleMenu)}>
                    {module.title}
                  </Link>
                </li>
              )
            ))}
        </ul>

      )}
    </nav>
  );
};
export default Navbar;
