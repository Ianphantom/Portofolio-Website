import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// Import logo
import Logo from "../images/Logo.png";

const NavBar = ({ needToHideNavFoot }) => {
  return (
    <NavbarContainer className={`${needToHideNavFoot === false ? "" : "hide"}`}>
      <nav className='navbar navbar-expand-lg navbar-light container'>
        <Link to={"/"}>
          <div className='logo'>
            <img src={Logo} alt='Logo Preview' />
          </div>
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav text-center ml-auto'>
            <Link to='/' className='text-17 weight-medium text-color-2'>
              Home
            </Link>
            <Link
              to='/home/about'
              className='text-17 weight-medium text-color-2'
            >
              About
            </Link>
            <Link
              to='/home/service'
              className='text-17 weight-medium text-color-2'
            >
              Service
            </Link>
            <Link
              to='/home/work'
              className='text-17 weight-medium text-color-2'
            >
              Works
            </Link>
            <Link
              to='/home/contact'
              className='text-17 weight-medium text-color-2'
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: white;
  z-index: 1;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  &.hide {
    display: none;
  }
  padding: 40px 0px;
  width: 100%;
  .logo img {
    height: 25px;
  }

  .navbar-nav {
    display: flex;
    gap: 25px;
  }

  @media (max-width: 835px) {
    padding: 10px 0px;
  }
`;

export default NavBar;
