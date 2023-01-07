import React from "react";
import styled from "styled-components";

const UxHeadComponent = ({ brand, role, timeline }) => {
  return (
    <HeadContainer>
      <div className='container '>
        <div className='left'>
          <div className='branding title inter'>BRANDING</div>
          <div className='projectTitle inter'>{brand}</div>
        </div>
        <div className='right'>
          <div className='roleContainer'>
            <div className='role title titleRight inter'>Role</div>
            <div className='roleDetail inter '>{role}</div>
          </div>
          <div className='timelineContainer'>
            <div className='timeline title titleRight inter'>TIMELINE</div>
            <div className='timelineDetail inter'>{timeline}</div>
          </div>
        </div>
      </div>
    </HeadContainer>
  );
};

const HeadContainer = styled.div`
  padding: 60px 0px;
  .inter {
    font-family: "Inter", sans-serif !important;
  }
  .container {
    display: flex;
    justify-content: space-between;
    .title {
      color: #e76385;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      letter-spacing: -0.5px;
    }
    .left {
      .branding {
        margin-bottom: 25px;
      }
      .projectTitle {
        font-weight: 600;
        font-size: 56px;
        line-height: 62px;
        letter-spacing: -1.2px;
        color: #000000;
      }
    }

    .right {
      display: flex;
      gap: 80px;
      .titleRight {
        margin-bottom: 24px;
      }

      .timelineDetail,
      .roleDetail {
        letter-spacing: -0.5px;
        color: #1d1d21;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
      }
    }
  }
`;

export default UxHeadComponent;
