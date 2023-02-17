import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const FunProjectDetail = ({ images, text, link }) => {
  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  return (
    <DetailContainer variants={item}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
        <img src={images} alt='Preview Project' />
        <div className='overlay'>
          <div className='text'>
            <div className='projectTitle'>{text}</div>
            <div>Click to see more!</div>
          </div>
        </div>
      </a>
    </DetailContainer>
  );
};

const DetailContainer = styled(motion.div)`
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
