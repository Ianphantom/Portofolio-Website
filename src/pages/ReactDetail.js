import React from "react";

// component
import DetailHeadComponent from "../components/DetailHeadComponent";

const ReactDetail = () => {
  return (
    <div>
      <div className='container'>
        <DetailHeadComponent
          title={"Template for SaaS Companies"}
          desc={
            "Showcase your startup with this light, powerful, fully responsive website template, blog included."
          }
          live={"#"}
          source={"#"}
        />
      </div>

      <div componentImage={"imageState"}></div>
      <div className='componentAccordion'></div>
      <div className='componentPages'></div>
      <div className='componenSupport'></div>
      <div className='componentCategories'></div>
    </div>
  );
};

export default ReactDetail;
