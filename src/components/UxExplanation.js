import React from "react";
import styled from "styled-components";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const UxExplanation = ({ title, desc }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ExplanationContainer data-aos='fade-up' data-aos-duration='1000'>
      <div className='title'>{title}</div>
      <div className='desc'>{desc}</div>
    </ExplanationContainer>
  );
};

const ExplanationContainer = styled.div`
  /* padding: 120px 0px; */
  /* width: 70%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 120px;
  .title {
    width: 70%;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 44px;
    line-height: 48px;
    letter-spacing: -1.2px;
    color: #000000;
  }

  .desc {
    width: 70%;
    margin-top: 31px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
    color: #4f4f4f;
  }

  @media (max-width: 768px) {
    .title {
      width: 90%;
      font-size: 40px;
    }
    .desc {
      width: 90%;
      font-size: 20px;
    }
  }
`;

export default UxExplanation;
