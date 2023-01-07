import React from "react";
import styled from "styled-components";

import UxHeadComponent from "../components/UxHeadComponent";
import UxFlyerComponent from "../components/UXFlyerComponent";

// import fyler
import fyler from "../images/teenagrFlyer.png";

const UiuxShifterion = ({ setNeedToHideNavFoot }) => {
  setNeedToHideNavFoot(false);
  return (
    <ProjectContainer>
      <UxHeadComponent
        brand={"TEENAGR"}
        role={"UI/UX Designer"}
        timeline={"Oktober - December 2022"}
      />
      <UxFlyerComponent src={fyler} />
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  font-family: "Inter", sans-serif;
`;

export default UiuxShifterion;
