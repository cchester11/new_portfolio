import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Posts from "./components/Posts";
import RenderPost from "./components/RenderPost";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
      // variable: hoveredButton state; default value is null
      const [hoveredButton, setHoveredButton] = useState(null);

      return (
            // use onMouseEnter and onMouseLeave to change that state of hoveredButton
            // use shorthand if statements to determine the content of the Link and button elements
            <div className="h-screen w-screen px-4 sm:px-8 md:px-16 lg:px-32">
                  <Navbar
                        hoveredButton={hoveredButton}
                        setHoveredButton={setHoveredButton}
                  />

                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/posts" element={<Posts />} />
                        <Route path="/posts/:id" element={<RenderPost />} />
                  </Routes>

                  <Footer />
            </div>
      );
}

export default App;
