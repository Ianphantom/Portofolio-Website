import React from "react";
import styled from "styled-components";

const DetailFeatures = ({ desc }) => {
  return (
    <FeaturesContainer>
      <svg
        width='12'
        height='13'
        viewBox='0 0 12 13'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M6 12.0469C8.8995 12.0469 11.25 9.69637 11.25 6.79688C11.25 3.89738 8.8995 1.54688 6 1.54688C3.10051 1.54688 0.75 3.89738 0.75 6.79688C0.75 9.69637 3.10051 12.0469 6 12.0469Z'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M6 8.98438C7.20812 8.98438 8.1875 8.005 8.1875 6.79688C8.1875 5.58875 7.20812 4.60938 6 4.60938C4.79188 4.60938 3.8125 5.58875 3.8125 6.79688C3.8125 8.005 4.79188 8.98438 6 8.98438Z'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.45225 5.24924L2.28662 3.08362'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.54761 5.24924L9.71323 3.08362'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.54761 8.34448L9.71323 10.5101'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M4.45225 8.34448L2.28662 10.5101'
          stroke='#0088FF'
          strokeWidth='1.3125'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
      <div className='desc'>{desc}</div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export default DetailFeatures;
