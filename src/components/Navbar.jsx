import { Link } from "react-router-dom";

export default function Navbar({ hoveredButton, setHoveredButton }) {
      return (
            <div>
                  <div className="container flex justify-start align-middle p-7">
                        <Link to="/" className="linkBtn">
                              <img 
                                    src="./home.png" 
                                    alt="Home"
                              ></img>
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
                                    <img 
                                          src="./bioSmall.png" 
                                          alt="About"
                                    ></img>
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
                                          alt="Posts"
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
                                          <img 
                                                src="./githubSmall.png" 
                                                alt="Github"
                                          ></img>
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
                                          <img 
                                                src="./linkedinSmall.png" 
                                                alt="LinkedIn"
                                          ></img>
                                    )}
                              </a>
                        </button>
                  </nav>
            </div>
      );
}
