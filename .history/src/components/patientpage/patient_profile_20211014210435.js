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
                <div style={{fontSize:'12px', lineHeight:'10px', marginLeft:'30px', marginTop:'5px'}}>
                    <h6>John Doe</h6>
                    <p>Gender:Male <span style={{marginLeft:'15px'}}>Age:45 yrs </span></p>
                    <p>Appointments:4</p>
                </div>
        </div>
    )
}
