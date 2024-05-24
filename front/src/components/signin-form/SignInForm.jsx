import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import { useLoginUserMutation } from "../../services/ApiServices";
import { loginUser } from "../../services/ApiServices";
// import { authSlice } from "./authSlice";
import { isUserAuthenticated } from "../signin-form/authSelector";

function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isAuthenticated = useSelector(isUserAuthenticated);
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated, navigate]);

  const handleChangeInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeInputPassword = (e) => {
    setPassword(e.target.value);
  };

  // const result = useLoginUserMutation(email, password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // userToken = await loginUser(email, password);
    // dispatch(authSlice.actions.updateToken(userToken));

    try {
      // ? pourquoi dispatch de l'appel api et pas de l'action
      // lors de l'envoi à createAsyncThunk, on envoie un objet
      dispatch(loginUser({ email, password }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <FontAwesomeIcon icon={faUserCircle} />
        <h1>Sign In</h1>
        <form className="form">
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={email}
              onInput={handleChangeInputEmail}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onInput={handleChangeInputPassword}
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button" onClick={handleSubmit}>
            Sign In
          </button>
          <span className="sign-in__error">{error}</span>
        </form>
      </section>
    </main>
  );
}

export default SignInForm;
