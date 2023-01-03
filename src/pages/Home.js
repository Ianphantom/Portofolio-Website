import React from "react";
// import styled from "styled-components";

// Import Section
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import HomeExperience from "../components/HomeExperience";
import HomeContact from "../components/HomeContact";
import HomeHireMe from "../components/HomeHireMe";

const Home = () => {
  return (
    <div>
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeExperience />
      <HomeHireMe />
      <HomeContact />
    </div>
  );
};

export default Home;
