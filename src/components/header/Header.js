const header = () => {
  return (
    <div className="p-5 text-center 
                d-flex flex-row justify-content-between align-items-center"
                style={{ background: "radial-gradient(transparent, #8d9cb8)" }}>
      <div className="ps-5 ms-5">
        <h1>kaleidoscope</h1>
        <figcaption className='blockquote-footer mt-2'>
             A little something about few things.</figcaption>
      </div>
      <div className="w-25 pe-5 me-1">
        <img src="logo/vector-640.png" style={{width:"100%"}} alt="logo"></img>
      </div>
    </div>
  );
};
export default header;
