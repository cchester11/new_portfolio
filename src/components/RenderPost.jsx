import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { post_details } from '../data';

function RenderPost () {
      let params = useParams();
      const [post, setPost] = useState(null);
      let contents;

      // algorithm to find correct post
      const getPost = () => {
            for(let i = 0; i < post_details.length; i ++) {
                  if(post_details[i].id === params.id) {
                        setPost(post_details[i].id)
                        // spread post_details[i].content in a variable
                        // then use that variable in a map method in the component
                        contents = [...post_details[i].content];
                  }
            }
      }

      getPost();

      console.log(contents);

      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center text-cyan-50">
                  <h2>
                        Render Posts Here
                  </h2>
                  <p>Post: {post}</p>
            </div>
      )
};

export default RenderPost;