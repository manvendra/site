import PostOverview from "./PostOverview";
import axios from "axios";
import { useEffect, useState } from "react";
import { MDBContainer } from "mdb-react-ui-kit";

const PostsList = () => {
  const [postDataList, setPostDataList] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {     
        const response = await axios.get("http://localhost:3001/items");
        setPostDataList(response.data); //for local development with json server removing .itemsm from here put it back
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
    <div >
      <MDBContainer fluid className="d-flex flex-row 
      flex-wrap
      ">
        {postDataList.map((postData) => (
          <PostOverview key={postData.id} postData={postData} />
        ))}
      </MDBContainer>
    </div>
  );
};

export default PostsList;
