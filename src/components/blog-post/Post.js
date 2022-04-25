import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Constants from '../../common/Constants'

function Post() {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState('<div>Loading posts from Google ...<div>');
  
  useEffect(() => {
    const url = Constants.URL_PROD +'/'+ postId + '?key=' + Constants.key;
    const fetchPostContent = async () => {
      try {
        const response = await axios.get(url);
        setPostContent(response.data.content);
      } catch (err) {
        console.error("error in calling backend");
        if (err.response) {
          console.error(err.response);
        } else if (err.message) {
          console.error(err.message);
        } else {
          console.error(err);
        }
      }
    };
    fetchPostContent();
  }, [postId])

  return (
    <div className="post-content"
      dangerouslySetInnerHTML={{__html: postContent}}>
    </div>
  );
}

export default Post