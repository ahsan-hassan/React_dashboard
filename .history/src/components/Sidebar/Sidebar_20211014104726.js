import style from '../styles/style.css'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              Dashboard
            </li>
              <li className="sidebarListItem">
              Scheduler
            </li>
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
