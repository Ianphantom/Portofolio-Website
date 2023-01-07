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
        "Cherry Indian spiced Bolivian rainbow pepper berry appetizer banana bread matcha main course Thai zesty tofu pad thai banana bread simmer basmati peanut butter almond milk oranges cozy cinnamon oatmeal lime mango crisp fall udon noodles chili.",
      detail: "uiux/detail/shifterion",
      theme: "#E0F5FF",
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
        "Lemon tahini dressing matcha Caribbean red habanero chocolate peanut butter dip Indian spiced tahini drizzle cherry bomb springtime strawberry tasty cozy butternut balsamic vinaigrette tofu almond milk black beans.",
      detail: "uiux/detail/hology",
      theme: "#FFEFD6",
    },
    {
      index: 3,
      number: "03",
      appName: "HALOBEAUTY",
      mainImg: haloBeauty,
      mobileImg: shifterionMobile,
      url: "/uiux",
      short:
        "Samosa a delicious meal frosted gingerbread bites lemon red lentil soup almond milk chili edamame hummus arugula salad instant pot cilantro lime vinaigrette. Chocolate cookie mint garlic sriracha.",
      detail: "uiux/detail/haloBeauty",
      theme: "#D6EBE9",
    },
  ];
};
