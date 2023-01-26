import shifterion from "./images/uxShifterion.png";
import hology from "./images/hology.png";
import haloBeauty from "./images/haloBeauty.png";

// import hology from "./images/uxShifterion.png";
// import haloBeauty from "./images/uxShifterion.png";

// Mobile View
import shifterionMobile from "./images/uxShifterionMobile.png";

export const UxState = () => {
  return [
    {
      index: 1,
      number: "01",
      appName: "TEENAGR",
      mainImg: shifterion,
      mobileImg: shifterionMobile,
      url: "/uiux",
      short:
        "TEENAGR is a meditation application to improve emotional regulation and self-acceptance in adolescents in forming their idetity. This app won the gold medal at Unesa X-Project : Shifterion UI/UX Design Competition",
      theme: "#E0F5FF",
      detail: "/uiux/shifterion",
      prototipe:
        "https://www.figma.com/proto/9TeTmp8LyEC41mV2Meih20/TEENAGR-App?page-id=80%3A1268&node-id=80%3A3621&viewport=388%2C412%2C0.09&scaling=scale-down&starting-point-node-id=80%3A3621",
      // theme: "#FFFFFF",
    },
    {
      index: 2,
      number: "02",
      appName: "FLUENCY",
      mainImg: hology,
      mobileImg: shifterionMobile,
      url: "/uiux",
      short:
        "A digital learning platform to encourage exploratory and exploitative behavior to support the formation of ambidextrous leaders. This app won the gold medal at Hology 4.0 UI/UX Design Competition",
      theme: "#FFEFD6",
      detail: "/uiux/shifterion",
      prototipe:
        "https://www.figma.com/proto/9TeTmp8LyEC41mV2Meih20/TEENAGR-App?page-id=80%3A1268&node-id=80%3A3621&viewport=388%2C412%2C0.09&scaling=scale-down&starting-point-node-id=80%3A3621",
    },
    {
      index: 3,
      number: "03",
      appName: "HALOBEAUTY",
      mainImg: haloBeauty,
      mobileImg: shifterionMobile,
      url: "/uiux",
      short:
        "Digtal platform to find your favorite barbershop near you. This application was designed by observing post-pandemic changes in barbershop customers' behaviors",
      theme: "#D6EBE9",
      detail: "/uiux/shifterion",
      prototipe:
        "https://www.figma.com/proto/9TeTmp8LyEC41mV2Meih20/TEENAGR-App?page-id=80%3A1268&node-id=80%3A3621&viewport=388%2C412%2C0.09&scaling=scale-down&starting-point-node-id=80%3A3621",
    },
  ];
};
