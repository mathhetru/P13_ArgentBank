import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeView from "./pages/HomeView";
import SignInView from "./pages/SignInView";
import UserView from "./pages/UserView";
import PrivateRoute from "./components/user/PrivateRoute";

// ! TOREAD https://danitano.medium.com/privateroute-in-react-router-6-a-deep-dive-to-redirect-to-the-current-page-after-login-b3b321c39c2c
// ! PrivateRoute is a custom component that checks if the user is authenticated. If the user is authenticated, it renders the component passed to it. If the user is not authenticated, it redirects the user to the login page.

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/signin" element={<SignInView />}></Route>
          <Route
            path="/user"
            element={
              <PrivateRoute>
                <UserView />
              </PrivateRoute>
            }
          ></Route>
          <Route path="*" element={<HomeView />}></Route>
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
