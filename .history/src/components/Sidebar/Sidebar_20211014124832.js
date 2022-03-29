import stylesheet from '../stylesheet/mystyle.css'

export default function Sidebar() {
  return (
    // <div className="sidebar">
    //   <div className="sidebarWrapper">
    //     <div className="sidebarMenu">
    //       <ul className="sidebarList">
    //         <li className="sidebarListItem active">
    //           Dashboard
    //         </li>
    //         <li className="sidebarListItem">
    //           Scheduler
    //         </li>
    //         <li className="sidebarListItem">
    //           Patients
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </div>

    <>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
    </>
  );
}
