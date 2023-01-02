import React from "react";
import styled from "styled-components";

const EachExperience = ({ year, role, company, brief }) => {
  return (
    <EachExperienceContainer>
      <div className='left'>
        <div className='year text-14 text-subtitle weight-medium'>{year}</div>
        <div className='divider'></div>
      </div>
      <div className='right'>
        <div className='role'>{role}</div>
        <div className='sub-title text-14 weight-medium text-subtitle'>
          {company}
        </div>
        <div className='brief'>{brief}</div>
      </div>
    </EachExperienceContainer>
  );
};

const EachExperienceContainer = styled.div`
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    .left {
      .year {
        color: #6138bd;
      }
      .divider {
        height: 100px;
        width: 2px;
        background: #6138bd;
      }
    }
  }
  .left {
    width: fit-content;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 44px;
    padding-right: 8px;
    .year {
      transition: 0.3s;
    }
    .divider {
      width: 2px;
      height: 50px;
      transition: 0.3s;

      background: #d5d8e0;
    }
  }

  .right {
    padding-left: 30px;
    .role {
      font-weight: 500;
      font-size: 19.006px;
      line-height: 25px;
      letter-spacing: 0.2px;
      color: #11204d;
      margin-bottom: 5px;
    }

    .brief {
      margin-top: 15px;
      font-weight: 400;
      font-size: 17px;
      line-height: 31px;
      letter-spacing: 0.2px;
      color: rgba(17, 32, 77, 0.7);
    }
  }
`;

export default EachExperience;
