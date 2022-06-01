import PostOverview from "./PostOverview";
import useStore from "../../stores/useStore";

import { useEffect } from "react";

const PostsList = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const shouldFetchPosts = useStore((state) => state.shouldFetchPosts);
  const postDataList = useStore((state) => state.posts);

useEffect(() => {
  if(shouldFetchPosts===true){
    fetchPosts();
  }
  }, [fetchPosts,shouldFetchPosts]);

  return (
    <div className="cards-container">
      {postDataList.map((postData) => (
        <PostOverview key={postData.id} postData={postData} />
      ))}
    </div>
  );
};

export default PostsList;