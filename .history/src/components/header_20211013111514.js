import React, { Component } from 'react'
import profileimage from '../images/pic1.png'
import style from '../styles/style.css'
import Availability from './availability'
import Earning from './Earning'
import Requests from './Requests'

export class Header extends Component {
    render() {
        return (
            <div className='profileinfo'>
            <img src={profileimage} className='profilepic' />
            <h3><a href="#">Dr. John Doe</a></h3><br>
            <p>Speciality:</p>
            <Availability />
            <Earning />
            <Requests />
            </div>
            
        )
    }
}

export default Header