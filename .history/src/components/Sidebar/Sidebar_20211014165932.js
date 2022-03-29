import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
          <li className="sidebarListItem active">
            <Link to="/" className="link">
              Dashboard
              </Link>
            </li>
            <li className="sidebarListItem active">
            <Link to="/Home" className="link">
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

