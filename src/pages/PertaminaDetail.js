import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
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
              "A fun project to build website using ReactJS and learn about state management using Redux"
            }
            live={"#"}
            source={
              "https://github.com/Ianphantom/Exercise-Website-React-Creative"
            }
          />
        </div>

        <DetailSlideShow images={images} />
        <div className='container'></div>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div``;

export default PertaminaDetail;
