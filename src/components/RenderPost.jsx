import { useState, useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { post_details } from "../data";

function RenderPost() {
      let params = useParams();
      const [contents, setContents] = useState([]);

      // algorithm to find correct post
      useMemo(() => {
            for (let i = 0; i < post_details.length; i++) {
                  if (post_details[i].id === params.id) {
                        setContents([...post_details[i].content])
                  }
            }
      }, [params.id]);

      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center text-cyan-50">
                  {contents.map((item, index) => {
                        switch (item.type) {
                              case "h2":
                                    return <h2 
                                                key={index} 
                                                className="flex justify-center"
                                          >
                                                {item.content}
                                          </h2>;
                              case "p": 
                                    return <p 
                                                key={index}
                                          >
                                                {item.content}
                                          </p>
                        }
                  })}
            </div>
      );
}

export default RenderPost;
