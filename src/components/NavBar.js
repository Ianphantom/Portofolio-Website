import React from "react";
import styled from "styled-components";

// Import logo
import Logo from "../images/Logo.png";

const NavBar = () => {
  return (
    <NavbarContainer>
      <div className='container'>
        <LogoContainer className='logo'>
          <img src={Logo} alt='Logo Preview' />
        </LogoContainer>
        <MenuContainer className='menu'>
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
        </MenuContainer>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  padding: 40px 0px;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoContainer = styled.div`
  img {
    height: 25px;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export default NavBar;
