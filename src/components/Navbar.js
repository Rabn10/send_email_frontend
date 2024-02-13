import { Link } from "react-router-dom";
import AuthUser from "./AuthUser";
function Navbar() {

    const {token, logout} = AuthUser();
    const logoutUser = () => {
        if(token != undefined) {
            logout();
        }
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
        <div className="container">
            <Link className="navbar-brand" to="/home">Employee Record</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active"  to="/home">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/about-us">About Us</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to='/contact-us'>Contact Us</Link>
                </li>

                <li className="nav-item">
                <Link className="nav-link" to='/employees'>Employee</Link>
                </li>

                <li className="nav-item">
                <span role="button" className="nav-link" onClick={logoutUser}>Logout</span>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    )
}

export default Navbar;


