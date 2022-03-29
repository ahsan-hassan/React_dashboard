import style from '../styles/style.css'
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default function Sidebar() {
  return (
    <Router>
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Route to="/" className="link">
            <li className="sidebarListItem active">
              Dashboard
            </li>
            </Route>
            <li>
            <Link to="/Dashboard">Dashboard</Link>
            </li>
            <Route to="/tab/Patients" className="link">
            <li className="sidebarListItem">
              Patients
            </li>
            </Route>
          </ul>
        </div>
      </div>
    </div>
    </Router>  
  );
}
