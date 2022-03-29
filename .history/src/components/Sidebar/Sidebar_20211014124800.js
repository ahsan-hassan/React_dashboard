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
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
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
