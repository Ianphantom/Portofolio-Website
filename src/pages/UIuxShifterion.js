import React from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

import UxHeadComponent from "../components/UxHeadComponent";
import UxFlyerComponent from "../components/UXFlyerComponent";
import UxExplanation from "../components/UxExplanation";

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
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
        ut sem vitae risus tristique posuere.`}
        />
        <UxExplanation
          title={`The Problem.`}
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
        ut sem vitae risus tristique posuere.`}
        />
        <UxExplanation
          title={`The Solution.`}
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
        ut sem vitae risus tristique posuere.`}
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
          title={`The Process.`}
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
        ut sem vitae risus tristique posuere.`}
        />
        <div className='showImages'>
          <div
            className='imageContainer'
            data-aos='zoom-in'
            data-aos-duration='1000'
          >
            <img src={shifterion4} alt='Shifterion1' />
          </div>
        </div>
        <UxExplanation
          title={`The Result.`}
          desc={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique. Duis cursus, mi quis viverra
        ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
        Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc
        ut sem vitae risus tristique posuere.`}
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
