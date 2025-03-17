import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Posts from "./components/Posts";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
      // variable: hoveredButton state; default value is null
      const [hoveredButton, setHoveredButton] = useState(null);

      return (
            // use onMouseEnter and onMouseLeave to change that state of hoveredButton
            // use shorthand if statements to determine the content of the Link and button elements
            <div className="h-screen w-screen">
                  <div className="container flex justify-start align-middle p-7">
                        <Link
                              to="/"
                              className="linkBtn"
                        >
                              <img src="./home.png"></img>
                        </Link>
                  </div>
                  <nav className="flex justify-around align-top w-full p-5 pt-7 border-b-2 border-indigo-900">
                        <Link
                              to="/about"
                              className="linkBtn transition-all duration-300 relative w-24 h-12 flex items-center justify-center"
                              onMouseEnter={() => setHoveredButton("about")}
                              onMouseLeave={() => setHoveredButton(null)}
                        >
                              {hoveredButton === "about" ? (
                                    <span className="text-cyan-50 flex justify-center align-middle">
                                          About
                                    </span>
                              ) : (
                                    <img src="./bioSmall.png"></img>
                              )}
                        </Link>
                        <Link
                              to="/posts"
                              className="linkBtn transition-all duration-300 relative w-24 h-12 flex items-center justify-center"
                              onMouseEnter={() => setHoveredButton("posts")}
                              onMouseLeave={() => setHoveredButton(null)}
                        >
                              {hoveredButton === "posts" ? (
                                    <span className="text-cyan-50 flex justify-center align-middle">
                                          Posts
                                    </span>
                              ) : (
                                    <img
                                          src="./articleSmall.png"
                                          alt="About"
                                    ></img>
                              )}
                        </Link>
                        <button
                              type="button"
                              className="transition-all duration-300 relative w-24 h-12 flex items-center justify-center"
                              onMouseEnter={() => setHoveredButton("github")}
                              onMouseLeave={() => setHoveredButton(null)}
                        >
                              <a
                                    href="https://github.com/cchester11"
                                    target="_blank"
                              >
                                    {hoveredButton === "github" ? (
                                          <span className="text-cyan-50 flex justify-center align-middle">
                                                Github
                                          </span>
                                    ) : (
                                          <img src="./githubSmall.png"></img>
                                    )}
                              </a>
                        </button>
                        <button
                              type="button"
                              className="transition-all duration-300 relative w-24 h-12 flex items-center justify-center"
                              onMouseEnter={() => setHoveredButton("Linkedin")}
                              onMouseLeave={() => setHoveredButton(null)}
                        >
                              <a
                                    href="https://www.linkedin.com/in/chrlchester/"
                                    target="_blank"
                              >
                                    {hoveredButton === "Linkedin" ? (
                                          <span className="text-cyan-50 flex justify-center align-middle">
                                                Linkedin
                                          </span>
                                    ) : (
                                          <img src="./linkedinSmall.png"></img>
                                    )}
                              </a>
                        </button>
                  </nav>

                  <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/posts" element={<Posts />} />
                  </Routes>

                  <Footer />
            </div>
      );
}

export default App;
