import React from 'react'
import profileimage from '../images/pic1.png'

export default function Details() {
    return (
        <div className="detail_profile">
                <div className="prof_pic">
                    <img
                    src={profileimage}
                    alt=""
                    className="appointmentimg"
                    />
                    <p style={{fontSize:'10px', lineHeight:'10px', alignItems:'center'}}>2:00 AM<br></br>
                    Today</p>
                </div>
                <div style={{fontSize:'10px', lineHeight:'0px', marginLeft:'50px'}}>
                    <h6>John Doe</h6>
                    <p>Male  23yr</p>
                    <p>some text here</p>
                    <p>starts in 3 mins</p>
                </div>
        </div>
    )
}
