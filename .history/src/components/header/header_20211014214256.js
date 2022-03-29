import React, { Component } from 'react'
import Availability from './availability'
import profileimage from '../images/pic1.png'
import Styles from '../../Styles/Styles.css'
import {IoIosNotifications} from 'react-icons/io'
import {RiLogoutBoxLine} from 'react-icons/ri'


export class Header extends Component {
    render() {
        return (
            <div className='profileinfo'>
                <div>
                <img src={profileimage} className='profilepic' />
                <div className='drinfo'>
                    <a href="#">Dr. John Doe</a>
                    <p style={{fontSize:'14px'}}>Speciality:</p>
                </div>
                </div>

                <Availability />
                <div style={{display:'flex'}}>
                    <IoIosNotifications />
                    <RiLogoutBoxLine />
                    <p style={{color: 'blue'}}>Log Out</p>
                </div>
            </div>
 
            
        )
    }
}

export default Header