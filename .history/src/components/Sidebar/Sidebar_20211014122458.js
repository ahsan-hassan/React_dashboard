import { Link } from "react-router-dom";
import stylesheet from '../stylesheet/mystyle.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <Link to="/" className="link">
            <li className="sidebarListItem active">
              Dashboard
            </li>
            </Link>
            <Link>
            <li className="sidebarListItem">
              Scheduler
            </li>
            </Link>
            <li className="sidebarListItem">
              Patients
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
