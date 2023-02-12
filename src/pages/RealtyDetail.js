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
            live={"#"}
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
                    Each Pertamina truck will be equipped with an IoT device.
                    Making this IoT device was done by my lecturer. When the
                    Pertamina truck enters or exits the base, the Pertamina
                    driver will press the button of the IoT device. <br />
                    <br />
                    System user officers will get notifications that there will
                    be a truck that will leave or enter. Then the officer will
                    choose the reason why the truck exits or enters. There are
                    16 different reasons requested by pertamina. <br />
                    <br />
                    My job here is to develop the backend and frontend systems.
                    For the backend, the backend system must be able to receive
                    signals from IoT devices. After that the backend system will
                    send notifications to the officers in the office. This
                    notification will be obtained by all responsible officers.
                    Requirements from the company, the sound of the notification
                    must not turn off until someone enters information regarding
                    tanker cars that are leaving or entering. <br />
                    <br />
                    The information that needs to be displayed is the time the
                    car entered, the time it left, the reason, the personnel
                    doing the checking, and some other confidential information.
                    Because there was a request to be made in the form of an
                    application and web, so the creation of this system was made
                    on the basis of a progressive web app.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Tech Used</div>
                  <div className='explanation'>
                    For the backend, we use the CodeIgniter 4 framework. The
                    choice of this framework is due to several reasons, one of
                    which is so that Pertamina can carry out maintenance after
                    the project is handed over to them. For the database side,
                    we use MySql for the same reason, which is to make
                    maintenance easier.
                    <br />
                    <br />
                    For the frontend, we use native HTML, CSS, JS to create a
                    Progressive Web App. The frontend will be connected to the
                    backend via the Rest API. For admin pages, our bootstrap
                    framework is standard for styling On the server side, we
                    also created an exe program whose job is to send
                    notifications that there will be trucks leaving or entering
                    a certain area.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Spotlight</div>
                  <div className='explanation'>
                    Making a Progressive Web App natively using only JavaScript
                    requires more effort. Making this PWA also uses an offline
                    first approach. Offline first is used in making existing
                    reports. So, even if the internet connection suddenly
                    disappears, reports can still be read based on the most
                    recently updated data. Because the majority of this platform
                    is used on mobile phones, the design of this platform also
                    uses a mobile first approach.
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>
                    The Problem and How I Deal With It
                  </div>
                  <div className='explanation'>
                    The main problem of this project is the creation of incoming
                    and outgoing tanker notifications. Because the project is
                    web-based, there are some limitations found. One of these
                    limitations is that the company requests that the
                    notification sound should not turn off as long as no one is
                    taking care of the departure or arrival of the tanker truck.
                    To overcome this problem, there are several settings that
                    must be changed on the windows that run the application. For
                    those who run it on Android applications, it must be ensured
                    that they allow incoming notifications and are not in a
                    muted position. On android, we can only set a vibration
                    pattern so that the user can be aware that a new
                    notification has arrived
                  </div>
                </div>
                <div className='explanation-wrapper'>
                  <div className='sub-detail-wrapper'>Lessons Learned</div>
                  <div className='explanation'>
                    In this project I got a lot of lessons. Starting from how to
                    connect IoT devices with Backend systems to creating a
                    Progressive Web App.
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
                  <DetailPages desc={"PWA"} />
                </div>
                <div className='wrapper'>
                  <DetailPages desc={"CI4"} />
                  <DetailPages desc={"IoT"} />
                </div>
              </div>
              <div className='featuresContainer'>
                <div className='features titleRight'>Features</div>
                <div className='featuresWrapper'>
                  <DetailFeatures desc={"Progressive Web App"} />
                  <DetailFeatures desc={"Web Performance"} />
                  <DetailFeatures desc={"Caching Strategies"} />
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
              <DetailCategory desc={"Caching Strategies"} />
              <DetailCategory desc={"Web Performance"} />
              <DetailCategory desc={"Progressive Web App"} />
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
