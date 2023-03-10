import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import UxHeadComponent from "../components/UxHeadComponent";
import UxFlyerComponent from "../components/UXFlyerComponent";
import UxExplanation from "../components/UxExplanation";
import UxPrototipe from "../components/UxPrototipe";

// import Images
// import fyler from "../images/teenagrFlyer.png";
// import shifterion1 from "../images/HologyImage1.png";
// import shifterion2 from "../images/HologyImage2.png";
// import shifterion3 from "../images/HologyImage3.png";
// import shifterion4 from "../images/ShifterionImage4.png";
import { useEffect } from "react";

const UIuxHology = ({ setNeedToHideNavFoot }) => {
  useEffect(() => {
    setNeedToHideNavFoot(false);
    AOS.init();
  }, [setNeedToHideNavFoot]);
  return (
    <ProjectContainer>
      <UxHeadComponent
        brand={"FLUENCY"}
        role={"UI/UX Designer"}
        timeline={"Oktober - December 2021"}
      />
      <UxFlyerComponent
        src={
          "https://ik.imagekit.io/phantomv008/teenagrFlyer.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678457002815"
        }
      />
      <div className='container explanation'>
        <UxExplanation
          title={`The Client.`}
          desc={`Organizations need leaders who have ambidextrous abilities who see change as challenging opportunities to grow and innovate, not as a disruptive problem.`}
        />
        <UxExplanation
          title={`The Problem.`}
          desc={`Currently many people are facing a crisis in the disruptive era. The disruptive era is an era full of disturbances where massive and rapid changes occur in all sectors or fields. The changes are very fast and it shuffles old order patterns to create new order patterns. Many people/organizations fail to adapt because internal conditions do not match the rapidly changing environment and are still lulled by past glories.`}
        />
        <UxExplanation
          title={`The Solution.`}
          desc={`
          In this era of disruption, developing soft skills is one way to deal with rapid change. We highlight several skills that can help each individual in facing the era of disruption, some of these soft skills are leadership and social influence as well as technology use, monitoring and control. Seeing the importance of leadership, social influence and the use of technology today, we created an application called Fluency to help everyone train their soft skills, especially in the areas of leadership and social influence as well as technology use, monitoring and control.
          `}
        />
        <UxExplanation
          title={`The Process.`}
          desc={`We compiled all needs analysis for this platform using the user centered design method: Design Sprint. 
          The stages we have carried out are conducting in-depth interviews, online surveys, competitive research, making affinity maps, creating user personas, creating empathy maps, user journeys, then creating information architectures, user flow diagrams, mockups and prototypes.`}
        />
        <div className='showImages'>
          <div
            className='imageContainer'
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img
              src={
                "https://ik.imagekit.io/phantomv008/HologyImage1.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678456993988"
              }
              alt='Shifterion1'
            />
          </div>
          <div className='imageFlex2'>
            <div
              className='imageContainer'
              data-aos='zoom-in'
              data-aos-duration='1000'
            >
              <img
                src={
                  "https://ik.imagekit.io/phantomv008/HologyImage2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678456993989"
                }
                alt='Shifterion1'
              />
            </div>
            <div
              className='imageContainer'
              data-aos='zoom-in'
              data-aos-duration='1500'
            >
              <img
                src={
                  "https://ik.imagekit.io/phantomv008/HologyImage3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678456994029"
                }
                alt='Shifterion1'
              />
            </div>
          </div>
        </div>
        <UxExplanation
          title={`The Design Process.`}
          desc={`Develop is a stage in the application design development process that has the goal of compiling solutions to the problem points that have been defined in the previous stages. This stage requires a brainstorming session to collect various ideas that have the potential to solve existing problems (divergent). After the ideas are collected, these ideas go through a selection process to choose which ideas can be prioritized (convergent). This stage was developed through the preparation of information architecture as well as user flow diagrams, wireframes and Hi-Fi.`}
        />
        {/* ini screen prototipe */}
        <UxPrototipe
          imgscreen={
            "https://ik.imagekit.io/phantomv008/ShifterionImage4.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678457000704"
          }
          src='https://www.figma.com/proto/ykjsdGfb1U2PkevaNEP5nK/HologyUi%2FUx?page-id=4%3A2&node-id=441%3A2401&viewport=604%2C-74%2C0.06&scaling=scale-down&starting-point-node-id=441%3A2401&show-proto-sidebar=1'
        />
        <UxExplanation
          title={`The Result.`}
          desc={`At the user testing stage, we use three methods, namely Heuristic Evaluation (for internal developers), cognitive walkthrough and usability testing (for external users). 
          The results of the test using the heuristic evaluation method, the Fluency application has succeeded in fulfilling all the principles that must be assigned to the application of the 10 principles in the heuristic evaluation method.
          Meanwhile, based on the test results using the usability testing method, from the 8 stages proposed and the scenarios that have been given, the user's effectiveness time in accessing each stage is 8.85 seconds/stage with an average user time to access these functions is 1-2 minutes for the total stages and with a completion rate of 96.78%.
          Of all the main functions that have been tested, 100% of users are satisfied and want to use the Fluency application.`}
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

export default UIuxHology;
