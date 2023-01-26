import React from "react";
import styled from "styled-components";

const UxPrototipe = ({ imgscreen, src }) => {
  return (
    <PrototipeContainer>
      <iframe
        width='800'
        height='450'
        src={`https://www.figma.com/embed?embed_host=share&url=${src}`}
        key={src}
        title='prototipe'
      ></iframe>
      <img src={imgscreen} alt='Preview' />
    </PrototipeContainer>
  );
};

const PrototipeContainer = styled.div`
  margin-bottom: 120px;
  box-shadow: 0px 0.796841px 2.39052px -0.25px rgba(0, 0, 0, 0.02),
    0px 2.41368px 7.24103px -0.5px rgba(0, 0, 0, 0.027),
    0px 6.38028px 19.1409px -0.75px rgba(0, 0, 0, 0.04),
    0px 20px 60px -1px rgba(0, 0, 0, 0.08);
  iframe {
    width: 100%;
    height: 90vh;
  }

  img {
    width: 100%;
    display: none;
  }
  @media (max-width: 835px) {
    img {
      display: block;
    }
    iframe {
      display: none;
    }
  }
`;

export default UxPrototipe;
