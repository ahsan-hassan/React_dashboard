import { Link } from "react-router-dom";
import stylesheet from '../stylesheet/mystyle.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/Home" className="link">
            <li className="sidebarListItem active">
              Dashboard
            </li>
            </Link>
            <Link to='/Scheduler'>
            <li className="sidebarListItem">
              Scheduler
            </li>
            </Link>
            <Link to='/tabs/Patients'>
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

