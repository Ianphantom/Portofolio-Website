import React from "react";
import styled from "styled-components";

// Import Experience Component
import EachExperience from "./EachExperience";

const HomeExperience = () => {
  return (
    <ExperienceContainer>
      <div className='container'>
        <div className='head'>
          <div className='title text-36 text-color-2 weight-bold'>
            My Experience
          </div>
          <div className='sub-title text-14 weight-bold text-subtitle'>
            Subheading or information goes here
          </div>
        </div>
        <div className='bottom'>
          <div className='row'>
            <div className='col-md-6'>
              <EachExperience
                year='2022 - Present'
                role='Web Developer'
                company='HypeAndPlay Indonesia'
                brief='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2015 - Present'
                role='Fullstack Developer Intern'
                company='CV Edukasi Tutor Indonesia'
                brief='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2015 - Present'
                role='Fullstack Developer'
                company='PT. Pertamina Persero'
                brief='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2015 - Present'
                role='IT Department Leader'
                company='RuangHR'
                brief='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
              />
            </div>
            <div className='col-md-6'>
              <EachExperience
                year='2015 - Present'
                role='Fullstack Developer Intern'
                company='JasaBee Indonesia'
                brief='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration'
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
