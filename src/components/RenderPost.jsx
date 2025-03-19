import { useState } from 'react';
import { useParams } from 'react-router-dom';

function RenderPost () {
      let params = useParams();

      return (
            <div className="flex flex-wrap p-20 gap-10 flex-col justify-center text-cyan-50">
                  <h2>
                        Render Posts Here
                  </h2>
            </div>
      )
};

export default RenderPost;