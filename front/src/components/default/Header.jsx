import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {/* TODO if user is auth, the header changes  */}
      <div>
        <Link className="main-nav-item" to="/signin">
          <FontAwesomeIcon icon={faUserCircle} className="fa fa-user-circle" />
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Header;
