import React from "react";
// import styled from "styled-components";

// Import Section
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import HomeExperience from "../components/HomeExperience";
import HomeContact from "../components/HomeContact";
import HomeHireMe from "../components/HomeHireMe";
import HomeProject from "../components/HomeProject";
import { useEffect } from "react";

const Home = ({ setNeedToHideNavFoot }) => {
  useEffect(() => {
    setNeedToHideNavFoot(false);
  });
  return (
    <div>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeExperience />
      <HomeHireMe />
      <HomeProject />
      <HomeContact />
    </div>
  );
};

export default Home;
