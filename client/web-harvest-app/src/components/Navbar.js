import { Link } from "react-router-dom";
import '../styles/navbar.css';

function Navbar(){
    const un = localStorage.getItem("un");
    return(
        <>
        <div className="nav-bar">
            <div className="logo"></div>
            <div className="center-nav">
                <h1 className="title">WebHarvest - Local Farmer's Online Market</h1>
                <div className="nav-cont">
                    <ul>      
                        <li><Link to='/' className="link">Home</Link></li>
                        <li><Link to="/favorites" className="link">Favorites</Link></li>
                        <li><Link to="/history" className="link">Order History</Link></li>
                        <li><Link to="/yourproduct" className="link">Host Product</Link></li>
                        <li><Link to="/settings" className="link">Settings</Link></li>
                        <li>{(un == null) && (<Link to='/login' className="link">Login</Link>)}</li>
                        <li>{(un == null) && (<Link to='/signup' className="link">Sign Up</Link>)}</li>
                        <li>{(un != null) && (<Link to='/logout' className="link">Logout</Link>)}</li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    );
}

export default Navbar;