import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Uiux from "./pages/Uiux";
import UiuxShifterion from "./pages/UIuxShifterion";
import UIuxHology from "./pages/UIuxHology";
import UIuxHaloBeauty from "./pages/UIuxHaloBeauty";
import ReactDetail from "./pages/ReactDetail";
import JavaScriptDetail from "./pages/JavaScriptDetail";
import PertaminaDetail from "./pages/PertaminaDetail";
import RealtyDetail from "./pages/RealtyDetail";
import HypeAndPlayDetail from "./pages/HypeAndPlayDetail";
import FunProject from "./pages/FunProject";

// Import Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [needToHideNavFoot, setNeedToHideNavFoot] = useState(false);
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar needToHideNavFoot={needToHideNavFoot} />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
        <Route
          exact
          path='/home/:id'
          element={<Home setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
        <Route
          exact
          path='/uiux'
          element={
            <Uiux
              setNeedToHideNavFoot={setNeedToHideNavFoot}
              needToHideNavFoot={needToHideNavFoot}
            />
          }
        />
        <Route
          exact
          path='/uiux/teenagr'
          element={
            <UiuxShifterion setNeedToHideNavFoot={setNeedToHideNavFoot} />
          }
        />
        <Route
          exact
          path='/uiux/fluency'
          element={<UIuxHology setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
        <Route
          exact
          path='/uiux/beauty'
          element={
            <UIuxHaloBeauty setNeedToHideNavFoot={setNeedToHideNavFoot} />
          }
        />
        <Route
          exact
          path='/react-creative'
          element={<ReactDetail setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
        <Route
          exact
          path='/javascript-creative'
          element={
            <JavaScriptDetail setNeedToHideNavFoot={setNeedToHideNavFoot} />
          }
        />
        <Route
          exact
          path='/pertamina-detail'
          element={
            <PertaminaDetail setNeedToHideNavFoot={setNeedToHideNavFoot} />
          }
        />
        <Route
          exact
          path='/realty-detail'
          element={<RealtyDetail setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
        <Route
          exact
          path='/hypeandplay-detail'
          element={
            <HypeAndPlayDetail setNeedToHideNavFoot={setNeedToHideNavFoot} />
          }
        />
        <Route
          exact
          path='/funproject'
          element={
            <FunProject
              setNeedToHideNavFoot={setNeedToHideNavFoot}
              needToHideNavFoot={needToHideNavFoot}
            />
          }
        />
      </Routes>
      <Footer needToHideNavFoot={needToHideNavFoot} />
    </div>
  );
}

export default App;
