import React from "react";
import styled from "styled-components";

const Footer = ({ needToHideNavFoot }) => {
  return (
    <FooterContainer className={`${needToHideNavFoot === false ? "" : "hide"}`}>
      <div className='container'>
        <div>Copyright @ IanFelix 2022. All Rights Reserved</div>
        <div>Privacy Policy | Term of Use</div>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  &.hide {
    display: none;
  }
  background: #11204d;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  @media (min-width: 992px) {
    padding: 30px 0px;
  }

  @media (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 10px;
      padding: 20px 0px;
    }
  }
`;
export default Footer;
