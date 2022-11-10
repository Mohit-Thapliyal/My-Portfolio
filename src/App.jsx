import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App flex flex-col items-center overflow-x-hidden antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/skills" element={<Skills/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>

      {/* <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
