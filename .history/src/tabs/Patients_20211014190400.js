import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Schedule from '../components/schedulerpage/schedule'

export default function Patients() {
    return (
        <div>
            <Row>
                <Col lg={9}>
                    <Schedule />
                </Col>
            </Row>    
        </div>
    )
}

