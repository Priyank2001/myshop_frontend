import "./App.css";
import AdminPage from "./component/AdminPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserPage from "./component/UserPage";
import CreateNewUserPage from "./component/CreateNewUserPage";
import UpdateUserDetailsPage from "./component/user/UpdateUserDetailsPage";
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette:{
		primary:{
			main:"#42b0f5",
		},
		secondary:{
			main:"#9342f5",
		}
	},
	button:{
		primary:{
			backgroundColor:"#42b0f5",
			color:"white",
		},
		secondary:{
			backgroundColor:"white"
		}
	}
})

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
          <Route
            exact
            path="/myshopadmin/users/update_user/:user_id"
            element={<UpdateUserDetailsPage />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
