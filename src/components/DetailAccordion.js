import React from "react";
import { useState } from "react";
import styled from "styled-components";

const DetailAccordion = ({ title, desc, link }) => {
  const [accordionStatus, setAccordionStatus] = useState(false);
  return (
    <AccordionContainer onClick={() => setAccordionStatus(!accordionStatus)}>
      <div className='headerAccordion'>
        <div className='myProject'>{title}</div>
        <svg
          style={{
            transform: `rotate(${accordionStatus === true ? "45deg" : "0"})`,
          }}
          width='24'
          height='25'
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clipPath='url(#clip0_227_1168)'>
            <path
              d='M3.75 12.2969H20.25'
              stroke='#222222'
              strokeWidth='2.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12 4.04688V20.5469'
              stroke='#222222'
              strokeWidth='2.25'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </g>
          <defs>
            <clipPath id='clip0_227_1168'>
              <rect
                width='24'
                height='24'
                fill='white'
                transform='translate(0 0.296875)'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      {accordionStatus && (
        <>
          <div className='descAccordion'>{desc}</div>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <div className='descAccordion learnMore'>Visit Website</div>
          </a>
        </>
      )}
    </AccordionContainer>
  );
};

const AccordionContainer = styled.div`
  cursor: pointer;
  padding: 24px 24px;
  background: #fafafa;
  border-radius: 20px;
  margin-bottom: 4px;
  .headerAccordion {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .myProject {
      /* font-family: "Inter"; */
      /* font-family: "Space Grotesk"; */
      font-family: "GT Walsheim Medium", serif;

      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      letter-spacing: -0.5px;
      color: #222222;
    }
  }
  .descAccordion {
    margin-top: 30px;
    /* font-family: "Inter"; */
    /* font-family: "Space Grotesk"; */
    font-family: "GT Walsheim Medium", serif;

    font-style: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.5px;
    font-weight: 400;
    color: #818181;
  }

  .learnMore {
    color: #0088ff;
  }
`;

export default DetailAccordion;
