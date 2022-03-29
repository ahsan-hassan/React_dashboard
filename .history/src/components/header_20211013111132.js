import React, { Component } from 'react'
import profileimage from '../images/pic1.png'
import style from '../styles/style.css'
import Availability from './availability'
import Earning from './Earning'
import Requests from './Requests'

export class Header extends Component {
    render() {
        return (
            <div>
            <div className='profileinfo'>
            <img src={profileimage} className='profilepic' />
            <h3><a href="#">Dr. John Doe</a></h3><br></br>
            <p>Speciality:</p>
            </div>
                <div>
                    <Availability />
                    <Earning />
                    <Requests />
                </div>
            </div>
            
        )
    }
}

export default Header