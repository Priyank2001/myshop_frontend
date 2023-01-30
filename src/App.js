import "./App.css";
import AdminPage from "./component/AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./component/UserPage";
import CreateNewUserPage from "./component/CreateNewUserPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/myshopadmin" element={<AdminPage />} />
          <Route exact path="/myshopadmin/users" element={<UserPage />} />
          <Route
            exact
            path="/myshopadmin/users/create_user"
            element={<CreateNewUserPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
