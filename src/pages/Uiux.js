import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { UxState } from "../UxState";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import backgroundMockup from "../images/backgroundMockup.png";

const Uiux = ({ setNeedToHideNavFoot, needToHideNavFoot }) => {
  const [myProject] = useState(UxState);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [showProject, setShowProject] = useState(myProject[currentNumber]);
  const [displayImage, setDisplayImage] = useState(showProject.mainImg);
  const [indexProject, setIndexProject] = useState(showProject.index);

  const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
  // console.log(showProject);

  const projectLength = myProject.length;
  // console.log(projectLength);

  const back = () => {
    if (currentNumber - 1 < 0) {
      setCurrentNumber(projectLength - 1);
    } else {
      setCurrentNumber(currentNumber - 1);
    }
    console.log(currentNumber);
  };

  const next = () => {
    if (currentNumber + 1 > projectLength - 1) {
      setCurrentNumber(0);
    } else {
      setCurrentNumber(currentNumber + 1);
    }
    console.log(currentNumber);
  };

  const middleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  const setDimension = () => {
    setWindowsWidth(window.innerWidth);
  };

  useEffect(() => {
    setNeedToHideNavFoot(true);
    window.addEventListener("resize", setDimension);
    setShowProject(myProject[currentNumber]);
    setDisplayImage(showProject.mainImg);
    setIndexProject(showProject.index);
  }, [
    showProject,
    indexProject,
    currentNumber,
    myProject,
    setNeedToHideNavFoot,
  ]);

  return (
    <UiuxContainer>
      <div className='left space'>
        <div className='head space'>
          <Link to='/'>
            <svg
              width='44'
              height='44'
              viewBox='0 0 44 44'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M23.1247 0H20.8302V2.32539H23.1247V0Z' fill='white' />
              <path
                d='M23.1247 41.6746H20.8302V44H23.1247V41.6746Z'
                fill='white'
              />
              <path
                d='M8.05315 35.0176H5.75867V37.343H8.05315V35.0176Z'
                fill='white'
              />
              <path
                d='M37.5665 35.0176H35.272V37.343H37.5665V35.0176Z'
                fill='white'
              />
              <path
                d='M8.05315 6.38342H5.75867V8.70881H8.05315V6.38342Z'
                fill='white'
              />
              <path
                d='M37.5665 6.38342H35.272V8.70881H37.5665V6.38342Z'
                fill='white'
              />
              <path
                d='M2.29448 20.6549H0V22.9803H2.29448V20.6549Z'
                fill='white'
              />
              <path d='M44 20.6549H41.7056V22.9803H44V20.6549Z' fill='white' />
              <path
                d='M4.18409 10.3046C2.47448 12.9492 1.39472 15.8673 0.989814 19.0134L0.944824 19.287H2.29452L2.33951 19.059C2.78941 16.0041 3.91415 13.086 5.62376 10.5326L5.8937 10.1678H4.31906L4.18409 10.3046Z'
                fill='white'
              />
              <path
                d='M2.24947 24.5762L2.20448 24.3482H0.89978L0.94477 24.6218C1.34968 27.8591 2.38444 30.8228 4.09405 33.5586L4.18403 33.6498H5.75868L5.48874 33.285C3.77913 30.686 2.65438 27.6767 2.24947 24.5762Z'
                fill='white'
              />
              <path
                d='M41.6606 19.1047L41.7056 19.3327H43.0553L43.0103 19.0591C42.5604 15.913 41.4806 12.9948 39.816 10.3503L39.726 10.2591H38.1514L38.4213 10.6239C40.0859 13.1316 41.2107 16.0498 41.6606 19.1047Z'
                fill='white'
              />
              <path
                d='M41.7505 24.3482L41.7055 24.5762C41.3006 27.6767 40.1758 30.7316 38.4662 33.285L38.1963 33.6498H39.7709L39.8609 33.5586C41.5705 30.8684 42.6503 27.8591 43.0102 24.6218L43.0552 24.3482H41.7505Z'
                fill='white'
              />
              <path
                d='M32.8426 5.15236L32.8876 5.19795H35.1371L34.5522 4.74199C31.7178 2.55339 28.2986 1.13992 24.7444 0.683963L24.4745 0.638367V2.00624L24.6994 2.05184C27.6238 2.4622 30.3681 3.46531 32.8426 5.15236Z'
                fill='white'
              />
              <path
                d='M9.35782 4.74199L8.77295 5.19795H11.0224L11.0674 5.15236C13.5869 3.46531 16.3312 2.4622 19.3006 2.05184L19.5255 2.00624V0.638367L19.2556 0.683963C15.6564 1.13992 12.2372 2.55339 9.35782 4.74199Z'
                fill='white'
              />
              <path
                d='M33.0675 38.7565C30.5481 40.4435 27.6687 41.5834 24.6544 41.9938L24.4294 42.0394V43.4072L24.6994 43.3617C28.3436 42.8601 31.8078 41.4466 34.7321 39.1668L35.317 38.7109L33.0675 38.7565Z'
                fill='white'
              />
              <path
                d='M10.8875 38.7565L10.7975 38.7109H8.59302L9.17788 39.1668C12.1022 41.4466 15.6114 42.8601 19.2556 43.3617L19.5255 43.4072V42.0394L19.3006 41.9938C16.2863 41.5834 13.3619 40.4435 10.8875 38.7565Z'
                fill='white'
              />
              <path
                d='M16.0164 26.3088L10.4376 21.7492L16.0613 17.6456L17.366 19.515L14.1718 21.8404L17.411 24.5305L16.0164 26.3088Z'
                fill='white'
              />
              <path
                d='M27.9386 26.3088L26.5439 24.5305L29.7832 21.8404L26.5889 19.515L27.8936 17.6456L33.5174 21.7492L27.9386 26.3088Z'
                fill='white'
              />
              <path
                d='M25.5243 15.4069L23.3981 14.6628L18.6402 28.6263L20.7665 29.3704L25.5243 15.4069Z'
                fill='white'
              />
            </svg>
          </Link>

          <div>PROTOTYPE {showProject.number}</div>
        </div>
        <motion.div
          variants={middleContainer}
          initial='hidden'
          animate='show'
          key={showProject.index}
          className='middle container'
        >
          <motion.div variants={item} className='name'>
            {showProject.appName}
          </motion.div>
          <motion.div variants={item} className='desc'>
            {showProject.short}
          </motion.div>
          <motion.div variants={item} className='more'>
            More
          </motion.div>
        </motion.div>
        <div className='bottom space'>
          <div className='buttonContainer back space' onClick={back}>
            BACK
          </div>
          <div className='page space'>
            <span>{currentNumber + 1} </span>/ 3
          </div>
          <div className='buttonContainer next space' onClick={next}>
            NEXT
          </div>
        </div>
      </div>
      <div
        className='right space'
        style={{ backgroundImage: `url(${backgroundMockup})` }}
      >
        <motion.img
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.5 }}
          src={windowsWidth <= 834 ? showProject.mobileImg : displayImage}
          key={showProject.index}
          alt='Mockup Preview'
        />
      </div>
    </UiuxContainer>
  );
};

const UiuxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  .left {
    width: 100%;
    height: 100vh;
    color: white;
    background: #000000;
    padding: 2.75rem 2.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .head {
      letter-spacing: 1px;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .middle {
      width: 70%;
      .name {
        font-family: "Space Mono";
        font-style: normal;
        font-weight: 700;
        font-size: 64px;
        line-height: 96px;
        margin-bottom: 11.24px;
      }

      .desc {
        color: rgba(255, 255, 255, 0.69);
      }

      .more {
        cursor: pointer;
        margin-top: 30px;
        background: rgba(255, 255, 255, 0.978796);
        border-radius: 10px;
        text-align: center;
        font-family: "Space Grotesk";
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 22px;
        width: 100%;
        padding: 15px 0px;
        color: #000000;
      }
    }

    .bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 1px;
      .page {
        color: #999999;
        span {
          color: white;
        }
      }
      .buttonContainer {
        cursor: pointer;
        padding: 11px 20px 9px 20px;
        &.back {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 30px;
        }
        &.next {
          background: white;
          border-radius: 30px;
          color: black;
        }
      }
    }
  }

  .right {
    /* padding-left: 2.75rem; */
    /* padding-right: 2.75rem; */
    background-size: cover;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    img {
      width: 100%;
      /* height: 90vh; */
    }
  }

  @media (max-width: 1000px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 835px) {
    .right {
      height: fit-content;
      display: block;
      padding: 50px 50px;
      text-align: center;
      img {
        width: 50%;
      }
    }
  }

  @media (max-width: 768px) {
    .left {
      text-align: center;
      .name {
        width: 100%;
        font-size: 40px !important;
      }
      .middle {
        width: 100%;
      }
    }
  }
`;

export default Uiux;
