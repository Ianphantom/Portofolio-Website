import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";

const ProjectComponent = ({ images, title, desc }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ComponentContainer data-aos='zoom-out' data-aos-duration='1500'>
      <img src={images} alt='imagePreview' />
      <div className='title'>{title}</div>
      <div className='desc'>
        Aut cupiditate expedita dolor eveniet a autem rerum ut dicta.
        Exercitationem eum suscipit quo. Est fugiat ducimus aut saepe.
      </div>
    </ComponentContainer>
  );
};

const ComponentContainer = styled.div`
  cursor: pointer;
  text-align: center;
  &:hover {
    img {
      width: 105%;
      height: 45vh;
    }
  }
  img {
    border-radius: 10px;
    width: 100%;
    height: 40vh;
    object-fit: fill;
    transition: 0.5s;
  }
  .title {
    margin-top: 23px;
    text-align: left;
    font-weight: 700;
    font-size: 24px;
    line-height: 38px;
    color: rgba(29, 29, 33, 0.974211);
  }
  .desc {
    margin-top: 25px;
    text-align: left;
  }

  @media (max-width: 768px) {
    &:hover {
      img {
        width: 100%;
        height: 50vh;
      }
    }
  }
`;

export default ProjectComponent;
