import React from 'react'
import profileimage from '../images/pic1.png'
import { Row, Col } from 'react-bootstrap'

export default function Details() {
    return (
        <div className="detail_profile">
            <Row>
                <Col lg={4}>
                <img
              src={profileimage}
              alt=""
              className="appointmentimg"
            />
            <p style={{fontSize:'10px', lineHeight:'10px', textAlign:'center'}}>2:00 AM<br></br>
            Today</p>
                </Col>
            </Row>
        </div>
    )
}
