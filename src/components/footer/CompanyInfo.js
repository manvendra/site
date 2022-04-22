import { MDBTypography } from "mdb-react-ui-kit";
const CompanyInfo = () => {
  return (
    <div className="col-md-3 col-lg-4 col-xl-4 mx-auto mb-4">
      <h6 className="text-uppercase fw-bold mb-4">&nbsp;</h6>
      <MDBTypography tag='em'>
       <p> "I do what I do, because I do what I do.
        I know, the much I do, is not worth doing.
        But given a chance again, I will still do what I do.
        Because, I do what I do."
        </p>
      </MDBTypography>
      <MDBTypography tag='em' className="text-end">
        <p className='blockquote-footer'>
          Manvendra P Singh
        </p>
      </MDBTypography>
    </div>
  );
};

export default CompanyInfo;
