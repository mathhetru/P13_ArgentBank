import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
import { isUserAuthenticated } from "../signin-form/authSelector";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector(isUserAuthenticated);
  return isAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
