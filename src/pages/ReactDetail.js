import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailAccordion from "../components/DetailAccordion";

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
            <div>Pages</div>
            <div>Features</div>
          </div>
        </div>
      </div>
      <div className='componentAccordion'></div>
      <div className='componentPages'></div>
      <div className='componenSupport'></div>
      <div className='componentCategories'></div>
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
  }
  @media (max-width: 768px) {
    .detail {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ReactDetail;
