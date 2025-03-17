import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
      return (
            <div className="h-screen w-screen">
                  <div className="container flex justify-start align-middle p-7">
                        <Link to="/" className="linkBtn">
                              <img src="./home.png"></img>
                        </Link>
                  </div>
                  <nav className="flex justify-around align-top w-full p-5 pt-7">
                        <Link to="/about" className="linkBtn">
                              <img src="./bioSmall.png"></img>
                        </Link>
                        <Link to="/posts" className="linkBtn">
                              <img src="./articleSmall.png" alt="About"></img>
                        </Link>
                        <button type="button">
                              <a
                                    href="https://github.com/cchester11"
                                    target="_blank"
                              >
                                    <img src="./githubSmall.png"></img>
                              </a>
                        </button>
                        <button type="button">
                              <a
                                    href="https://www.linkedin.com/in/chrlchester/"
                                    target="_blank"
                              >
                                    <img src="./linkedinSmall.png"></img>
                              </a>
                        </button>
                  </nav>
                  <Footer />

                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/posts" element={<Posts />} />
                  </Routes>
            </div>
      );
}

export default App;
