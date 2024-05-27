import { Link } from "react-router-dom";
import logo from "../../assets/argentBankLogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { authSlice } from "../signin-form/authSlice";
import { profileUser } from "../../services/ApiServices";
import { isUserAuthenticated } from "../signin-form/authSelector";

function Header() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isUserAuthenticated);
  const token = useSelector((state) => state.auth.token);
  const userFirstName = useSelector((state) => state.user.firstName);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(authSlice.actions.logoutUser());
  };

  useEffect(() => {
    // if user is authenticated, we fetch the user profile
    if (isAuthenticated) {
      try {
        dispatch(profileUser(token));
      } catch (error) {
        console.error(error);
      }
    }
  }, [isAuthenticated, dispatch, token]);

  const headerIfUserLoginOrLogout = () => {
    if (isAuthenticated) {
      return (
        <div>
          <Link className="main-nav-item" to="/user">
            <FontAwesomeIcon icon={faUserCircle} />
            <span className="main-nav-title">{userFirstName}</span>
          </Link>
          <Link className="main-nav-item" onClick={handleLogout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            <span className="main-nav-title">Sign Out</span>
          </Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link className="main-nav-item" to="/signin">
            <FontAwesomeIcon
              icon={faUserCircle}
              className="fa fa-user-circle"
            />
            <span className="main-nav-title">Sign In</span>
          </Link>
        </div>
      );
    }
  };

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
      {/* if user is auth, the header changes  */}
      {headerIfUserLoginOrLogout()}
    </nav>
  );
}

export default Header;
