import './Navbar.css'

const navbar = () => {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
               <span>kaleidoscope</span>            
            </div>
            <ul className="nav">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
  );
}



export default navbar