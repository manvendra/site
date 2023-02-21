import * as Utils from "../../common/Utils";
import { Link } from 'react-router-dom';
import './PostOverview.css'

const PostOverview = ({ postData }) => {
  return (
    <div className="post-overview-card">

      <header>
        <img src={`${postData?.images?.[0]?.url}`} alt="..." />
      </header>

      <section>
        <h4 className="title">{postData?.title}</h4>
        <p className="quote text-left sample">
          {Utils.extractOverviewFromContent(postData.content)}
        </p>
      </section>

      <footer>
        <div>
        <Link to={postData.id} >
          <button className="read-more round-button tertiary-color-button ">Read More</button>
        </Link>
        </div>
      </footer>
    </div>
  );
};
export default PostOverview;
