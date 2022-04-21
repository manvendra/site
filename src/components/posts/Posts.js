import PostCard from "../post-card/PostCard";
import axios from "axios";
import { useEffect, useState } from "react";
import * as Constants from "../../common/Constants";
import { MDBContainer } from "mdb-react-ui-kit";

const Posts = () => {
  const [postDataList, setPostDataList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("going to call backend");
        const response = await axios.get("http://localhost:3001/items");
        console.log("done calling backend data returned is ");
        console.log(response.data);
        setPostDataList(response.data); //for local development with json server removing .itemsm from here put it back
      } catch (err) {
        console.error("error in calling backend");
        if (err.response) {
          console.error(err.response.data);
          console.error(err.response.status);
          console.error(err.response.header);
        } else {
          console.log("printing error - " + err.message);
        }
      }
    };
    fetchPosts();
  }, []);

  return (
    <div >
      <div>
        This will contain search !
      </div>

      <MDBContainer fluid className="d-flex flex-row 
      flex-wrap
      ">
        {postDataList.map((postData) => (
          <PostCard key={postData.id} postData={postData} />
        ))}
      </MDBContainer>
    </div>
  );
};

export default Posts;
