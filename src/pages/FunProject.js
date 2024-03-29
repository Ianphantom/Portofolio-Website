import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { useLocation, useNavigate, Link } from "react-router-dom";
import FunProjectDetail from "../components/FunProjectDetail";
import { ProjectState } from "../ProjectState";

const FunProject = ({ setNeedToHideNavFoot, needToHideNavFoot }) => {
  const navigate = useNavigate();
  const url = useLocation().pathname.split("/");

  const [category, setCategory] = useState("");

  const middleContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: "easeOut",
        staggerChildren: 0.25,
      },
    },
  };

  useEffect(() => {
    setNeedToHideNavFoot(true);
    if (url[2] === "" || url.length < 3) {
      setCategory("all");
    } else {
      setCategory(url[2]);
    }
  }, [setNeedToHideNavFoot, url, category]);
  return (
    <FunProjectContainer>
      <aside>
        <header>
          <div className='icon'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              onClick={() => navigate("/home/work")}
            >
              <path
                d='M20.0002 11.0001V13.0001H8.00016L13.5002 18.5001L12.0802 19.9201L4.16016 12.0001L12.0802 4.08008L13.5002 5.50008L8.00016 11.0001H20.0002Z'
                fill='white'
              />
            </svg>
          </div>
          <div className='title'>My Project</div>
          <div className='desc'>
            Feel free to check one by one all the fun project that i had made.
            Enjoy It!
          </div>
        </header>
        <nav>
          <Link to='/funproject/javascript'>
            <div className='nav-item'>JavaScript Creative</div>
          </Link>
          <hr />
          <Link to='/funproject/reactcreative'>
            <div className='nav-item'>React Creative</div>
          </Link>
          <hr />
          <Link to='/funproject/others'>
            <div className='nav-item'>Others</div>
          </Link>
          <hr />
          <Link to='/funproject/all'>
            <div className='nav-item'>All</div>
          </Link>
        </nav>
      </aside>
      <motion.main
        variants={middleContainer}
        initial='hidden'
        animate='show'
        key={category}
      >
        {category !== "all"
          ? ProjectState.map((item) =>
              item.category === category ? (
                <FunProjectDetail
                  key={item.index}
                  images={item.image}
                  text={item.text}
                  link={item.link}
                />
              ) : (
                ""
              )
            )
          : ProjectState.map((item) => (
              <FunProjectDetail
                key={item.index}
                images={item.image}
                text={item.text}
                link={item.link}
              />
            ))}
      </motion.main>
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
    width: 20%;
    padding: 30px 30px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .icon {
      margin-bottom: 14px;
      svg {
        cursor: pointer;
      }
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
        cursor: pointer;
        transition: 1s ease all;
        &:hover {
          font-size: 18px;
        }
      }
      hr {
        background: rgba(238, 238, 238, 0.2);
      }
    }
  }
  main {
    width: 90%;
    padding: 12px;
    display: inline-grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    aside {
      width: 100%;
      gap: 100px;
      height: fit-content;
      position: static;
    }

    main {
      width: 100%;
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default FunProject;
