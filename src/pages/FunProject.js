import React, { useEffect } from "react";
import styled from "styled-components";

import FunProjectDetail from "../components/FunProjectDetail";
import { ProjectState } from "../ProjectState";

const FunProject = ({ setNeedToHideNavFoot, needToHideNavFoot }) => {
  useEffect(() => {
    setNeedToHideNavFoot(true);
  }, [setNeedToHideNavFoot]);
  return (
    <FunProjectContainer>
      <aside>
        <header>
          <div className='icon'>
            <svg
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4 16C4 9.373 9.373 4 16 4C22.627 4 28 9.373 28 16C28 22.627 22.627 28 16 28C9.373 28 4 22.627 4 16Z'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
              <path
                d='M10 13.5C10 12.672 10.672 12 11.5 12C12.328 12 13 12.672 13 13.5C13 14.328 12.328 15 11.5 15C10.672 15 10 14.328 10 13.5Z'
                fill='white'
              />
              <path
                d='M18.9998 13.5H21.9998M21.1998 19C20.1238 20.853 18.1428 21.994 15.9998 21.994C13.8568 21.994 11.8758 20.853 10.7998 19'
                stroke='white'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          <div className='title'>My Project</div>
          <div className='desc'>
            A minimal template for your art or photography. Includes a grid
            layout, overlays, and effects. All of the content is easily editable
            via the CMS. Made by Benjamin.
          </div>
        </header>
        <nav>
          <div className='nav-item'>JavaScript Creative</div>
          <hr />
          <div className='nav-item'>React Creative</div>
          <hr />
          <div className='nav-item'>Others</div>
        </nav>
      </aside>
      <main>
        {ProjectState.map((item) => (
          <FunProjectDetail key={item.index} images={item.image} />
        ))}
      </main>
    </FunProjectContainer>
  );
};

const FunProjectContainer = styled.div`
  background: #000000;
  color: white;
  display: flex;
  justify-content: space-between;
  aside {
    position: sticky;
    top: 0;
    width: 300px;
    padding: 30px 30px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg {
      margin-bottom: 14px;
    }
    .title {
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: #ffffff;
      margin-bottom: 16px;
    }
    .desc {
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: #999999;
    }
    nav {
      .nav-item {
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #ffffff;
      }
      hr {
        background: rgba(238, 238, 238, 0.2);
      }
    }
  }
  main {
    padding: 12px;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }
`;

export default FunProject;
