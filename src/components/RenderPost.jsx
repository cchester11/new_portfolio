import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { post_details } from "../data";

function RenderPost() {
      let params = useParams();
      const [contents, setContents] = useState([]);

      // algorithm to find correct post
      useEffect(() => {
            const foundPost = post_details.find(
                  (post) => post.id === params.id
            );
            if (foundPost) {
                  setContents([...foundPost.content]);
            }
      }, [params.id]); // <- dependency to avoid unnecessary updates

      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center text-cyan-50">
                  {contents.map((item, index) => {
                        switch (item.type) {
                              case "h2":
                                    return (
                                          <h2
                                                key={index}
                                                className="flex justify-center border-b-1 border-b-cyan-50 pb-4"
                                          >
                                                {item.content}
                                          </h2>
                                    );
                              case "h3":
                                    return (
                                          <h3 
                                                key={index}
                                                className="article_text flex justify-center pb-4 text-cyan-200"
                                          >
                                                {item.content}
                                          </h3>
                                    )
                              case "p":
                                    return <p key={index} className="article_text">{item.content}</p>;
                              default:
                                    return null;
                        }
                  })}
            </div>
      );
}

export default RenderPost;
