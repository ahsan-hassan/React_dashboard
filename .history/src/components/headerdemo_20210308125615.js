import { ReactComponent as CaretIcon } from './icons/caret.svg';
import { ReactComponent as CogIcon } from './icons/cog.svg';
import { ReactComponent as ChevronIcon } from './icons/chevron.svg';
import { ReactComponent as ArrowIcon } from './icons/arrow.svg';
import { ReactComponent as BoltIcon } from './icons/bolt.svg';
import profileimg from './profileimg.jpg';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';
import './style.css';
import {Button } from 'react-bootstrap';

import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';

function Headerdemo() {
  return (
    <Navbar>
         <Link to="/pages/HomePage">
            <img src={logo} className="logo" />
        </Link>
                
        <div className="header_btn" >
            <Button className="head_btn"  href="/pages/Track_page" >Track your Delivery</Button>
            <Button className="head_btn"  href="/pages/Login_page" >Log In</Button>
        

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
      </div>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          <span>{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: '400px'}} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
                            <div className="img_email">
                                <img  style={{height:'50px', width: '55px' ,borderRadius: '25px'}}src={profileimg} className="profile_image" />
                                <h6>Shipster</h6>
                                <p>shispter@gmail.com</p>
                            </div>
          <DropdownItem
            rightIcon={<ChevronIcon />}
            goToMenu="profile">
            Profile
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="home">
            Home
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Order History">
            Order History
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="Contact Us">
            Contact Us
          </DropdownItem>
          <hr></hr>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Logout
          </DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'profile'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >HTML</DropdownItem>
          <hr></hr>
          <DropdownItem >CSS</DropdownItem>
          <hr></hr>
          <DropdownItem >JavaScript</DropdownItem>
          <hr></hr>
          <DropdownItem >Awesome!</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'home'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >a</DropdownItem>
          <hr></hr>
          <DropdownItem >b</DropdownItem>
          <hr></hr>
          <DropdownItem >c</DropdownItem>
          <hr></hr>
          <DropdownItem >d</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Order History'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >HTML</DropdownItem>
          <hr></hr>
          <DropdownItem >CSS</DropdownItem>
          <hr></hr>
          <DropdownItem >JavaScript</DropdownItem>
          <hr></hr>
          <DropdownItem >Awesome!</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'Contact Us'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <hr></hr>
          <DropdownItem >HTML</DropdownItem>
          <hr></hr>
          <DropdownItem >CSS</DropdownItem>
          <hr></hr>
          <DropdownItem >JavaScript</DropdownItem>
          <hr></hr>
          <DropdownItem >Awesome!</DropdownItem>
          <hr></hr>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem >Kangaroo</DropdownItem>
          <DropdownItem >Frog</DropdownItem>
          <DropdownItem >Horse?</DropdownItem>
          <DropdownItem >Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default Headerdemo;
