import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Uiux from "./pages/Uiux";

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
          path='/uiux/:id'
          element={<Uiux setNeedToHideNavFoot={setNeedToHideNavFoot} />}
        />
      </Routes>
      <Footer needToHideNavFoot={needToHideNavFoot} />
    </div>
  );
}

export default App;
