import React, { Component } from 'react'
import profileimage from '../images/pic1.png'
import style from '../styles/style.css'


export class Header extends Component {
    render() {
        return (
            <div className='profileinfo'>
                <img src={profileimage} className='profilepic' />
                <div className='drinfo'>
                    <a href="#">Dr. John Doe</a><br></br> 
                    <p>Speciality:</p>
                </div>
            </div>
            
        )
    }
}

export default Header