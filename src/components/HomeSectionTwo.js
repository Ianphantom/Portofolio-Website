import React from "react";
import styled from "styled-components";

// Import Image
import MeImage from "../images/me.png";
import Awardee from "../images/award.png";

const HomeSectionTwo = () => {
  return (
    <SectionContainer>
      <div className='container'>
        <div className='row first'>
          <div className='col-md-6'>
            <img src={MeImage} alt='Myself Preview' />
          </div>
          <div className='col-md-6 section2'>
            <div className='h1 text-36 weight-bold playfair'>About Me</div>
            <div className='h2 text-14 weight-bold'>
              Subheading or information goes here
            </div>

            <div className='desc1 text-17 weight-medium'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </div>

            <div className='desc2 text-17 weight-regular'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat duis aute irure dolor in
              reprehende.
            </div>
            <div className='row section3'>
              <div className='col-md-4 gambarAward'>
                <img src={Awardee} alt='Awardee Preview' />
              </div>
              <div className='col-md-8 awardText'>
                <div className='prizeItem text-17 weight-medium utama'>
                  Gold Medal in Smart City Gemastik 14
                </div>
                <div className='text-17 weight-regular'>
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                  autodit and fugit.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='row prizes'>
          <div className='col-md-3 text-center'>
            <div className='prizeItem text-17 weight-medium'>
              Gold Medal in Talent Challenge Puspresnas
            </div>
          </div>
          <div className='col-md-3 text-center'>
            <div className='prizeItem text-17 weight-medium'>
              Gold Medal in UI/UX Design FastUPB 8.0
            </div>
          </div>
          <div className='col-md-3 text-center'>
            <div className='prizeItem text-17 weight-medium'>
              Gold Medal in UI/UX Design Hology 4.0
            </div>
          </div>
          <div className='col-md-3 text-center'>
            <div className='prizeItem text-17 weight-medium'>
              Silver Medal in UI/UX Design Technoforia
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

const SectionContainer = styled.div`
  width: 100%;
  background: #f7f8fa;
  padding: 100px 0px;

  .first {
    display: flex;
    align-items: center;
  }

  .section2 {
    width: 100%;
    padding: 20px 0px;
    .h1 {
      color: #11204d;
    }

    .h2 {
      margin-top: 6px;
      color: rgba(17, 32, 77, 0.35);
    }

    .desc1 {
      width: 100%;
      margin-top: 43px;
      color: #11204d;
    }

    .desc2 {
      width: 100%;
      margin-top: 26px;
      color: rgba(17, 32, 77, 0.7);
    }
  }

  .section3 {
    margin-top: 43px;
    display: flex;
    align-items: center;
    justify-content: center;
    .utama {
      width: 75%;
      margin-bottom: 7px;
    }
  }

  img {
    width: 100%;
  }

  .prizes {
    margin-top: 103px;
  }

  @media (max-width: 768px) {
    .section2 {
      padding-left: 10px;
      padding-right: 10px;
    }
    .section3 {
      .gambarAward {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 70%;
        }
      }

      .awardText {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
      }

      .utama {
        text-align: center;
      }
    }

    .prizes {
      margin-top: 10px;
      gap: 20px;
    }
  }

  @media (min-width: 992px) {
    .section2 {
      padding-left: 45px;
    }
  }
`;

export default HomeSectionTwo;