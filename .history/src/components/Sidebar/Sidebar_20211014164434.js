import { Link } from "react-router-dom";
import Dashboard from "../dashboardcomponents/Dashboard";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <Dashboard />
            </Link>
            <Link to='/Scheduler'>
            <li className="sidebarListItem">
              Scheduler
            </li>
            </Link>
            <Link to='/Patients'>
            <li className="sidebarListItem">
              Patients
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

