import React from "react";
import styled from "styled-components";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";
import DetailSlideShow from "../components/DetailSlideShow";
import DetailPages from "../components/DetailPages";
import DetailFeatures from "../components/DetailFeatures";
import DetailCategory from "../components/DetailCategory";

import ScrollTop from "../components/ScrollTop";

const HypeAndPlayDetail = () => {
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
            title={"HypeAndPlay Marketplace"}
            desc={
              "An ecommerce platform for hobby shopping from surabaya. This platform is currently on develop"
            }
            live={"http://hypeandplay.com"}
            source={
              "https://github.com/Ianphantom/Exercise-Website-creative-javascript"
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
                    HypeAndPlay is an online store based in Surabaya that sells
                    daily hobby items. Goods sold in the form of vanguard cards,
                    DBT and others
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Project Goals</div>
                  <div className='explanation'>
                    This project consists of two user roles. The first role is
                    admin. The admin is in charge of entering various types of
                    items to be sold, updating images, creating categories,
                    events, promos etc. Admin must be able to perform CRUD for
                    each task performed
                    <br />
                    <br />
                    From the user's side, the user must be able to see all the
                    lists of items sold by the seller. They also have to be able
                    to filter by category, sort based on several things, see new
                    release products, promos and events.
                    <br />
                    My task in this project is to connect the frontend and
                    backend. I am in charge of fetching the API and displaying
                    the product on the website. Apart from fetching, I am also
                    in charge of creating functions such as filter, search,
                    delete, pagination, CRUD and others. These functions are the
                    functionality needed by both admins and users who want to
                    buy HypeAndPlay goods
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Tech Used</div>
                  <div className='explanation'>
                    For the backend of this platform, my team uses Django as the
                    framework. For the frontend, I was asked to work only with
                    Javascript. We do not use a frontend framework for the
                    frontend according to the client's request. For styling, we
                    use bootstrap as standard styling.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Spotlight</div>
                  <div className='explanation'>
                    By using the app shell we can help users save data usage
                    because not all data has to be downloaded repeatedly, the
                    browser only needs to receive content responses related to
                    that page. With this technique, web pages have reliable and
                    very fast performance.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>
                    The Problem and How I Deal With It
                  </div>
                  <div className='explanation'>
                    At this stage, we encountered a problem where the admin was
                    uploading images with very large sizes. This greatly affects
                    the time it takes to load the website. Seeing this, in the
                    next step, we will try to compress the images uploaded by
                    the admin. The hope is that by compressing the image, the
                    image size can be smaller and speed up the loading time
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
                  <DetailPages desc={"Async"} />
                  <DetailPages desc={"AJAX"} />
                </div>
                <div className='wrapper'>
                  <DetailPages desc={"HTML"} />
                  <DetailPages desc={"CSS"} />
                </div>
              </div>
              <div className='featuresContainer'>
                <div className='features titleRight'>Features</div>
                <div className='featuresWrapper'>
                  <DetailFeatures desc={"Ecommerce Website"} />
                  <DetailFeatures desc={"Web Performance"} />
                  <DetailFeatures desc={"Dynamic UI Library"} />
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
              <DetailCategory desc={"Ecommerce Website"} />
              <DetailCategory desc={"Web Performance"} />
              <DetailCategory desc={"Dynamic UI Library"} />
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

export default HypeAndPlayDetail;
