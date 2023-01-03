import React from "react";
import styled from "styled-components";

const HomeHireMe = () => {
  return (
    <HireContainer>
      <div className='container'>
        <div className='title'>Want to Work Together!</div>
        <div className='desc'>I’m available for freelance work.</div>
        <div className='buttonHire'>
          <div className='buttonContainer'>
            <div className='text'>Hire Me</div>
            <svg
              width='25'
              height='25'
              viewBox='0 0 25 25'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.54187 11.0712C8.98187 13.9012 11.3019 16.2212 14.1319 17.6612L16.3319 15.4613C16.6119 15.1813 17.0019 15.1013 17.3519 15.2113C18.4719 15.5813 19.6719 15.7812 20.9219 15.7812C21.1871 15.7812 21.4414 15.8866 21.629 16.0741C21.8165 16.2617 21.9219 16.516 21.9219 16.7812V20.2812C21.9219 20.5465 21.8165 20.8008 21.629 20.9884C21.4414 21.1759 21.1871 21.2812 20.9219 21.2812C16.4132 21.2812 12.0892 19.4902 8.90106 16.3021C5.71294 13.1139 3.92188 8.78993 3.92188 4.28125C3.92187 4.01603 4.02723 3.76168 4.21477 3.57414C4.4023 3.38661 4.65666 3.28125 4.92188 3.28125H8.42188C8.68709 3.28125 8.94145 3.38661 9.12898 3.57414C9.31652 3.76168 9.42188 4.01603 9.42188 4.28125C9.42188 5.53125 9.62187 6.73125 9.99187 7.85125C10.1019 8.20125 10.0219 8.59125 9.74187 8.87125L7.54187 11.0712Z'
                fill='#11204D'
              />
            </svg>
          </div>
        </div>
      </div>
    </HireContainer>
  );
};

const HireContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0px;
  background: #f7f8fa;
  .title {
    font-family: "Playfair Display";
    font-style: normal;
    font-weight: 700;
    font-size: 36.006px;
    line-height: 47px;
    color: #11204d;
    margin-bottom: 15px;
  }
  .desc {
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #11204d;
  }
  .buttonHire {
    cursor: pointer;
    margin-top: 41px;
    display: flex;
    justify-content: center;

    .buttonContainer {
      display: flex;
      align-items: center;
      gap: 15px;
      background: #ffffff;
      border: 1px solid rgba(17, 32, 77, 0.2);
      border-radius: 10px;
      padding: 16px 28px;
      transition: ease-in 0.3s;
      color: white;
      background: #6138bd;
      path {
        fill: white;
      }
    }
    .text {
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
    }

    &:hover {
      .buttonContainer {
        color: #11204d;
        border: 1px solid #11204d;
        background: white;
        path {
          fill: #11204d;
        }
      }
    }
  }
`;

export default HomeHireMe;
