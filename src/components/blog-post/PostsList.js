import PostOverview from "./PostOverview";
import useStore from "../../stores/useStore";

import { useEffect } from "react";
import WordCloud from "../../common/WordCloud";

const PostsList = () => {
  const fetchPosts = useStore((state) => state.fetchPosts);
  const shouldFetchPosts = useStore((state) => state.shouldFetchPosts);
  const postDataList = useStore((state) => state.posts);
  const labels = useStore((state) => state.labels);

  useEffect(() => {
    if (shouldFetchPosts === true) {
      fetchPosts();
    }
  }, [fetchPosts, shouldFetchPosts]);



  return (
    <>
      <WordCloud data={labels} />
      <div className="simple-card-container">
        {postDataList.map((postData) => (
          <PostOverview key={postData.id} postData={postData} />
        ))}
      </div>
    </>
  );
};

export default PostsList;