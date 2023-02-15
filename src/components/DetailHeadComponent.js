import React from "react";
import styled from "styled-components";

const DetailHeadComponent = ({ title, desc, live, source }) => {
  return (
    <HeadContainer>
      <div className='left'>
        <div className='title'>{`Outline — ${title}`}</div>
        <div className='owner'>By Ian Felix JS</div>
      </div>
      <div className='right'>
        <div className='top'>{desc}</div>
        <div className='bottom'>
          <a href={source} target='_blank' rel='noopener noreferrer'>
            <div className='source'>Source Code</div>
          </a>
          <a href={live} target='_blank' rel='noopener noreferrer'>
            <div className='live'>Live Preview</div>
          </a>
        </div>
      </div>
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  padding: 80px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 60px;
  .left {
    .title {
      font-family: "Inter";
      font-style: normal;
      font-weight: 800;
      font-size: 48px;
      line-height: 66px;
      letter-spacing: -2px;
      color: #000000;
      margin-bottom: 19px;
    }
    .owner {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 29px;
      letter-spacing: -0.5px;
      color: #999999;
    }
  }

  .right {
    .top {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      line-height: 35px;
      color: #222222;
      margin-bottom: 45px;
    }

    .bottom {
      display: flex;
      align-items: flex-start;
      gap: 15px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: -0.3px;

      color: #ffffff;
      .source {
        cursor: pointer;
        padding: 15px 30px;
        background: linear-gradient(315deg, #303030 0%, #000000 100%);
        border-radius: 12px;
        color: white;
      }
      .live {
        cursor: pointer;
        padding: 15px 34px;
        background: linear-gradient(315deg, #9900ff 0%, #0088ff 100%);
        border-radius: 12px;
        color: white;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .left {
      .title {
        font-size: 36px;
      }
      .owner {
        font-size: 18px;
      }
    }
  }
  @media (max-width: 835px) {
    flex-direction: column;
  }
`;

export default DetailHeadComponent;
