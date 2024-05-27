import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeView from "./pages/HomeView";
import SignInView from "./pages/SignInView";
import UserView from "./pages/UserView";
import PrivateRoute from "./components/user/PrivateRoute";

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
