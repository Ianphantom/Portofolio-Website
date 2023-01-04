import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import Component
import ProjectComponent from "./ProjectComponent";

import uxdesign from "../images/uxdesign.png";
import reactCreative from "../images/react-creative.png";
import javascriptCreative from "../images/javascript-creative.png";
import realty from "../images/realty.png";
import pertamina from "../images/pertamina.png";
import hypeandplay from "../images/hypeandplay.png";

const HomeProject = () => {
  return (
    <ProjectContainer>
      <div className='container'>
        <div className='head'>
          <div className='title text-36 text-color-2 weight-bold playfair'>
            Some Project
          </div>
          <div className='desc text-14 weight-bold text-subtitle'>
            Lorem ipsum dolor sit amet.
          </div>
        </div>
        <div className='bottom'>
          <div className='rowFlex'>
            <Link to='/uiux/shifterion'>
              <ProjectComponent
                images={uxdesign}
                title={"UI/UX Mobile Design"}
              />
            </Link>

            <ProjectComponent images={reactCreative} title={"React Creative"} />
            <ProjectComponent
              images={javascriptCreative}
              title={"Javascript Creative"}
            />
          </div>
          <div className='rowFlex'>
            <ProjectComponent images={realty} title={"Realty Property"} />
            <ProjectComponent images={pertamina} title={"Pertamina Cybtr"} />
            <ProjectComponent
              images={hypeandplay}
              title={"HypeAndPlay Marketplace"}
            />
          </div>
        </div>
      </div>
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  padding: 100px 0px;
  .head {
    text-align: center;
    .title {
      margin-bottom: 4px;
    }
  }

  .bottom {
    .rowFlex {
      margin-top: 64px;
      display: flex;
      justify-content: space-between;
      gap: 80px;
    }
  }

  @media (max-width: 1000px) {
    .bottom {
      .rowFlex {
        flex-direction: column;
      }
    }
  }
`;

export default HomeProject;
