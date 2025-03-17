import { useState } from "react";
import projects from "../data";

function Projects() {
      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center">
                  {projects.map((element) => (
                        <div key={element.id} className="p-4 border rounded-lg">
                              <h2
                                    className="text-lg text-cyan-50 mt-2"
                              >
                                    {element.name}
                              </h2>
                              <br></br>
                              <button type="button">
                                    <a href={element.link} target="_blank">
                                          <img
                                                src={`./${element.screenshot}.jpg`}
                                                alt={element.name}
                                          />
                                    </a>
                              </button>
                        </div>
                  ))}
            </div>
      );
}

export default Projects;
