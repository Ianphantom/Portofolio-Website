import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { Routes, Route } from "react-router-dom";

// Import Pages
import Home from "./pages/Home";

// Import Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
