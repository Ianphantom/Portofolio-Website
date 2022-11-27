import React from "react";
import styled from "styled-components";

// Import logo
import Logo from "../images/Logo.png";

const NavBar = () => {
  return (
    <NavbarContainer>
      <nav className='navbar navbar-expand-lg navbar-light container'>
        <div className='logo'>
          <img src={Logo} alt='Logo Preview' />
        </div>
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
            <a href='http://' className='text-17 weight-medium text-color-2'>
              Home
            </a>
            <a href='http://' className='text-17 weight-medium text-color-2'>
              About
            </a>
            <a href='http://' className='text-17 weight-medium text-color-2'>
              Service
            </a>
            <a href='http://' className='text-17 weight-medium text-color-2'>
              Works
            </a>
            <a href='http://' className='text-17 weight-medium text-color-2'>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  padding: 40px 0px;
  width: 100%;
  .logo img {
    height: 25px;
  }

  .navbar-nav {
    display: flex;
    gap: 25px;
  }

  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

export default NavBar;