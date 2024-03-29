import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// import Component
import ProjectComponent from "./ProjectComponent";

// import uxdesign from "../images/uxdesign.png";
// import reactCreative from "../images/react-creative.png";
// import javascriptCreative from "../images/javascript-creative.png";
// import realty from "../images/realty.png";
// import pertamina from "../images/pertamina.png";
// import hypeandplay from "../images/hypeandplay.png";

const HomeProject = () => {
  return (
    <ProjectContainer id='work'>
      <div className='container'>
        <div className='head'>
          <div className='title text-36 text-color-2 weight-bold playfair'>
            Some Project
          </div>
          <div className='desc text-14 weight-bold text-subtitle'>
            Featured Project
          </div>
        </div>
        <div className='bottom'>
          <div className='rowFlex'>
            <Link to='/uiux'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/uxdesign.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678440748891"
                }
                title={"UI/UX Mobile Design"}
                desc='A collaborative project with my team to make UI/UX case studies for several national level competitions in Indonesia'
              />
            </Link>
            <Link to='/hypeandplay-detail'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/hypeandplay.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678440748903"
                }
                title={"HypeAndPlay Marketplace"}
                desc='An ecommerce platform for hobby shopping from surabaya. This platform is currently on develop'
              />
            </Link>

            <Link to='/realty-detail'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/realty.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678440779380"
                }
                title={"Realty Property"}
                desc='The smartest and most personalized homebuying experience customized by your style, taste and goals to find your home.'
              />
            </Link>
            <Link to='/pertamina-detail'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/pertamina.png?ik-sdk-version=javascript-1.4.3&updatedAt=1678440748820"
                }
                title={"Pertamina Cybtr"}
                desc='Information Management System for Pertamina to track their tankers. This platform is based on Progressive Web App'
              />
            </Link>
            <Link to='/react-creative'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/react-creative.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678440748830"
                }
                title={"React Creative"}
                desc='A fun project to build website using ReactJS and learn about state management using Redux'
              />
            </Link>
            <Link to='/javascript-creative'>
              <ProjectComponent
                images={
                  "https://ik.imagekit.io/phantomv008/javascript-creative.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1678440748820"
                }
                title={"Javascript Creative"}
                desc='A fun project to build website using Javascript, GSAP for animation, Rest API and object-oriented with JS'
              />
            </Link>
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
      display: inline-grid;
      grid-template-columns: repeat(3, 1fr);
      justify-content: space-evenly;
      gap: 80px;
    }
  }

  @media (max-width: 1000px) {
    .bottom {
      .rowFlex {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;

export default HomeProject;
