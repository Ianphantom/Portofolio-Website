import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailPages from "../components/DetailPages";
import DetailFeatures from "../components/DetailFeatures";
import DetailCategory from "../components/DetailCategory";

import ScrollTop from "../components/ScrollTop";

const RealtyDetail = () => {
  const images = [
    "https://d33wubrfki0l68.cloudfront.net/dd23708ebc4053551bb33e18b7174e73b6e1710b/dea24/static/images/wallpapers/shared-colors@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/49de349d12db851952c5556f3c637ca772745316/cfc56/static/images/wallpapers/bridge-02@2x.png",
    "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  ];
  return (
    <>
      <ScrollTop />
      <DetailContainer>
        <div className='container'>
          <DetailHeadComponent
            title={"Realty Property Finder"}
            desc={
              "A fun project to create a website for buying and selling property in Indonesia"
            }
            live={"https://flourishing-swan-39e288.netlify.app/"}
            source={
              "https://github.com/Ianphantom/Exercise-Website-React-Creative/tree/main/blockchain"
            }
          />
        </div>

        <DetailSlideShow images={images} />
        <div className='container'>
          <div className='detail'>
            <div className='left'>
              <div className='title'>My Project</div>
              <div className='projectDetail'>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Short Explanation</div>
                  <div className='explanation'>
                    This realty project was created to compete in the field of
                    smart city gemastik 14. The goal of this project as a whole
                    is to create a buying and selling platform that meets user
                    needs as well as the process of transferring digital
                    property ownership
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Project Goals</div>
                  <div className='explanation'>
                    The goals of this project are the Utilization of Blockchain
                    in the Registration and Transfer of Property Ownership based
                    on the Ethereum Network to Support the Formation of Smart
                    Public Administration and Services. For the existing live
                    preview, for some reason I only show the frontend without
                    connecting to the database and ethereum network.
                    <br />
                    <br />
                    Through the platform, landowners can register land that
                    already has a certificate so that it is registered and has a
                    new electronic certificate. Before registering the property
                    they own, each person must complete all data by filling out
                    the existing registration form. After completing the data,
                    the user needs to wait for the data to be verified by the
                    admin.
                    <br />
                    <br />
                    Any property owner who already has an electronic certificate
                    can sell their property. After they sell, their property
                    will automatically be listed on this platform. When a buyer
                    wants to buy, the electronic certificate will automatically
                    be sent to the new buyer's account.
                    <br />
                    <br />
                    My task in this project is to make a website display using
                    data from the database. Apart from the database, this system
                    is also connected to IPFS for storing its certificates.
                    There are several components that I made such as
                    notifications, messages, product cards, product details etc.
                    Feel free to check the website for detailed information
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Tech Used</div>
                  <div className='explanation'>
                    For the frontend, this website is based on React JS. The
                    frontend will be connected to the backend via the Rest API.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>
                    The Problem and How I Deal With It
                  </div>
                  <div className='explanation'>
                    The main problem we experienced in making this project was
                    optimizing the loading of the page that opened. Because we
                    use a lot of images, we have to compress the images uploaded
                    by the user. Compression must also keep in mind that some
                    images will be displayed at a large size.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Lessons Learned</div>
                  <div className='explanation'>
                    In this project I got a lot of lessons. Starting from how to
                    use component accross the project to creating a function for
                    large scale website
                  </div>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='pagesContainer'>
                <div className='pages titleRight'>Topic</div>
                <div className='wrapper'>
                  <DetailPages desc={"JS"} />
                  <DetailPages desc={"API"} />
                  <DetailPages desc={"Hooks"} />
                  <DetailPages desc={"JSX"} />
                </div>
                <div className='wrapper'>
                  <DetailPages desc={"AJAX"} />
                  <DetailPages desc={"GSAP"} />
                </div>
              </div>
              <div className='featuresContainer'>
                <div className='features titleRight'>Features</div>
                <div className='featuresWrapper'>
                  <DetailFeatures desc={"Dynamic UI Library"} />
                  <DetailFeatures desc={"Web Performance"} />
                  <DetailFeatures desc={"Styled Components"} />
                  <DetailFeatures desc={"Mobile First Approach"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='componentCategories'>
          <div className='container'>
            <div className='title'>Category</div>
            <div className='wrapper'>
              <DetailCategory desc={"Mobile First Approach"} />
              <DetailCategory desc={"Dynamic UI Library"} />
              <DetailCategory desc={"Web Performance"} />
              <DetailCategory desc={"Styled Components"} />
            </div>
            <div className='wrapper'>
              <DetailCategory desc={"Apply"} />
              <DetailCategory desc={"Async"} />
              <DetailCategory desc={"Animation"} />
              <DetailCategory desc={"Higher Order Functions"} />
              <DetailCategory desc={"Fetching"} />
              <DetailCategory desc={"Callbacks"} />
            </div>
          </div>
        </div>
      </DetailContainer>
    </>
  );
};

const DetailContainer = styled.div`
  .detail {
    display: flex;
    justify-content: space-between;
    gap: 80px;
    padding: 80px 0px;
    .title {
      margin-bottom: 41px;
      /* font-family: "Inter"; */
      font-family: "GT Walsheim Regular", serif;

      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -1.2px;
    }
    .left {
      width: 100%;
      .projectDetail {
        display: flex;
        flex-direction: column;
        gap: 30px;

        .sub-detail-wrapper {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .explanation {
          font-size: 17;
        }
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      gap: 60px;
      .titleRight {
        font-family: "GT Walsheim Regular", serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: -0.3px;
        color: #222222;
        margin-bottom: 21px;
      }
      .pagesContainer {
        .wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
      }
      .featuresContainer {
        .featuresWrapper {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
      }
    }
  }
  .componentCategories {
    margin-bottom: 80px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .title {
      margin-bottom: 41px;
      /* font-family: "Inter"; */
      font-family: "GT Walsheim Regular", serif;

      font-style: normal;
      font-weight: 600;
      font-size: 40px;
      line-height: 48px;
      letter-spacing: -1.2px;
      margin-bottom: 31px;
    }

    .wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }
  }
  @media (max-width: 768px) {
    .detail {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default RealtyDetail;
