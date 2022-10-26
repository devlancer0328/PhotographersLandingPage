import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"

const App = () => {
  return ( 
    <div>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
   );
}

export default App;