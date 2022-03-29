import style from '../styles/style.css'

export default function Sidebar() {
  return (
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
