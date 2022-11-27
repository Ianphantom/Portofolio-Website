import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <div className='container'>
        <div>Copyright @ IanFelix 2022. All Rights Reserved</div>
        <div>Privacy Policy | Term of Use</div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  background: #11204d;
  padding: 30px 0px;
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
`;
export default Footer;
