import React from "react";
import styled from "styled-components";

// Import Experience Component
import EachExperience from "./EachExperience";

const HomeExperience = () => {
  return (
    <ExperienceContainer>
      <div className='container'>
        <div className='head'>
          <div className='title text-36 text-color-2 weight-bold playfair'>
            My Experience
          </div>
          <div className='sub-title text-14 weight-bold text-subtitle'>
            Where I’ve Worked
          </div>
        </div>
        <div className='bottom'>
          <div className='row'>
            <div className='col-md-6'>
              <EachExperience
                year='2022 - Present'
                role='Web Developer'
                company='HypeAndPlay Indonesia'
                brief='Worked with a team of three developer to build a e-commerce platform for hypeandplay, a hobby shop originating from Surabaya'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2020-2021'
                role='Fullstack Developer Intern'
                company='CV Edukasi Tutor Indonesia'
                brief='Developed and shipped highly interactive web applications for event ticket booking system for EducatorID'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2021-2021'
                role='Fullstack Developer'
                company='PT. Pertamina Persero'
                brief='Architected and implemented tracking of Pertamina tanker cars and the time of entry and exit of the area'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2021-2021'
                role='IT Department Leader'
                company='RuangHR'
                brief='Responsible for planning out projects and responsible for managing and overseeing the work of IT Team'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2015 - Present'
                role='Fullstack Developer Intern'
                company='JasaBee Indonesia'
                brief='Built and shipped a management information system related to the mechanism for reporting daily tasks for each department'
              />
            </div>
          </div>
        </div>
      </div>
    </ExperienceContainer>
  );
};

const ExperienceContainer = styled.div`
  padding: 100px 0px;
`;

export default HomeExperience;
