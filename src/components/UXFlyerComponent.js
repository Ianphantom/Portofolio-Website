import React from "react";
import styled from "styled-components";

const UxFlyerComponent = ({ src }) => {
  return (
    <FlyerContainer>
      <img src={src} alt='Flyer Preview' />
    </FlyerContainer>
  );
};

const FlyerContainer = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 70vh;
    object-fit: fill;
  }
`;

export default UxFlyerComponent;
