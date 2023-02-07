import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailPages from "../components/DetailPages";
import DetailFeatures from "../components/DetailFeatures";
import DetailCategory from "../components/DetailCategory";

import ScrollTop from "../components/ScrollTop";

const PertaminaDetail = () => {
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  return (
    <>
      <ScrollTop />
      <DetailContainer>
        <div className='container'>
          <DetailHeadComponent
            title={"PT Pertamina Cybtr"}
            desc={
              "A project to build system information managament for their tanker truck"
            }
            live={"#"}
            source={
              "https://github.com/Ianphantom/Exercise-Website-creative-javascript"
            }
          />
        </div>

        <DetailSlideShow images={images} />
        <div className='container'>
          <div className='detail'>
            <div className='left'>
              <div className='title'>My Project</div>
              <div className='projectDetail'>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Short Explanation</div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Project Goals</div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Tech Stack Used</div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Spotlight</div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>
                    The Problem and How I Deal With It
                  </div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Lessons Learned</div>
                  <div className='explanation'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Quae, illo asperiores debitis vel quos earum quis
                    repellendus animi delectus. Nulla.
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='pagesContainer'>
                <div className='pages titleRight'>Topic</div>
                <div className='wrapper'>
                  <DetailPages desc={"JS"} />
                  <DetailPages desc={"API"} />
                  <DetailPages desc={"Async"} />
                  <DetailPages desc={"AJAX"} />
                </div>
                <div className='wrapper'>
                  <DetailPages desc={"SCSS"} />
                  <DetailPages desc={"GSAP"} />
                </div>
              </div>
              <div className='featuresContainer'>
                <div className='features titleRight'>Features</div>
                <div className='featuresWrapper'>
                  <DetailFeatures desc={"Object Oriented Programming"} />
                  <DetailFeatures desc={"Functional Programming"} />
                  <DetailFeatures desc={"Dynamic UI Library"} />
                  <DetailFeatures desc={"GreenSock Animation Platform"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='componentCategories'>
          <div className='container'>
            <div className='title'>Category</div>
            <div className='wrapper'>
              <DetailCategory desc={"IIFE"} />
              <DetailCategory desc={"Closures"} />
              <DetailCategory desc={"AJAX"} />
              <DetailCategory desc={"Refactoring"} />
              <DetailCategory desc={"Promises"} />
              <DetailCategory desc={"Bind"} />
              <DetailCategory desc={"Call"} />
            </div>
            <div className='wrapper'>
              <DetailCategory desc={"Apply"} />
              <DetailCategory desc={"Async"} />
              <DetailCategory desc={"Animation"} />
              <DetailCategory desc={"Higher Order Functions"} />
              <DetailCategory desc={"Fetching"} />
              <DetailCategory desc={"Callbacks"} />
            </div>
          </div>
        </div>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div`
  .detail {
    display: flex;
    justify-content: space-between;
    gap: 80px;
    padding: 80px 0px;
    .title {
      margin-bottom: 41px;
      /* font-family: "Inter"; */
      font-family: "GT Walsheim Regular", serif;

      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -1.2px;
    }
    .left {
      width: 100%;
      .projectDetail {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .sub-detail-wrapper {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 60px;
      .titleRight {
        font-family: "GT Walsheim Regular", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.3px;
        color: #222222;
        margin-bottom: 21px;
      }
      .pagesContainer {
        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
      }
      .featuresContainer {
        .featuresWrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
  .componentCategories {
    margin-bottom: 80px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .title {
      margin-bottom: 41px;
      /* font-family: "Inter"; */
      font-family: "GT Walsheim Regular", serif;

      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -1.2px;
      margin-bottom: 31px;
    }

    .wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .detail {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default PertaminaDetail;
