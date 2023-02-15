import React from "react";
import styled from "styled-components";

const FunProjectDetail = ({ images, text }) => {
  return (
    <DetailContainer>
      <img src={images} alt='Preview Project' />
      <div className='overlay'>
        <div className='text'>
          <div className='projectTitle'>{text}</div>
          <div>Click to see more!</div>
        </div>
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
    height: 70vh;
    object-fit: cover;
  }

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    opacity: 0;
    transition: 0.5s ease;
    background-color: #000000;
  }

  .text {
    color: #b4b4b4;
    font-size: 18px;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;

    .projectTitle {
      font-size: 25px;
      font-weight: 800;
      color: white;
    }
  }

  &:hover {
    .overlay {
      opacity: 0.8;
    }
  }
`;

export default FunProjectDetail;
