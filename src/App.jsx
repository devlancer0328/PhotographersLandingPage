import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Offert from "./components/offert/Offert";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  return ( 
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <About />
      <Offert />
      <Gallery />
      <Footer />
    </>
   );
}

export default App;