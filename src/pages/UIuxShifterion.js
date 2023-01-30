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
import shifterion1 from "../images/ShifterionImage1.png";
import shifterion2 from "../images/ShifterionImage2.png";
import shifterion3 from "../images/ShifterionImage3.png";
import shifterion4 from "../images/ShifterionImage4.png";
import { useEffect } from "react";

const UiuxShifterion = ({ setNeedToHideNavFoot }) => {
  useEffect(() => {
    setNeedToHideNavFoot(false);
    AOS.init();
  }, [setNeedToHideNavFoot]);
  return (
    <ProjectContainer>
      <UxHeadComponent
        brand={"TEENAGR"}
        role={"UI/UX Designer"}
        timeline={"Oktober - December 2022"}
      />
      <UxFlyerComponent src={fyler} />
      <div className='container explanation'>
        <UxExplanation
          title={`The Client.`}
          desc={`Teenagers often doubt or even feel unworthy of their own success and achievements. 
          They actually felt it was just a coincidence. Besides that, They also try to create a positive image of themselves at all times.
          Other problem that teenagers face is susceptible to depression and anger which refers to juvenile delinquency and difficulties in academics`}
        />
        <UxExplanation
          title={`The Problem.`}
          desc={`Low emotion regulation ability can make adolescents not think about the consequences of a decision so that they make the wrong decision.`}
        />
        <UxExplanation
          title={`The Solution.`}
          desc={`
          Meditation helps adjust needs, feelings and values ​​to suit a particular situation. Thus increasing the emotional intelligence of adolescents.
          Meditation creates psychological well-being. With this, teenagers are aware of themselves so they are able to recognize each other's strengths and weaknesses
          Meditation also helps youth to live in character. So that they have complete awareness and give full attention to themselves and daily life so that they are able to regulate the environment and control their activities and emotions.
          `}
        />
        <UxExplanation
          title={`The Process.`}
          desc={`We compiled all needs analysis for this platform using the user centered design method: Double Diamond. 
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
          src='https://www.figma.com/proto/9TeTmp8LyEC41mV2Meih20/TEENAGR-App?page-id=80%3A1268&node-id=80%3A3621&viewport=388%2C412%2C0.09&scaling=scale-down&starting-point-node-id=80%3A3621'
        />
        <UxExplanation
          title={`The Result.`}
          desc={`At the user testing stage, we use three methods, namely Heuristic Evaluation (for internal developers), cognitive walkthrough and usability testing (for external users). 
          The results of the test using the heuristic evaluation method, the TEENAGR application has succeeded in fulfilling all the principles that must be assigned to the application of the 10 principles in the heuristic evaluation method.
          Meanwhile, based on the test results using the usability testing method, from the 8 stages proposed and the scenarios that have been given, the user's effectiveness time in accessing each stage is 8.85 seconds/stage with an average user time to access these functions is 1-2 minutes for the total stages and with a completion rate of 96.78%. The stage that takes a long time to do is the stage for sharing/asking questions on the forum.
          Of all the main functions that have been tested, 100% of users are satisfied and want to use the TEENAGR application.`}
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

export default UiuxShifterion;
