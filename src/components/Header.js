 import logo from "../assets/logo.png"
 const Header = () => {
    return (
       <header>
             <div className="logo">
                <img src={logo} alt="LOGO" />
                 <span>TaskLY</span>
            </div>
            <div className="themeSelector">
                <span className="light"></span>
                <span className="medium"></span>
                <span className="dark"></span>
                <span className="gOne"></span>
                <span className="gTwo"></span>
                <span className="gThree"></span>

            </div>
       </header>
    );
 };
 
 export default Header;