const Header = () => {
  return (
    <div className="mps-header p-5 text-center 
                d-flex flex-row justify-content-between align-items-center">
      <div className="ps-5 ms-5">
        <h1>kaleidoscope</h1>
        <figcaption className='blockquote-footer mt-2'>
             A little something about few things.</figcaption>
      </div>
      <div className="w-25 pe-5 me-1">
        <img src="images/logo.png" style={{width:"100%"}} alt=""/>
      </div>
    </div>
  );
};
export default Header;
