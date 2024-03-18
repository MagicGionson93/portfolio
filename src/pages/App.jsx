// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/globals.css";
import "../styles/App.css";
import "../output.css";

import Home from "../components/Home";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Projects from "../components/Projects";
// import Articles from "../components/Articles";
import TransitionEffect from "../components/TransitionEffect";
import NotFound from "../components/NotFound";

function App() {
  return (
    <>
      <TransitionEffect />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          {/* <Route path="/Articles" element={<Articles />} /> */}
          <Route path="*" element={<NotFound />} />
          {/* <Route path="/Experience" element={<Experince />} /> */}
          {/* <Route path="/Projects" element={<Projects />} /> */}
          {/* <About /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
