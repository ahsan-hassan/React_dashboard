import { Link } from "react-router-dom";
import {MdDashboard, MdSchedulev} from 'react-icons/md'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <li className="sidebarListItem ">
            <Link to="/" className="link">
              <MdDashboard style={{marginRight:'10px', marginBottom:'3px'}}/>
              Dashboard
              </Link>
            </li>
            
            <Link to='/Scheduler'>
            <li className="sidebarListItem">
            <MdSchedule style={{marginRight:'10px', marginBottom:'3px'}}/>
              Scheduler
            </li>
            </Link>
            <Link to='/Patients'>
            <li className="sidebarListItem">
            <MdDashboard style={{marginRight:'10px', marginBottom:'3px'}}/>
              Patients
            </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

