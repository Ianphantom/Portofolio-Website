import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import UxHeadComponent from "../components/UxHeadComponent";
import UxFlyerComponent from "../components/UXFlyerComponent";
import UxExplanation from "../components/UxExplanation";
import UxPrototipe from "../components/UxPrototipe";

// import Images
import fyler from "../images/teenagrFlyer.png";
import shifterion1 from "../images/BeautyImage1.png";
import shifterion2 from "../images/BeautyImage2.jpg";
import shifterion3 from "../images/BeautyImage3.jpg";
import shifterion4 from "../images/ShifterionImage4.png";
import { useEffect } from "react";

const UIuxHaloBeauty = ({ setNeedToHideNavFoot }) => {
  useEffect(() => {
    setNeedToHideNavFoot(false);
    AOS.init();
  }, [setNeedToHideNavFoot]);
  return (
    <ProjectContainer>
      <UxHeadComponent
        brand={"CutNGo"}
        role={"UI/UX Designer"}
        timeline={"July - November 2021"}
      />
      <UxFlyerComponent src={fyler} />
      <div className='container explanation'>
        <UxExplanation
          title={`The Client.`}
          desc={`Corona has caused many barbershops to close due to bankruptcy or on purpose
          temporarily closed until conditions are safe.
          When it's safe (new normal), the return of visitors is very dependent on
          people's trust to come back to the barber shop.
          `}
        />
        <UxExplanation
          title={`The Problem.`}
          desc={`Impact of Covid-19 on the economy. As a result of Covid-19, the government imposed
          PSSB to PPKM policies. In addition, the government advised not to leave the house
          if not urgent or needed. It was from this decision that several businesses started
          disadvantaged because of restrictions on the space for people to move. One of the businesses that became
          Our concern as researchers is the salon and barbershop service business.`}
        />
        <UxExplanation
          title={`The Solution.`}
          desc={`
          Overcoming this problem, we try to observe Post-pandemic changes in barbershop customer behavior. We need several observations about A shakeup in what consumers value, Discovery of at-home alternatives and A decline in discretionary spending
          `}
        />
        <UxExplanation
          title={`The Process.`}
          desc={`We compiled all needs analysis for this platform using the user centered design method: Design Thinking. 
          The stages we have carried out are conducting in-depth interviews, online surveys, competitive research, making affinity maps, creating user personas, creating empathy maps, user journeys, then creating information architectures, user flow diagrams, mockups and prototypes.`}
        />
        <div className='showImages'>
          <div
            className='imageContainer'
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img src={shifterion1} alt='Shifterion1' />
          </div>
          <div className='imageFlex2'>
            <div
              className='imageContainer'
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              <img src={shifterion2} alt='Shifterion1' />
            </div>
            <div
              className='imageContainer'
              data-aos='zoom-in'
              data-aos-duration='1500'
            >
              <img src={shifterion3} alt='Shifterion1' />
            </div>
          </div>
        </div>
        <UxExplanation
          title={`The Design Process.`}
          desc={`Develop is a stage in the application design development process that has the goal of compiling solutions to the problem points that have been defined in the previous stages. This stage requires a brainstorming session to collect various ideas that have the potential to solve existing problems (divergent). After the ideas are collected, these ideas go through a selection process to choose which ideas can be prioritized (convergent). This stage was developed through the preparation of information architecture as well as user flow diagrams, wireframes and Hi-Fi.`}
        />
        {/* ini screen prototipe */}
        <UxPrototipe
          imgscreen={shifterion4}
          src='https://www.figma.com/proto/B7QMpeRwGNEYdDBzr8mazY/HaloBeauty?page-id=1%3A3&node-id=65%3A541&viewport=280%2C179%2C0.12&scaling=scale-down&starting-point-node-id=65%3A541&show-proto-sidebar=1'
        />
        <UxExplanation
          title={`The Result.`}
          desc={`At the user testing stage, we use three methods, namely Heuristic Evaluation (for internal developers), cognitive walkthrough and usability testing (for external users). 
          The results of the test using the heuristic evaluation method, the CutNGo application has succeeded in fulfilling all the principles that must be assigned to the application of the 10 principles in the heuristic evaluation method.
          Meanwhile, based on the test results using the usability testing method, from the 8 stages proposed and the scenarios that have been given, the user's effectiveness time in accessing each stage is 8.85 seconds/stage with an average user time to access these functions is 1-2 minutes for the total stages and with a completion rate of 96.78%.
          Of all the main functions that have been tested, 100% of users are satisfied and want to use the CutNGo application.`}
        />
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  font-family: "Inter", sans-serif;
  .explanation {
    padding: 120px 0px;
  }

  .showImages {
    margin-bottom: 120px;
  }

  .imageFlex2 {
    display: flex;
    justify-content: space-between;
    gap: 60px;
    margin-top: 60px;
  }

  .imageContainer {
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .imageFlex2 {
      gap: 20px;
      margin-top: 20px;
    }
  }
`;

export default UIuxHaloBeauty;
