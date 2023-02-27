import React from "react";
import styled from "styled-components";

const NotFound = ({ setNeedToHideNavFoot, needToHideNavFoot }) => {
  return (
    <NotFoundContainer className='container'>
      <img
        src='https://www.myphukettravel.com/assets/front-end/images/404.gif'
        alt='404 preview'
      />
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90%;
  }
`;

export default NotFound;
