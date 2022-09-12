import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App flex flex-col items-center overflow-x-hidden antialiased">
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
