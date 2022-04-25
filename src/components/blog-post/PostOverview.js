
import * as Utils from "../../common/Utils";
import { Link } from 'react-router-dom';

const PostOverview = ({ postData }) => {
  return (
    <div className="post-overview-card">
      
      <img src={`${postData?.images?.[0]?.url}`} alt="..." />

      <div className="post-overview-text">
        <p><h6>{postData?.title}</h6></p>
        <p className="quote">{Utils.extractOverviewFromContent(postData.content)}</p>
      </div>

      <Link to={postData.id} >
        <button className="read-more">Read More</button>
      </Link>
    </div>
  );
};
export default PostOverview;
