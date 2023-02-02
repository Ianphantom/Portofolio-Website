import React from "react";
import styled from "styled-components";

const DetailPages = ({ desc }) => {
  return (
    <PagesContainer>
      <svg
        width='12'
        height='13'
        viewBox='0 0 12 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_227_1214)'>
          <path
            d='M6 0.546875C9.314 0.546875 12 3.23288 12 6.54688C12 9.86087 9.314 12.5469 6 12.5469C2.686 12.5469 0 9.86087 0 6.54688C0 3.23288 2.686 0.546875 6 0.546875Z'
            stroke='#999999'
            strokeWidth='3'
          />
          <path
            d='M6 0.546875C7.657 0.546875 9 3.23288 9 6.54688C9 9.86087 7.657 12.5469 6 12.5469C4.343 12.5469 3 9.86087 3 6.54688C3 3.23288 4.343 0.546875 6 0.546875Z'
            stroke='#999999'
            strokeWidth='3'
          />
          <path d='M1 6.54688H11' stroke='#999999' strokeWidth='1.5' />
        </g>
        <defs>
          <clipPath id='clip0_227_1214'>
            <rect
              width='12'
              height='12'
              fill='white'
              transform='translate(0 0.546875)'
            />
          </clipPath>
        </defs>
      </svg>
      <div className='desc'>{desc}</div>
    </PagesContainer>
  );
};

const PagesContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 9px;
  background: #fafafa;
  border-radius: 6px;
  .desc {
    font-family: "GT Walsheim Regular", serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 16px;
    letter-spacing: -0.2px;
    color: #555555;
  }
`;

export default DetailPages;
