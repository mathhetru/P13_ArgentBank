import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  // ! ici children est le composant UserView
  const isUserAuthenticated = useSelector(
    (state) => state.auth.isAuthenticated
  );
  return isUserAuthenticated ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
