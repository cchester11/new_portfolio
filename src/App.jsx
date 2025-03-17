import { useState } from "react";

function App() {
      return (
            <nav className="flex justify-around align-top w-full p-5 pt-7">
                  <button type="button">
                        <a href="" target="_blank">
                              <img src="./bioSmall.png"></img>
                        </a>
                  </button>
                  <button type="button">
                        <a href="" target="_blank">
                              <img src="./articleSmall.png"></img>
                        </a>
                  </button>
                  <button type="button">
                        <a href="https://github.com/cchester11" target="_blank">
                              <img src="./githubSmall.png"></img>
                        </a>
                  </button>
                  <button type="button">
                        <a href="https://www.linkedin.com/in/chrlchester/" target="_blank">
                              <img src="./linkedinSmall.png"></img>
                        </a>
                  </button>
            </nav>
      );
}

export default App;
