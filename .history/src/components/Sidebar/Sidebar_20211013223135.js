import style from '../styles/style.css'
import { Link , Router} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Route to="/" className="link">
            <li className="sidebarListItem active">
              Home
            </li>
            </Route>
            <li className="sidebarListItem">
              Analytics
            </li>
            <li className="sidebarListItem">
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <Route to="/users" className="link">
              <li className="sidebarListItem">
                Users
              </li>
            </Route>
            <Route to="/products" className="link">
              <li className="sidebarListItem">
                Products
              </li>
            </Route>
            <li className="sidebarListItem">
              Transactions
            </li>
            <li className="sidebarListItem">
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              Mail
            </li>
            <li className="sidebarListItem">
              Feedback
            </li>
            <li className="sidebarListItem">
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              Manage
            </li>
            <li className="sidebarListItem">
              Analytics
            </li>
            <li className="sidebarListItem">
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
