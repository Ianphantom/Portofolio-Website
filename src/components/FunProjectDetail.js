import React from "react";
import styled from "styled-components";

const FunProjectDetail = ({ images, text }) => {
  return (
    <DetailContainer>
      <img src={images} alt='Preview Project' />
      <div className='overlay'>
        <div className='text'>Hello World</div>
      </div>
    </DetailContainer>
  );
};

const DetailContainer = styled.div`
  position: relative;
  cursor: pointer;
  img {
    position: block;
    width: 100%;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #000000;
  }

  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
  }

  &:hover {
    .overlay {
      opacity: 0.5;
    }
  }
`;

export default FunProjectDetail;
