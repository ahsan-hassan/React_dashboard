import React from 'react'
import profileimage from '../images/pic1.png'

export default function Patient_profile() {
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
                <div style={{fontSize:'10px', lineHeight:'5px', marginLeft:'50px', marginTop:'5px'}}>
                    <h6>John Doe</h6>
                    <p>Male  23yr</p>
                    <p>some text here</p>
                </div>
        </div>
    )
}
