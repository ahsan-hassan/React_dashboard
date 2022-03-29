import React, { Component } from 'react'
import Availability from './availability'
import profileimage from '../images/pic1.png'
import Styles from '../../Styles/Styles.css'
import {IoIosNotifications} from 'react-icons/io'



export class Header extends Component {
    render() {
        return (
            <div className='profileinfo'>
                <img src={profileimage} className='profilepic' />
                <div className='drinfo'>
                    <a href="#">Dr. John Doe</a>
                    <p style={{fontSize:'14px'}}>Speciality:</p>
                </div>
                <Availability />
                <div>
                    <IoIosNotifications />

                    <p style={{color: 'blue'}}>Log Out</p>
                </div>
            </div>
 
            
        )
    }
}

export default Header