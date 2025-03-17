import { useState } from "react";
import { posts } from "../data";

function Posts() {
      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center text-cyan-50">
                  <h2>Posts</h2>
                  {posts.map((element) => (
                        <div key={element.id} className="p-4 border rounded-lg">
                              <button type="button" className="w-full h-full">
                                    <h2 className="text-lg text-cyan-50 mt-2">
                                          {element.title}
                                    </h2>
                              </button>
                        </div>
                  ))}
            </div>
      );
}

export default Posts;
