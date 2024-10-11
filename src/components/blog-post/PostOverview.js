import * as Utils from "../../common/Utils";
import { Link } from 'react-router-dom';
import './PostOverview.css'

const PostOverview = ({ postData }) => {
  return (
    <div className="simple-card">

      <header>
        {postData?.title}
      </header>

      <section>
        <img src={`${postData?.images?.[0]?.url}`} alt="..." />
        <div className="desc quote text-left">
          {Utils.extractOverviewFromContent(postData.content)}
        </div>
      </section>

      <footer>

        <Link to={postData.id} >
          <button className="round-button">
            read more...
          </button>
        </Link>
      </footer>
    </div>
  );
};
export default PostOverview;
