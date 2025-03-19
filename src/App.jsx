import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Posts from "./components/Posts";
import RenderPost from "./components/RenderPost";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
      return (
            // use onMouseEnter and onMouseLeave to change that state of hoveredButton
            // use shorthand if statements to determine the content of the Link and button elements
            <div className="h-screen w-screen">
                  <Navbar />

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
