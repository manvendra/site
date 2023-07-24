import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as Constants from '../../common/Constants'

function Post() {
  const { postId } = useParams();
  const [postContent, setPostContent] = useState('<div>Loading posts from Google ...<div>');
  const [postTitle, setPostTitle] = useState();

  useEffect(() => {
    const url = Constants.POSTS_URL + '/' + postId + '?key=' + Constants.POSTS_KEY;
    const fetchPostContent = async () => {
      try {
        const response = await axios.get(url);
        setPostContent(response.data.content);
        setPostTitle(response.data.title);
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
    <div className='simple-card post'>
        <header className='title'>{postTitle}</header>
        <section>
          <div className="content"
            dangerouslySetInnerHTML={{ __html: postContent }}>
          </div>
        </section>
    </div>
  );
}

export default Post