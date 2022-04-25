import PostOverview from "./PostOverview";
import './PostsList.css'
import axios from "axios";
import { useEffect, useState } from "react";
import * as Constants from '../../common/Constants'

const PostsList = () => {
  const [postDataList, setPostDataList] = useState([]);
  const url = Constants.URL_PROD + '?' + Constants.queryParam + '&key=' + Constants.key;
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(url);
        setPostDataList(response.data.items);
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