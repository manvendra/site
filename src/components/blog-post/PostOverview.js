import * as Utils from "../../common/Utils";
import { Link } from 'react-router-dom';

const PostOverview = ({ postData }) => {
  return (
    <div className="post-overview-card">

      <img src={`${postData?.images?.[0]?.url}`} alt="..." />

      <div className="post-overview-text">
        <p><h4>{postData?.title}</h4></p>
        <p className="quote text-left">
          {Utils.extractOverviewFromContent(postData.content)}
        </p>
      </div>

      <Link to={postData.id} >
        <button className="read-more round-button">Read More</button>
      </Link>
    </div>
  );
};
export default PostOverview;
