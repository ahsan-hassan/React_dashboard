import React from 'react'
import profileimage from '../images/pic1.png'

export default function Patient_profile() {
    return (
        <div className="detail_profile">
                <div className="patient_prof">
                    <img
                    src={profileimage}
                    alt=""
                    className="patientimg"
                    />
                </div>
                <div style={{fontSize:'10px', lineHeight:'5px', marginLeft:'50px', marginTop:'5px'}}>
                    <h6>John Doe</h6>
                    <p>Gender:Male </p>
                    <p>some text here</p>
                </div>
        </div>
    )
}
