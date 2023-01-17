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
import { useLocation } from "react-router-dom";

const Home = ({ setNeedToHideNavFoot }) => {
  const url = useLocation().pathname.split("/");
  // console.log(url);
  useEffect(() => {
    setNeedToHideNavFoot(false);
    if (url.length > 2) {
      const scrollDiv = document.getElementById(`${url[2]}`).offsetTop;
      window.scrollTo({ top: scrollDiv, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [url, setNeedToHideNavFoot]);
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
