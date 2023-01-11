import React from "react";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";

const ReactDetail = () => {
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  return (
    <div>
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
      <div className='componentAccordion'></div>
      <div className='componentPages'></div>
      <div className='componenSupport'></div>
      <div className='componentCategories'></div>
    </div>
  );
};

export default ReactDetail;
