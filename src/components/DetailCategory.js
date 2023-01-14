import React from "react";

import styled from "styled-components";

const DetailCategory = ({ desc }) => {
  return (
    <CategoryContainer>
      <div className='desc'>{desc}</div>
    </CategoryContainer>
  );
};

const CategoryContainer = styled.div`
  background: #f0f0f0;
  border-radius: 8px;
  padding: 10px 14px;
  .desc {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
    color: #555555;
  }
`;

export default DetailCategory;
