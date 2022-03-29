import React from 'react'
import profileimage from '../images/pic1.png'
import { Row, Col } from 'react-bootstrap'

export default function Details() {
    return (
        <div className="detail_profile">
                <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <p style={{fontSize:'10px', lineHeight:'10px', alignItems:'center'}}>2:00 AM<br></br>
            Today</p>
                </Col>
                <Col>
                </Col>
            </Row>
        </div>
    )
}
