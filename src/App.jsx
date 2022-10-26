import React from "react";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  return ( 
    <div>
      <GlobalStyle />
      <Routes>
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
   );
}

export default App;