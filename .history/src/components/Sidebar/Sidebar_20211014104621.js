import style from '../styles/style.css'
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

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
            <Route to="/" className="link">
              <li className="sidebarListItem">
              Scheduler
            </li>
            </Route>
            <li className="sidebarListItem">
              Patients
            </li>
          </ul>
        </div>
      </div>
    </div>
    </Router>  
  );
}
