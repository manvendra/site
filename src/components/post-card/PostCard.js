import "./PostCard.css";
import * as Utils from "../../common/Utils";
import { MDBTypography, MDBRipple, MDBBtn } from "mdb-react-ui-kit";
const PostCard = ({ postData }) => {
  return (
    <div className="postCard hover-shadow 
        square rounded border-dark">

      <MDBRipple
        rippleColor="dark"
        rippleTag="div"
        className="bg-image hover-overlay 
       d-flex justify-content-center mb-1">
        <img src={`${postData?.images?.[0]?.url}`} alt="..." />
        <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
      </MDBRipple>
      <div className="mb-1">
        <MDBTypography variant="h6" className="mb-1" style={{height: "3rem"}}>
          {postData?.title}
        </MDBTypography>
        <MDBTypography tag="em" className="text-muted small">{Utils.extractOverviewFromContent(postData.content)}</MDBTypography>
      </div>
      <MDBBtn outline rounded>
        Read More
      </MDBBtn>
    </div>
  );
};
export default PostCard;
