import React, { Component } from 'react'
import Availability from './availability'
import profileimage from '../images/pic1.png'
import style from './style.css'



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
            </div>
 
            
        )
    }
}

export default Header