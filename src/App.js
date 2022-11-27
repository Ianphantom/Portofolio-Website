import React from "react";
import GlobalStyle from "./components/GlobalStyle";

// Import Components
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
