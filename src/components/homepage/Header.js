import logo from '../../images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className='company-name'>kaleidoscope</div>
        <div className='quote'>
          - A little something about many different things.
        </div>
      </div>
      <div className="header-right">
        <img src={logo} alt="" />
      </div>
    </header>
  );
};
export default Header;
