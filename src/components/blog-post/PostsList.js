import PostOverview from "./PostOverview";
import './PostsList.css'
import axios from "axios";
import { useEffect, useState } from "react";
import * as Constants from '../../common/Constants'
import * as Utils from '../../common/Utils'

const PostsList = () => {
  const [postDataList, setPostDataList] = useState([]);

  useEffect(() => {
    const url = Constants.POSTS_URL + '?' + Constants.POSTS_QRY_PARAM + '&key=' + Constants.POSTS_KEY;
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPostDataList(Utils.sortPostByRank(response.data.items));
      } catch (err) {
        console.error("error in calling backend");
        if (err.response) {
          console.error(err.response);
        } else {
          console.log("printing error - " + err.message);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      {postDataList.map((postData) => (
        <PostOverview key={postData.id} postData={postData} />
      ))}
    </div>
  );
};

export default PostsList;