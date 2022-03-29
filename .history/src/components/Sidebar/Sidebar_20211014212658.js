import { Link } from "react-router-dom";
import {MdDashboard} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <li className="sidebarListItem ">
            <Link to="/" className="link">
              <MdDashboard style={{marginRight:'10px'}}/>
              Dashboard
              </Link>
            </li>
            
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

