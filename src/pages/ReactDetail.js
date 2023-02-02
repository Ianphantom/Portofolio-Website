import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailAccordion from "../components/DetailAccordion";
import DetailPages from "../components/DetailPages";
import DetailFeatures from "../components/DetailFeatures";
import DetailCategory from "../components/DetailCategory";

import ScrollTop from "../components/ScrollTop";

const ReactDetail = () => {
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
            title={"The React Creative and Redux"}
            desc={
              "A fun project to build website using ReactJS and learn about state management using Redux"
            }
            live={"#"}
            source={
              "https://github.com/Ianphantom/Exercise-Website-React-Creative"
            }
          />
        </div>

        <DetailSlideShow images={images} />
        <div className='container'>
          <div className='detail'>
            <div className='left'>
              <div className='title'>My Project</div>
              <div className='accordionContainer'>
                <DetailAccordion
                  title='React Music Player'
                  desc={`A Web based application that allows you to listen to music files over the internet.
                  Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. 
                  Appear allows you to animate any layer as you scroll past it (as it enters the viewport). 
                  The Appear effect allows you to animate layers as you scroll past them. 
                  See a short summary of the available properties below.`}
                  link={"/detail"}
                />
                <DetailAccordion
                  title='Capture Landing Page'
                  desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                  link={"/detail"}
                />
                <DetailAccordion
                  title='Ignite Catalog'
                  desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                  link={"/detail"}
                />
              </div>
            </div>
            <div className='right'>
              <div className='pagesContainer'>
                <div className='pages titleRight'>Topic</div>
                <div className='wrapper'>
                  <DetailPages desc={"React"} />
                  <DetailPages desc={"API"} />
                  <DetailPages desc={"Async"} />
                  <DetailPages desc={"Redux"} />
                </div>
                <div className='wrapper'>
                  <DetailPages desc={"Hooks"} />
                  <DetailPages desc={"JSX"} />
                </div>
              </div>
              <div className='featuresContainer'>
                <div className='features titleRight'>Features</div>
                <div className='featuresWrapper'>
                  <DetailFeatures desc={"React"} />
                  <DetailFeatures desc={"React Router"} />
                  <DetailFeatures desc={"Styled Components"} />
                  <DetailFeatures desc={"Framer Motion"} />
                  <DetailFeatures desc={"Intersection Observer"} />
                  <DetailFeatures desc={"Redux"} />
                  <DetailFeatures desc={"Thunk"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='componentCategories'>
          <div className='container'>
            <div className='title'>Category</div>
            <div className='wrapper'>
              <DetailCategory desc={"JSX"} />
              <DetailCategory desc={"Props"} />
              <DetailCategory desc={"Event"} />
              <DetailCategory desc={"State"} />
              <DetailCategory desc={"State Lifting"} />
              <DetailCategory desc={"React Hooks"} />
              <DetailCategory desc={"Styled Component"} />
            </div>
            <div className='wrapper'>
              <DetailCategory desc={"Animation"} />
              <DetailCategory desc={"Async"} />
              <DetailCategory desc={"Axios"} />
              <DetailCategory desc={"Redux"} />
              <DetailCategory desc={"Fetching"} />
              <DetailCategory desc={"Mobile Styling"} />
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

export default ReactDetail;
