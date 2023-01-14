import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailAccordion from "../components/DetailAccordion";
import DetailPages from "../components/DetailPages";
import DetailFeatures from "../components/DetailFeatures";
import DetailCategory from "../components/DetailCategory";

const ReactDetail = () => {
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  return (
    <DetailContainer>
      <div className='container'>
        <DetailHeadComponent
          title={"Template for SaaS Companies"}
          desc={
            "Showcase your startup with this light, powerful, fully responsive website template, blog included."
          }
          live={"#"}
          source={"#"}
        />
      </div>

      <DetailSlideShow images={images} />
      <div className='container'>
        <div className='detail'>
          <div className='left'>
            <div className='title'>My Project</div>
            <div className='accordionContainer'>
              <DetailAccordion
                title='Ignite Website'
                desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                link={"/detail"}
              />
              <DetailAccordion
                title='Ignite Website'
                desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                link={"/detail"}
              />
              <DetailAccordion
                title='Ignite Website'
                desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                link={"/detail"}
              />
              <DetailAccordion
                title='Ignite Website'
                desc={`There are two types of scroll effects: Speed and Appear. Speed allows you to define the scrolling speed of a layer, which allows to you to design parallax effects. Appear allows you to animate any layer as you scroll past it (as it enters the viewport). The Appear effect allows you to animate layers as you scroll past them. See a short summary of the available properties below.`}
                link={"/detail"}
              />
            </div>
          </div>
          <div className='right'>
            <div className='pagesContainer'>
              <div className='pages titleRight'>Pages</div>
              <div className='wrapper'>
                <DetailPages />
                <DetailPages />
                <DetailPages />
                <DetailPages />
              </div>
              <div className='wrapper'>
                <DetailPages />
                <DetailPages />
              </div>
            </div>
            <div className='featuresContainer'>
              <div className='features titleRight'>Features</div>
              <div className='featuresWrapper'>
                <DetailFeatures />
                <DetailFeatures />
                <DetailFeatures />
                <DetailFeatures />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='componentCategories'>
        <div className='container'>
          <div className='title'>Category</div>
          <div className='wrapper'>
            <DetailCategory desc={"Title"} />
            <DetailCategory desc={"Agency"} />
            <DetailCategory desc={"Blog"} />
            <DetailCategory desc={"Brand Guidelines"} />
            <DetailCategory desc={"Changelog"} />
            <DetailCategory desc={"Landing Page"} />
            <DetailCategory desc={"Personal"} />
          </div>
          <div className='wrapper'>
            <DetailCategory desc={"Podcast"} />
            <DetailCategory desc={"Portofolio"} />
            <DetailCategory desc={"Splash Pages"} />
            <DetailCategory desc={"Brand Guidelines"} />
            <DetailCategory desc={"Changelog"} />
            <DetailCategory desc={"Landing Page"} />
          </div>
        </div>
      </div>
    </DetailContainer>
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
