import * as Utils from "../../common/Utils";
import { Link } from 'react-router-dom';

const PostOverview = ({ postData }) => {
  return (
    <div className="post-overview-card">

      <header>
        <img src={`${postData?.images?.[0]?.url}`} alt="..." />
      </header>

      <section>
        <p className="post-title"><h4>{postData?.title}</h4></p>
        <p className="quote text-left">
          {Utils.extractOverviewFromContent(postData.content)}
        </p>
      </section>

      <footer>
        <div>
        <Link to={postData.id} >
          <button className="read-more round-button">Read More</button>
        </Link>
        </div>
      </footer>
    </div>
  );
};
export default PostOverview;
