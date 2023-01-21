import logo from './logo.svg';
import './App.css';
import AdminPage from "./component/AdminPage"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import UserPage from './component/UserPage';
function App() {
  return (
    <Router>
        <div className="App">
          <Routes>
            <Route exact path="/myshopadmin" element={<AdminPage />} />
            <Route exact path="/myshopadmin/users" element={<UserPage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
