import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const DetailSlideShow = ({ images }) => {
  const [counter, setCounter] = useState(0);
  const [direction, setDirection] = useState(1);

  const imagesLength = images.length;

  const setPaginate = (number) => {
    setDirection(number);
    if (counter + number > imagesLength - 1) {
      setCounter(0);
    } else if (counter + number < 0) {
      setCounter(images.length - 1);
    } else {
      setCounter(counter + number);
    }
  };

  return (
    <SlideContainer>
      <div className='imageContainer'>
        <AnimatePresence exitBeforeEnter>
          <motion.img
            initial={{ opacity: 0, x: `${direction < 0 ? "100%" : "-100%"}` }}
            animate={{
              opacity: 1,
              x: `${direction < 0 ? "0%" : "0%"}`,
              transition: { duration: 0.5 },
              zIndex: 1,
            }}
            exit={{
              opacity: 0,
              x: `${direction < 0 ? "-50%" : "50%"}`,
              transition: { duration: 0.2 },
              zIndex: 0,
            }}
            key={counter}
            src={images[counter]}
            alt='preview'
          />
        </AnimatePresence>

        <div
          className='next'
          onClick={() => {
            setPaginate(1);
          }}
        >
          {"‣"}
        </div>
        <div
          className='prev'
          onClick={() => {
            setPaginate(-1);
          }}
        >
          {"‣"}
        </div>
      </div>
    </SlideContainer>
  );
};

const SlideContainer = styled.div`
  .imageContainer {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .next,
    .prev {
      top: calc(50% - 20px);
      position: absolute;
      background: white;
      border-radius: 30px;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      user-select: none;
      cursor: pointer;
      font-weight: bold;
      font-size: 18px;
      z-index: 2;
    }

    .next {
      right: 10px;
    }

    .prev {
      left: 10px;
      transform: scale(-1);
    }

    img {
      object-fit: cover;
      width: 100%;
      height: 90vh;
    }
  }
`;

export default DetailSlideShow;
