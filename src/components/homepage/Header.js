import logo from '../../images/logo.png';
const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className='company-name'>
          <font color="#FF2626">K</font>
          <font color="#252A34">a</font>
          <font color="#753422">l</font>
          <font color="#FFD523">e</font>
          <font color="#FF9966">i</font>
          <font color="#0F52BA">d</font>
          <font color="#66CC66">o</font>
          <font color="#FF9966">s</font>
          <font color="#FFD523">c</font>
          <font color="#00C1D4">o</font>
          <font color="#252A34">p</font>
          <font color="#FF2626">e</font>
        </div>
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
