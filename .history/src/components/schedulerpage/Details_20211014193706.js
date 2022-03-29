import React from 'react'
import profileimage from '../images/pic1.png'

export default function Details() {
    return (
        <div className="detail_profile">
                <div className='profilepic'>
                    <img
                    src={profileimage}
                    alt=""
                    className="appointmentimg"
                    />
                    <p style={{fontSize:'10px', lineHeight:'10px', alignItems:'center'}}>2:00 AM<br></br>
                    Today</p>
                </div>
        </div>
    )
}
